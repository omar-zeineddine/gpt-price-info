import React from 'react'
import { GptFourThirtyTwoKDataTable } from './GptFourThirtyTwoKDataTable'
import { gptFourThirtyTwoKColumns } from './columns'
import { gptFourThirtyTwoK } from '@/data/gpt-4-32'


function GptFourThirtyTwoKTable() {
  return (
    <div className="container py-10 mx-auto">
      <GptFourThirtyTwoKDataTable
        columns={gptFourThirtyTwoKColumns}
        data={gptFourThirtyTwoK}
      />
    </div>
  )
}

export default GptFourThirtyTwoKTable
