import { readdirSync } from 'fs'
import { srcPath, Category } from '../shared/constants'

const easyCount = readdirSync(`${srcPath}/${Category.Easy}`).length
const mediumCount = readdirSync(`${srcPath}/${Category.Medium}`).length
const hardCount = readdirSync(`${srcPath}/${Category.Hard}`).length
const totcal = easyCount + mediumCount + hardCount

const statistics = [
  { category: Category.Easy, conut: easyCount },
  { category: Category.Medium, conut: mediumCount },
  { category: Category.Hard, conut: hardCount },
  { category: 'Total', conut: totcal },
]

console.table(statistics)
