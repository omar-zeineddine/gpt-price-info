'use client'

import { ColumnDef } from '@tanstack/react-table'

// import { downloadToExcel } from '@/lib/xlsx'

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}
