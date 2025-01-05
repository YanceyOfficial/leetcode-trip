use std::collections::HashMap;

#[allow(unused)]
pub fn four_sum_count(nums1: Vec<i32>, nums2: Vec<i32>, nums3: Vec<i32>, nums4: Vec<i32>) -> i32 {
    let mut count = 0;

    let mut map = HashMap::new();
    for a in &nums1 {
        for b in &nums2 {
            map.entry(a + b).and_modify(|e| *e += 1).or_insert(1);
        }
    }

    for c in &nums3 {
        for d in &nums4 {
            let sum = c + d;
            if map.contains_key(&-sum) {
                count += map.get(&-sum).unwrap();
            }
        }
    }

    count
}
