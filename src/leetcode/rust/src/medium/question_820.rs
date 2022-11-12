#[allow(unused)]
pub fn minimum_length_encoding(words: Vec<String>) -> i32 {
    let n = words.len();
    let mut reversed_words = Vec::with_capacity(n);

    for val in words {
        reversed_words.push(val.chars().rev().collect::<String>());
    }

    reversed_words.sort();

    let mut ans = 0;

    for (key, _) in reversed_words.iter().enumerate() {
        let curr_word = &reversed_words[key];
        if !(key < n - 1 && reversed_words[key + 1].starts_with(curr_word)) {
            ans += curr_word.len() + 1;
        }
    }

    ans as i32
}
