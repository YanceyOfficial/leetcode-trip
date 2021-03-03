import ora from 'ora'
import { promises } from 'fs'
import { sleep } from 'yancey-js-util'
import { getFileMeta } from './get-file-meta'
import { generateTemplate } from './template'

export const generateMarkdownFile = async (
  dirName: string,
  fileName: string,
) => {
  const fileMeta = getFileMeta(dirName, fileName)
  if (typeof fileMeta === 'boolean') return

  const {
    outPath,
    meta: { serial, title, functionBody, functionName },
  } = fileMeta

  const spinner = ora('正在创建中...').start()
  await sleep()
  await promises.writeFile(
    outPath,
    generateTemplate(serial, title, functionName, functionBody),
  )
  spinner.stop()

  ora().succeed('模版创建成功!')
}
