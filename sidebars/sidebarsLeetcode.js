const { readdirSync } = require('fs')

const getFiles = (category) =>
  readdirSync(`./leetcode-docs/${category}`)
    .sort((a, b) => +a.split('-')[0] - +b.split('-')[0])
    .map((fileName) => `${category}/${fileName.replace(/.mdx?/, '')}`)

const easy = getFiles('easy')
const medium = getFiles('medium')
const hard = getFiles('hard')
const lcof = getFiles('lcof')
const others = getFiles('others')

module.exports = {
  leetcode: {
    [`Easy (${easy.length})`]: easy,
    [`Medium (${medium.length})`]: medium,
    [`Hard (${hard.length})`]: hard,
    [`剑指 Offer (${lcof.length})`]: lcof,
    [`Others (${others.length})`]: others,
  },
}
