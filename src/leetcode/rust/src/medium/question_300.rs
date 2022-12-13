use std::cmp;

#[allow(unused)]
pub fn length_of_lis(nums: Vec<i32>) -> i32 {
    let n = nums.len();
    let mut dp = vec![1; n];
    let mut max = 1;

    for i in 0..n {
        for j in 0..i {
            if nums[j] < nums[i] {
                dp[i] = cmp::max(dp[i], dp[j] + 1);
            }
        }

        max = cmp::max(max, dp[i]);
    }

    max
}
