function minCoinChange(coins: number[]) {
  return function (amount: number) {
    let total = 0,
      change: number[] = []
    for (let i = coins.length; i >= 0; i--) {
      let coin = coins[i]
      while (total + coin <= amount) {
        change.push(coin)
        total += coin
      }
    }
    return change
  }
}
