use std::collections::HashMap;

#[allow(unused)]
pub fn find_anagrams(s: String, p: String) -> Vec<i32> {
    let mut need_map: HashMap<char, i32> = HashMap::new();

    for ch in p.chars() {
        need_map.entry(ch).and_modify(|e| *e += 1).or_insert(1);
    }

    let mut res = Vec::new();
    let mut met_count = 0;
    let mut window_map: HashMap<char, i32> = HashMap::new();
    let (mut start, mut end) = (0, 0);

    while end < s.len() {
        let end_ch = s.chars().nth(end).unwrap();
        end += 1;

        if need_map.contains_key(&end_ch) {
            window_map
                .entry(end_ch)
                .and_modify(|e| *e += 1)
                .or_insert(1);

            if window_map.get(&end_ch) == need_map.get(&end_ch) {
                met_count += 1;
            }
        }

        while end - start >= p.len() {
            if need_map.len() == met_count {
                res.push(start as i32);
            }

            let start_ch = s.chars().nth(start).unwrap();
            start += 1;

            if need_map.contains_key(&start_ch) {
                if window_map.get(&start_ch) == need_map.get(&start_ch) {
                    met_count -= 1;
                }

                window_map.entry(start_ch).and_modify(|e| *e -= 1);
            }
        }
    }

    res
}
