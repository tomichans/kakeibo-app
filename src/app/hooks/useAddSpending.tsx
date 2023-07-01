import { useState } from 'react'
import { Transaction } from '../../interfaces/interfaces'

// 支出入力画面
export const useAddSpending = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [category, setCategory] = useState<string>('')
  const [item, setItem] = useState<string>('')
  const [amount, setAmount] = useState<number>(0)
  const [memo, setMemo] = useState<string>('')
  // 支出追加フラグ
  const [addSpendFlg, setAddSpendFlg] = useState<boolean>(false)
  // 追加エラーフラグ
  const [addErrFlg, setAddErrFlg] = useState<boolean>(false)

  const addSpending = () => {
    if (!category || !amount) {
      setAddErrFlg(true)
      setAddSpendFlg(false)
      return
    } else {
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
      setAddSpendFlg(true)
      setAddErrFlg(false)
    }
  }

  return {
    transactions,
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
  }
}
