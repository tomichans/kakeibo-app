'use client'
import {
  Button,
  Flex,
  Heading,
  Input,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import { useAddSpending } from '../../../hooks/useAddSpending'

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
    <>
      <Heading fontSize="5xl">家計簿アプリ</Heading>
      <Flex>
        <Input
          w="300"
          type="text"
          placeholder="カテゴリ"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <Input
          w="300"
          type="number"
          placeholder="金額"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        />
        <Button onClick={addSpending}>追加</Button>
      <UnorderedList>
        {transactions.map((transaction, index) => (
          <ListItem key={index}>
            カテゴリ: {transaction.category} 金額: {transaction.amount}
          </ListItem>
        ))}
      </UnorderedList>
    </>
  )
}
