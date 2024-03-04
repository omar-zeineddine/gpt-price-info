'use client'

import { GptThreeFivePrice } from '@/data/gpt-3.5'

import { ColumnDef } from '@tanstack/react-table'

import { ArrowUpDownIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export const gptThreeFiveColumns: ColumnDef<GptThreeFivePrice>[] = [
  {
    header: 'ID',
    accessorKey: 'id',
  },
  {
    header: 'Tokens Per execution',
    accessorKey: 'tokens_per_execution',
  },
  {
    header: 'Words per execution',
    accessorKey: 'words_per_execution',
  },
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === 'asc')
          }}
        >
          Price for 1 execution
          <ArrowUpDownIcon className="ml-2 size-4" />
        </Button>
      )
    },
    accessorKey: 'price_for_1_execution',
  },
]
