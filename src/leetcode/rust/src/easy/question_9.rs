#[allow(unused)]
pub fn is_palindrome(x: i32) -> bool {
    if (x < 0) {
        return false;
    }

    if (x < 10) {
        return true;
    }

    if (x % 10 == 0) {
        return false;
    }

    let y = x;
    let mut x = x;
    let mut n = 0;

    while x != 0 {
        n = n * 10 + (x % 10);
        x /= 10;
    }

    y == n
}
