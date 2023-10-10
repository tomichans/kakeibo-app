'use client';
import { useState } from 'react';
import NextLink from 'next/link';
import { Box, Flex, Heading, Link as ChakraUILink } from '@chakra-ui/react';

export default function Header() {
    const [loginFlg, setLoginFlg] = useState(false);

    return (
        <Flex
            align="center"
            justify="space-between"
            bgColor="#FFF0F5"
            p={7}
            color="#708090"
        >
            <Box
                as="a"
                href="#home"
                display="block"
                textDecoration="none"
                w="80vm"
            >
                <NextLink href={'/'}>
                    <Heading as="h1" size="lg" fontWeight="normal">
                        家計簿アプリ（仮）
                    </Heading>
                </NextLink>
            </Box>

            <Flex
                display={loginFlg ? 'none' : 'flex'}
                align="center"
                fontSize="xl"
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
            >
                <NextLink href={'AddNewSpending'}>
                    <ChakraUILink mr={7}>記録する</ChakraUILink>
                </NextLink>
                <NextLink href={'/'}>
                    <ChakraUILink mr={7} onClick={() => setLoginFlg(false)}>
                        Sign out
                    </ChakraUILink>
                </NextLink>
            </Flex>
        </Flex>
    );
}
