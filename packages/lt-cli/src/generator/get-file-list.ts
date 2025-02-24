import { readdirSync } from 'fs'
import { javascriptPath } from '../shared/constants'

export const getFileList = (dirName: string) =>
  readdirSync(`${javascriptPath}/${dirName}`)
    .sort((a, b) => +a.split('.')[0] - +b.split('.')[0])
    .map((item) => ({
      name: item,
      value: item,
    }))
