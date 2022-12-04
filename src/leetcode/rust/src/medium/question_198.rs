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

    let mut rob = 0;
    let mut not_rob = 0;

    for i in 0..n {
        let temp = rob;
        rob = not_rob + nums[i];
        not_rob = cmp::max(temp, not_rob);
    }

    cmp::max(rob, not_rob)
}
