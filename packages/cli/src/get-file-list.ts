import { cwd } from 'process'
import { readdirSync } from 'fs'

export const getFileList = (dirPath: string) => {
  const path = `${cwd()}/src/LeetCode/${dirPath}`
  // TODO: sort
  return readdirSync(path)
}
