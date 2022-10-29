/*
 * @lc app=leetcode.cn id=676 lang=javascript
 *
 * [676] 实现一个魔法字典
 */

// @lc code=start

/**
 * Initialize your data structure here.
 */
var MagicDictionary = function () {
  this.map = new Map()
}

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
  for (const d of dictionary) {
    const n = d.length
    if (this.map.has(n)) {
      this.map.set(n, [...this.map.get(n), d])
    } else {
      this.map.set(n, [d])
    }
  }
}

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
  const n = searchWord.length
  if (!this.map.has(n)) return false

  const equalLengthWords = this.map.get(n).filter((d) => d !== searchWord)

  if (equalLengthWords.length === 0) return false

  for (const d of equalLengthWords) {
    let valid = false

    for (let i = 0; i < n; i++) {
      if (d[i] !== searchWord[i]) {
        if (valid) {
          valid = false
          break
        } else {
          valid = true
        }
      }
    }

    if (valid) return true
  }

  return false
}

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
// @lc code=end
