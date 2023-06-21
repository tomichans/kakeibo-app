export interface Transaction {
  category: string
  item: string
  amount: number
  memo: string
}

export interface RecentInputListProps {
  transactions: Transaction[]
}
