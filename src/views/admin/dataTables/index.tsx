import React, { useState } from 'react';
import { Box, Text, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { Button, Flex, Icon, Image, Link, InputGroup, InputLeftElement } from '@chakra-ui/react';
import Card from 'components/card/Card';
import Nft4 from 'assets/img/dashboards/0x0.png';
import { Input } from '@chakra-ui/react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';


export default function Settings() {
	const [amount, setAmount] = useState<string>('');
	const history = useHistory();
	const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setAmount(event.target.value);
	};
	const userData = localStorage.getItem('user');
	
		
		const { email } = JSON.parse(userData);
		
	const handlePayment = async () => {
		try {
			const response = await axios.post<{
				[x: string]: any; data: any
			}>('https://mozart-api-21ea5fd801a8.herokuapp.com/api/airtm/create-payment', {
				amount: amount,
				email:email,

			});
			const id = response.data.data.id;
			console.log('id',id)
			console.log('Payment created successfully:', response.data);
			//history.push(`https://payments.static-stg.tests.airtm.org/checkout/${id}`);
			window.location.href = `https://payments.static-stg.tests.airtm.org/checkout/${id}`;
		} catch (error) {
			console.error('Error creating payment:', error);
		}
	};


	const textColor = useColorModeValue('secondaryGray.900', 'white');
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			<Text mt='45px' mb='36px' color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
				Please enter the amount :
			</Text>
			<InputGroup>
				<InputLeftElement
					pointerEvents='none'
					color='gray.300'
					fontSize='1.2em'
					children='$'
				/>
				<Input
					placeholder='Enter amount'
					value={amount}
					onChange={handleAmountChange}
				/>
			</InputGroup>
			<Text mt='45px' mb='36px' color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
				Please choose your payment method :
			</Text>
			<SimpleGrid mb='20px' columns={{ sm: 2, md: 5 }} spacing={{ base: '20px', xl: '20px' }}>
				<Card p='20px'>
					<Flex direction={{ base: 'column' }} justify='center'>
						<Box mb={{ base: '20px', '2xl': '20px' }} position='relative'>
							<Image
								src={Nft4}
								w={{ base: '100%', '3xl': '100%' }}
								h={{ base: '100%', '3xl': '100%' }}
								borderRadius='20px'
							/>
						</Box>
						<Flex flexDirection='column' justify='space-between' h='100%'>
							<Flex
								justify='space-between'
								direction={{
									base: 'row',
									md: 'column',
									lg: 'row',
									xl: 'column',
									'2xl': 'row'
								}}
								mb='auto'>
								<Flex direction='column'>
									<Text
										color={textColor}
										fontSize={{
											base: 'xl',
											md: 'lg',
											lg: 'lg',
											xl: 'lg',
											'2xl': 'md',
											'3xl': 'lg'
										}}
										mb='5px'
										fontWeight='bold'
										me='14px'>
										AIRTM
									</Text>
									<Text
										color='secondaryGray.600'
										fontSize={{
											base: 'sm'
										}}
										fontWeight='400'
										me='14px'>
										Make instant e-wallet deposit!
									</Text>
								</Flex>

							</Flex>
							<Flex
								align={{
									base: 'center',
									md: 'start',
									lg: 'center',
									xl: 'start',
									'2xl': 'center'
								}}
								justify='space-between'
								direction={{
									base: 'row',
									md: 'column',
									lg: 'row',
									xl: 'column',
									'2xl': 'row'
								}}
								mt='25px'>

								<Button
									variant='darkBrand'
									color='white'
									fontSize='sm'
									fontWeight='500'
									borderRadius='70px'
									px='24px'
									py='5px'
									onClick={handlePayment}>
									Choose
								</Button>
							</Flex>
						</Flex>
					</Flex>
				</Card>
			</SimpleGrid>

		</Box>
	);
}
