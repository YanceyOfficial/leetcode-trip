use std::cmp;

#[allow(unused)]
pub fn is_alien_sorted(words: Vec<String>, order: String) -> bool {
    // let mut indexes = [0; 26];
    // for (idx, letter) in order.as_bytes().iter().enumerate() {
    //     indexes[(letter - b'a') as usize] = idx;
    // }

    let indexes = order.as_bytes().iter().enumerate().fold(vec![0; 26], |mut indexes, (i, b)| {
        indexes[(b - b'a') as usize] = i;
        indexes
    });

    for i in 1..words.len() {
        let mut need_check_len = true;

        for j in 0..cmp::min(words[i - 1].len(), words[i].len()) {
            let prev = indexes[(words[i - 1].as_bytes()[j] - b'a') as usize];
            let curr = indexes[(words[i].as_bytes()[j] - b'a') as usize];

            if prev < curr {
                need_check_len = false;
                break;
            }

            if prev > curr {
                return false;
            }
        }

        if need_check_len && words[i - 1].len() > words[i].len() {
            return false;
        }
    }

    true
}
