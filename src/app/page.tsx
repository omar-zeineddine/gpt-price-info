import React from 'react'

import TableTabs from '@/components/tabs'
import UserInput from '@/components/user-input'
import Faq from '@/components/faq'
import Footer from '@/components/footer'

function Home() {
  return (
    <div className="container py-10 mx-auto">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl">AI Models Pricing Tracker</h2>
        <p className="leading-8">
          Wondering about how the OpenAI GPT and other AI model pricing works?
          <br />
          Here&apos;s a pricing calculator for OpenAI GPT API, Anthropic Claude
          API.
        </p>
      </div>
      <TableTabs />
      <UserInput />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home
