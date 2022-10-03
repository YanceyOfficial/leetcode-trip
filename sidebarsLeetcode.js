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
    '剑指 Offer': getFiles('lcof'),
    '剑指 Offer 专项突击版': getFiles('lcof-v2'),
    Others: getFiles('others'),
  },
}
