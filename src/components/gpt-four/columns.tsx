'use client'

import { ArrowUpDownIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { GptFourPrice } from '@/data/gpt-4'
import { ExtendedColumnDef, GptTableData } from '@/types'
import { TableMeta } from '@tanstack/react-table'
import { TooltipInfo } from '@/components/tooltip-info'

type ExtendedTableMeta = TableMeta<GptTableData> & {
  sliderValue: number
  setSliderValue: (value: number) => void
}

export const gptFourColumns: ExtendedColumnDef<GptFourPrice>[] = [
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
      <div>
        <div className="py-4 flex w-[300px] items-center">
          <p>OpenAI price for</p>
          <input
            readOnly
            className="w-[65px] py-1 mx-2 text-center border border-gray-300 rounded-sm"
            value={(
              table?.options.meta as ExtendedTableMeta
            )?.sliderValue.toString()}
          />
          <p>executions</p>
          <TooltipInfo />
        </div>
        <Slider
          className="pb-4 max-w-[290px]"
          min={0}
          max={1000000}
          step={1000}
          onValueChange={(value: number[]) => {
            if ((table?.options.meta as ExtendedTableMeta)?.setSliderValue) {
              ;(table?.options.meta as ExtendedTableMeta).setSliderValue(
                value[0]
              )
            }
          }}
        />
      </div>
    ),
    cell: ({ row, table }) => {
      const sliderValue =
        (table?.options?.meta as ExtendedTableMeta)?.sliderValue || 1
      const basePrice = parseFloat(
        row.original.price_for_1_execution.replace('~$', '')
      )
      const adjustedPrice = basePrice * sliderValue
      return <div>~${adjustedPrice.toFixed(2)}</div>
    },
  },
]
