'use client'

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react'
import Nav from '../landing/nav'
import Footer from '../landing/footer'
import Hero from '../blog/hero'
export default function Terms() {
  return (
    <Container maxW={'8xl'}>
        <Nav></Nav>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 10 }}
        direction={{ base: 'column', md: 'row' }}>
       
       <Hero></Hero>
      </Stack>
     
     
      <Footer></Footer>
    </Container>
  )
}