'use client'

import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  // VStack,
} from '@chakra-ui/react'
import Nav from '../landing/nav'
import Footer from '../landing/footer'

// interface IBlogTags {
//   tags: Array<string>
//   marginTop?: SpaceProps['marginTop']
// }

interface Props {
  marginTop?: number
  tags: any[]
}

const BlogTags = (props: Props) => {
  const { marginTop = 0, tags } = props

  return (
    <HStack spacing={2} marginTop={marginTop}>
      {tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        )
      })}
    </HStack>
  )
}

interface BlogAuthorProps {
  date: Date
  name: string
}

const BlogAuthor = (props: BlogAuthorProps) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://i.imgur.com/pxwIAOW.png"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  )
}

const ArticleList = () => {
  return (
    <Container maxW={'7xl'} p="12">
              <Nav></Nav>
      <Heading as="h1">Introducing MozartPay: Your Symphony of Seamless Payments</Heading>
      <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={
                  'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Box>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)',
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">

        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['Engineering', 'Product']} />
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>

            </Text>
          </Heading>
          <Text color={'gray.600'}>
          We are thrilled to announce the closed beta launch of MozartPay – your conductor to harmonize day-to-day transactions and unlock access to the new era of payments. Welcome to mozartpay.com!
      </Text>

      <Text color={'gray.600'} mt={4}>
      At MozartPay, we are committed to revolutionizing the way businesses manage their online transactions. Our platform offers a symphony of features designed to streamline your payment processes and elevate your online business to new heights.
      </Text>

      <Text color={'gray.600'} mt={4}>
      For online businesses, e-commerce stores, online platforms, and marketplaces, MozartPay provides a comprehensive suite of tools to meet all your payment needs. With features such as seamless checkout experiences, multi-platform support, and comprehensive integration, we ensure that your transactions are as smooth as a Mozart sonata.
      </Text>

      <Text color={'gray.600'} mt={4}>
      Fraud prevention is a top priority for us at MozartPay. Our platform utilizes cutting-edge technology to keep fraud under control, with advanced fraud detection algorithms, real-time alerts, and secure encryption protocols, ensuring the safety and security of your transactions.
      </Text>

      <Text color={'gray.600'} mt={4}>
      Setting up an account with MozartPay is quick and effortless. With our user-friendly interface and instant verification process, you can start accepting payments within minutes, allowing you to focus on composing your business success. And with our round-the-clock customer support, assistance is always just a note away.
      </Text>

      <Text color={'gray.600'} mt={4}>
      MozartPay offers global coverage, supporting more than 10 currencies worldwide for near instant bank-to-bank transfers. Whether you're in the remittance industry, gaming and entertainment sector, or tourism and leisure business, our payment API enables secure, fast, and compliant international payments tailored to your specific industry needs.
      </Text>

      <Text color={'gray.600'} mt={4}>
      As we are in closed beta, we are excited to offer exclusive access to our platform at mozartpay.com. Join us on this journey to revolutionize the way businesses transact online and experience the seamless symphony of MozartPay.
      </Text>

      <Text color={'gray.600'} mt={4}>
      To learn more about MozartPay and to request access to our closed beta, visit mozartpay.com today.

Here's to a harmonious future of payments with MozartPay!
      </Text>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">

          </Text>
          {/* <BlogAuthor name="MozartPay Team" date={new Date('2023-11-06T19:01:27Z')} /> */}
        </Box>
      </Box>
      {/* <Heading as="h2" marginTop="5">
        Articles
      </Heading> */}
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          
        </WrapItem>
      </Wrap>
      <Footer></Footer>
    
    </Container>
  )
}

export default ArticleList