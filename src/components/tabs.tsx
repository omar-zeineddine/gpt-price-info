import React from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import GptThreeFiveTable from './gpt-three-five/gpt-three-five'
import GptFourTable from './gpt-four/gpt-four'

const TableTabs = ({ className }: { className?: string }) => {
  return (
    <Tabs
      defaultValue="3.5"
      className={` ${className} py-10 flex flex-col items-center`}
    >
      <TabsList>
        <TabsTrigger value="3.5" className="px-10">
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
      </TabsList>
      <TabsContent value="3.5" className="min-w-full">
        <GptThreeFiveTable />
      </TabsContent>
      <TabsContent value="4" className="min-w-full">
        <GptFourTable />
      </TabsContent>
    </Tabs>
  )
}

export default TableTabs
