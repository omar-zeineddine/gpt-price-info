'use client'

import { Disclosure } from '@headlessui/react'
import { MinusIcon as MinusSmallIcon } from 'lucide-react'
import { PlusIcon as PlusSmallIcon } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    question: "What is an OpenAI token?",
    answer: "A token is a part of a text that can be a word, subword, punctuation mark, or symbol. It is the unit of account of OpenAI APIs."
  },
  {
    question: "What is an OpenAI execution?",
    answer: "An OpenAI execution is the combination of the invite to OpenAI and the response from OpenAI. All text in the prompt and response count for OpenAI billing."
  },
  {
    question: "What is an OpenAI prompt?",
    answer: "The OpenAI prompt is the instructions or question you send to OpenAI in order to get a response. It is text written in normal, natural language, for example: 'Write a tagline for an ice cream shop'."
  },
  {
    question: "What is an OpenAI response?",
    answer: "This is the response OpenAI gives you to the prompt you sent, for example: Prompt: 'Write a tagline for an ice cream shop' Response: 'We serve up smiles with every scoop!'"
  },
  {
    question: "Can I set an OpenAI billing limit?",
    answer: "You can configure a billing limit in the OpenAI billing settings, in order to control your costs."
  },
  {
    question: "How to monitor my OpenAI API cost based on usage?",
    answer: "You can review your usage in the OpenAI dashboard usage section. You can easily set a spending limit in the OpenAI dashboard billing section."
  }
]

export default function Faq() {
  return (
    <div className="container mx-auto px-6 pb-20 lg:px-8">
      <div className="mx-auto divide-y divide-gray-900/10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight ">Frequently asked questions</h2>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left ">
                      <span className="text-base font-semibold leading-7">{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 ">{faq.answer}</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  )
}