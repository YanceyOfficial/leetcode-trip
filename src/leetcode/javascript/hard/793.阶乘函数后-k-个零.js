/*
 * @lc app=leetcode.cn id=793 lang=javascript
 *
 * [793] 阶乘函数后 K 个零
 */

// @lc code=start
/**
 * @param {number} K
 * @return {number}
 */
var preimageSizeFZF = function (K) {
  return rightBound(K) - leftBound(K) + 1
}

var leftBound = function (K) {
  let lo = 0,
    hi = Number.MAX_VALUE
  while (lo < hi) {
    let mid = lo + (hi - lo) / 2
    if (trailingZeroes(mid) < K) {
      lo = mid + 1
    } else if (trailingZeroes(mid) > K) {
      hi = mid
    } else {
      hi = mid
    }
  }

  return lo
}

var rightBound = function (K) {
  let lo = 0,
    hi = Number.MAX_VALUE
  while (lo < hi) {
    let mid = lo + (hi - lo) / 2
    if (trailingZeroes(mid) < K) {
      lo = mid + 1
    } else if (trailingZeroes(mid) > K) {
      hi = mid
    } else {
      lo = mid + 1
    }
  }

  return lo - 1
}

var trailingZeroes = function (n) {
  let total = 0
  while (n >= 5) {
    n = Math.floor(n / 5)
    total += n
  }

  return total
}
// @lc code=end
