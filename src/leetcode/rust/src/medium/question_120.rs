use std::cmp;

#[allow(unused)]
pub fn minimum_total(triangle: Vec<Vec<i32>>) -> i32 {
    let n = triangle.len();
    let mut dp = vec![0; n + 1];

    for i in (0..=n - 1).rev() {
        for j in 0..=i {
            dp[j] = cmp::min(dp[j], dp[j + 1]) + triangle[i][j];
        }
    }

    dp[0]
}
