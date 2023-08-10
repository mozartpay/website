'use client'

import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react'
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc'
import rem from '../../assets/img/home/rem.png'
import gam from '../../assets/img/home/gam.png'
import tra from '../../assets/img/home/tra.png'
interface FeatureProps {
  title: string
  text: string
  icon: ReactElement
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={40}
        h={20}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  )
}

export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
           <Text fontSize='6xl' textAlign='center'  fontWeight='bold'>Industries</Text>
           
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
     
        <Feature
         icon={
            <img src={rem} alt="Remittance Icon" style={{ width: '500px', height: '100px' }}/>
          }
          title={'Remittance'}
          text={
            'Our clients can benefit from our remittance services with more than 10 currencies worldwide.'
          }
        />
        <Feature
         icon={
            <img src={gam} alt="Remittance Icon" style={{ width: '500px', height: '100px' }}/>
          }
          title={'Gaming and entertainment'}
          text={
            'Micropayment solutions for gaming, content publishers and entertainment.'
          }
        />
        <Feature
           icon={
            <img src={tra} alt="Remittance Icon" style={{ width: '500px', height: '100px' }} />
          }
          title={'Tourism and Leisure'}
          text={
            'Companies in travel can also leverage our payment API to allow secure, fast, and compliant international payments.'
          }
        />
      </SimpleGrid>
    </Box>
  )
}