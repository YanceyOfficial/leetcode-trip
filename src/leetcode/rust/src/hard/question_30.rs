use std::collections::HashMap;
use std::str;

#[allow(unused)]
pub fn find_substring(s: String, words: Vec<String>) -> Vec<i32> {
    let s = s.as_bytes();
    let m = s.len();
    let n = words.len();
    let w = words[0].len();

    let mut map = HashMap::new();
    for word in words {
        map.entry(word).and_modify(|e| *e += 1).or_insert(1);
    }

    let mut res = vec![];
    for i in 0..m {
        let end = i + n * w;
        if end > m {
            break;
        }

        let sub_string = str::from_utf8(&s[i..end]).unwrap();
        let mut sub_map = HashMap::new();

        for j in (0..(n * w)).step_by(w) {
            let sub = sub_string[j..(j + w)].to_string();
            if !map.contains_key(&sub) {
                break;
            }
            sub_map.entry(sub).and_modify(|e| *e += 1).or_insert(1);
        }

        if map == sub_map {
            res.push(i as i32);
        }
    }

    res
}
