export function factorial(num: number) {
  let total = 1

  for (let n = num; n > 1; n -= 1) {
    if (n > 1) {
      total *= n
    }
  }
  return total
}

export function factorial1(num: number) {
  if (num === 1 || num === 0) {
    // 基线条件
    return 1
  }
  return num * factorial(num - 1)
}
