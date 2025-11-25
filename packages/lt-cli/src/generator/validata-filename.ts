import { existsSync } from 'fs'
import { getFileMeta } from './get-file-meta.js'

export const validateFilename = (dir: string, filename: string) => {
  const { outPath } = getFileMeta(dir, filename)

  if (existsSync(outPath)) {
    return 'File already exists, please select another.'
  }

  return true
}
