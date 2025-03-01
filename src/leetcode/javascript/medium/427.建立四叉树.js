/*
 * @lc app=leetcode.cn id=427 lang=javascript
 *
 * [427] 建立四叉树
 */

// @lc code=start
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 * this.val = val;
 * this.isLeaf = isLeaf;
 * this.topLeft = topLeft;
 * this.topRight = topRight;
 * this.bottomLeft = bottomLeft;
 * this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
  const buildQuadTree = (grid, rowStart, rowEnd, colStart, colEnd) => {
    let isSame = true
    const val = grid[rowStart][colStart]

    for (let i = rowStart; i < rowEnd; i++) {
      for (let j = colStart; j < colEnd; j++) {
        if (grid[i][j] !== val) {
          isSame = false
          break
        }
      }
      if (!isSame) {
        break
      }
    }

    if (isSame) {
      return new Node(val === 1, true, null, null, null, null)
    }

    const rowMid = Math.floor((rowStart + rowEnd) / 2)
    const colMid = Math.floor((colStart + colEnd) / 2)

    const topLeft = buildQuadTree(grid, rowStart, rowMid, colStart, colMid)
    const topRight = buildQuadTree(grid, rowStart, rowMid, colMid, colEnd)
    const bottomLeft = buildQuadTree(grid, rowMid, rowEnd, colStart, colMid)
    const bottomRight = buildQuadTree(grid, rowMid, rowEnd, colMid, colEnd)

    return new Node(true, false, topLeft, topRight, bottomLeft, bottomRight)
  }

  return buildQuadTree(grid, 0, grid.length, 0, grid[0].length)
}
// @lc code=end
