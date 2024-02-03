import React, { useState } from 'react';
import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Alert,
  AlertIcon,
  AlertDescription,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaTwitter, FaLinkedin } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import logo from '../../assets/img/home/mozart.png'


const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function Footer() {

  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);


  const handleSubscribe = async () => {
    try {
      const response = await fetch('https://mozart-api-21ea5fd801a8.herokuapp.com/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubscribed(true);
      } else {
        console.error('Subscription failed:', data.message);
      }
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'8xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
            <img src={logo} style={{ width: '100px', height: 'auto' }} alt="Logo" />
            </Box>
            <Text fontSize={'sm'}>Join us and start receiving payments today.</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'https://twitter.com/Mozartpay'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/company/mozartpay'}>
                <FaLinkedin />
              </SocialButton>
             {/* <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton> */}
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={'/contactUs'}>
              Contact us
            </Box>
            <Box as="a" href={'/blogs'}>
              Blog
            </Box>
            {/* <Box as="a" href={'#'}>
              Testimonials
            </Box> */}
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            {/* <Box as="a" href={'#'}>
              Help Center
            </Box> */}
            <Box as="a" href={'/terms'}>
              Terms of Service
            </Box>
            <Box as="a" href={'/imprint'}>
              Imprint
            </Box>
            <Box as="a" href={'/privacy'}>
              Privacy Policy
            </Box>
            <Box as="a" href={'/docs'}>
              Docs
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
        <Input
          placeholder={'Your email address'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
          border={0}
          _focus={{
            bg: 'whiteAlpha.300',
          }}
        />
        <IconButton
          bg={useColorModeValue('green.400', 'green.800')}
          color={useColorModeValue('white', 'gray.800')}
          _hover={{
            bg: 'green.600',
          }}
          aria-label="Subscribe"
          icon={<BiMailSend />}
          onClick={handleSubscribe}
        />
      </Stack>
      {isSubscribed && (
        <Alert status="success" mt={2}>
          <AlertIcon />
          <AlertDescription>Subscription successful!</AlertDescription>
        </Alert>
      )}
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}