import { Box, Grid } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Banner from 'views/admin/profile/components/Banner';
import General from 'views/admin/profile/components/General';
import Notifications from 'views/admin/profile/components/Notifications';
import Projects from 'views/admin/profile/components/Projects';
import Upload from 'views/admin/profile/components/Upload';
import axios from 'axios'; 
import banner from 'assets/img/auth/banner.png';
import avatar from 'assets/img/avatars/avatar4.png';

export default function Overview() {
	const [userName, setName] = useState<string>('');
	const [userImage, setUserImage] = useState<string | null>(null); 
	const [userEmail, setUserEmail] = useState<string | null>(null); 

	useEffect(() => {
		const userData = localStorage.getItem('user');
		if (userData) {
			const { name } = JSON.parse(userData);
			const { email } = JSON.parse(userData);
			setName(name);
			setUserEmail(email)

		
			axios.get(`https://mozart-api-21ea5fd801a8.herokuapp.com/api/profile/${email}`) 
				.then(response => {
					console.log('image profile')
					setUserImage(response.data.image);
				})
				.catch(error => {
					console.error('Error fetching user information:', error);
				});
		}
	}, []);
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			{/* Main Fields */}
			<Grid
				templateColumns={{
					base: '1fr',
					lg: '1.34fr 1fr 1.62fr'
				}}
				templateRows={{
					base: 'repeat(3, 1fr)',
					lg: '1fr'
				}}
				gap={{ base: '20px', xl: '20px' }}>
				<Banner
					gridArea='1 / 1 / 1 / 3'
					banner={banner}
					avatar={userImage || avatar} 
					name={userName}
					job={userEmail}
					posts='0'
					followers='0'
					following='0'
				/>
				
				<Upload
					gridArea={{
						base: '3 / 1 / 4 / 2',
						lg: '1 / 3 / 2 / 4'
					}}
					minH={{ base: 'auto', lg: '420px', '2xl': '365px' }}
					pe='20px'
					pb={{ base: '100px', lg: '20px' }}
				/>
			</Grid>
			<Grid
				mb='20px'
				templateColumns={{
					base: '1fr',
					lg: 'repeat(2, 1fr)',
					'2xl': '1.34fr 1.62fr 1fr'
				}}
				templateRows={{
					base: '1fr',
					lg: 'repeat(2, 1fr)',
					'2xl': '1fr'
				}}
				gap={{ base: '20px', xl: '20px' }}>
				{/* <Projects
					banner={banner}
					avatar={avatar}
					name='Adela Parkson'
					job='Product Designer'
					posts='17'
					followers='9.7k'
					following='274'
				/> */}
				{/* <General gridArea={{ base: '2 / 1 / 3 / 2', lg: '1 / 2 / 2 / 3' }} minH='365px' pe='20px' /> */}
				<Notifications
					used={25.6}
					total={50}
					gridArea={{
						base: '3 / 1 / 4 / 2',
						lg: '2 / 1 / 3 / 3',
						'2xl': '1 / 3 / 2 / 4'
					}}
				/>
			</Grid>
		</Box>
	);
}
