use std::cmp;

#[allow(unused)]
pub fn max_sub_array(nums: Vec<i32>) -> i32 {
    let mut ans = nums[0];
    let mut sum = 0;

    for num in nums {
        if sum > 0 {
            sum += num;
        } else {
            sum = num;
        }

        ans = cmp::max(ans, sum);
    }

    ans
}
