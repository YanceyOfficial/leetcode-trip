function minCoinChange(coins) {
  return function (amount) {
    let total = 0,
      change = []
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
