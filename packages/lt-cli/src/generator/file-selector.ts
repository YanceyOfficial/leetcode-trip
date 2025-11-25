import { search } from '@inquirer/prompts'
import { getFileList } from './get-file-list.js'
import { validateFilename } from './validata-filename.js'

export const fileSelect = (
  dir: string,
  choices: ReturnType<typeof getFileList>,
) =>
  search({
    message: 'Select file: ',
    source: async (input) =>
      choices.filter((choice) => choice.name.includes(input || '')),
    validate: (filename) => validateFilename(dir, filename),
  })
