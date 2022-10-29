use std::collections::HashMap;

#[allow(unused)]
pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let mut map = HashMap::new();

    for (i, num) in nums.iter().enumerate() {
        let dif = target - num;

        if map.contains_key(&dif) {
            return vec![*map.get(&dif).unwrap(), i as i32];
        }

        map.insert(*num, i as i32);
    }

    panic!("")
}
