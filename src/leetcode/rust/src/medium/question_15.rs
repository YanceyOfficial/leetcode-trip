#[allow(unused)]
pub fn three_sum(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let n = nums.len();
    let mut nums = nums;
    nums.sort();
    let mut result: Vec<Vec<i32>> = vec![];

    for i in 0..(n - 2) {
        if i > 0 && nums[i] == nums[i - 1] {
            continue;
        }

        let mut left = i + 1;
        let mut right = n - 1;

        while left < right {
            let sum = nums[i] + nums[left] + nums[right];

            if sum < 0 {
                left += 1;
            }

            if sum > 0 {
                right -= 1;
            }

            if sum == 0 {
                result.push(([nums[i], nums[left], nums[right]].to_vec()));

                while left < right && nums[left] == nums[left + 1] {
                    left += 1;
                }
                while left < right && nums[right] == nums[right - 1] {
                    right -= 1;
                }

                left += 1;
                right -= 1;
            }
        }
    }

    result
}
