// Brian Kernighan 算法
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const bits = new Array(n).fill(0)

  for (let i = 0; i <= n; i++) {
    bits[i] = computeZero(i)
  }

  return bits
}

var computeZero = function (n) {
  let count = 0
  while (n > 0) {
    n = n & (n - 1)
    count += 1
  }

  return count
}

// 动态规划

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  const bits = new Array(n + 1).fill(0)

  for (let i = 1; i <= n; i++) {
    bits[i] = bits[i >> 1] + (i & 1)
  }

  return bits
}

console.log(countBits(5))
