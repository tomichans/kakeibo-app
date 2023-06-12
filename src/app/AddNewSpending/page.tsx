'use client'
import {
  Box,
  Button,
  Text,
  HStack,
  Heading,
  Input,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import { useAddSpending } from '../../../hooks/useAddSpending'

// 支出入力画面
export default function AddNewSpending() {
  const {
    transactions,
    category,
    item,
    amount,
    memo,
    setCategory,
    setItem,
    setAmount,
    setMemo,
    addSpending,
  } = useAddSpending()

  return (
    <Box p="6" height="50%" w="60%" bgColor="white">
      <Heading fontSize="4xl" mb="8">
        家計簿を入力
      </Heading>
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
          onChange={(e) => setAmount(parseInt(e.target.value))}
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
      <UnorderedList>
        {transactions.map((transaction, index) => (
          <ListItem key={index}>
            品目名： {transaction.item} カテゴリ: {transaction.category} 金額:
            {transaction.amount}
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}
