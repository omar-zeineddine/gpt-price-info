import { ColumnDef } from '@tanstack/react-table'

export type ExtendedColumnDef<TData> = ColumnDef<TData> & {
  displayName?: string
}

export type GptTableData = {
  id: string
  tokens_per_execution: string
  words_per_execution: string
  price_for_1_execution: string
}


export interface ModelPrices {
  'gpt-3.5-turbo': Record<number, number>
  'gpt-4-turbo': Record<number, number>
  'gpt-4-32k': Record<number, number>
  'anthropic-instant-1': Record<number, number>
  'anthropic-claude-2': Record<number, number>
}

export const pricesPerWord: ModelPrices = {
  'gpt-3.5-turbo': {
    10: 0.00002,
    20: 0.00003,
    50: 0.00008,
    100: 0.00015,
    200: 0.0003,
    500: 0.00075,
    1000: 0.0015,
    2000: 0.003,
    4000: 0.006,
  },
  'gpt-4-turbo': {
    10: 0.00045,
    20: 0.0009,
    50: 0.00225,
    100: 0.0045,
    200: 0.009,
    500: 0.0225,
    1000: 0.045,
    2000: 0.09,
    4000: 0.18,
  },
  'gpt-4-32k': {
    10: 0.0009,
    20: 0.0018,
    50: 0.0045,
    100: 0.009,
    200: 0.018,
    500: 0.045,
    1000: 0.09,
    2000: 0.18,
    4000: 0.36,
  },
  'anthropic-instant-1': {
    10: 0.00004,
    20: 0.00007,
    50: 0.00018,
    100: 0.00036,
    200: 0.00071,
    500: 0.00178,
    1000: 0.00357,
    2000: 0.00714,
    4000: 0.01428,
  },
  'anthropic-claude-2': {
    10: 0.00022,
    20: 0.00044,
    50: 0.00109,
    100: 0.00218,
    200: 0.00437,
    500: 0.01092,
    1000: 0.02185,
    2000: 0.04370,
    4000: 0.08740,
  }
}