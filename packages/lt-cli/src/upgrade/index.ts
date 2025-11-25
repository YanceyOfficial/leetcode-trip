import { execa } from 'execa'
import chalk from 'chalk'
import ora from 'ora'
import { needUpgrade } from '../shared/get-latest-version.js'

const execCommand = async () => {
  const upgradeSpinner = ora('Upgrading...').start()
  try {
    await execa(
      'pnpm',
      ['install', '@yancey-inc/lt-cli@latest', '-g', '--verbose'],
      {
        stdio: 'inherit',
      },
    )
    ora().succeed('Upgrade successful!')
  } catch (e) {
    console.log(chalk.red(e instanceof Error ? e.message : 'Unknown Error'))
  } finally {
    upgradeSpinner.stop()
  }
}

export const upgrade = async (currVersion: string) => {
  const searchSpinner = ora('Checking for latest version...').start()
  const shouldUpgrade = await needUpgrade(currVersion)
  searchSpinner.stop()

  if (shouldUpgrade) {
    await execCommand()
  }
}
