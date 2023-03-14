#[allow(unused)]
pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
    let n = nums.len();
    if n <= 2 {
        return n as i32;
    }

    let (mut slow, mut fast) = (2, 2);
    while fast < n {
        if nums[slow - 2] != nums[fast] {
            nums[slow] = nums[fast];
            slow += 1;
        }

        fast += 1;
    }

    slow as i32
}
