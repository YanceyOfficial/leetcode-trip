const { readdirSync } = require('fs')

const getFileList = (category) =>
  readdirSync(`./leetcode-docs/${category}`)
    .sort((a, b) => +a.split('-')[0] - +b.split('-')[0])
    .map((fileName) => `${category}/${fileName.replace('.md', '')}`)

module.exports = {
  leetcode: {
    Easy: getFileList('easy'),
    Medium: getFileList('medium'),
    Hard: getFileList('hard'),
    Others: getFileList('others'),
  },
}
