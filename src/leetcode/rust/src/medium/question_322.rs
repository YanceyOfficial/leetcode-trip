use std::cmp;

#[allow(unused)]
pub fn coin_change(coins: Vec<i32>, amount: i32) -> i32 {
    let n = (amount + 1) as usize;
    let mut dp = vec![n as i32; n];
    dp[0] = 0;

    for coin in coins {
        for i in (coin as usize)..n {
            dp[i] = cmp::min(dp[i], dp[i - (coin as usize)] + 1);
        }
    }

    if dp[amount as usize] == n as i32 {
        -1
    } else {
        dp[amount as usize]
    }
}
