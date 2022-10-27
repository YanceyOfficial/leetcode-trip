#[allow(unused)]
pub fn next_greater_elements(nums: Vec<i32>) -> Vec<i32> {
    let n = nums.len();
    let mut res = vec![-1; n];
    let mut stack = vec![];

    for (i, _) in (0..(2 * n - 1)).enumerate() {
        while !stack.is_empty() && nums[stack[stack.len() - 1]] < nums[i % n] {
            res[stack.pop().unwrap()] = nums[i % n];
        }

        stack.push(i % n);
    }

    res
}
