/* eslint-disable camelcase */
import fetch from 'node-fetch'
import compareVersions from 'compare-versions'
import chalk from 'chalk'
import packages from '../../package.json'
import { tagsAPI } from './constants'

interface Tag {
  name: string
  zipball_url: string
  tarball_url: string
  commit: {
    sha: string
    url: string
  }
  node_id: string
}

export const getLatestVersion = async () => {
  const res = await fetch(tagsAPI)
  const data: Tag[] = await res.json()

  const versionMatcher = data[0].name.match(/\d+\.\d+\.\d+/g)

  if (versionMatcher) {
    return versionMatcher[0]
  }

  return ''
}

export const needUpgrade = async () => {
  const latestVersion = await getLatestVersion()
  const currVersion = packages.version

  const shouldUpgrade = compareVersions(latestVersion, currVersion) === 1

  if (shouldUpgrade) {
    console.log(
      chalk.red(
        `\n最新版本为 v${latestVersion}, 你的版本 v${currVersion} 已落后, 正在升级中.`,
      ),
    )
  } else {
    console.log(chalk.green(`已经是最新版本 v${latestVersion}, 无需升级.`))
  }

  return shouldUpgrade
}
