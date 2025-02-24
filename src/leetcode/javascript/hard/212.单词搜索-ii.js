/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */

// @lc code=start
/**
 * @param {chacter[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const trie = buildTrie(words)
  const result = []
  const m = board.length
  const n = board[0].length
  const visited = new Array(m).fill(false).map(() => new Array(n).fill(false))

  const dfs = (i, j, word, node) => {
    if (
      i < 0 ||
      i >= m ||
      j < 0 ||
      j >= n ||
      !node[board[i][j]] ||
      visited[i][j]
    ) {
      return
    }

    const ch = board[i][j]
    node = node[ch]
    word += ch

    if (node.isWord) {
      result.push(word)
      node.isWord = false
    }

    visited[i][j] = true
    dfs(i - 1, j, word, node)
    dfs(i + 1, j, word, node)
    dfs(i, j - 1, word, node)
    dfs(i, j + 1, word, node)
    visited[i][j] = false
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dfs(i, j, '', trie)
    }
  }

  return result
}

var buildTrie = function (words) {
  const root = {}
  for (const word of words) {
    let node = root
    for (const ch of word) {
      if (!node[ch]) {
        node[ch] = {}
      }
      node = node[ch]
    }
    node.isWord = true
  }
  return root
}
// @lc code=end
