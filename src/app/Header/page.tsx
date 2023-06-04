'use client'
import NextLink from 'next/link'
import { Box, Flex, Heading, Link as ChakraUILink } from '@chakra-ui/react'

export default function Header() {
  return (
    <Flex
      align="center"
      justify="space-between"
      bgColor="black"
      p={7}
      color="white"
    >
      <Box as="a" href="#home" display="block" textDecoration="none" w="80vm">
        <Heading as="h1" size="lg">
          家計簿アプリ（仮）
        </Heading>
      </Box>
      <Flex align="center" fontSize="xl" fontWeight="bold">
        <NextLink href={'#'}>
          <ChakraUILink mr={7}>Sign-in</ChakraUILink>
        </NextLink>
        <NextLink href={'#'}>
          <ChakraUILink mr={7}>Sign-up</ChakraUILink>
        </NextLink>
      </Flex>
    </Flex>
  )
}
