#[allow(unused)]
pub fn is_number(s: String) -> bool {
    let min = usize::MIN;
    let mut state = 0;
    let finals = [false, false, false, true, false, true, true, false, true];
    let transfer = [
        [0, 1, 6, 2, min, min],
        [min, min, 6, 2, min, min],
        [min, min, 3, min, min, min],
        [8, min, 3, min, 4, min],
        [min, 7, 5, min, min, min],
        [8, min, 5, min, min, min],
        [8, min, 6, 3, 4, min],
        [min, min, 5, min, min, min],
        [8, min, min, min, min, min],
    ];

    for ch in s.chars() {
        state = transfer[state][make(ch)];

        if state == min {
            return false;
        }
    }

    finals[state]
}

fn make(ch: char) -> usize {
    match ch {
        ' ' => 0,
        '+' | '-' => 1,
        '.' => 3,
        'e' | 'E' => 4,
        '0'..='9' => 2,
        _ => 5,
    }
}
