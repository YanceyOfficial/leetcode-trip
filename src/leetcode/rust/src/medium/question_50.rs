#[allow(unused)]
pub fn my_pow(x: f64, n: i32) -> f64 {
    let mut x = x;
    let mut n = n as i64;
    let mut res = 1.0;

    if n < 0 {
        x = 1.0 / x;
        n = -n;
    }

    while n != 0 {
        if n & 1 == 1 {
            res *= x;
        }

        x *= x;
        n >>= 1;
    }

    res
}
