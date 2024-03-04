export const gptThreeFive = [
  {
    id: '1',
    tokens_per_execution: '10',
    words_per_execution: '8',
    price_for_1_execution: '~$0.00002',
  },
  {
    id: '2',
    tokens_per_execution: '20',
    words_per_execution: '15',
    price_for_1_execution: '~$0.00003',
  },
  {
    id: '3',
    tokens_per_execution: '50',
    words_per_execution: '38',
    price_for_1_execution: '~$0.00009',
  },
  {
    id: '4',
    tokens_per_execution: '100',
    words_per_execution: '75',
    price_for_1_execution: '~$0.00017',
  },
  {
    id: '5',
    tokens_per_execution: '200',
    words_per_execution: '150',
    price_for_1_execution: '~$0.00035',
  },
  {
    id: '6',
    tokens_per_execution: '500',
    words_per_execution: '375',
    price_for_1_execution: '~$0.00088',
  },
  {
    id: '7',
    tokens_per_execution: '1000',
    words_per_execution: '750',
    price_for_1_execution: '~$0.00175',
  },
  {
    id: '8',
    tokens_per_execution: '2000',
    words_per_execution: '1500',
    price_for_1_execution: '~$0.00350',
  },
  {
    id: '9',
    tokens_per_execution: '4000',
    words_per_execution: '3000',
    price_for_1_execution: '~$0.00700',
  },
]

export type GptThreeFivePrice = (typeof gptThreeFive)[number]
