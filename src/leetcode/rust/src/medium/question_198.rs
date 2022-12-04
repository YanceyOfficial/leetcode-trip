use std::cmp;

#[allow(unused)]
pub fn rob(nums: Vec<i32>) -> i32 {
    let mut rob = 0;
    let mut not_rob = 0;

    for i in 0..nums.len() {
        let temp = rob;
        rob = not_rob + nums[i];
        not_rob = cmp::max(temp, not_rob);
    }

    cmp::max(rob, not_rob)
}
