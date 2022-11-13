#[allow(unused)]
pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
    let (mut low, mut high) = (0, nums.len() - 1);

    while low <= high {
        let mid = (high + low) / 2;

        if nums[mid] == target {
            return mid as i32;
        } else if nums[mid] < target {
            low = mid + 1;
        } else {
            if mid == 0 {
                return mid as i32;
            }
            high = mid - 1;
        }
    }

    low as i32
}
