'use client'

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
import { ReactElement } from 'react'
import comp from '../../assets/img/home/comp.png'
import f1 from '../../assets/img/home/Seamless.png'
import f2 from '../../assets/img/home/Comprehensive.png'
import f3 from '../../assets/img/home/Multi-platform .png'
import f4 from '../../assets/img/home/Encryption.png'
import f5 from '../../assets/img/home/app.png'
import f6 from '../../assets/img/home/detection.png'
import f7 from '../../assets/img/home/telephone.png'
import f8 from '../../assets/img/home/real-time.png'
import f9 from '../../assets/img/home/conversion.png'
import f10 from '../../assets/img/home/benefit.png'
interface FeaturesProps {
  text: string
  iconBg: string
  icon?: ReactElement
}

const Features = ({ text, icon, iconBg }: FeaturesProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function SplitWithImage() {
  return (
    <Container maxW={'6xl'} py={12}>
           <Text fontSize='6xl' textAlign='center'  fontWeight='bold'>Features</Text>
           <br></br>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
         
          <Heading>Payments for online business</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          Online businesses, e-commerce stores, online platforms, and marketplaces, we offer a suite of tools for all your needs.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Features
               icon={<Image src={f2} alt="Seamless" w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Comprehensive Integration'}
            />
            <Features
              icon={<Image src={f3} alt="Seamless" w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Multi-platform Support'}
            />
            <Features
               icon={<Image src={f1} alt="Seamless" w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Seamless Checkout Experience'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'Features image'}
            src={
              'https://i.imgur.com/bxeVC4T.png'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
      <br></br>
      <br></br>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Flex>
          <Image
            rounded={'md'}
            alt={'Features image'}
            src={
                'https://i.imgur.com/LNFrkTs.png'
            }
            objectFit={'cover'}
          />
        </Flex>
        <Stack spacing={4}>
         
          <Heading>Keep fraud under control.</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          Protect your business from fraud by settling payments with proven cutting-edge technology.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Features
               icon={<Image src={f6} alt="Seamless" w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Advanced Fraud Detection'}
            />
            <Features
               icon={<Image src={f5} alt="Seamless" w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Real-time Alerts'}
            />
            <Features
               icon={<Image src={f4} alt="Seamless" w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Secure Encryption Protocols'}
            />
          </Stack>
        </Stack>
        
      </SimpleGrid>
      <br></br>
      <br></br>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
         
          <Heading>Quick setup</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          Easily set up an account and start receiving payments in a manner of minutes.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Features
                icon={<Image src={f1} alt="Seamless" w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'User-friendly Interface'}
            />
            <Features
               icon={<Image src={f5} alt="Seamless" w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Instant Verification'}
            />
            <Features
             icon={<Image src={f7} alt="Seamless" w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'24/7 Customer Support'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'Features image'}
            src={
                'https://i.imgur.com/RRENY8D.png'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
      <br></br>
      <br></br>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Flex>
          <Image
            rounded={'md'}
            alt={'Features image'}
            src={
              comp
            }
            objectFit={'cover'}
          />
        </Flex>
        <Stack spacing={4}>
         
          <Heading>Global coverage</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
          We support more than 10 currencies worldwide for near instant bank-to-bank transfers.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Features
             icon={<Image src={f9} alt="Seamless" w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Currency Conversion'}
            />
            <Features
                icon={<Image src={f10} alt="Seamless" w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Competitive Rates'}
            />
            <Features
               icon={<Image src={f8} alt="Seamless" w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Real-time Transfers'}
            />
          </Stack>
        </Stack>
        
      </SimpleGrid>
      <br></br>
      <br></br>
    </Container>
  )
}