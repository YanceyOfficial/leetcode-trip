use std::cmp;

#[allow(unused)]
pub fn longest_common_subsequence(text1: String, text2: String) -> i32 {
    let m: usize = text1.len();
    let n = text2.len();
    let mut dp = vec![vec![0; n + 1]; m + 1];

    for i in 1..=m {
        for j in 1..=n {
            if &text1[i - 1..i] == &text2[j - 1..j] {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = cmp::max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    dp[m][n]
}
