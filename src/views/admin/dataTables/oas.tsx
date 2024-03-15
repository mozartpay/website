import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  Heading,
  useColorModeValue,
  Button,
  Select as ChakraSelect,
  Flex,
  Alert,
  AlertIcon,
  CloseButton,
} from '@chakra-ui/react';
import axios from 'axios';

export default function Identity() {
  const userData = localStorage.getItem('user');
  const { email } = JSON.parse(userData);
  const [image, setimage] = useState<string | null>('');
  const textColor = useColorModeValue('secondaryGray.900', 'white');

  const [selectedDocumentType, setSelectedDocumentType] = useState('');
  const [uploadedDocument, setUploadedDocument] = useState<File | null>(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleDocumentTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDocumentType(event.target.value);
  };
  
  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => {
        const imageString = reader.result as string;
        setimage(imageString);
      };
    }
  };
  const handleSubmit = async () => {

    // Create FormData for file upload
    const formData = new FormData();
    formData.append('documentType', selectedDocumentType);
    formData.append('document', image);
    formData.append('email', email);

    try {
      const response = await axios.post('https://mozart-api-21ea5fd801a8.herokuapp.com/api/identity', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle success response if needed
      setSuccessMessage(response.data.message);
      console.log('Verification request sent:', response.data.message);
      // Clear the form
      setSelectedDocumentType('');
      setimage('');
    } catch (error) {
      console.error('Error uploading identity:', error);
    }
  };
  const handleButtonClick = () => {
    window.location.href = '/admin/default';
  };   

  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Heading as="h1" mb="4" color={textColor}>
        Welcome to the OAs Management Portal
      </Heading>

      <Text mb="10" color={textColor}>
      Effortlessly manage your Orchestraded Agreements. Get instant access to vital information, sign agreements seamlessly, update terms with ease, and cancel agreements when needed. 
      </Text>
      <Text mt='45px' mb='36px' color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
				Instructions:
			</Text>
      {/* Document Selection */}
      <Text mb="4" color={textColor}>
      <b>Get Agreement:</b> To view an existing agreement, bavigate to the "Select Action" section then click on "Get Agreement", and then upload the contract id or transaction XDR to see its details.        
      <br />
        <b>Sign Agreement:</b>  To sign an agreement, navigate to the "Select Action" section then click on "Sign Agreement", and then upload the contract id or transaction XDR to sign it.     
        <br />
       <b>Update Agreement:</b>  To update an existing agreement, navigate to the "Select Action" section then click on "Update Agreement", and then upload the contract id or transaction XDR to sign the agreement update.   
        <br />
        <b>Cancel Agreement:</b> To cancel an existing agreement, navigate to the "Select Action" section then click on "Cancel Agreement", and then upload the contract id or transaction XDR to sign the agreement cancelation.   
        
        </Text>

      <Box mb="6">
        <Text mt='45px' mb='36px' color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
          Select the corresponding action:
        </Text>
        <ChakraSelect
          value={selectedDocumentType}
          onChange={handleDocumentTypeChange}
          placeholder="Select Action"
        >
          <option value="getAgreements">Get Agreement Information</option>
          <option value="drivingLicense">Sign Agreement</option>
          <option value="residentPermit">Update Agreement</option>
          <option value="nationalIDCard">Cancel Agreement</option>
        </ChakraSelect>
      </Box>

      {/* Upload Section */}
      <Box mb="6">
        <Text mt='45px' mb='36px' color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
          Upload Contract ID or Transaction XDR in a TXT file:
        </Text>
        <input type='file' id='image' onChange={onChangeImage} />
      </Box>

      {/* Preview */}
      {image && (
        <Box mb="6">
          <Text mb="2" color={textColor}>
            Preview:
          </Text>
          <img src={image} alt="Uploaded file" />
        </Box>
      )}

      {/* Buttons */}
      <Flex justifyContent="space-between">
        <Button variant="darkBrand" color="white" onClick={handleSubmit}>
          Next
        </Button>
        <Button variant="darkBrand" color="white" onClick={handleButtonClick}>
          Cancel
        </Button>
      </Flex>
      {/* Success Alert */}
      {successMessage && (
        <Alert status="success" mt="4">
          <AlertIcon />
          {successMessage}
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={() => setSuccessMessage('')}
          />
        </Alert>
      )}
    </Box>
  );
}
