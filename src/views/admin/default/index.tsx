
import { Avatar, Box, Flex, FormLabel, Icon, Select, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import axios from 'axios';
import MiniStatistics from 'components/card/MiniStatistics';
import IconBox from 'components/icons/IconBox';
import { MdAddTask, MdAttachMoney, MdBarChart, MdFileCopy } from 'react-icons/md';
import ComplexTable from 'views/admin/default/components/ComplexTable';
import airtm from '../../../assets/img/dashboards/0x0.png'
import ComplexTableOrder  from 'views/admin/default/components/ComplexTableOrder';
import SendMoney  from 'views/admin/default/components/sendMoney';
import RequestMoney  from 'views/admin/default/components/requestMoney';
type RowObj = {
	transaction: string;
	amount: string;
	balence: number;
	company: string;
	status: string;
	date: string;


};


export default function UserReports() {
	const userData = localStorage.getItem('user');
	const { email } = JSON.parse(userData);
	const [defaultData, setDefaultData] = React.useState<RowObj[]>([]);
	const [data, setData] = React.useState<RowObj[]>(defaultData);
	React.useEffect(() => {
		
		axios
		  .get(`https://mozart-api-21ea5fd801a8.herokuapp.com/api/airtm/purchases/${email}`) 
		  .then((response) => {
			setDefaultData(response.data.purchases); 
		  })
		  .catch((error) => {
			console.error('Error fetching purchase data:', error);
		  });
	  }, [email]);
	const brandColor = useColorModeValue('brand.500', 'white');
	const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
	return (
		<Box pt={{ base: '130px', md: '100px', xl: '80px' }}>
			<SimpleGrid columns={{ base: 1, md: 3, lg: 3, '2xl': 6 }} gap='20px' mb='20px'>
			{/* <MiniStatistics
					startContent={
						<Box w='56px' h='56px' bg={boxBg} borderRadius='50%' display='flex' alignItems='center' justifyContent='center'>
						<div style={{ width: '32px', height: '32px', borderRadius: '50%', overflow: 'hidden' }}>
						  <img
							src={airtm}
							alt='airtm' 
							width='64px'
							height='64px'
						  />
						</div>
					  </Box>
					}
					name='Balance'
					value='$350.4'
				/> */}
				<MiniStatistics
					startContent={
						<IconBox
							w='56px'
							h='56px'
							bg={boxBg}
							icon={<Icon w='32px' h='32px' as={MdAttachMoney} color={brandColor} />}
						/>
					}
					name='Balance'
					value='$642.39'
				/>
				{/** <MiniStatistics growth='+23%' name='Sales' value='$574.34' />*/}
				
				
				
			</SimpleGrid>
{/** 
			<SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
				<TotalSpent />
				<WeeklyRevenue />
			</SimpleGrid>
			<SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
				<CheckTable tableData={tableDataCheck} />
				<SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
					<DailyTraffic />
					<PieCard />
				</SimpleGrid>
			</SimpleGrid>*/}
			<SimpleGrid >
			<ComplexTable />
			<ComplexTableOrder />
			<SendMoney></SendMoney>
			<RequestMoney/>
				{/*<SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
					<Tasks />
					<MiniCalendar h='100%' minW='100%' selectRange={false} />
		            </SimpleGrid>*/}
			</SimpleGrid>
		</Box>
	);
}
