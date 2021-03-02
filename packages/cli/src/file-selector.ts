import inquirer from 'inquirer'
import autocomplete from 'inquirer-autocomplete-prompt'

inquirer.registerPrompt('autocomplete', autocomplete)

export const fileSelect = (choices: string[]) =>
  inquirer.prompt([
    {
      type: 'autocomplete',
      message: '请选择文件: ',
      name: 'file',
      pageSize: 20,
      source: (answersSoFar: string, input: string) =>
        choices.filter((choice) => choice.includes(input || '')),
    },
  ])
