import React from 'react'

import TableTabs from '@/components/tabs'
import { gptThreeFive } from '@/data/gpt-3.5'
import { GptThreeFiveDataTable } from '@/components/gpt-three-five/GptThreeFiveDataTable'
import { gptThreeFiveColumns } from '@/components/gpt-three-five/columns'

function Home() {
  return (
    <div className="container py-10 mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl">OpenAI GPT API Pricing Calculator </h2>
        <p>
          Wondering about how the OpenAI GPT and other AI model pricing works?
        </p>
      </div>
      <TableTabs />
    </div>
  )
}

export default Home
