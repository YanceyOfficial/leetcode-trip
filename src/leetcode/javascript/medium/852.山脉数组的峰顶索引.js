/*
 * @lc app=leetcode.cn id=852 lang=javascript
 *
 * [852] 山脉数组的峰顶索引
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  const n = arr.length
  let low = 1,
    high = n - 2,
    ans = 0

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (arr[mid] > arr[mid + 1]) {
      ans = mid
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return ans
}

// @lc code=end
console.log(peakIndexInMountainArray([0, 1, 0]))
console.log(peakIndexInMountainArray([0, 2, 1, 0]))
console.log(peakIndexInMountainArray([0, 10, 5, 2]))
console.log(peakIndexInMountainArray([3, 4, 5, 1]))
console.log(peakIndexInMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19]))
