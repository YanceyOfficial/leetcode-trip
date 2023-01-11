#[allow(unused)]
pub fn my_atoi(s: String) -> i32 {
    let n = s.len();
    let s = s.as_bytes();
    let mut sign = 1;
    let mut res = 0;
    let mut i = 0;

    while i < n && s[i] == b' ' {
        i += 1;
    }

    if i < n && s[i] == b'-' {
        sign = -1;
    }

    if i < n && (s[i] == b'+' || s[i] == b'-') {
        i += 1;
    }

    while i < n && is_digit(s[i]) {
        let num = (s[i] - b'0') as i32;
        if res > i32::MAX / 10 || (res == i32::MAX / 10 && num > i32::MAX % 10) {
            if sign < 0 {
                return i32::MIN;
            } else {
                return i32::MAX;
            }
        }

        res = res * 10 + num;
        i += 1;
    }

    if sign < 0 {
        return -res;
    } else {
        return res;
    }
}

fn is_digit(num: u8) -> bool {
    num >= b'0' && num <= b'9'
}
