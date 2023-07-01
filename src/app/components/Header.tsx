'use client'
import { useState } from 'react'
import NextLink from 'next/link'
import { Box, Flex, Heading, Link as ChakraUILink } from '@chakra-ui/react'

export default function Header() {
    const [loginFlg, setLoginFlg] = useState(false)

    return (
        <Flex
            align="center"
            justify="space-between"
            bgColor="black"
            p={7}
            color="white"
        >
            <Box
                as="a"
                href="#home"
                display="block"
                textDecoration="none"
                w="80vm"
            >
                <NextLink href={'/'}>
                    <Heading as="h1" size="lg">
                        家計簿アプリ（仮）
                    </Heading>
                </NextLink>
            </Box>

            <Flex
                display={loginFlg ? 'none' : 'flex'}
                align="center"
                fontSize="xl"
                fontWeight="bold"
            >
                <NextLink href={'#'}>
                    <ChakraUILink mr={7} onClick={() => setLoginFlg(true)}>
                        Sign-in
                    </ChakraUILink>
                </NextLink>

                <NextLink href={'#'}>
                    <ChakraUILink mr={7}>Sign-up</ChakraUILink>
                </NextLink>
            </Flex>

            <Flex
                display={loginFlg ? 'flex' : 'none'}
                align="center"
                fontSize="xl"
                fontWeight="bold"
            >
                <NextLink href={'AddNewSpending'}>
                    <ChakraUILink mr={7}>家計簿を入力</ChakraUILink>
                </NextLink>
                <NextLink href={'/'}>
                    <ChakraUILink mr={7} onClick={() => setLoginFlg(false)}>
                        Logout
                    </ChakraUILink>
                </NextLink>
            </Flex>
        </Flex>
    )
}
