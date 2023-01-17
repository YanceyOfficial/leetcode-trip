#[allow(unused)]
pub fn letter_combinations(digits: String) -> Vec<String> {
    let mut res = vec![];

    if digits.len() == 0 {
        return res;
    }

    let digits = digits.as_bytes().iter().fold(vec![], |mut digits, b| {
        digits.push((b - b'0') as usize);
        digits
    });

    let map = vec![
        vec!["a", "b", "c"],
        vec!["d", "e", "f"],
        vec!["g", "h", "i"],
        vec!["j", "k", "l"],
        vec!["m", "n", "o"],
        vec!["p", "q", "r", "s"],
        vec!["t", "u", "v"],
        vec!["w", "x", "y", "z"],
    ];

    backtrack(&mut res, &mut vec![], &map, &digits);

    res
}

fn backtrack(
    res: &mut Vec<String>,
    track: &mut Vec<String>,
    map: &Vec<Vec<&str>>,
    digits: &Vec<usize>,
) {
    let n = track.len();

    if n == digits.len() {
        res.push(track.join(""));
        return;
    }

    let mapped_digits = &map[digits[n] - 2];

    for i in 0..mapped_digits.len() {
        track.push(mapped_digits[i].to_string());
        backtrack(res, track, map, digits);
        track.pop();
    }
}
