import ora from 'ora'
import { writeFileSync } from 'fs'
import { sleep } from 'yancey-js-util'
import { getFileMeta } from './get-file-meta'
import { generateMarkdownTemplate } from './markdown-template'
import { generateRustTemplate } from './rust-template'
import { updateRustModeFile } from './update-rust-mod-file'
import { rustPath } from '../shared/constants'

export const generateFile = async (dirName: string, fileName: string) => {
  const fileMeta = getFileMeta(dirName, fileName)
  console.log(dirName, fileName,fileMeta)
  if (typeof fileMeta !== 'object') return

  const {
    outPath,
    meta: { serial, title, functionBody, functionName },
  } = fileMeta

  const spinner = ora('正在创建中...').start()
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
  ora().succeed('模版创建成功!')
}
