import { cwd } from 'process'
import { readFileSync, existsSync } from 'fs'
import { parseFile } from './parseFile'

export const getFileMeta = (
  dirName: string,
  fileName: string,
  isValidate?: boolean,
) => {
  const path = `${cwd()}/src/LeetCode/${dirName}/${fileName}`
  const file = readFileSync(path, { encoding: 'utf-8' })
  const [serial, title] = fileName.split('.')
  const { functionName, functionBody } = parseFile(file)
  const outPath = `${cwd()}/leetcode-docs/${dirName.toLowerCase()}/${serial}-${functionName}.md`

  if (existsSync(outPath)) {
    return false
  }

  return isValidate
    ? true
    : { outPath, meta: { serial, title, functionName, functionBody } }
}
