// 最朴素的 fibonacci 递归
export const fibonacci1 = (n: number) => {
  if (n === 0 || n === 1) return n
  return fibonacci1(n - 1) + fibonacci1(n - 2)
}

const memoize = (fn: Function) => {
  const cache = {}
  return (...args: number[]) => {
    const n = args[0]
    if (n in cache) {
      return cache[n]
    }

    const result = fn(n)
    cache[n] = result
    return result
  }
}

// 带备忘录的 fibonacci
export const fibonacci2 = memoize((n: number) => {
  if (n === 0 || n === 1) return n
  return fibonacci2(n - 1) + fibonacci2(n - 2)
})

// 迭代版, 自底而上的, 具有动态规划雏形的 fibonacci
export const fibonacci3 = (n: number) => {
  const dp = new Array(n + 1).fill(0)
  dp[1] = 1

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}

// 迭代版, 自底而上的 fibonacci
// 由于求 n 的 fibonacci, 只关心 n 的前两个状态, 因此只要存储前两个即可
export function fibonacci4(n: number) {
  if (n <= 1) return n

  let prev = 0
  let curr = 1

  for (let i = 2; i <= n; i++) {
    const sum = prev + curr
    prev = curr
    curr = sum
  }
  return curr
}

// console.log(fibonacci1(100))
// console.log(fibonacci2(100))
console.log(fibonacci3(100))
