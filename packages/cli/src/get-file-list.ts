import { cwd } from 'process'
import { readdirSync } from 'fs'

export const getFileList = (dirPath: string) => {
  const path = `${cwd()}/src/LeetCode/${dirPath}`
  return readdirSync(path).sort((a, b) => +a.split('.')[0] - +b.split('.')[0])
}
