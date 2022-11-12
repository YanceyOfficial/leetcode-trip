use std::collections::HashMap;

#[allow(unused)]
struct MapSum {
    map: HashMap<String, i32>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MapSum {
    #[allow(unused)]
    fn new() -> Self {
        MapSum {
            map: HashMap::new(),
        }
    }

    #[allow(unused)]
    fn insert(&mut self, key: String, val: i32) {
        self.map.insert(key, val);
    }

    #[allow(unused)]
    fn sum(&self, prefix: String) -> i32 {
        let mut sum = 0;
        for (key, val) in &self.map {
            if key.starts_with(&prefix) {
                sum += val;
            }
        }
        sum
    }
}

// /**
//  * Your MapSum object will be instantiated and called as such:
//  * let obj = MapSum::new();
//  * obj.insert(key, val);
//  * let ret_2: i32 = obj.sum(prefix);
//  */
