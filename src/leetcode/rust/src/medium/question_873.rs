use std::{cmp, collections::HashMap};

#[allow(unused)]
pub fn len_longest_fib_subseq(arr: Vec<i32>) -> i32 {
    let n = arr.len();
    let mut map = arr
        .iter()
        .enumerate()
        .fold(HashMap::with_capacity(n), |mut map, (i, str)| {
            map.insert(str, i);
            map
        });

    let mut dp = vec![vec![0; n]; n];
    let mut ans = 0;

    for i in 0..n {
        for j in (0..=n - 1).rev() {
            if arr[j] * 2 <= arr[i] {
                break;
            }

            if let Some(k) = map.get(&(arr[i] - arr[j])) {
                dp[j][i] = cmp::max(dp[*k][j] + 1, 3);
                ans = cmp::max(dp[j][i], ans);
            }
        }
    }

    ans
}
