import ora from 'ora'
import { writeFileSync } from 'fs'
import { sleep } from 'yancey-js-util'
import { getFileMeta } from './get-file-meta.js'
import { generateMarkdownTemplate } from './markdown-template.js'
import { generateRustTemplate } from './rust-template.js'
import { updateRustModeFile } from './update-rust-mod-file.js'
import { rustPath } from '../shared/constants.js'

export const generateFile = async (dirName: string, fileName: string) => {
  const fileMeta = getFileMeta(dirName, fileName)
  if (typeof fileMeta !== 'object') return

  const {
    outPath,
    meta: { serial, title, functionBody, functionName },
  } = fileMeta

  const spinner = ora('Creating...').start()
  await sleep()
  writeFileSync(
    outPath,
    generateMarkdownTemplate(serial, title, functionName, functionBody),
  )
  writeFileSync(
    `${rustPath}/src/${dirName}/question_${serial}.rs`,
    generateRustTemplate(),
  )
  updateRustModeFile(dirName)
  spinner.stop()
  ora().succeed('Template created successfully!')
}
