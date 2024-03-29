#[allow(unused)]
pub fn unique_paths(m: i32, n: i32) -> i32 {
    let m = m as usize;
    let n = n as usize;
    let mut dp = vec![1; n];

    for i in 1..m {
        for j in 1..n {
            dp[j] = dp[j - 1] + dp[j]
        }
    }

    dp[n - 1]
}
