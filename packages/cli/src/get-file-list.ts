import { cwd } from 'process'
import { readdirSync } from 'fs'

export const getFileList = (dirName: string) => {
  const path = `${cwd()}/src/LeetCode/${dirName}`
  return readdirSync(path).sort((a, b) => +a.split('.')[0] - +b.split('.')[0])
}
