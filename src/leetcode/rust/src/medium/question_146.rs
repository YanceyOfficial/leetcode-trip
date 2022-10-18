use linked_hash_map::LinkedHashMap;

#[derive(Debug)]
pub struct LRUCache {
    cache: LinkedHashMap<i32, i32>,
    capacity: i32,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl LRUCache {
    pub fn new(capacity: i32) -> Self {
        LRUCache {
            cache: LinkedHashMap::with_capacity(capacity as usize),
            capacity,
        }
    }

    pub fn get(&mut self, key: i32) -> i32 {
        if !self.cache.contains_key(&key) {
            -1
        } else {
            let value = *self.cache.get(&key).unwrap();
            self.cache.remove(&key);
            self.cache.insert(key, value);
            value
        }
    }

    pub fn put(&mut self, key: i32, value: i32) {
        if self.cache.contains_key(&key) {
            self.cache.remove(&key);
        }

        if self.cache.len() == self.capacity as usize {
            let oldest_key = *self.cache.keys().next().unwrap();
            self.cache.remove(&oldest_key);
        }

        self.cache.insert(key, value);
    }
}

// /**
//  * Your LRUCache object will be instantiated and called as such:
//  * let obj = LRUCache::new(capacity);
//  * let ret_1: i32 = obj.get(key);
//  * obj.put(key, value);
//  */
