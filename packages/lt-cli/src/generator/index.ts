import chalk from 'chalk'
import clear from 'clear'
import figlet from 'figlet'
import { dirSelect } from './dir-selector.js'
import { getFileList } from './get-file-list.js'
import { fileSelect } from './file-selector.js'
import { generateFile } from './generate-file.js'

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

  try {
    const dir = await dirSelect()
    const files = getFileList(dir)
    const file = await fileSelect(dir, files)

    await generateFile(dir, file)
  } catch (e) {
    if (e instanceof Error && e.name === 'ExitPromptError') {
      console.log('Goodbye~')
    }
  }
}
