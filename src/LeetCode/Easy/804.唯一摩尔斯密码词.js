/*
 * @lc app=leetcode.cn id=804 lang=javascript
 *
 * [804] 唯一摩尔斯密码词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const morses = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ]

  const len = words.length
  const set = new Set()

  for (let i = 0; i < len; i++) {
    const item = words[i]
    let translation = ''
    for (let j = 0; j < item.length; j++) {
      translation += morses[item[j].charCodeAt() - 97]
    }
    set.add(translation)
  }

  return set.size
}
// @lc code=end
