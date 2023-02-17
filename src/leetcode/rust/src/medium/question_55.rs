use std::cmp;

#[allow(unused)]
pub fn can_jump(nums: Vec<i32>) -> bool {
    let n = nums.len();
    let mut max_position = 0;

    for i in 0..(n - 1) {
        max_position = cmp::max(max_position, nums[i] + i as i32);

        if max_position <= i as i32 {
            return false;
        }
    }

    max_position >= (n - 1) as i32
}
