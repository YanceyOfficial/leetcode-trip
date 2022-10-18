use std::{collections::HashMap, cmp};

pub fn length_of_longest_substring(s: String) -> i32 {
  let s_bytes = s.as_bytes();
  let mut max_len = 0;
  let mut map: HashMap<u8, i32> = HashMap::with_capacity(26);
  let mut start = 0;
  let mut end = 0;

  while end < s.len() {
      let end_letter = s_bytes[end];
      end += 1;
      map.entry(end_letter).and_modify(|e| *e += 1).or_insert(1);

      // while map.get(&end_letter).unwrap() > &1 {
      // while map.get(&end_letter) > Some(&1) {
      while map[&end_letter] > 1 {
          let start_letter = s_bytes[start];
          start += 1;
          map.entry(start_letter).and_modify(|e| *e -= 1);
      }

      max_len = cmp::max(end - start, max_len);
  }

  max_len as i32
}