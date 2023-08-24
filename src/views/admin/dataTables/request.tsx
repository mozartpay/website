import React, { useState, useMemo, useEffect } from 'react';
import { Box, Text,  useColorModeValue } from '@chakra-ui/react';
import { Button,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Select as ChakraSelect,
	 } from '@chakra-ui/react';
import Select from 'react-select';
import countryList from 'react-select-country-list'
import { InputGroup, InputLeftElement } from '@chakra-ui/react';
import axios from 'axios';
import { Flex } from '@chakra-ui/react';
interface CurrencySymbols {
    [key: string]: string;
  }
  
  const currencySymbols: CurrencySymbols = {
    USD: '$',
    EUR: '€',
    JPY: '¥',
    COP: 'COP', 
    TND:'TND',
  };

interface OptionType {
	value: string;
	label: string;
}


export default function Request() {
	const [amount, setAmount] = useState<number>(0);
    const [targetCurrency, setTargetCurrency] = useState<string>('USD');
    const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
	const [selectedValue, setSelectedValue] = useState<OptionType | null>(null);
	const [showModal, setShowModal] = useState(false);
	const [receiverEmail, setReceiverEmail] = useState('');
	const [receiverName, setReceiverName] = useState('');
	const userData = localStorage.getItem('user');
	const { email } = JSON.parse(userData);
  const [image, setimage] = useState<string | null>('');
	const senderEmail= email;
	const options = countryList().getData().map((country: OptionType) => ({
		value: country.value,
		label: country.label
	}));

	const changeHandler = (selectedOption: OptionType | null) => {
		setSelectedValue(selectedOption);
	};
	const handleForwardClick = () => {
		setShowModal(true);
	  };
	
	  const handleCloseModal = () => {
		setShowModal(false);
	  };
	
	  const handleSend = async () => {
		try {
		  const response = await axios.post('https://mozart-api-21ea5fd801a8.herokuapp.com/api/request', {
			senderEmail,
			country: selectedValue?.label || '',
			amount,
			receiverEmail,
			receiverName,
		  });
	
		  if (response.status === 200) {
			window.alert('Request has been sent successfully.');
			setShowModal(false);
		  }
		  window.alert('Request has been sent successfully.');
		  setShowModal(false);
		} catch (error) {
		  console.error('Error sending data:', error);
		}
	  };
	

	  const handleConvert = async () => {
        try {
            const response = await axios.post('https://mozart-api-21ea5fd801a8.herokuapp.com/api/convert', { amount, targetCurrency });
            setConvertedAmount(response.data.convertedAmount);
        } catch (error) {
            console.error('Error converting:', error);
        }
    };
	
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			<Text mt='45px' mb='36px' color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
				Please select the country you are in:
			</Text>

			<Select
				options={options}
				value={selectedValue}
				onChange={changeHandler}
			/>

			<Text mt='45px' mb='36px' color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
      Please select the country where your employer is based on:
			</Text>

			<Box>
            <Text>Amount in USD:</Text>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    fontSize='1.2em'
                    children='$'
                />
                <Input
                    type="number"
                    placeholder='Enter amount'
                    value={amount}
                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                />
            </InputGroup>
            <br></br>
            <Text>Target Currency:</Text>
            <ChakraSelect value={targetCurrency} onChange={(e) => setTargetCurrency(e.target.value)}>
        {Object.keys(currencySymbols).map(currencyCode => (
          <option key={currencyCode} value={currencyCode}>
            {currencyCode} - {currencySymbols[currencyCode]}
          </option>
        ))}
      </ChakraSelect>
            <br></br>
            <Button
                variant='darkBrand'
                color='white'
                fontSize='sm'
                fontWeight='500'
                borderRadius='70px'
                px='24px'
                py='5px'
                onClick={handleConvert}>
                Convert
            </Button>

            {convertedAmount !== null && <Text>Converted Amount: {convertedAmount} {targetCurrency}</Text>}

           
        </Box>
			<br>
			</br>
			<br></br>
			<Flex justifyContent="flex-end">
        <Button
          variant='darkBrand'
          color='white'
          fontSize='sm'
          fontWeight='500'
          borderRadius='70px'
          px='24px'
          py='5px'
          onClick={handleForwardClick}
        >
          Forward
        </Button>
      </Flex>
      {/* Modal */}
      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>From whom you want to request money</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder='Name'
              value={receiverName}
              onChange={(e) => setReceiverName(e.target.value)}
              mb='3'
            />
            <Input
              placeholder=' Email'
              value={receiverEmail}
              onChange={(e) => setReceiverEmail(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button variant='darkBrand' onClick={handleSend}>
              Send
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
		</Box>
	);
}
