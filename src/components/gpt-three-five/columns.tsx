'use client'

import { ArrowUpDownIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
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
  // {
  //   id: 'dynamicPrice',
  //   header: ({ table }) => (
  //     <div>
  //       <p className="py-4">Price </p>
  //       <Slider
  //         className="pb-4"
  //         min={0}
  //         max={4000}
  //         step={100}
  //         onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
  //           const value = Number(event.target.value)
  //           const handleSliderChange = table.options.meta?.handleSliderChange
  //           handleSliderChange?.(value)
  //         }}
  //       />
  //       <input value={table.options.meta?.sliderValue} />
  //     </div>
  //   ),
  //   cell: ({ row, table }) => {
  //     const sliderValue = table.options.meta?.sliderValue || 1 // Default to 1 to avoid multiplication by 0
  //     const basePrice = Number(row.original.price_for_1_execution)
  //     const adjustedPrice = basePrice * (sliderValue / 100) // Adjust this formula as needed
  //     return <div>${adjustedPrice.toFixed(2)}</div>
  //   },
  // },
]
