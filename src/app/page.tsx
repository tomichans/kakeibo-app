'use client';
import { Box, Button, VStack } from '@chakra-ui/react';

export default function Home() {
    return (
        <VStack color="#708090">
            <VStack mt="200" mb="35">
                <Box fontWeight="extrabold" fontSize="8xl">
                    Welcome to kakeibo-app!
                </Box>
                <Box
                    mb="35"
                    fontWeight="bold"
                    fontSize="2xl"
                    letterSpacing="2px"
                >
                    史上最高にシンプルな家計簿
                </Box>
            </VStack>
            <Button
                px="8"
                bgColor="#FFE4E1"
                size="lg"
                shadow="md"
                _hover={{ bgColor: '#FFF0F5' }}
            >
                さっそく始める→
            </Button>
        </VStack>
    );
}
