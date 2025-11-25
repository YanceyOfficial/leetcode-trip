import { readFileSync } from 'fs'
import { parseFile } from './parse-file.js'
import { javascriptPath, docPath } from '../shared/constants.js'

export const getFileMeta = (dirName: string, fileName: string) => {
  const path = `${javascriptPath}/${dirName}/${fileName}`
  const file = readFileSync(path, { encoding: 'utf-8' })
  const [serial, title] = fileName.split('.')
  const { functionName, functionBody } = parseFile(file)
  const outPath = `${docPath}/${dirName.toLowerCase()}/${serial}-${functionName}.mdx`

  return { outPath, meta: { serial, title, functionName, functionBody } }
}
