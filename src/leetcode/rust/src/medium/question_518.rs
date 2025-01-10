#[allow(unused)]
pub fn change(amount: i32, coins: Vec<i32>) -> i32 {
    let n = coins.len();
    let mut dp = vec![0; amount as usize + 1];
    dp[0] = 1;

    for i in 0..n {
        for w in (coins[i] as usize)..=(amount as usize) {
            dp[w] += dp[w - coins[i] as usize];
        }
    }

    dp[amount as usize]
}
