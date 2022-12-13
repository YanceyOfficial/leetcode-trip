use std::cmp;

#[allow(unused)]
pub fn longest_common_subsequence(text1: String, text2: String) -> i32 {
    let text1 = text1.as_bytes();
    let text2 = text2.as_bytes();
    let m = text1.len();
    let n = text2.len();
    let mut dp = vec![vec![0; n + 1]; m + 1];

    for i in 1..=m {
        let char1 = text1[i - 1];
        for j in 1..=n {
            let char2 = text2[j - 1];

            if char1 == char2 {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = cmp::max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    dp[m][n]
}
