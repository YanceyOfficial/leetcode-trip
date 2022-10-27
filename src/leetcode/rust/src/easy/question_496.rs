use std::collections::HashMap;

#[allow(unused)]
pub fn next_greater_element(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
    let mut map = HashMap::new();
    let mut stack = vec![];

    for num in nums2 {
        while !stack.is_empty() && stack[stack.len() - 1] < num {
            map.entry(stack[stack.len() - 1])
                .and_modify(|e| *e = num)
                .or_insert(num);
            stack.pop();
        }

        stack.push(num);
    }

    let mut res = vec![-1; nums1.len()];
    for (i, num) in nums1.iter().enumerate() {
        if let Some(x) = map.get(&num) {
            res[i] = *x;
        }
    }

    res
}
