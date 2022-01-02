/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  const MOD = 1000000007
  if (n === 0) return 1
  if (n < 2) return n

  let prev = 1
  let curr = 1

  for (let i = 2; i <= n; i++) {
    const sum = prev + curr
    prev = curr
    curr = sum % MOD
  }
  return curr
}
