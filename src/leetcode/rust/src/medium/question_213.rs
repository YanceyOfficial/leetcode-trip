use std::cmp;

#[allow(unused)]
pub fn rob(nums: Vec<i32>) -> i32 {
    let n = nums.len();
    if n == 0 {
        return 0;
    };
    if n == 1 {
        return nums[0];
    };

    cmp::max(helper(&nums, 0, n - 1), helper(&nums, 1, n))
}

fn helper(nums: &Vec<i32>, left: usize, right: usize) -> i32 {
    let mut rob = 0;
    let mut not_rob = 0;

    for i in left..right {
        let temp = rob;
        rob = not_rob + nums[i];
        not_rob = cmp::max(temp, not_rob);
    }

    cmp::max(rob, not_rob)
}
