import React from 'react'
import { AnthropicTwoDataTable } from './AnthropicTwoDataTable'
import { anthropicTwoColumns } from './columns'
import { anthropicTwo } from '@/data/anthropic-two'


function AnthropicTwoTable() {
  return (
    <div className="container py-10 mx-auto">
      <AnthropicTwoDataTable
        columns={anthropicTwoColumns}
        data={anthropicTwo}
      />
    </div>
  )
}

export default AnthropicTwoTable
