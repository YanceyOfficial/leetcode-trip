import inquirer from 'inquirer'

const choices = [
  { name: 'Easy' },
  { name: 'Medium' },
  { name: 'Hard' },
  { name: 'Other' },
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
