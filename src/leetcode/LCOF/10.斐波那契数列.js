/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)
}

var fib = function (n) {
  const MOD = 1000000007
  if (n < 2) return n
  let prev = 0,
    curr = 0,
    sum = 1
  for (let i = 2; i <= n; ++i) {
    prev = curr
    curr = sum
    sum = (prev + curr) % MOD
  }
  return sum
}
