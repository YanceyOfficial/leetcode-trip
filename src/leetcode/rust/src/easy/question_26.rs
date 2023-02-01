#[allow(unused)]
pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
    let n = nums.len();

    if n == 0 {
        return 0;
    }

    let (mut slow, mut fast) = (0, 0);

    while fast < n {
        if nums[fast] != nums[slow] {
            slow += 1;
            nums[slow] = nums[fast];
        }

        fast += 1;
    }

    slow as i32 + 1
}
