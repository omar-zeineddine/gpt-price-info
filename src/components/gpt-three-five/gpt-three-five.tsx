import React from 'react'
import { GptThreeFiveDataTable } from './GptThreeFiveDataTable'
import { gptThreeFiveColumns } from './columns'
import { gptThreeFive } from '@/data/gpt-3.5'

function GptThreeFiveTable() {
  return (
    <div className="container py-10 mx-auto">
      <GptThreeFiveDataTable
        columns={gptThreeFiveColumns}
        data={gptThreeFive}
      />
    </div>
  )
}

export default GptThreeFiveTable
