#[allow(unused)]
pub fn single_non_duplicate(nums: Vec<i32>) -> i32 {
    let n = nums.len();
    let (mut low, mut high) = (0, n - 1);

    while low < high {
        let mid = low + (high - low) / 2;

        if nums[mid] == nums[mid ^ 1] {
            low = mid + 1
        } else {
            high = mid
        }
    }

    nums[high]
}
