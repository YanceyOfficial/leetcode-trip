/* eslint-disable camelcase */
import fetch from 'node-fetch'
import { compareVersions } from 'compare-versions'
import chalk from 'chalk'
import { npmAPI } from './constants.js'

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
        `\nLatest version is v${latestVersion}. Your version v${currVersion} is out-of-date and will be upgraded.`,
      ),
    )
  } else {
    console.log(chalk.green(`\nAlready the latest version v${latestVersion}, no upgrade needed.`))
  }

  return shouldUpgrade
}
