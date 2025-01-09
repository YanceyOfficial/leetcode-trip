#[allow(unused)]
pub fn find_target_sum_ways(nums: Vec<i32>, target: i32) -> i32 {
    let n = nums.len();
    let sum = nums.iter().sum();

    if (target.abs() > sum || (sum + target) % 2 == 1) {
        return 0;
    }

    let weight = (sum + target) / 2;
    let mut dp = vec![0; (weight + 1) as usize];
    dp[0] = 1;

    for i in 1..=n {
        for j in (nums[i - 1]..=weight).rev() {
            dp[j as usize] = dp[j as usize] + dp[(j - nums[i - 1]) as usize];
        }
    }

    dp[weight as usize]
}
