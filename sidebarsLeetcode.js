const { readdirSync } = require('fs')

const getFiles = (category) =>
  readdirSync(`./leetcode-docs/${category}`)
    .sort((a, b) => +a.split('-')[0] - +b.split('-')[0])
    .map((fileName) => `${category}/${fileName.replace(/.mdx?/, '')}`)

module.exports = {
  leetcode: {
    Easy: getFiles('easy'),
    Medium: getFiles('medium'),
    Hard: getFiles('hard'),
    Others: getFiles('others'),
  },
}
