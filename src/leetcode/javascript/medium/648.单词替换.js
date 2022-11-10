/*
 * @lc app=leetcode.cn id=648 lang=javascript
 *
 * [648] 单词替换
 */

// @lc code=start
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  const trie = new Trie()
  const words = sentence.split(' ')
  for (const root of dictionary) {
    trie.insert(root)
  }

  for (let i = 0; i < words.length; i++) {
    words[i] = trie.getPrefix(words[i])
  }

  return words.join(' ')
}

class Trie {
  constructor() {
    this.children = {}
  }

  insert(word) {
    let node = this.children

    for (const ch of word) {
      if (!node[ch]) {
        node[ch] = {}
      }
      node = node[ch]
    }
    node.isEnd = true
  }

  search(word) {
    let node = this.searchPrefix(word)
    return !!node && node.isEnd
  }

  searchPrefix = function (prefix) {
    let node = this.children
    for (const ch of prefix) {
      if (!node[ch]) {
        return null
      }
      node = node[ch]
    }
    return node
  }

  getPrefix(word) {
    let str = ''
    for (let i = 0; i < word.length; i++) {
      str += word[i]
      if (this.search(str)) return str
    }
    return word
  }
}
// @lc code=end
console.log(
  replaceWords(['cat', 'bat', 'rat'], 'the cattle was rattled by the battery'),
)
