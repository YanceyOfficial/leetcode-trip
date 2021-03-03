import ora from 'ora'
import { writeFileSync } from 'fs'
import { getFileMeta } from './get-file-meta'
import { generateTemplate } from './template'

export const generateMarkdownFile = (dirName: string, fileName: string) => {
  const fileMeta = getFileMeta(dirName, fileName)
  if (typeof fileMeta === 'boolean') return

  const {
    outPath,
    meta: { serial, title, functionBody, functionName },
  } = fileMeta

  writeFileSync(
    outPath,
    generateTemplate(serial, title, functionName, functionBody),
  )

  ora().succeed('模版创建成功!')
}
