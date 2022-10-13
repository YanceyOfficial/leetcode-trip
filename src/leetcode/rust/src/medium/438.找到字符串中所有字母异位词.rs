pub fn find_anagrams(s: String, p: String) -> Vec<i32> {
    let mut need_map: HashMap<u8, i32> = HashMap::new();

    for letter in p.as_bytes() {
        need_map.entry(*letter).and_modify(|e| *e += 1).or_insert(1);
    }

    let mut res = Vec::new();
    let need_map_len = need_map.len();
    let mut meeted_count = 0;
    let mut window_map: HashMap<u8, i32> = HashMap::new();
    let (mut start, mut end) = (0, 0);

    while end < s.len() {
        let end_letter = s.as_bytes()[end];
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

        while end - start >= p.len() {
            if need_map_len == meeted_count {
                res.push(start as i32);
            }

            let start_letter = s.as_bytes()[start];
            start += 1;

            if need_map.contains_key(&start_letter) {
                if window_map.get(&start_letter) == need_map.get(&start_letter) {
                    meeted_count -= 1;
                }

                window_map.entry(start_letter).and_modify(|e| *e -= 1);
            }
        }
    }

    res
}
