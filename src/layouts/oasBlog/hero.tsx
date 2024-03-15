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
import oas from './oas_sc.png';
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
        
      <Heading as="h1">Harnessing Real-World Assets (RWAs) through Orchestrated Agreements (OAs): Transforming Web3 Payment Dynamics on Soroban</Heading>
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
          <BlogTags tags={['Web3 Payments', 'Financial Protocol']} />
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>

            
            </Text>
          </Heading>
          <Text color={'gray.600'}>
          In a world where digital transactions reign supreme, Orchestrated Agreements (OAs) emerge as the groundbreaking solution of tomorrow. Crafted by OG Technologies EU, OAs represent a quantum leap in blockchain and smart contract technology—an innovation poised to revolutionize the landscape of financial agreements. <br />
          <br />
         <b> So, what exactly are Orchestrated Agreements? </b><br />
Imagine a suite of advanced, blockchain-powered tools designed to automate and streamline contracts in the digital realm. Inspired by Turrets, and the orchestration prowess of Kubernetes in managing containers, OAs bring similar efficiency and adaptability to the world of  WASM-based contracts, particularly in intricate, cross-border financial transactions, including those involving Real-World Assets (RWA).
      </Text>

      <Text color={'gray.600'} mt={4}>
      <b>Let's delve into their core features: <br /></b>
Smart Contract Orchestration: Harnessing the formidable power of Soroban, Rust, and WASM, OAs offer an unparalleled level of precision and security in automating contractual obligations. <br />
Cross-Border Efficiency: Tailored to navigate the complexities of international payments, OAs simplify transactions across diverse jurisdictions and currencies, making global commerce smoother than ever. <br />

Immutability and Transparency: Rooted in blockchain technology, OAs provide a transparent, tamper-proof system, ensuring unwavering trust and accountability in every transaction.<br />

User-Friendly Interface: With a frontend masterfully crafted in TypeScript/React, OAs are not just powerful but also accessible and user-friendly, offering a seamless experience for all stakeholders. <br />
      </Text>

      <Text color={'gray.600'} mt={4}>

<b>Now, let's talk about the perks for businesses:<br /></b> 

Reduced Transaction Costs and Times: Streamline your financial operations with automated processes, slashing costs and transaction times significantly. <br />

Enhanced Security and Compliance: Rest easy knowing your transactions are secure and compliant with international regulatory standards, thanks to the inherent features of blockchain and smart contracts. <br />

Scalability and Flexibility: Whether you're a budding startup or a seasoned enterprise, OAs are tailor-made to scale and adapt to your evolving business needs. <br />
      </Text>

      <Text color={'gray.600'} mt={4}>
     <b>But where can OAs be applied?</b>  <br />

From facilitating seamless international trade payments to managing subscriptions in global markets, OAs prove to be incredibly versatile. They find particular favor among Financial Institutions, E-Commerce Platforms, Gaming, B2B Enterprises, and Global Service Providers alike, specially when dealing with transactions involving Real-World Assets (RWA).

      </Text>

      <Text color={'gray.600'} mt={4}>

Join the revolution and embrace the future of financial transactions with Orchestrated Agreements. At OG Technologies EU, we're not just creating a product; we're sculpting the future of commerce itself. Get in touch with us today to uncover how OAs can redefine the way you navigate the digital transaction landscape. Would you like to see an early sneak peek into the user interface? <a href="https://bafkreietvutr6xt6qjaswq5cu2t46qe7q2axrwh3tjabtmzcoesnkqqz64.ipfs.nftstorage.link/"><b>Check it out.</b></a>
      </Text>



      <Text color={'gray.600'} mt={4}>


      </Text>

      <Text color={'gray.600'} mt={4}>
      {/* <img src={oas} alt="Logo" /> */}
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
 
    
    </Container>
  )
}

export default ArticleList