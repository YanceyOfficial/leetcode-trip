/**
 *
 *
 * @param {Number[]} weights 重量的数组
 * @param {Number[]} values 价值的数组
 * @param {Number} w 背包能装多少重量
 * @returns
 */
function knapsack(weights, values, w) {
  let n = weights.length - 1 // 获取物品个数
  let f = [[]] // 定义 f 的矩阵
  for (let j = 0; j <= w; j++) {
    if (j < weights[0]) {
      // 容量装不下物品 0 的重量，价值为 0
      f[0][j] = 0
    } else {
      f[0][j] = values[0] // 否则容量为物品 0 的价值
    }
  }
  for (let j = 0; j <= w; j++) {
    for (let i = 1; i <= n; i++) {
      if (!f[i]) {
        // 创建新的一行
        f[i] = []
      }
      if (j < weights[i]) {
        // 等于之前的最优值
        f[i][j] = f[i - 1][j]
      } else {
        f[i][j] = Math.max(f[i - 1][j], f[i - 1][j - weights[i]] + values[i])
      }
    }
  }
  return f[n][w]
}
