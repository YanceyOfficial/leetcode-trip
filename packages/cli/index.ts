import { cwd } from 'process'
import { readFileSync, writeFileSync } from 'fs'
import { parseFile } from './parseFile'
import { generateTemplate } from './template'

const fileName = '108.将有序数组转换为二叉搜索树.js'
const inPath = `${cwd()}/src/LeetCode/Easy/${fileName}`
const fileStr = readFileSync(inPath, { encoding: 'utf-8' })

const [serial, title] = fileName.split('.')
const { functionNameStr, functionStr } = parseFile(fileStr)

const outPath = `${cwd()}/leetcode-docs/easy/${serial}-${functionNameStr}.md`

writeFileSync(
  outPath,
  generateTemplate(serial, title, functionNameStr, functionStr),
)
