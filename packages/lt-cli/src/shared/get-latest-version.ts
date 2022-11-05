/* eslint-disable camelcase */
import fetch from 'node-fetch'
import { compareVersions } from 'compare-versions'
import chalk from 'chalk'
import { npmAPI } from './constants'

interface Tag {
  'dist-tags': {
    latest: string
  }
}

export const getLatestVersion = async () => {
  const res = await fetch(npmAPI)
  const data = (await res.json()) as Tag
  const { latest } = data['dist-tags']

  return latest
}

export const needUpgrade = async (currVersion: string) => {
  const latestVersion = await getLatestVersion()
  const shouldUpgrade = compareVersions(latestVersion, currVersion) === 1

  if (shouldUpgrade) {
    console.log(
      chalk.red(
        `\n最新版本为 v${latestVersion}, 你的版本 v${currVersion} 已落后, 正在升级中.`,
      ),
    )
  } else {
    console.log(chalk.green(`\n已经是最新版本 v${latestVersion}, 无需升级.`))
  }

  return shouldUpgrade
}
