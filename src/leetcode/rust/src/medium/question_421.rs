use std::collections::HashSet;

#[allow(unused)]
pub fn find_maximum_xor(nums: Vec<i32>) -> i32 {
    let mut res = 0;
    let mut mask = 0;

    for i in (0..31).rev() {
        mask |= 1 << i;

        let mut set = HashSet::new();
        for num in &nums {
            set.insert(num & mask);
        }

        let temp = res | (1 << i);
        for prefix in &set {
            if set.contains(&(prefix ^ temp)) {
                res = temp;
                break;
            }
        }
    }

    res
}
