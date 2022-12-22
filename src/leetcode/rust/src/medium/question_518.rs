#[allow(unused)]
pub fn change(amount: i32, coins: Vec<i32>) -> i32 {
    let n = (amount + 1) as usize;
    let mut dp = vec![0; n];
    dp[0] = 1;

    for coin in coins {
        for i in (coin as usize)..n {
            dp[i] += dp[i - coin as usize];
        }
    }

    dp[amount as usize]
}
