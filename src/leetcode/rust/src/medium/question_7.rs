#[allow(unused)]
pub fn reverse(x: i32) -> i32 {
    let mut x = x;
    let mut n = 0;

    while x != 0 {
        if n > i32::MAX / 10 || n < i32::MIN / 10 {
            return 0;
        }
        n = n * 10 + (x % 10);
        x /= 10;
    }

    n
}
