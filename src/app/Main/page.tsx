'use client'
import { useState } from 'react'

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
    <div>
      <h1>家計簿アプリ</h1>
      <div>
        <input
          type="text"
          placeholder="カテゴリ"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="金額"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addTransaction}>追加</button>
      </div>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            カテゴリ: {transaction.category} 金額: {transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  )
}
