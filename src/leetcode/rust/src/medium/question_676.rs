use std::collections::HashMap;

#[allow(unused)]
struct MagicDictionary {
    map: HashMap<usize, Vec<String>>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MagicDictionary {
    /** Initialize your data structure here. */
    #[allow(unused)]
    fn new() -> Self {
        MagicDictionary {
            map: HashMap::new(),
        }
    }

    #[allow(unused)]
    fn build_dict(&mut self, dictionary: Vec<String>) {
        for d in dictionary {
            let n = d.len();
            self.map
                .entry(n)
                .and_modify(|e| e.push(d.clone()))
                .or_insert(vec![d]);
        }
    }

    #[allow(unused)]
    fn search(&self, search_word: String) -> bool {
        let n = search_word.len();
        if !self.map.contains_key(&n) {
            return false;
        }

        let equal_len_words = self
            .map
            .get(&n)
            .unwrap()
            .iter()
            .filter(|x| **x != search_word)
            .collect::<Vec<&String>>();

        if equal_len_words.len() == 0 {
            return false;
        }

        for d in equal_len_words {
            let mut valid = false;

            for i in 0..n {
                if d.as_bytes()[i] != search_word.as_bytes()[i] {
                    if valid {
                        valid = false;
                        break;
                    } else {
                        valid = true;
                    }
                }
            }

            if valid {
                return true;
            }
        }

        return false;
    }
}

// /**
//  * Your MagicDictionary object will be instantiated and called as such:
//  * let obj = MagicDictionary::new();
//  * obj.build_dict(dictionary);
//  * let ret_2: bool = obj.search(searchWord);
//  */
