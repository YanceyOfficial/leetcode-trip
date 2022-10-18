use rand::Rng;
use std::collections::HashMap;

#[derive(Debug)]
struct RandomizedSet {
    map: HashMap<i32, usize>,
    nums: Vec<i32>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl RandomizedSet {
    /** Initialize your nums structure here. */
    fn new() -> Self {
        RandomizedSet {
            map: HashMap::new(),
            nums: Vec::new(),
        }
    }

    /** Inserts a value to the set. Returns true if the set did not already contain the specified element. */
    fn insert(&mut self, val: i32) -> bool {
        if self.map.contains_key(&val) {
            return false;
        }

        self.map.insert(val, self.nums.len());
        self.nums.push(val);
        true
    }

    /** Removes a value from the set. Returns true if the set contained the specified element. */
    fn remove(&mut self, val: i32) -> bool {
        if !self.map.contains_key(&val) {
            return false;
        }

        let idx = self.map.remove(&val).unwrap();
        let last = self.nums.pop().unwrap();
        if idx != self.nums.len() {
            self.nums[idx] = last;
            self.map.insert(last, idx);
        }
        true
    }

    /** Get a random element from the set. */
    fn get_random(&self) -> i32 {
        self.nums[rand::thread_rng().gen_range(0..self.nums.len())]
    }
}

// /**
//  * Your RandomizedSet object will be instantiated and called as such:
//  * let obj = RandomizedSet::new();
//  * let ret_1: bool = obj.insert(val);
//  * let ret_2: bool = obj.remove(val);
//  * let ret_3: i32 = obj.get_random();
//  */