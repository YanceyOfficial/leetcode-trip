import { cwd } from 'process'
import { readFileSync, writeFileSync, existsSync } from 'fs'
import { parseFile } from './parseFile'
import { generateTemplate } from './template'

export const generateMarkdownFile = (dirPath: string, fileName: string) => {
  const path = `${cwd()}/src/LeetCode/${dirPath}/${fileName}`

  // TODO:
  if (existsSync(path)) return

  const fileStr = readFileSync(path, { encoding: 'utf-8' })
  const [serial, title] = fileName.split('.')
  const { functionNameStr, functionStr } = parseFile(fileStr)

  const outPath = `${cwd()}/leetcode-docs/${dirPath.toLowerCase()}/${serial}-${functionNameStr}.md`

  writeFileSync(
    outPath,
    generateTemplate(serial, title, functionNameStr, functionStr),
  )
}
