import { ChangeEvent, useState } from 'react'
import { InputItems } from '../../interfaces/interfaces'

// 支出入力画面
export const useAddSpending = () => {
    // カテゴリ・品目名・金額・メモのまとまり
    const [inputItems, setInputItems] = useState<InputItems[]>([])

    // 日付
    const [date, setDate] = useState<string>('')
    // カテゴリ
    const [category, setCategory] = useState<string>('')
    // 金額
    const [amount, setAmount] = useState<number>(0)
    // メモ
    const [memo, setMemo] = useState<string>('')
    // 支出追加フラグ
    const [addSpendFlg, setAddSpendFlg] = useState<boolean>(false)
    // 追加エラーフラグ
    const [addErrFlg, setAddErrFlg] = useState<boolean>(false)

    /**
     * 登録ボタン処理
     * @return
     */
    const addSpending = () => {
        // カテゴリもしくは金額の入力がない場合
        if (!date || !category || !amount) {
            setAddErrFlg(true)
            setAddSpendFlg(false)
            return
        }

        const newInputItems: InputItems = {
            date,
            category,
            amount,
            memo,
        }

        setInputItems([...inputItems, newInputItems])
        setCategory('')
        setDate('')
        setAmount(0)
        setMemo('')
        setAddSpendFlg(true)
        setAddErrFlg(false)
    }

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value)
    }

    return {
        inputItems,
        category,
        date,
        amount,
        memo,
        addSpendFlg,
        addErrFlg,
        setCategory,
        setDate,
        setAmount,
        setMemo,
        addSpending,
        handleDateChange,
    }
}
