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
	 } from '@chakra-ui/react';
import Card from 'components/card/Card';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import countryList from 'react-select-country-list'
import ConversionComponent from './convert';


interface OptionType {
	value: string;
	label: string;
}


export default function Settings() {
	const [amount, setAmount] = useState<string>('');
	const [selectedValue, setSelectedValue] = useState<OptionType | null>(null);
	const [showModal, setShowModal] = useState(false);
	const [receiverEmail, setReceiverEmail] = useState('');
	const [receiverName, setReceiverName] = useState('');
  
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
	
	  const handleSend = () => {
		// Implement sending logic here
		console.log('Sending to:', receiverName, receiverEmail);
		setShowModal(false);
	  };
	const userData = localStorage.getItem('user');
	const textColor = useColorModeValue('secondaryGray.900', 'white');
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			<Text mt='45px' mb='36px' color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
				Please select the country you want to send the money to:
			</Text>

			<Select
				options={options}
				value={selectedValue}
				onChange={changeHandler}
			/>

			<Text mt='45px' mb='36px' color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
				Please select the amount you want to send:
			</Text>

			<ConversionComponent />
			<br>
			</br>
			<br></br>
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

      {/* Modal */}
      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Forward Money</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder='Receiver Name'
              value={receiverName}
              onChange={(e) => setReceiverName(e.target.value)}
              mb='3'
            />
            <Input
              placeholder='Receiver Email'
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
