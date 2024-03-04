import React from 'react'
import { GptFourDataTable } from './GptFourDataTable'
import { gptFourColumns } from './columns'
import { gptFour } from '@/data/gpt-4'

function GptFourTable() {
  return (
    <div className="container py-10 mx-auto">
      <GptFourDataTable columns={gptFourColumns} data={gptFour} />
    </div>
  )
}

export default GptFourTable
