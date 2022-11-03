#[allow(unused)]
struct MovingAverage {
    queue: Vec<i32>,
    size: usize,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MovingAverage {
    /** Initialize your data structure here. */
    #[allow(unused)]
    fn new(size: i32) -> Self {
        MovingAverage {
            queue: Vec::with_capacity(size as usize),
            size: size as usize,
        }
    }

    #[allow(unused)]
    fn next(&mut self, val: i32) -> f64 {
        if self.queue.len() == self.size {
            self.queue.remove(0);
        }

        self.queue.push(val);
        self.queue.iter().sum::<i32>() as f64 / self.queue.len() as f64
    }
}

// /**
//  * Your MovingAverage object will be instantiated and called as such:
//  * let obj = MovingAverage::new(size);
//  * let ret_1: f64 = obj.next(val);
//  */
