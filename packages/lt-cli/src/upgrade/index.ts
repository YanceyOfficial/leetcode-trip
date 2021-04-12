import childProcess from 'child_process'
import ora from 'ora'
import { needUpgrade } from '../shared/get-latest-version'

function execPromise(command: string) {
  return new Promise((resolve, reject) => {
    childProcess.exec(command, (error, stdout) => {
      if (error) {
        reject(error)
        return
      }

      resolve(stdout.trim())
    })
  })
}

export const upgrade = async (shell: string, currVersion: string) => {
  const searchSpinner = ora('正在检索最新版本...').start()
  const shouldUpgrade = await needUpgrade(currVersion)
  searchSpinner.stop()

  if (shouldUpgrade) {
    const upgradeSpinner = ora('正在升级...').start()
    await execPromise(shell)
    upgradeSpinner.stop()
    ora().succeed('升级成功!')
  }
}
