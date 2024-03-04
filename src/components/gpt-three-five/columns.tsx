'use client'

import { ArrowUpDownIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GptThreeFivePrice } from '@/data/gpt-3.5'
import { ExtendedColumnDef } from '@/types'

export const gptThreeFiveColumns: ExtendedColumnDef<GptThreeFivePrice>[] = [
  {
    header: 'ID',
    accessorKey: 'id',
    displayName: 'ID',
  },
  {
    header: 'Tokens Per execution',
    accessorKey: 'tokens_per_execution',
    displayName: 'Tokens per execution',
  },
  {
    header: 'Words per execution',
    accessorKey: 'words_per_execution',
    displayName: 'Words per execution',
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
    displayName: 'Price for 1 execution',
  },
]
