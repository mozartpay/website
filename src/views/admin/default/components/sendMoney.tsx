import { Box, Flex, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react';
import { createColumnHelper, flexRender, useReactTable, SortingState, getCoreRowModel, getSortedRowModel } from '@tanstack/react-table';
import { MdCancel, MdCheckCircle, MdOutlineError } from 'react-icons/md';
import axios from 'axios';
import * as React from 'react';

type RowObj = {
	id: string;
	senderEmail: string;
	country: string;
	amount: number;
	receiverName: string;
	receiverEmail: string;
	date: Date;
	status:string,
};
interface Transaction {
	senderEmail: string;
	country: string;
	amount: number;
	receiverName: string;
	receiverEmail: string;
	date: Date;
	status:string,
  }
const formatDate = (dateString: string): string => {
	const date = new Date(dateString);
	return date.toISOString().split('T')[0];
};
const columnHelper = createColumnHelper<RowObj>();

export default function ComplexTableOrder() {
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
	const userData = localStorage.getItem('user');
	const { email } = JSON.parse(userData);
	const [defaultData, setDefaultData] = React.useState<RowObj[]>([]);
	const [transactions, setTransactions] = React.useState<Transaction[]>([]);
	React.useEffect(() => {
	
		  fetchTransactions();
	  }, [email]);

	  const fetchTransactions = async () => {
		try {
		  const response = await fetch(`http://localhost:8000/api/transaction/${email}`);
		  const data = await response.json();
		  if (response.ok) {
			setDefaultData(data);
		  } else {
			console.error('Error fetching transactions:', data);
		  }
		} catch (error) {
		  console.error('Error fetching transactions:', error);
		  // Handle error here
		}
	  };
	const columns = [
		columnHelper.accessor('receiverEmail', {
			id: 'ReceiverEmail',
			header: () => (
				<Text justifyContent='space-between' align='center' fontSize={{ sm: '10px', lg: '12px' }} color='gray.400'>
					ReceiverEmail
				</Text>
			),
			cell: (info: any) => (
				<Flex align='center'>
					<Text color={textColor} fontSize='sm' fontWeight='700'>
						{info.getValue()}
					</Text>
				</Flex>
			),
		}),
		columnHelper.accessor('receiverName', {
			id: 'ReceiverName',
			header: () => (
				<Text justifyContent='space-between' align='center' fontSize={{ sm: '10px', lg: '12px' }} color='gray.400'>
					ReceiverName
				</Text>
			),
			cell: (info: any) => (
				<Flex align='center'>
					<Text color={textColor} fontSize='sm' fontWeight='700'>
						{info.getValue()}
					</Text>
				</Flex>
			),
		}),
		columnHelper.accessor('amount', {
			id: 'Amount',
			header: () => (
				<Text justifyContent='space-between' align='center' fontSize={{ sm: '10px', lg: '12px' }} color='gray.400'>
					Amount
				</Text>
			),
			cell: (info: any) => (
				<Flex align='center'>
					<Text color={textColor} fontSize='sm' fontWeight='700'>
					{info.getValue()}
					</Text>
				</Flex>
			),
		}),
		columnHelper.accessor('date', {
			id: 'date',
			header: () => (
				<Text justifyContent='space-between' align='center' fontSize={{ sm: '10px', lg: '12px' }} color='gray.400'>
					Date
				</Text>
			),
			cell: (info: any) => (
				<Text color={textColor} fontSize='sm' fontWeight='700'>
					{formatDate(info.getValue())}
				</Text>
			),
		}),
		columnHelper.accessor('country', {
			id: 'Country',
			header: () => (
				<Text justifyContent='space-between' align='center' fontSize={{ sm: '10px', lg: '12px' }} color='gray.400'>
					Country
				</Text>
			),
			cell: (info: any) => (
				<Text color={textColor} fontSize='sm' fontWeight='700'>
					{info.getValue()}
				</Text>
			),
		}),
		columnHelper.accessor('status', {
			id: 'status',
			header: () => (
				<Text justifyContent='space-between' align='center' fontSize={{ sm: '10px', lg: '12px' }} color='gray.400'>
					status
				</Text>
			),
			cell: (info: any) => (
				<Flex align='center'>
					<Icon
						w='24px'
						h='24px'
						me='5px'
						color={
							info.getValue() === 'created'
								? 'green.500'
								: info.getValue() === 'Disable'
									? 'red.500'
									: info.getValue() === 'pending'
										? 'orange.500'
										: null
						}
						as={
							info.getValue() === 'created'
								? MdCheckCircle
								: info.getValue() === 'Disable'
									? MdCancel
									: info.getValue() === 'pending'
										? MdOutlineError
										: null
						}
					/>
					<Text color={textColor} fontSize='sm' fontWeight='700'>
						{info.getValue()}
					</Text>
				</Flex>
			),
		}),
	];

	const [sorting, setSorting] = React.useState<SortingState>([]);
	const table = useReactTable({
		data: defaultData,
		columns,
		state: {
			sorting,
		},
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		debugTable: true,
	});

	return (
		<Box>
			<Text color={textColor} fontSize='22px' fontWeight='700' lineHeight='100%'>
				Send Money Transactions
			</Text>
			<Table variant='simple' color='gray.500' mb='24px' mt='12px'>
				<Thead>
					{table.getHeaderGroups().map((headerGroup) => (
						<Tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<Th
									key={header.id}
									colSpan={header.colSpan}
									pe='10px'
									borderColor={borderColor}
									cursor='pointer'
									onClick={header.column.getToggleSortingHandler()}>
									<Flex justifyContent='space-between' align='center' fontSize={{ sm: '10px', lg: '12px' }} color='gray.400'>
										{flexRender(header.column.columnDef.header, header.getContext())}
										{{
											asc: '',
											desc: '',
										}[header.column.getIsSorted() as string] ?? null}
									</Flex>
								</Th>
							))}
						</Tr>
					))}
				</Thead>
				<Tbody>
					{table.getRowModel().rows.map((row) => (
						<Tr key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<Td
									key={cell.id}
									fontSize={{ sm: '14px' }}
									minW={{ sm: '150px', md: '200px', lg: 'auto' }}
									borderColor='transparent'>
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</Td>
							))}
						</Tr>
					))}
				</Tbody>
			</Table>
		</Box>
	);
}
