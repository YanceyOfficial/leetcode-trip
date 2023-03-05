#[allow(unused)]
pub fn plus_one(digits: Vec<i32>) -> Vec<i32> {
    let n = digits.len();
    let mut digits = digits;

    for i in (0..n).rev() {
        if digits[i] == 9 {
            digits[i] = 0;

            if i == 0 {
                digits.insert(0, 1);
            }
        } else {
            digits[i] += 1;
            break;
        }
    }

    digits
}
