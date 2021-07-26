function shooting(score, times) {
  if (score < 0 || score > 10 * times) {
    // 不可能的情况
    return 0
  }
  if (score === 0 && times === 0) {
    // 结束递归
    return 1
  }

  let ans = 0
  for (let i = 0; i <= 10; i++) {
    ans += shooting(score - i, times - 1)
  }

  return ans
}

console.log(shooting(90, 10))
