'use client';
import { Box, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import { InputItems } from '../../interfaces/interfaces';

export interface RecentInputListProps {
    inputItems: InputItems[];
}

// 最近の入力
export default function RecentInputList(props: RecentInputListProps) {
    const { inputItems } = props;

    return (
        <Box>
            <Heading mb="8" fontSize="3xl">
                最近の入力
            </Heading>
            <UnorderedList listStyleType="none" fontSize="2xl">
                {inputItems?.map((inputItems: InputItems, index: number) => (
                    <ListItem key={index} mb="5" textAlign="left">
                        <Box fontSize="xl">{inputItems.date?.toString()}</Box>
                        <Box pl="3" fontWeight="bold">
                            ¥{inputItems.amount}
                        </Box>
                        <Box pl="3" fontSize="xl">
                            {inputItems.category}
                        </Box>
                        <Box pl="3" fontSize="xl">
                            {inputItems.memo}
                        </Box>
                    </ListItem>
                ))}
            </UnorderedList>
        </Box>
    );
}
