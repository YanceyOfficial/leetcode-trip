import { existsSync } from 'fs'
import { getFileMeta } from './get-file-meta'

export const validateFilename = (dir: string, filename: string) => {
  const { outPath } = getFileMeta(dir, filename)

  if (existsSync(outPath)) {
    return '文件已存在, 请重新选择.'
  }

  return true
}
