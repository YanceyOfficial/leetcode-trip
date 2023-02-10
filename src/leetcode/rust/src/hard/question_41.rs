#[allow(unused)]
pub fn first_missing_positive(nums: Vec<i32>) -> i32 {
    let mut nums = nums;
    let n = nums.len();

    for i in 0..n {
        while nums[i] > 0 && nums[i] <= (n as i32) && nums[(nums[i] - 1) as usize] != nums[i] {
            let j = (nums[i] - 1) as usize;
            nums.swap(i, j);
        }
    }

    for i in 0..n {
        if nums[i] != i as i32 + 1 {
            return i as i32 + 1;
        }
    }

    n as i32 + 1
}
