use std::cmp;

#[allow(unused)]
pub fn jump(nums: Vec<i32>) -> i32 {
    let n = nums.len();
    let mut max_position = 0;
    let mut end = 0;
    let mut step = 0;

    for i in 0..(n - 1) {
        max_position = cmp::max(max_position, nums[i] + i as i32);

        if i as i32 == end {
            end = max_position;
            step += 1;
        }
    }

    step
}
