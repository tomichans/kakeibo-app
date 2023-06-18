'use client'
import { ListItem, UnorderedList } from '@chakra-ui/react'
import { Transaction } from '../../../interfaces/interfaces'
import { RecentInputListProps } from '../../../interfaces/interfaces'

// 最近の入力
export default function RecentInputList(props: RecentInputListProps) {
  return (
    <UnorderedList listStyleType="none">
      {props.transactions.map((transaction: Transaction, index: number) => (
        <ListItem key={index}>
          品目名： {transaction.item} カテゴリ: {transaction.category} 金額:{' '}
          {transaction.amount}
        </ListItem>
      ))}
    </UnorderedList>
  )
}
