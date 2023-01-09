#[allow(unused)]
pub fn is_match(s: String, p: String) -> bool {
    let (s_bytes, p_bytes) = (s.as_bytes(), p.as_bytes());
    let (m, n) = (s.len(), p.len());
    let mut dp = vec![vec![false; n + 1]; m + 1];
    dp[0][0] = true;
    for j in 1..=n {
        if p_bytes[j - 1] == b'*' {
            dp[0][j] = dp[0][j - 2];
        }
    }

    for i in 1..=m {
        for j in 1..=n {
            if s_bytes[i - 1] == p_bytes[j - 1] || p_bytes[j - 1] == b'.' {
                dp[i][j] = dp[i - 1][j - 1];
            } else if p_bytes[j - 1] == b'*' {
                if s_bytes[i - 1] == p_bytes[j - 2] || p_bytes[j - 2] == b'.' {
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j];
                } else {
                    dp[i][j] = dp[i][j - 2];
                }
            }
        }
    }

    dp[m][n]
}
