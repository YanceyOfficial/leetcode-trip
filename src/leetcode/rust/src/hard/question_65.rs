#[allow(unused)]
pub fn is_number(s: String) -> bool {
    // 由于 transfers 中的元素要作为索引使用, 因此得是 usize 类型
    // 所以就不能和 JavaScript 的实现一样将 illegal 的情况设为 -1, 我们用 usize::MIN 来代替
    const MIN: usize = usize::MIN;
    let finals = [false, false, false, true, false, true, true, false, true];
    let transfer = [
        [0, 1, 6, 2, MIN, MIN],
        [MIN, MIN, 6, 2, MIN, MIN],
        [MIN, MIN, 3, MIN, MIN, MIN],
        [8, MIN, 3, MIN, 4, MIN],
        [MIN, 7, 5, MIN, MIN, MIN],
        [8, MIN, 5, MIN, MIN, MIN],
        [8, MIN, 6, 3, 4, MIN],
        [MIN, MIN, 5, MIN, MIN, MIN],
        [8, MIN, MIN, MIN, MIN, MIN],
    ];

    let mut state = 0;
    for ch in s.chars() {
        state = transfer[state][make(ch)];

        if state == MIN {
            return false;
        }
    }

    finals[state]
}

fn make(ch: char) -> usize {
    match ch {
        ' ' => 0,
        '+' | '-' => 1,
        '0'..='9' => 2,
        '.' => 3,
        'e' | 'E' => 4,
        _ => 5,
    }
}
