import { useState } from 'react'
import { Transaction } from '../interfaces/interfaces'

// 支出入力画面
export const useAddSpending = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [category, setCategory] = useState<string>('')
  const [item, setItem] = useState<string>('')
  const [amount, setAmount] = useState<number>(0)
  const [memo, setMemo] = useState<string>('')

  const addSpending = () => {
    if (!category || !amount) {
      alert('登録できる明細データがありません。')
      return
    }

    const newTransaction: Transaction = {
      item: item,
      category: category,
      amount: amount,
      memo: memo,
    }

    setTransactions([...transactions, newTransaction])
    setCategory('')
    setItem('')
    setAmount(0)
    setMemo('')
  }

  return {
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
  }
}
