import { select } from '@inquirer/prompts'
import { Category } from '../shared/constants.js'

const choices = [
  { name: Category.Easy, value: Category.Easy },
  { name: Category.Medium, value: Category.Medium },
  { name: Category.Hard, value: Category.Hard },
]

export const dirSelect = async () =>
  select({
    message: 'Select difficulty: ',
    choices,
  })
