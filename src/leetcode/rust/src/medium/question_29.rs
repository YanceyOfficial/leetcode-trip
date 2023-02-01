#[allow(unused)]
pub fn divide(dividend: i32, divisor: i32) -> i32 {
    let sign = if (dividend < 0) ^ (divisor < 0) {
        -1
    } else {
        1
    };

    let mut dividend = dividend as i64;
    let mut divisor = divisor as i64;

    dividend = dividend.abs();
    divisor = divisor.abs();

    let mut ans: i64 = 0;
    while dividend >= divisor {
        let mut temp = divisor;
        let mut multiple = 1;

        while dividend >= temp << 1 {
            temp <<= 1;
            multiple <<= 1;
        }

        dividend -= temp;
        ans += multiple;
    }

    let res = ans * sign;
    if res < i32::MIN as i64 || res > i32::MAX as i64 {
        i32::MAX
    } else {
        res as i32
    }
}
