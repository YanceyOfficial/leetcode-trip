import { readdirSync } from 'fs'
import { srcPath } from '../shared/constants'

export const getFileList = (dirName: string) => {
  const path = `${srcPath}/${dirName}`
  return readdirSync(path).sort((a, b) => +a.split('.')[0] - +b.split('.')[0])
}
