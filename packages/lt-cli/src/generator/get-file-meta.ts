import { readFileSync, existsSync } from 'fs'
import { parseFile } from './parse-file'
import { srcPath, docPath } from '../shared/constants'

export const getFileMeta = (
  dirName: string,
  fileName: string,
  isValidate?: boolean,
) => {
  const path = `${srcPath}/${dirName}/${fileName}`
  const file = readFileSync(path, { encoding: 'utf-8' })
  const [serial, title] = fileName.split('.')
  const { functionName, functionBody } = parseFile(file)
  const outPath = `${docPath}/${dirName.toLowerCase()}/${serial}-${functionName}.mdx`

  if (existsSync(outPath)) {
    return '文件已存在, 请重新选择.'
  }

  return isValidate
    ? true
    : { outPath, meta: { serial, title, functionName, functionBody } }
}
