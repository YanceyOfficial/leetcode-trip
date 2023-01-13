use std::collections::HashMap;

#[allow(unused)]
pub fn roman_to_int(s: String) -> i32 {
    let map = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
        .iter()
        .zip([1, 5, 10, 50, 100, 500, 1000])
        .collect::<HashMap<_, _>>();

    s.chars()
        .rev()
        .fold((0, 0), |acc, val| {
            let num = map[&val];
            (
                if num < acc.1 {
                    acc.0 - num
                } else {
                    acc.0 + num
                },
                num,
            )
        })
        .0
}
