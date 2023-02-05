#[allow(unused)]
pub fn next_permutation(nums: &mut Vec<i32>) {
    let n = nums.len();

    let mut i = n - 2;
    while i < n - 1 && nums[i + 1] <= nums[i] {
        i -= 1;
    }

    if i < n - 1 {
        let mut j = n - 1;
        while j >= (0 as usize) && nums[j] <= nums[i] {
            j -= 1;
        }

        nums.swap(i, j);
        nums[(i + 1)..].reverse();
    } else {
        nums.reverse();
    }
}