/*
 * @lc app=leetcode.cn id=611 lang=javascript
 *
 * [611] 有效三角形的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  let res = 0
  const n = nums.length
  if (n < 3) return res
  nums.sort((a, b) => a - b)

  for (let i = n - 1; i >= 2; i--) {
    const tail = nums[i]
    let j = 0,
      k = i - 1

    while (j < k) {
      if (nums[j] + nums[k] > tail) {
        res += k - j
        k--
      } else {
        j++
      }
    }
  }
  return res
}
// @lc code=end
// var triangleNumber = function (nums) {
//   let res = 0
//   const n = nums.length
//   if (n < 3) return res
//   nums.sort((a, b) => a - b)
//   const visited = new Array(n).fill(false)

//   const dfs = (track, begin) => {
//     if (track.length === 3) {
//       if (track[0] + track[1] > track[2]) {
//         res++
//       }
//       return
//     }

//     for (let i = begin; i < n; i++) {
//       if (!visited[i]) {
//         track.push(nums[i])
//         visited[i] = true
//         dfs(track.slice(), i)
//         track.pop()
//         visited[i] = false
//       }
//     }
//   }

//   dfs([], 0)
//   return res
// }
