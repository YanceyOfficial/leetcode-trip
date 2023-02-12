#[allow(unused)]
pub fn multiply(num1: String, num2: String) -> String {
    if num1 == String::from("0") || num2 == String::from("0") {
        return String::from("0");
    }

    let (m, n) = (num1.len(), num2.len());
    let total_len = m + n - 1;
    let mut arr = vec![0; total_len];

    for (i, byte1) in num1.as_bytes().iter().enumerate() {
        for (j, byte2) in num2.as_bytes().iter().enumerate() {
            arr[i + j] += (byte1 - b'0') as i32 * (byte2 - b'0') as i32;
        }
    }

    let mut str = String::from("");
    let mut carry = 0;
    for k in (0..=(total_len - 1)).rev() {
        let sum = arr[k] + carry;
        str = (sum % 10).to_string() + &str;
        carry = sum / 10;
    }

    if carry != 0 {
        carry.to_string() + &str
    } else {
        str
    }
}
