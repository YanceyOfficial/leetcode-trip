#[allow(unused)]
pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
    let n = nums.len();

    if n == 0 {
        return 0;
    }

    let (mut slow, mut fast) = (0, 0);

    while fast < n {
        if nums[fast] != val {
            nums[slow] = nums[fast];
            slow += 1;
        }

        fast += 1;
    }

    slow as i32
}
