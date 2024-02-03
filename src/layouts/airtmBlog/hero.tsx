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
  VStack,
} from '@chakra-ui/react'
import Nav from '../landing/nav'
import Footer from '../landing/footer'

interface IBlogTags {
  tags: Array<string>
  marginTop?: SpaceProps['marginTop']
}

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
      <Heading as="h1">Partnership Announcement: Airtm Integration on Mozartpay.com</Heading>
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
                  'https://i.imgur.com/PAGHebL.png'
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
        Integrating Airtm's dynamic multi-currency peer-to-peer payment platform 
        has been a game-changer for our clientele at OG Technologies EU, 
        facilitating seamless business operations beyond the constraints of conventional 
        financial systems. Here's a closer look at the transformative benefits:
      </Text>

      <Text color={'gray.600'} mt={4}>
        <b>Global Payroll Simplified:</b><br />
        Airtm allows us to streamline international payroll for our team, ensuring 
        everyone gets paid promptly in their preferred currency. This means our diverse 
        team can now receive payments hassle-free, irrespective of geographical boundaries.
      </Text>

      <Text color={'gray.600'} mt={4}>
        <b>Seamless B2B Transactions:</b><br />
        OG Technologies EU, via our brand MozartPay.com, can now facilitate faster 
        and more transparent business-to-business transactions, thanks to Airtm's 
        infrastructure. This will not only build trust but also increase operational 
        efficiency for us and our partners.<br /><br />
        Andreina Segueriz, Customer Success Manager at Airtm says (Example): 
        "We've seen how OG Technologies EU has used our platform to revolutionize 
        their B2B transactions. Their commitment to transparency and efficiency 
        resonates with our mission, and it’s rewarding to see the tangible benefits 
        in their operations."
      </Text>

      <Text color={'gray.600'} mt={4}>
        <b>Currency Exchange Made Easy:</b><br />
        Airtm's robust platform will enable us to offer our users the freedom to 
        exchange between multiple currencies with ease. This is especially vital for 
        our international clientele, allowing for a more inclusive financial experience.
      </Text>

      <Text color={'gray.600'} mt={4}>
        <b>Financial Inclusion for All:</b><br />
        As champions of financial inclusivity, we see immense potential in leveraging 
        Airtm's platform to offer our users a gateway to the global economy, breaking 
        down previously existing barriers.
      </Text>

      <Text color={'gray.600'} mt={4}>
        <b>Safe, Secure, and Compliant:</b><br />
        In the world of finance, security and compliance are paramount. Airtm's dedication 
        to these principles aligns with our ethos at mozartpay.com, assuring our users 
        of a safe and compliant financial environment.
      </Text>

      <Text color={'gray.600'} mt={4}>
        <b>Empowering Digital Payments:</b><br />
        As we move towards a digital-first world, it's vital to have a trusted partner to 
        navigate the complexities of digital payments. With Airtm, we're poised to offer 
        our clients a superior digital payment experience.
      </Text>

      <Text color={'gray.600'} mt={4}>
        By integrating Airtm's enterprise solutions, we at OG Technologies EU, are not 
        just enhancing our offerings, but also reinforcing our commitment to providing 
        the best for our users. We believe that leveraging platforms like Airtm Enterprise 
        can be transformative for businesses. It not only streamlines operations but also 
        fosters inclusivity and growth in the digital age. We're excited about this partnership 
        and the myriad of possibilities it presents.<br /><br />
        Andreina Segueriz, concludes (example): "Our partnership with OG Technologies EU 
        embodies the collaboration necessary to push the digital payment landscape forward. 
        Their innovative approach and Airtm's capabilities create a synergy that enhances 
        the digital payment experience for users around the globe."
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