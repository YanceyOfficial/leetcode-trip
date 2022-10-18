use std::collections::HashMap;

pub fn check_inclusion(s1: String, s2: String) -> bool {
    let mut need_map: HashMap<u8, i32> = HashMap::new();

    for letter in s1.as_bytes() {
        need_map.entry(*letter).and_modify(|e| *e += 1).or_insert(1);
    }

    let need_map_len = need_map.len();
    let mut meeted_count = 0;
    let mut window_map: HashMap<u8, i32> = HashMap::new();
    let (mut start, mut end) = (0, 0);

    while end < s2.len() {
        let end_letter = s2.as_bytes()[end];
        end += 1;

        if need_map.contains_key(&end_letter) {
            window_map
                .entry(end_letter)
                .and_modify(|e| *e += 1)
                .or_insert(1);

            if window_map.get(&end_letter) == need_map.get(&end_letter) {
                meeted_count += 1;
            }
        }

        while end - start >= s1.len() {
            if need_map_len == meeted_count {
                return true;
            }

            let start_letter = s2.as_bytes()[start];
            start += 1;

            if need_map.contains_key(&start_letter) {
                if window_map.get(&start_letter) == need_map.get(&start_letter) {
                    meeted_count -= 1;
                }

                window_map.entry(start_letter).and_modify(|e| *e -= 1);
            }
        }
    }

    false
}
