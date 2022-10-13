import chalk from 'chalk'
import clear from 'clear'
import figlet from 'figlet'
import { dirSelect } from './dir-selector'
import { getFileList } from './get-file-list'
import { fileSelect } from './file-selector'
import { generateFile } from './generate-file'

export const bootstrap = async () => {
  clear()

  console.log(
    chalk.blue(
      figlet.textSync('LEETCODE TRIP', {
        horizontalLayout: 'default',
        verticalLayout: 'default',
      }),
    ),
  )
  const { dir } = await dirSelect()
  const files = getFileList(dir)
  const { file } = await fileSelect(dir, files)

  await generateFile(dir, file)
}
