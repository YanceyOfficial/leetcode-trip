pub fn valid_palindrome(s: String) -> bool {
    let s_bytes = s.as_bytes();
    let (mut left, mut right) = (0, s.len() - 1);

    let is_palindrome = |left: usize, right: usize| {
        let (mut i, mut j) = (left, right);

        while i < j {
            if s_bytes[left] != s_bytes[right] {
                return false;
            }

            i += 1;
            j -= 1;
        }

        true
    };

    while left < right {
        if s_bytes[left] == s_bytes[right] {
            left += 1;
            right -= 1;
        } else {
            return is_palindrome(left + 1, right) || is_palindrome(left, right - 1);
        }
    }

    true
}
