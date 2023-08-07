import { Box, Button, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Card from 'components/card/Card';
import axios from 'axios';
import { MdUpload } from 'react-icons/md';
import Dropzone from 'views/admin/profile/components/Dropzone';
import  File  from 'react-dropzone';
import { FileWithPath } from 'react-dropzone';
export default function Upload(props: { used?: number; total?: number; [x: string]: any }) {
  const { used, total, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const brandColor = useColorModeValue('brand.500', 'white');
  const [image, setimage] = useState<string>();
  const [userName, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
		console.log(userData)
		
      const { name, email } = JSON.parse(userData);
      setName(name);
      setEmail(email);
    }
  }, []);

  const handleUpdateButtonClick = () => {
   
    console.log('image',image)
	console.log(email)
   
    axios.post('https://mozart-7f31ad443ef1.herokuapp.com/api/profile/image', {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
	  body: JSON.stringify({ email, image }),
    })
      .then((response) => {
        console.log('Image uploaded:', response.data);
       
      })
      .catch((error) => {
        console.error('Image upload failed:', error);
      });
  };


  return (
    <Card {...rest} mb='20px' alignItems='center' p='20px'>
      <Flex h='100%' direction={{ base: 'column', '2xl': 'row' }}>
        <Dropzone
          w={{ base: '100%', '2xl': '268px' }}
          me='36px'
          maxH={{ base: '60%', lg: '50%', '2xl': '100%' }}
          minH={{ base: '60%', lg: '50%', '2xl': '100%' }}
          content={
            <Box>
              <Icon as={MdUpload} w='80px' h='80px' color={brandColor} />
              <Flex justify='center' mx='auto' mb='12px'>
                <Text fontSize='xl' fontWeight='700' color={brandColor}>
                  Upload Image
                </Text>
              </Flex>
              <Text fontSize='sm' fontWeight='500' color='secondaryGray.500'>
                PNG, JPG and GIF files are allowed
              </Text>
            </Box>
          }
		  onFileSelect={(files: FileWithPath[]) => {
            if (files && files.length > 0) {
              const reader = new FileReader();
              reader.onload = () => {
                setimage(reader.result as string);
              };
              reader.readAsDataURL(files[0]);
            }
          }}
        />
        <Flex direction='column' pe='44px'>
          <Text
            color={textColorPrimary}
            fontWeight='bold'
            textAlign='start'
            fontSize='2xl'
            mt={{ base: '20px', '2xl': '50px' }}>
            Complete your profile
          </Text>
          <Flex w='100%'>
            <Button
              me='100%'
              mb='50px'
              w='140px'
              minW='140px'
              mt={{ base: '20px', '2xl': 'auto' }}
              variant='brand'
              fontWeight='500'
			  onClick={handleUpdateButtonClick} 
			  >
              Update now!
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
