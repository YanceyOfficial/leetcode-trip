/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  const result = []
  let line = []
  let lineLength = 0

  for (const word of words) {
    if (line.length + lineLength + word.length > maxWidth) {
      if (line.length === 1) {
        result.push(line[0] + ' '.repeat(maxWidth - lineLength))
      } else {
        const totalSpaces = maxWidth - lineLength
        const gap = line.length - 1
        const baseSpaces = Math.floor(totalSpaces / gap)
        let extraSpaces = totalSpaces % gap

        for (let i = 0; i < gap; i++) {
          line[i] += ' '.repeat(baseSpaces + (extraSpaces > 0 ? 1 : 0))
          extraSpaces--
        }
        result.push(line.join(''))
      }

      line = [word]
      lineLength = word.length
    } else {
      line.push(word)
      lineLength += word.length
    }
  }

  // 说明还有最后一行
  if (lineLength > 0) {
    const text = line.join(' ')
    result.push(text + ' '.repeat(maxWidth - text.length))
  }

  return result
}
// @lc code=end

console.log(
  fullJustify(
    [
      'Science',
      'is',
      'what',
      'we',
      'understand',
      'well',
      'enough',
      'to',
      'explain',
      'to',
      'a',
      'computer.',
      'Art',
      'is',
      'everything',
      'else',
      'we',
      'do',
    ],
    20,
  ),
)
