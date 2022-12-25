use std::cmp;

#[allow(unused)]
pub fn find_max_form(strs: Vec<String>, m: i32, n: i32) -> i32 {
    let len = strs.len();
    let m = m as usize;
    let n = n as usize;
    let arr = strs.iter().fold(vec![], |mut arr, str| {
        let tuple = str.chars().fold((0, 0), |mut tuple, ch| {
            if ch == '0' {
                tuple.0 += 1;
            } else {
                tuple.1 += 1;
            }
            tuple
        });
        arr.push(tuple);
        arr
    });

    let mut dp = vec![vec![0; n + 1]; m + 1];
    for i in 1..=len {
        let (c0, c1) = arr[i - 1];
        for j in (c0..=m).rev() {
            for k in (c1..=n).rev() {
                dp[j][k] = cmp::max(dp[j][k], dp[j - c0][k - c1] + 1);
            }
        }
    }

    dp[m][n]
}
