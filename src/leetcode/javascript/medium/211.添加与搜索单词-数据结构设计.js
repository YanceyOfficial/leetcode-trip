/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start
var WordDictionary = function () {
  this.root = {}
}

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root
  for (const ch of word) {
    if (!node[ch]) {
      node[ch] = {}
    }

    node = node[ch]
  }

  node.isEnd = true
}

/**
 * 返回数据结构中是否存在给定的单词
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return this.dfs(word, 0, this.root)
}

/**
 * 深度优先搜索辅助函数
 * @param {string} word - 要搜索的单词
 * @param {number} idx - 当前处理的字符索引
 * @param {Object} node - 当前节点
 * @return {boolean}
 */
WordDictionary.prototype.dfs = function (word, idx, node) {
  // 如果已经处理完所有字符, 检查当前节点是否是单词结束
  if (idx === word.length) {
    return !!node.isEnd
  }

  const ch = word[idx]

  // 如果当前字符是通配符 '.'
  if (ch === '.') {
    // 尝试所有可能的字符
    for (const key in node) {
      if (key !== 'isEnd' && this.dfs(word, idx + 1, node[key])) {
        return true
      }
    }
    return false
  }
  // 如果是普通字符
  else {
    // 如果当前字符不存在于节点中, 返回 false
    if (!node[ch]) {
      return false
    }

    // 继续搜索下一个字符
    return this.dfs(word, idx + 1, node[ch])
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end
