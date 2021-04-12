export function minCoinChange(coins: number[]) {
  return (amount: number) => {
    let total = 0
    const change: number[] = []
    for (let i = coins.length; i >= 0; i--) {
      const coin = coins[i]
      while (total + coin <= amount) {
        change.push(coin)
        total += coin
      }
    }
    return change
  }
}
