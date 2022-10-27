use std::collections::HashMap;

#[allow(unused)]
pub fn is_anagram(s: String, t: String) -> bool {
    if s.len() != t.len() {
        return false;
    }

    let mut map: HashMap<u8, i32> = HashMap::new();

    for item in s.as_bytes().iter() {
        map.entry(*item).and_modify(|e| *e += 1).or_insert(1);
    }

    for item in t.as_bytes().iter() {
        if !map.contains_key(item) {
            return false;
        }

        if map.get(item).unwrap() == &1 {
            map.remove(item);
        } else {
            map.entry(*item).and_modify(|e| *e -= 1);
        }

    }

    return map.len() == 0;
}
