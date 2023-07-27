import { Box, Text, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import DevelopmentTable from 'views/admin/dataTables/components/DevelopmentTable';
import CheckTable from 'views/admin/dataTables/components/CheckTable';
import ColumnsTable from 'views/admin/dataTables/components/ColumnsTable';
import ComplexTable from 'views/admin/dataTables/components/ComplexTable';
import tableDataDevelopment from 'views/admin/dataTables/variables/tableDataDevelopment';
import tableDataCheck from 'views/admin/dataTables/variables/tableDataCheck';
import tableDataColumns from 'views/admin/dataTables/variables/tableDataColumns';
import tableDataComplex from 'views/admin/dataTables/variables/tableDataComplex';
import NFT from 'components/card/NFT';
import Nft4 from 'assets/img/dashboards/0x0.png';
import Avatar1 from 'assets/img/avatars/avatar1.png';
export default function Settings() {
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			<Text mt='45px' mb='36px' color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
				Enter the ammount :
			</Text>
			<SimpleGrid mb='20px' columns={{ sm: 2, md: 5 }} spacing={{ base: '20px', xl: '20px' }}>
			
			</SimpleGrid>
		</Box>
	);
}
