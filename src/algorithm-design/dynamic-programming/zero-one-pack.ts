/**
 * @param {Number[]} wt 物品重量列表
 * @param {Number[]} val 物品价值列表
 * @param {Number} W 背包能装多少重量
 * @param {Number} N 背包能装多少个商品
 * @returns
 */
export function knapsack(W: number, N: number, wt: number[], val: number[]) {
  const dp: number[][] = []
  for (let j = 0; j <= N; j++) {
    dp.push(new Array(W + 1).fill(0))
  }

  for (let i = 1; i <= N; i++) {
    for (let w = 1; w <= W; w++) {
      if (w - wt[i - 1] < 0) {
        // 当前背包容量装不下,只能选择不装入背包
        dp[i][w] = dp[i - 1][w]
      } else {
        // 装入或者不装入背包, 择优
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - wt[i - 1]] + val[i - 1])
      }
    }
  }

  console.log(dp)
  return dp[N][W]
}

console.log(knapsack(4, 3, [2, 1, 3], [4, 2, 3]))
