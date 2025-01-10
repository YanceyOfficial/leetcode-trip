use std::cmp;

#[allow(unused)]
pub fn coin_change(coins: Vec<i32>, amount: i32) -> i32 {
    let n = coins.len();
    let mut dp = vec![amount + 1; (amount + 1) as usize];
    dp[0] = 0;

    for i in 0..n {
        for w in (coins[i] as usize)..=(amount as usize) {
            dp[w] = cmp::min(dp[w], dp[w - (coins[i] as usize)] + 1);
        }
    }

    if dp[amount as usize] == amount + 1 {
        -1
    } else {
        dp[amount as usize]
    }
}
