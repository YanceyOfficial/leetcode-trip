/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const res = []
  const map = new Map()
  for (const num of arr1) {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1)
  }

  for (const num of arr2) {
    const count = map.get(num)
    for (let i = 0; i < count; i++) {
      res.push(num)
    }
    map.delete(num)
  }

  const remainNums = []
  remainNums.forEach((v, k) => {
    for (let i = 0; i < v; i++) {
      res.push(k)
    }
  })
  remainNums.sort((a, b) => a - b)

  return [...res, ...remainNums]
}
// @lc code=end
