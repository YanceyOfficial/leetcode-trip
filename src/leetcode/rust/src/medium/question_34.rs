#[allow(unused)]
pub fn search_range(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let (mut left, mut right) = (0, nums.len() - 1);

    while left <= right {
        // 注意下面的 right -= 1 和 right = mid - 1 操作, 都有可能将 right 变为负数
        // 由于 right 是 uszie 类型, 因此一旦它变成负数, 会自动被转化成 2^⁶⁴-1
        // 这样后面的迭代中就会溢出, 需要过滤到这种情况
        if (right > nums.len()) {
            break;
        }

        let mid = (left + right) / 2;

        if nums[mid] == target {
            if nums[left] < target {
                left += 1;
            }

            if nums[right] > target {
                right -= 1;
            }

            if nums[left] == target && nums[right] == target {
                return vec![left as i32, right as i32];
            }
        } else if nums[mid] < target {
            left = mid + 1;
        } else if nums[mid] > target {
            right = mid - 1;
        }
    }

    vec![-1, -1]
}
