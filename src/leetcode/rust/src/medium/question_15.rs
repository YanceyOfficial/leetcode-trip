#[allow(unused)]
pub fn three_sum(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let mut nums = nums;
    nums.sort();

    n_sum(&nums, 3, 0, 0)
}

fn n_sum(nums: &Vec<i32>, n: usize, start: usize, target: i32) -> Vec<Vec<i32>> {
    let len = nums.len();
    let mut res: Vec<Vec<i32>> = vec![];

    if n < 2 || len < n {
        return res;
    }

    if n == 2 {
        let (mut low, mut high) = (start, len - 1);

        while low < high {
            let (low_val, high_val) = (nums[low], nums[high]);
            let sum = low_val + high_val;

            if sum < target {
                while low < high && nums[low] == low_val {
                    low += 1;
                }
            } else if sum > target {
                while low < high && nums[high] == high_val {
                    high -= 1;
                }
            } else {
                res.push(vec![low_val, high_val]);

                while low < high && nums[low] == low_val {
                    low += 1;
                }
                while low < high && nums[high] == high_val {
                    high -= 1;
                }
            }
        }
    } else {
        let mut iter = (start..len).into_iter();

        while let Some(mut i) = iter.next() {
            let items = n_sum(nums, n - 1, i + 1, target - nums[i]);

            for mut item in items {
                item.push(nums[i]);
                res.push(item);
            }

            while i < len - 1 && nums[i] == nums[i + 1] {
                i += 1;
                iter.next();
            }
        }
    }

    res
}
