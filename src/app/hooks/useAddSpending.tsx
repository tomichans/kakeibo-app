import { useState } from 'react'
import { InputItems } from '../../interfaces/interfaces'

// 支出入力画面
export const useAddSpending = () => {
    // カテゴリ・品目名・金額・メモのまとまり
    const [inputItems, setInputItems] = useState<InputItems[]>([])

    // カテゴリ
    const [category, setCategory] = useState<string>('')
    // 品目名
    const [item, setItem] = useState<string>('')
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
        if (!category || !amount) {
            setAddErrFlg(true)
            setAddSpendFlg(false)
            return
        }

        const newInputItems: InputItems = {
            item,
            category,
            amount,
            memo,
        }

        setInputItems([...inputItems, newInputItems])
        setCategory('')
        setItem('')
        setAmount(0)
        setMemo('')
        setAddSpendFlg(true)
        setAddErrFlg(false)
    }

    return {
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
    }
}
