'use client'

import React from 'react'

import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { pricesPerWord, ModelPrices } from '@/types'

let dummyText = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat orci quis purus interdum, non viverra magna efficitur. In hac habitasse platea dictumst. Proin nec urna quis leo tristique vehicula sed ac enim. Morbi eget ultrices nulla. Fusce gravida ligula ut erat tincidunt, vitae lacinia odio tristique. Nunc euismod ligula eget eros pharetra, id varius ex convallis. Nullam id justo nec quam auctor tincidunt. Etiam at massa euismod, sagittis dolor nec, viverra lorem. Aliquam vel turpis leo. Vestibulum nec sapien vel mi interdum fermentum at nec velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer suscipit metus in quam volutpat, eget mattis risus convallis. Donec eget libero et quam pharetra tincidunt. Nulla facilisi. Proin pretium dapibus dolor. Integer lacinia feugiat lacus nec placerat. Phasellus pharetra purus eget ligula tincidunt, nec cursus nisl vestibulum. Ut auctor justo vel mauris tempus lobortis. Suspendisse et nisl sed est posuere varius. Sed lobortis justo a mi iaculis gravida. Sed ut odio in leo sodales fermentum. Curabitur ac nibh commodo, luctus tortor et, cursus dolor. Vivamus malesuada ligula vel quam posuere, id ultricies tortor cursus. Aenean et lectus quis magna consequat ultricies. Nam at urna ac justo suscipit lobortis. Donec auctor eros at odio sodales tincidunt. Fusce sed felis vitae purus consequat hendrerit. Nullam sit amet ante id enim dictum auctor. Nunc sit amet metus pharetra, fermentum dolor sit amet, sagittis enim. Vestibulum accumsan dolor non turpis tincidunt, id viverra turpis eleifend. Duis non elit ultricies, vestibulum leo in, feugiat eros. Cras id risus auctor, aliquam ligula vel, dapibus dolor. Phasellus sit amet ex euismod, consequat magna id, molestie lorem.',
]

export function DropdownMenuRadioGroupDemo({
  model,
  setModel,
}: {
  model: string
  setModel: React.Dispatch<React.SetStateAction<string>>
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="max-w-xs ms-auto">
          Select Model
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Model</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={model} onValueChange={setModel}>
          {Object.keys(pricesPerWord).map((modelName) => (
            <DropdownMenuRadioItem key={modelName} value={modelName}>
              {modelName}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Price:</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default function UserInput() {
  const [model, setModel] = React.useState('gpt-3.5-turbo')
  const [wordsCount, setWordsCount] = React.useState(
    dummyText[0].split(/\s+/).length
  )

  let wordCountIs = dummyText[0].split(/\s+/).length

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value
    const words = text.trim().split(/\s+/).length
    setWordsCount(words)
    calculatePrice(model, words, pricesPerWord)
  }


  function calculatePrice(model: string, wordCount: number, prices: ModelPrices): number {
    //   @ts-ignore
    const priceBrackets = prices[model]
    let totalCost = 0

    // Sort brackets to ensure correct order
    const sortedBrackets = Object.keys(priceBrackets).map(Number).sort((a, b) => a - b)

    // Find the highest bracket that does not exceed the word count
    for (let i = 0; i < sortedBrackets.length; i++) {
      if (wordCount >= sortedBrackets[i]) {
        totalCost = priceBrackets[sortedBrackets[i]]
      } else {
        break // Exit the loop if the word count is less than the current bracket
      }
    }

    return totalCost
  }

  const price = calculatePrice(model, wordsCount, pricesPerWord)

  return (
    <div className="grid w-full gap-1.5 container mb-10">
      <p className="text-2xl font-semibold">Estimated Cost: ${price.toFixed(5)}</p>
      <div className="flex items-center">
        <Label htmlFor="message-2">Your Input</Label>
        <DropdownMenuRadioGroupDemo model={model} setModel={setModel} />
      </div>
      <Textarea id="message-2" className="min-h-96" onChange={handleTextChange} defaultValue={dummyText[0]} maxLength={4000} />
      <p className="text-sm text-muted-foreground">
        Add your input text and select the model to get an estimate of execution
        cost
      </p>
    </div>
  )
}
