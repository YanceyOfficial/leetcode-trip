/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (x === 1 || n === 0) return 1
  if (n < 0) return 1 / helper(x, Math.abs(n))
  if (n > 0) return helper(x, n)
}

var helper = function (x, n) {
  if (n === 1) return x

  if (n % 2 === 1) {
    const half = helper(x, (n - (n % 2)) / 2)
    return x * half * half
  } else {
    const half = helper(x, n / 2)
    return half * half
  }
}
