import { readdirSync } from 'fs'
import { srcPath, Category } from '../shared/constants'

const easyCount = readdirSync(`${srcPath}/${Category.Easy}`).length
const mediumCount = readdirSync(`${srcPath}/${Category.Medium}`).length
const hardCount = readdirSync(`${srcPath}/${Category.Hard}`).length
const totcal = easyCount + mediumCount + hardCount

const statistics = [
  { category: Category.Easy, count: easyCount },
  { category: Category.Medium, count: mediumCount },
  { category: Category.Hard, count: hardCount },
  { category: 'Total', count: totcal },
]

export const showStatistics = () => {
  console.table(statistics)
}
