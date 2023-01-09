#[allow(unused)]
pub fn longest_palindrome(s: String) -> String {
    let n = s.len();
    let s_byte = s.as_bytes();
    let mut max = "";

    for i in 0..(n * 2 - 1) {
        let mut left = i / 2;
        let mut right = left + i % 2;

        while left < n && right < n && s_byte[left] == s_byte[right] {
            let curr = &s[left..=right];
            if curr.len() > max.len() {
                max = curr;
            }

            left -= 1;
            right += 1;
        }
    }

    max.to_string()
}
