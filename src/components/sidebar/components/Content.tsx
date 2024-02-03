// chakra imports
import { Box, Flex, Stack, Text, Heading,Center } from '@chakra-ui/react';
//   Custom components
import Brand from 'components/sidebar/components/Brand';
import Links from 'components/sidebar/components/Links';
import SidebarCard from 'components/sidebar/components/SidebarCard';
import mozart from '../../icons/Mozartlogo.png'
// FUNCTIONS

function SidebarContent(props: { routes: RoutesType[] }) {
	const { routes } = props;
	// SIDEBAR
	return (
		<Flex direction='column' height='100%' pt='25px' borderRadius='30px'>

			<Center w='300px' >
				<Heading fontSize='36px' mb='10px'>
					Mozart
				</Heading>
			</Center>
			<Stack direction='column' mt='8px' mb='auto'>
				<Box ps='20px' pe={{ lg: '16px', '2xl': '16px' }}>
					<Links routes={routes} />
				</Box>
			</Stack>
		</Flex>
	);
}

export default SidebarContent;
