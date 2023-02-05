use std::cmp;

#[allow(unused)]
pub fn longest_valid_parentheses(s: String) -> i32 {
    let mut max = 0;
    let mut stack = vec![-1];

    for (i, ch) in s.chars().enumerate() {
        if ch == '(' {
            stack.push(i as i32);
        } else {
            stack.pop();

            if stack.len() != 0 {
                max = cmp::max(max, i as i32 - stack.last().unwrap());
            } else {
                stack.push(i as i32);
            }
        }
    }

    max
}