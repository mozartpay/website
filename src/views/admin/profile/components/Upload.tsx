import { Box, Button, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Card from 'components/card/Card';
import axios from 'axios';


export default function Upload(props: { used?: number; total?: number; [x: string]: any }) {
  const { used, total, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const brandColor = useColorModeValue('brand.500', 'white');
  const [image, setimage] = useState<string | null>('');
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

  const handleUpdateButtonClick = async () => {
    try {
      const response = await fetch('https://mozart-api-21ea5fd801a8.herokuapp.com/api/profile/image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          image: image,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User image updated:', data.user);
      } else {
        console.error('Error updating user image');
      }
    } catch (error) {
      console.error('Error updating user image:', error);
    }
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

  return (
    <Card mb='20px' alignItems='center' p='20px'>
          <Flex h='100%' direction={{ base: 'column', '2xl': 'row' }} alignItems='center'>
          <Text
            color={textColorPrimary}
            fontWeight='bold'
            textAlign='start'
            fontSize='2xl'
            mt={{ base: '20px', '2xl': '50px' }}>
            Change your profile avatar :
          </Text>
        <div style={{ width: '100%', textAlign: 'center', marginBottom: '30px',  marginTop: '40px', marginLeft:'150px' }}>
          <input type='file' id='image' onChange={onChangeImage} />
        </div>
        <Flex direction='column' pe='44px'>
          <Text
            color={textColorPrimary}
            fontWeight='bold'
            textAlign='start'
            fontSize='1xl'
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
              onClick={handleUpdateButtonClick}>
              Update now!
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
