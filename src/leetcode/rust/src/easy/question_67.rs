use std::cmp;

#[allow(unused)]
pub fn add_binary(a: String, b: String) -> String {
    let n = cmp::max(a.len(), b.len());
    let mut a = a;
    let mut b = b;

    for i in 0..(n - a.len()) {
        a += "0"
    }

    for i in 0..(n - b.len()) {
        b += "0"
    }

    let a = a.as_bytes();
    let b = b.as_bytes();

    let mut carry = 0;
    let mut res = String::new();

    for i in (0..n).rev() {
        let sum = (a[i] - b'0') as i32 + (b[i] - b'0') as i32 + carry;
        carry = sum / 2;
        res.insert_str(0, &(sum % 2).to_string());
    }

    if carry == 0 {
        res
    } else {
        res.insert_str(0, "1");
        res
    }
}
