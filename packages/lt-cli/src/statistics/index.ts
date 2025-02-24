import { readdirSync } from 'fs'
import { javascriptPath, Category } from '../shared/constants'

const easyCount = readdirSync(`${javascriptPath}/${Category.Easy}`).length
const mediumCount = readdirSync(`${javascriptPath}/${Category.Medium}`).length
const hardCount = readdirSync(`${javascriptPath}/${Category.Hard}`).length
const total = easyCount + mediumCount + hardCount

const statistics = [
  { category: Category.Easy, count: easyCount },
  { category: Category.Medium, count: mediumCount },
  { category: Category.Hard, count: hardCount },
  { category: 'Total', count: total },
]

export const showStatistics = () => {
  console.table(statistics)
}
