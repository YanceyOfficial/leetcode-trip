import { readdirSync, writeFileSync } from 'fs'
import { rustPath } from '../shared/constants'

export const updateRustModeFile = (dirName: string) => {
  const files = readdirSync(`${rustPath}/src/${dirName}`)
  const modFiles = files
    .filter((file) => file !== 'mod.rs')
    .map((file) => `pub mod ${file.replace('.rs', '')};`)
  writeFileSync(`${rustPath}/src/${dirName}/mod.rs`, modFiles.join('\n'))
}
