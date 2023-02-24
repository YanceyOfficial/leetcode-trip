#[allow(unused)]
pub fn length_of_last_word(s: String) -> i32 {
    let mut count = 0;
    for ch in s.chars().rev() {
        if ch == ' ' {
            if count != 0 {
                break;
            }
        } else {
            count += 1;
        }
    }

    count
}
