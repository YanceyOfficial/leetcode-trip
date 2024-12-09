#[allow(unused)]
pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
    let mut slow = 0;

    for fast in 1..(nums.len()) {
        if (nums[fast] != nums[slow]) {
            slow += 1;
            nums[slow] = nums[fast];
        }
    }

    slow as i32 + 1
}
