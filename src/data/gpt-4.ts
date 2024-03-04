export const gptFour = [
  {
    id: '1',
    tokens_per_execution: '10',
    words_per_execution: '8',
    price_for_1_execution: '~$0.00045',
    price_for_1000000_executions: '~$450.00',
  },
  {
    id: '2',
    tokens_per_execution: '20',
    words_per_execution: '15',
    price_for_1_execution: '~$0.00090',
    price_for_1000000_executions: '~$900.00',
  },
  {
    id: '3',
    tokens_per_execution: '50',
    words_per_execution: '38',
    price_for_1_execution: '~$0.00225',
    price_for_1000000_executions: '~$2250.00',
  },
  {
    id: '4',
    tokens_per_execution: '100',
    words_per_execution: '75',
    price_for_1_execution: '~$0.00450',
    price_for_1000000_executions: '~$4500.00',
  },
  {
    id: '5',
    tokens_per_execution: '200',
    words_per_execution: '150',
    price_for_1_execution: '~$0.00900',
    price_for_1000000_executions: '~$9000.00',
  },
  {
    id: '6',
    tokens_per_execution: '500',
    words_per_execution: '375',
    price_for_1_execution: '~$0.02250',
    price_for_1000000_executions: '~$22500.00',
  },
  {
    id: '7',
    tokens_per_execution: '1000',
    words_per_execution: '750',
    price_for_1_execution: '~$0.04500',
    price_for_1000000_executions: '~$45000.00',
  },
  {
    id: '8',
    tokens_per_execution: '2000',
    words_per_execution: '1500',
    price_for_1_execution: '~$0.09000',
    price_for_1000000_executions: '~$90000.00',
  },
  {
    id: '9',
    tokens_per_execution: '4000',
    words_per_execution: '3000',
    price_for_1_execution: '~$0.18000',
    price_for_1000000_executions: 'N/A',
  },
]

export type GptFourPrice = (typeof gptFour)[number]
