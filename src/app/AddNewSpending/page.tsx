'use client';
import {
    Box,
    Button,
    Text,
    HStack,
    Heading,
    Input,
    Flex,
    Select,
} from '@chakra-ui/react';
import { useAddSpending } from '../hooks/useAddSpending';
import RecentInputList from '../components/RecentInputList';

// 支出入力画面
export default function AddNewSpending() {
    const {
        inputItems,
        category,
        date,
        amount,
        memo,
        addSpendFlg,
        addErrFlg,
        setCategory,
        setAmount,
        setMemo,
        addSpending,
        handleDateChange,
    } = useAddSpending();

    /** カテゴリプルダウンリスト */
    const selectCtgr = [
        { value: '', label: '選択してください' },
        { value: '食料品', label: '食料品' },
        { value: '消耗品', label: '消耗品' },
        { value: '通信', label: '通信' },
    ];

    return (
        <Flex p="6" bg="#F5F5F5" justify="space-between">
            {/* 支出入力欄 */}
            <Box p="6" w="60%" bgColor="white">
                <Heading mb="8" fontSize="4xl">
                    家計簿を入力
                </Heading>

                {/* ポップアップ */}
                <Box
                    py="2"
                    w="20%"
                    textAlign="center"
                    fontWeight="bold"
                    fontSize="xl"
                    bg="#99FF33"
                    color="white"
                    display={addSpendFlg ? 'block' : 'none'}
                >
                    追加しました
                </Box>
                <Box
                    py="2"
                    w="50%"
                    textAlign="center"
                    fontWeight="bold"
                    fontSize="xl"
                    bg="red"
                    color="white"
                    display={addErrFlg ? 'block' : 'none'}
                >
                    登録できる明細データがありません。
                </Box>

                {/* 支出入力欄 */}
                <Box my="5">
                    <HStack>
                        <Text px="4" w="20%" fontSize="2xl">
                            日付
                        </Text>
                        <Text px="4" w="20%" fontSize="2xl">
                            カテゴリ
                        </Text>
                        <Text px="4" w="20%" fontSize="2xl">
                            金額
                        </Text>
                        <Text px="4" w="20%" fontSize="2xl">
                            メモ
                        </Text>
                    </HStack>
                    <HStack>
                        <Input
                            w="20%"
                            type="date"
                            placeholder="日付"
                            value={date}
                            onChange={handleDateChange}
                        />
                        <Select
                            w="20%"
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                        >
                            {selectCtgr.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </Select>
                        <Input
                            w="20%"
                            type="number"
                            placeholder="金額"
                            value={amount}
                            onChange={(e) =>
                                setAmount(parseInt(e.target.value))
                            }
                        />
                        <Input
                            w="20%"
                            type="text"
                            placeholder="メモ"
                            value={memo}
                            onChange={(e) => setMemo(e.target.value)}
                        />
                        <Button onClick={addSpending}>追加</Button>
                    </HStack>
                </Box>
            </Box>
            {/* 追加リスト */}
            <Box mx="auto" p="6" w="35%" bgColor="white">
                <RecentInputList inputItems={inputItems} />
            </Box>
        </Flex>
    );
}
