use std::{cmp, i32::MAX};

#[allow(unused)]
pub fn min_cut(s: String) -> i32 {
    let n = s.len();
    let s = s
        .chars()
        .enumerate()
        .fold(Vec::with_capacity(n), |mut s, (i, v)| {
            s.push(v.to_string());
            s
        });

    let mut is_palindrome = vec![vec![false; n]; n];
    for i in 0..n {
        for j in 0..=i {
            if i == j
                || i - j == 1 && s[i] == s[j]
                || i - j > 1 && s[i] == s[j] && is_palindrome[j + 1][i - 1]
            {
                is_palindrome[j][i] = true;
            } else {
                is_palindrome[j][i] = false;
            }
        }
    }

    let mut dp = vec![MAX; n];
    dp[0] = 0;
    for i in 1..n {
        if is_palindrome[0][i] {
            dp[i] = 0 as i32;
        } else {
            for j in 1..=i {
                if is_palindrome[j][i] {
                    dp[i] = cmp::min(dp[i], dp[j - 1] + 1);
                }
            }
        }
    }

    dp[n - 1]
}
