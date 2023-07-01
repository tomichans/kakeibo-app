'use client'
import { Box, Button, Text, HStack, Heading, Input } from '@chakra-ui/react'
import { useAddSpending } from '../hooks/useAddSpending'
import RecentInputList from '../components/RecentInputList'

// 支出入力画面
export default function AddNewSpending() {
    const {
        inputItems,
        category,
        item,
        amount,
        memo,
        addSpendFlg,
        addErrFlg,
        setCategory,
        setItem,
        setAmount,
        setMemo,
        addSpending,
    } = useAddSpending()

    return (
        <Box p="6" bg="#F5F5F5">
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
                            品目名
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
                            type="text"
                            placeholder="品目名"
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                        />
                        <Input
                            w="20%"
                            type="text"
                            placeholder="カテゴリ"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
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
                        <Button onClick={() => addSpending}>追加</Button>
                    </HStack>
                </Box>

                {/* 追加リスト */}
                <RecentInputList inputItems={inputItems} />
            </Box>
        </Box>
    )
}
