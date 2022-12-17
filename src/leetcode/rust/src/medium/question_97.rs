#[allow(unused)]
pub fn is_interleave(s1: String, s2: String, s3: String) -> bool {
    let (s1, s2, s3) = (s1.as_bytes(), s2.as_bytes(), s3.as_bytes());
    let (n1, n2, n3) = (s1.len(), s2.len(), s3.len());
    if n1 + n2 != n3 { return false; }


    let mut dp = vec![vec![false; n2 + 1]; n1 + 1];
    dp[0][0] = true;

    for i in 1..=n1 {
        match s1[i - 1] == s3[i - 1] {
            true => dp[i][0] = true,
            false => break,
        }
    }

    for j in 1..=n2 {
        match s2[j - 1] == s3[j - 1] {
            true => dp[0][j] = true,
            false => break,
        }
    }

    for i in 1..=n1 {
        for j in 1..=n2 {
            dp[i][j] = (dp[i - 1][j] && s1[i - 1] == s3[i + j - 1])
                || (dp[i][j - 1] && s2[j - 1] == s3[i + j - 1]);
        }
    }

    dp[n1][n2]
}
