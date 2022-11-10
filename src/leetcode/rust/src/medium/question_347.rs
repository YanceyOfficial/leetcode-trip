use std::collections::HashMap;

#[allow(unused)]
pub fn top_k_frequent(nums: Vec<i32>, k: i32) -> Vec<i32> {
    let n = nums.len();
    let mut map: HashMap<i32, i32> = HashMap::new();
    for num in nums {
        map.entry(num).and_modify(|e| *e += 1).or_insert(1);
    }

    let mut buckets: Vec<Vec<i32>> = vec![vec![]; n + 1];
    for (key, val) in map {
        buckets[val as usize].push(key);
    }

    let mut res: Vec<i32> = vec![];
    for i in (0..buckets.len()).rev() {
        if buckets[i].len() > 0 && res.len() < k as usize {
            res.append(buckets[i].as_mut());
        }
    }

    res
}
