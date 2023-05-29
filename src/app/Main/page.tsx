'use client'
import {
  Button,
  Flex,
  Heading,
  Input,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'
import { useState } from 'react'
import coomonStyle from '../page.module.css'

export default function Main() {
  interface Transaction {
    category: string
    amount: string
  }

  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')

  const addTransaction = () => {
    const newTransaction = {
      category: category,
      amount: amount,
    }

    setTransactions([...transactions, newTransaction])
    setCategory('')
    setAmount('')
  }

  return (
    <div className={coomonStyle.pageMain}>
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
        <Button onClick={addTransaction}>追加</Button>
      </Flex>
      <UnorderedList>
        {transactions.map((transaction, index) => (
          <ListItem key={index}>
            カテゴリ: {transaction.category} 金額: {transaction.amount}
          </ListItem>
        ))}
      </UnorderedList>
    </div>
  )
}
