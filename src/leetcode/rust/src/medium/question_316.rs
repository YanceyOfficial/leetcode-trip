use std::collections::HashMap;

#[allow(unused)]
pub fn remove_duplicate_letters(s: String) -> String {
    let mut remain = HashMap::new();

    for char in s.as_bytes() {
        remain.entry(char).and_modify(|e| *e += 1).or_insert(1);
    }

    let mut stack = vec![];

    for char in s.as_bytes() {
        if !stack.contains(char) {
            while !stack.is_empty()
                && stack[stack.len() - 1] > *char
                && remain.get(&stack[stack.len() - 1]).unwrap() > &0
            {
                stack.pop();
            }

            stack.push(*char);
        }

        remain.entry(char).and_modify(|e| *e -= 1);
    }

    stack.iter().map(|&s| s as char).collect::<String>()
}
