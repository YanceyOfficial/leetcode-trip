#[allow(unused)]
pub fn remove_kdigits(num: String, k: i32) -> String {
    let mut stack = vec![];
    let remain_count = num.len() - k as usize;
    let mut k = k;

    for char in num.as_bytes() {
        while k > 0 && !stack.is_empty() && stack[stack.len() - 1] > *char {
            stack.pop();
            k -= 1;
        }

        stack.push(*char);
    }

    let res = stack[0..remain_count]
        .iter()
        .skip_while(|&&c| c == b'0')
        .map(|&c| c as char)
        .collect::<String>();

    if res.len() == 0 {
        return "0".into();
    }

    res
}