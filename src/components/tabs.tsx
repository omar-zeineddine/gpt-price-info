import React from 'react'

import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import GptThreeFiveTable from './gpt-three-five/gpt-three-five'
import GptFourTable from './gpt-four/gpt-four'
import GptFourThirtyTwoKTable from './gpt-four-thirty-two-k/gpt-four-thirty-two-k'
import AnthropicInstantTable from './anthropic-instant/anthropic-instant'
import AnthropicTwoTable from './anthropic-two/anthropic-two'

const TableTabs = ({ className }: { className?: string }) => {
  return (
    <Tabs
      defaultValue="3.5"
      className={` ${className} py-10 flex flex-col items-center`}
    >
      <TabsList>
        <TabsTrigger value="3.5">
          <Image
            src="/openai.svg"
            alt="OpenAI Logo"
            className="mr-2"
            width={20}
            height={20}
          />
          OpenAI gpt-3.5-turbo
        </TabsTrigger>
        <TabsTrigger value="4">
          <Image
            src="/openai.svg"
            alt="OpenAI Logo"
            className="mr-2"
            width={20}
            height={20}
          />
          OpenAI gpt-4-turbo (beta)
        </TabsTrigger>
        <TabsTrigger value="4-32">
          <Image
            src="/openai.svg"
            alt="OpenAI Logo"
            className="mr-2"
            width={20}
            height={20}
          />
          OpenAI gpt-4-32k
        </TabsTrigger>
        <TabsTrigger value="anthropic-1">
          <Image
            src="/anthropic.svg"
            alt="Anthropic Logo"
            className="mr-2"
            width={20}
            height={20}
          />
          Anthropic Instant-1
        </TabsTrigger>
        <TabsTrigger value="anthropic-2">
          <Image
            src="/anthropic.svg"
            alt="Anthropic Logo"
            className="mr-2"
            width={20}
            height={20}
          />
          Anthropic Claude-2
        </TabsTrigger>
      </TabsList>

      <TabsContent value="3.5" className="min-w-full">
        <GptThreeFiveTable />
      </TabsContent>
      <TabsContent value="4" className="min-w-full">
        <GptFourTable />
      </TabsContent>
      <TabsContent value="4-32" className="min-w-full">
        <GptFourThirtyTwoKTable />
      </TabsContent>
      <TabsContent value="anthropic-1" className="min-w-full">
        <AnthropicInstantTable />
      </TabsContent>
      <TabsContent value="anthropic-2" className="min-w-full">
        <AnthropicTwoTable />
      </TabsContent>
    </Tabs>
  )
}

export default TableTabs
