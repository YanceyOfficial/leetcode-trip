use std::cmp;

#[allow(unused)]
pub fn find_max_form(strs: Vec<String>, m: i32, n: i32) -> i32 {
    let len = strs.len();
    let m = m as usize;
    let n = n as usize;
    let arr = strs.iter().fold(vec![], |mut arr, str| {
        let sub_arr = str.chars().fold((0, 0), |mut sub_arr, ch| {
            if ch == '0' {
                sub_arr.0 += 1;
            } else {
                sub_arr.1 += 1;
            }
            sub_arr
        });
        arr.push(sub_arr);
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
