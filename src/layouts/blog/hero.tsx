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
  // SpaceProps,
  useColorModeValue,
  Container,
  // VStack,
} from '@chakra-ui/react'

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
        src="https://pbs.twimg.com/profile_images/1346878845622890506/GPNnoIeT_400x400.jpg"
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
      <Heading as="h1">Blogs</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
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
                  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
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
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['Engineering', 'Product']} />
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
            Welcome to our Blog
            </Text>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            At MozartPay, we're passionate about revolutionizing the way the world interacts with finance. Our blog is a dedicated space where we explore the latest trends, innovations, and insights in the realm of digital payments and Web3 technologies. Whether you're a seasoned finance professional, a tech enthusiast, or just curious about the future of payments, our blog serves as your gateway to understanding and leveraging the most advanced financial tools and strategies.
          </Text>
          <BlogAuthor name="Mozart Team" date={new Date('06/11/2023')} />
        </Box>
      </Box>
      {/* <Heading as="h2" marginTop="5">
        Articles
      </Heading> */}
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Box>
            </Box>
            <BlogTags tags={['Engineering', 'Product']} marginTop={3} />
            <Heading fontSize="xl" marginTop="2">
              <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Introducing MozartPay: Your Symphony of Seamless Payments
              </Text>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
            Discover MozartPay – the conductor of seamless payments! Join our closed beta at mozartpay.com and experience a symphony of features designed to harmonize your day-to-day transactions. From seamless checkout experiences to advanced compliance, MozartPay is your key to unlocking the new era of payments. Join the revolution today!
            </Text>
            <BlogAuthor name="Mozart Team" date={new Date('2021-04-06T19:01:27Z')} />
          </Box>
        </WrapItem>
      </Wrap>
    
    </Container>
  )
}

export default ArticleList