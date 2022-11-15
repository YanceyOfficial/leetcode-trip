use rand::Rng;

#[allow(unused)]
struct Solution {
    total: i32,
    pre_sum: Vec<i32>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Solution {
    #[allow(unused)]
    fn new(w: Vec<i32>) -> Self {
        let n = w.len();
        let mut pre_sum = vec![0; n];
        pre_sum[0] = w[0];
        for i in 1..n {
            pre_sum[i] = pre_sum[i - 1] + w[i];
        }

        Solution {
            total: w.iter().sum(),
            pre_sum,
        }
    }

    #[allow(unused)]
    fn pick_index(&self) -> i32 {
        let x = rand::thread_rng().gen_range(0..self.total) + 1;

        self.pre_sum
            .binary_search(&x)
            .unwrap_or_else(|e| self.pre_sum[e].try_into().unwrap()) as i32
    }
}

// /**
//  * Your Solution object will be instantiated and called as such:
//  * let obj = Solution::new(w);
//  * let ret_1: i32 = obj.pick_index();
//  */
