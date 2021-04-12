/* eslint-disable prefer-rest-params */
export function fibonacci(n: number) {
  if (n <= 1) {
    return n
  }
  if (n === 2) {
    return 1
  }

  let current = 0
  let prev1 = 1
  let prev2 = 1

  for (let i = 3; i <= n; i++) {
    current = prev1 + prev2
    prev2 = prev1
    prev1 = current
  }
  return current
}

export function memorize(f: Function) {
  const cache = {}
  return () => {
    const key = Array.prototype.join.call(arguments, ',')
    if (key in cache) {
      return cache[key]
    }
    // eslint-disable-next-line no-return-assign
    return (cache[key] = f.apply(this, arguments))
  }
}

export function fibonacci1(n: number) {
  if (n === 0 || n === 1) return n
  return fibonacci1(n - 1) + fibonacci1(n - 2)
}
