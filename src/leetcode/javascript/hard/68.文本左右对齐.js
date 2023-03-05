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
  const n = words.length
  const res = []
  let i = 0

  while (i < n) {
    const line = []

    // 贪心: 尽可能多地将 word 放到一行
    let currLineLen = words[i].length
    line.push(words[i++])
    while (
      i < n &&
      // 放入新单词时, 为保证和前一个单词隔开, 要多放一个空格
      currLineLen + 1 + words[i].length <= maxWidth
    ) {
      currLineLen += 1 + words[i].length
      line.push(words[i])
      i++
    }

    // 如果是最后一行, 左对齐, 多个 word 之间用空格隔开,
    // 并且在尾部填充空格, 直到长度等于 maxWidth, 结束后退出循环
    if (i === n) {
      const str = line.join(' ').padEnd(maxWidth)
      res.push(str)
      break
    }

    // 如果当前行只有一个单词, 左对齐,
    // 并且在尾部填充空格, 直到长度等于 maxWidth, 结束后跳出本轮循环
    if (line.length === 1) {
      const str = line[0].padEnd(maxWidth)
      res.push(str)
      continue
    }

    // 获取整体空格的长度
    const totalWordWidth = currLineLen - (line.length - 1)
    const totalSpaceWidth = maxWidth - totalWordWidth

    // 每个单词之间要尽可能的平摊空格
    // 但如果某一行单词间的空格不能均匀分配, 则左侧放置的空格数要多于右侧的空格数
    // 因此我们记录余数, 如果存在余数, 就往左侧的空间多加一个
    //
    // 比如 line = ["Science", "is", "what", "we"], maxWidth = 20
    // 平摊的空格长度为 5 / 3 向下取整为 1; 但还余出两个来, 即 carry = 2
    // 因此在 "Science" 和 "is" 之间, 以及 "is" 和 "what" 之间, 都要额外再增加一个空格
    // 即最终结果为 "Science  is  what we"
    let carry = totalSpaceWidth % (line.length - 1)
    const spaceItemWidth = (totalSpaceWidth - carry) / (line.length - 1)

    let spaceItem = ''
    for (let i = 0; i < spaceItemWidth; i++) spaceItem += ' '

    for (let i = 0; i < line.length - 1; i++) {
      if (carry > 0) {
        line[i] += spaceItem + ' '
        carry--
      } else {
        line[i] += spaceItem
      }
    }

    res.push(line.join(''))
  }

  return res
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
