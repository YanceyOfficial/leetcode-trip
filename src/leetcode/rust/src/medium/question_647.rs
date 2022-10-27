#[allow(unused)]
pub fn count_substrings(s: String) -> i32 {
    let len = s.len();
    let center_count = len * 2 - 1;
    let s_byte = s.as_bytes();
    let mut ans = 0;

    for i in 0..center_count {
        let mut left = i / 2;
        let mut right = left + i % 2;

        // let left_el = s.chars().nth(left).unwrap();
        // let right_el = s.chars().nth(right).unwrap();

        while left < len && right < len && s_byte[left] == s_byte[right] {
            left -= 1;
            right += 1;
            ans += 1;
        }
    }

    ans
}
