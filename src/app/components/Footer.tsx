'use client'
import { Box, Text } from '@chakra-ui/react'

export default function Footer() {
    return (
        <Box
            w="100%"
            h="70px"
            position="fixed"
            left="0"
            bottom="0"
            color="#708090"
            bgColor="#FFF0F5"
            display="flex"
            alignItems="center"
        >
            <Text mx="auto">Copyright © 2023 tomichans</Text>
        </Box>
    )
}
