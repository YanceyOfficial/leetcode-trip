#[allow(unused)]
pub fn str_str(haystack: String, needle: String) -> i32 {
    let n = needle.len();

    if n == 0 {
        return 0;
    }

    let (mut i, mut j) = (0, n);

    while j <= haystack.len() {
        if haystack[i..j] == needle {
            return i as i32;
        }

        i += 1;
        j += 1;
    }

    -1
}
