#[allow(unused)]
pub fn can_partition(nums: Vec<i32>) -> bool {
    let n = nums.len();
    let mut weight = nums.iter().sum::<i32>();
    if (weight % 2 == 1) {
        return false;
    }
    weight /= 2;

    let mut dp = vec![vec![false; (weight + 1) as usize]; n + 1];
    dp[0][0] = true;

    for i in 1..=n {
        for j in 1..=(weight as usize) {
            if (j as i32) - nums[i - 1] < 0 {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][((j as i32) - nums[i - 1]) as usize];
            }
        }
    }

    dp[n][weight as usize]
}
