#[allow(unused)]
pub fn is_match(s: String, p: String) -> bool {
    let (n1, n2) = (s.len(), p.len());
    let (s, p) = (s.as_bytes(), p.as_bytes());
    let mut dp = vec![vec![false; n2 + 1]; n1 + 1];

    dp[0][0] = true;
    for i in 1..=n2 {
        match p[i - 1] == b'*' {
            true => dp[0][i] = true,
            false => break,
        }
    }

    for i in 1..=n1 {
        for j in 1..=n2 {
            if s[i - 1] == p[j - 1] || p[j - 1] == b'?' {
                dp[i][j] = dp[i - 1][j - 1];
            } else if p[j - 1] == b'*' {
                dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
            }
        }
    }

    dp[n1][n2]
}
