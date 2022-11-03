#[allow(unused)]
struct RecentCounter {
    queue: Vec<i32>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl RecentCounter {
    #[allow(unused)]
    fn new() -> Self {
        RecentCounter { queue: vec![] }
    }

    #[allow(unused)]
    fn ping(&mut self, t: i32) -> i32 {
        self.queue.push(t);
        while self.queue[0] < t - 3000 {
            self.queue.remove(0);
        }

        self.queue.len() as i32
    }
}

// /**
//  * Your RecentCounter object will be instantiated and called as such:
//  * let obj = RecentCounter::new();
//  * let ret_1: i32 = obj.ping(t);
//  */
