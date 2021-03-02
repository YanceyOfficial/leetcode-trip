import fs from 'fs'
import process from 'process'

const leetCodePath = `${process.cwd()}/src/LeetCode`
const easyCount = fs.readdirSync(`${leetCodePath}/Easy`).length
const mediumCount = fs.readdirSync(`${leetCodePath}/Medium`).length
const hardCount = fs.readdirSync(`${leetCodePath}/Hard`).length

const statistics = [
  { category: 'Easy', conut: easyCount },
  { category: 'Medium', conut: mediumCount },
  { category: 'Hard', conut: hardCount },
  { category: 'Total', conut: easyCount + mediumCount + hardCount },
]

console.table(statistics)
