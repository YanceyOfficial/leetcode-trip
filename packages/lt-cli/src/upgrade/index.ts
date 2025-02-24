import { execa } from 'execa'
import chalk from 'chalk'
import ora from 'ora'
import { needUpgrade } from '../shared/get-latest-version'

const execCommand = async () => {
  const upgradeSpinner = ora('正在升级...').start()
  try {
    await execa(
      'pnpm',
      ['install', '@yancey-inc/lt-cli@latest', '-g', '--verbose'],
      {
        stdio: 'inherit',
      },
    )
    ora().succeed('升级成功!')
  } catch (e) {
    console.log(chalk.red(e instanceof Error ? e.message : 'Unknown Error'))
  } finally {
    upgradeSpinner.stop()
  }
}

export const upgrade = async (currVersion: string) => {
  const searchSpinner = ora('正在检索最新版本...').start()
  const shouldUpgrade = await needUpgrade(currVersion)
  searchSpinner.stop()

  if (shouldUpgrade) {
    await execCommand()
  }
}
