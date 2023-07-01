'use client'
import { ListItem, UnorderedList } from '@chakra-ui/react'
import { InputItems } from '../../interfaces/interfaces'

export interface RecentInputListProps {
    inputItems: InputItems[]
}

// 最近の入力
export default function RecentInputList(props: RecentInputListProps) {
    const { inputItems } = props

    return (
        <UnorderedList listStyleType="none">
            {inputItems?.map((inputItems: InputItems, index: number) => (
                <ListItem key={index}>
                    品目名： {inputItems.item} カテゴリ: {inputItems.category}{' '}
                    金額: {inputItems.amount}
                </ListItem>
            ))}
        </UnorderedList>
    )
}
