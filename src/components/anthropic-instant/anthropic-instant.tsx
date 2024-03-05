import React from 'react'
import { AnthropicInstantDataTable } from './AnthropicInstantDataTable'
import { anthropicInstantColumns } from './columns'
import { anthropicInstant } from '@/data/anthropic-one'


function AnthropicInstantTable() {
  return (
    <div className="container py-10 mx-auto">
      <AnthropicInstantDataTable
        columns={anthropicInstantColumns}
        data={anthropicInstant}
      />
    </div>
  )
}

export default AnthropicInstantTable