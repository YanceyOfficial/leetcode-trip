import { search } from '@inquirer/prompts'
import { getFileList } from './get-file-list'
import { validateFilename } from './validata-filename'

export const fileSelect = (
  dir: string,
  choices: ReturnType<typeof getFileList>,
) =>
  search({
    message: '请选择文件: ',
    source: async (input) =>
      choices.filter((choice) => choice.name.includes(input || '')),
    validate: (filename) => validateFilename(dir, filename),
  })
