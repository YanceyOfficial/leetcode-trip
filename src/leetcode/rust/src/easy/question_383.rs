use std::collections::HashMap;

#[allow(unused)]
pub fn can_construct(ransom_note: String, magazine: String) -> bool {
    let mut map = HashMap::new();
    for ch in ransom_note.chars() {
        map.entry(ch).and_modify(|e| *e += 1).or_insert(1);
    }

    for ch in magazine.chars() {
        if map.contains_key(&ch) {
            if let Some(x) = map.get(&ch) {
                if *x > 1 {
                    map.insert(ch, *x - 1);
                } else {
                    map.remove(&ch);
                }
            }
        }
    }

    map.is_empty()
}
