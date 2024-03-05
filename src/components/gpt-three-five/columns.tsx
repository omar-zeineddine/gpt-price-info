'use client'

import { ArrowUpDownIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { GptThreeFivePrice } from '@/data/gpt-3.5'
import { ExtendedColumnDef, GptTableData } from '@/types'
import { TableMeta } from '@tanstack/react-table'

type ExtendedTableMeta = TableMeta<GptTableData> & {
  sliderValue: number
  setSliderValue: (value: number) => void
}

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
  {
    id: 'dynamicPrice',
    header: ({ table }) => (
      <div className="min-w-[150px]">
        <p className="py-4">Price </p>
        <Slider
          className="pb-4"
          min={0}
          max={4000}
          step={100}
          onValueChange={(value: number[]) => {
            if ((table.options.meta as ExtendedTableMeta)?.setSliderValue) {
              ;(table.options.meta as ExtendedTableMeta).setSliderValue(
                value[0]
              )
            }
          }}
        />
        <div className="w-[40px] mx-auto">
          <input
            className="w-[40px] py-1 mx-2 text-center border border-gray-300 rounded-sm"
            value={(
              table.options.meta as ExtendedTableMeta
            )?.sliderValue.toString()}
          />
        </div>
      </div>
    ),
    cell: ({ row, table }) => {
      const sliderValue =
        (table.options.meta as ExtendedTableMeta)?.sliderValue || 1
      const adjustedPrice = sliderValue * (sliderValue / 100)
      return <div>${adjustedPrice.toFixed(2)}</div>
    },
  },
]
