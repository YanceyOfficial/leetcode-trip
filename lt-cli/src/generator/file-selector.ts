import inquirer, { ChoiceOptions } from 'inquirer'
import { getFileMeta } from './get-file-meta'

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'))

export const fileSelect = (dir: string, choices: string[]) =>
  inquirer.prompt([
    {
      type: 'autocomplete',
      message: '请选择文件: ',
      name: 'file',
      pageSize: 20,
      source: (answersSoFar: string, input: string) =>
        choices.filter((choice) => choice.includes(input || '')),
      validate: (input: ChoiceOptions) =>
        getFileMeta(dir, input.name || '', true),
    },
  ])
