#[allow(unused)]
pub fn three_sum_closest(nums: Vec<i32>, target: i32) -> i32 {
    let n = nums.len();

    let mut nums = nums;
    nums.sort();

    let mut ans = nums[0] + nums[1] + nums[2];

    for i in 0..n {
        let (mut start, mut end) = (i + 1, n - 1);

        while start < end {
            let sum = nums[i] + nums[start] + nums[end];

            if (target - sum).abs() < (target - ans).abs() {
                ans = sum;
            }

            if sum < target {
                start += 1;
            } else if sum > target {
                end -= 1;
            } else {
                return ans;
            }
        }
    }

    ans
}
