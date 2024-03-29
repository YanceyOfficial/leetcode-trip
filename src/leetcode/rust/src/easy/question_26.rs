#[allow(unused)]
pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
    let n = nums.len();

    let (mut slow, mut fast) = (1, 1);

    while fast < n {
        if nums[slow - 1] != nums[fast] {
            nums[slow] = nums[fast];
            slow += 1;
        }

        fast += 1;
    }

    slow as i32
}
