import { select } from '@inquirer/prompts'
import { Category } from '../shared/constants'

const choices = [
  { name: Category.Easy, value: Category.Easy },
  { name: Category.Medium, value: Category.Medium },
  { name: Category.Hard, value: Category.Hard },
]

export const dirSelect = async () =>
  select({
    message: '请选择难度: ',
    choices,
  })
