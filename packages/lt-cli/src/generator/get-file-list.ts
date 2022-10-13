import { readdirSync } from 'fs'
import { javascriptPath } from '../shared/constants'

export const getFileList = (dirName: string) => {
  const path = `${javascriptPath}/${dirName}`
  return readdirSync(path).sort((a, b) => +a.split('.')[0] - +b.split('.')[0])
}
