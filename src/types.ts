import { ColumnDef } from '@tanstack/react-table'

export type ExtendedColumnDef<TData> = ColumnDef<TData> & {
  displayName?: string
}

export type GptTableData = {
  id: string
  tokens_per_execution: string
  words_per_execution: string
  price_for_1_execution: string
}
