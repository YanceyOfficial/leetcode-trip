use std::collections::BinaryHeap;

#[allow(unused)]
pub fn find_kth_largest(nums: Vec<i32>, k: i32) -> i32 {
    let mut k = k - 1;
    let mut heap = BinaryHeap::new();

    for val in nums {
        heap.push(val);
    }

    while k > 0 {
        heap.pop();
        k -= 1;
    }

    *heap.peek().unwrap()
}
