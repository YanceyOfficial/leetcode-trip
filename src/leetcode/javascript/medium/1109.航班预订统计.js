/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */

class DiffArray {
  diff = []

  constructor(nums) {
    this.diff[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
      this.diff[i] = nums[i] - nums[i - 1]
    }
  }

  get len() {
    return this.diff.length
  }

  increment(i, j, val) {
    this.diff[i] += val

    if (j + 1 < this.len) {
      this.diff[j + 1] -= val
    }
  }

  result() {
    const res = new Array(this.len)
    res[0] = this.diff[0]

    for (let i = 1; i < this.len; i++) {
      res[i] = this.diff[i] + res[i - 1]
    }

    return res
  }
}

var corpFlightBookings = function (bookings, n) {
  const nums = new Array(n).fill(0)
  const da = new DiffArray(nums)

  for (const booking of bookings) {
    const [first, last, seats] = booking
    da.increment(first - 1, last - 1, seats)
  }

  return da.result()
}
// @lc code=end
console.log(
  corpFlightBookings(
    [
      [1, 2, 10],
      [2, 3, 20],
      [2, 5, 25],
    ],
    5,
  ),
)
