#[allow(unused)]
pub fn sort_colors(nums: &mut Vec<i32>) {
    let n = nums.len();
    if n < 2 {
        return;
    }

    let (mut left, mut right, mut i) = (0, n - 1, 0);

    while i <= right {
        if nums[i] == 0 {
            nums.swap(left, i);
            left += 1;
            i += 1;
        } else if nums[i] == 1 {
            i += 1;
        } else {
            nums.swap(i, right);
            if (right == 0) {
                break;
            }
            right -= 1;
        }
    }
}
