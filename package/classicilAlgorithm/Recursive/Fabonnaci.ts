/* eslint-disable */

export function fibonacci(n: number) {
  let n1 = 1
  let n2 = 1
  let sum = 1
  for (let i = 3; i <= n; i += 1) {
    sum = n1 + n2
    n1 = n2
    n2 = sum
  }
  return sum
}

function memorize(f) {
  const cache = {}
  return function() {
    const key = Array.prototype.join.call(arguments, ',')
    if (key in cache) {
      return cache[key]
    } else {
      return (cache[key] = f.apply(this, arguments))
    }
  }
}

export function fibonacci1(n: number) {
  if (n === 0 || n === 1) return n
  return fibonacci1(n - 1) + fibonacci1(n - 2)
}
