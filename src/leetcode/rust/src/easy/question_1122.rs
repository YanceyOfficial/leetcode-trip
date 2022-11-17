use std::collections::HashMap;

#[allow(unused)]
pub fn relative_sort_array(arr1: Vec<i32>, arr2: Vec<i32>) -> Vec<i32> {
    let mut res: Vec<i32> = Vec::with_capacity(arr1.len());
    let mut map: HashMap<i32, i32> = HashMap::new();

    for num in arr1 {
        map.entry(num).and_modify(|e| *e += 1).or_insert(1);
    }

    for num in arr2 {
        if let Some(x) = map.get(&num) {
            for _ in 0..*x {
                res.push(num);
            }

            map.remove(&num);
        }
    }

    let mut remain_nums: Vec<i32> = vec![];
    for (key, val) in map {
        for _ in 0..val {
            remain_nums.push(key);
        }
    }
    remain_nums.sort();

    res.append(&mut remain_nums);
    res
}
