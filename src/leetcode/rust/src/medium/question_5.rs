pub fn longest_palindrome(s: String) -> String {
    let len = s.len();
    let center_count = len * 2 - 1;
    let s_byte = s.as_bytes();
    let mut max_str = "";

    for i in 0..center_count {
        let mut left = i / 2;
        let mut right = left + i % 2;

        while left < len && right < len && s_byte[left] == s_byte[right] {
            let curr_str = &s[left..right + 1];
            if curr_str.len() > max_str.len() {
                max_str = curr_str;
            }

            left -= 1;
            right += 1;
        }
    }

    max_str.to_string()
}
