import inquirer from 'inquirer'
import { Category } from '../shared/constants'

const choices = [
  { name: Category.Easy },
  { name: Category.Medium },
  { name: Category.Hard },
  { name: Category.Others },
]

export const dirSelect = () =>
  inquirer.prompt([
    {
      type: 'list',
      message: '请选择难度: ',
      name: 'dir',
      choices,
    },
  ])
