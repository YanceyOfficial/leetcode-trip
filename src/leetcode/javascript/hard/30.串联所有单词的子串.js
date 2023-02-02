/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const m = s.length
  const n = words.length
  const w = words[0].length

  const map = new Map()
  for (const word of words) {
    map.set(word, map.has(word) ? map.get(word) + 1 : 1)
  }

  const res = []
  for (let i = 0; i < m; i++) {
    const end = i + n * w
    if (end > m) break

    const subStr = s.slice(i, end)
    const subMap = new Map()
    for (let j = 0; j < n * w; i += w) {
      const sub = subStr.slice(j, j + w)
      if (!words.includes(sub)) break
      subMap.set(sub, subMap.has(sub) ? subMap.get(sub) + 1 : 1)
    }

    if (isEqual(map, subMap)) {
      res.push(i)
    }
  }

  return res
}

/**
 * @param {Map} map1
 * @param {Map} map2
 * @return {boolean}
 */
var isEqual = function (map1, map2) {
  for (const key of map1.keys()) {
    if (map1.get(key) !== map2.get(key)) return false
  }

  return true
}
// @lc code=end

console.log(findSubstring('barfoothefoobarman', ['foo', 'bar']))
console.log(
  findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word']),
)
console.log(findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the']))
