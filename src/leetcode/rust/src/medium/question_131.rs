#[allow(unused)]
pub fn partition(s: String) -> Vec<Vec<String>> {
    let s = s
        .chars()
        .enumerate()
        .fold(vec![], |mut vec, (index, char)| {
            vec.push(char.to_string());
            vec
        });
    let n = s.len();
    let mut res = vec![];
    let mut dp = vec![vec![false; n]; n];

    for i in 0..n {
        for j in 0..=i {
            if i == j || i - j == 1 && s[i] == s[j] || i - j > 1 && s[i] == s[j] && dp[j + 1][i - 1]
            {
                dp[j][i] = true;
            } else {
                dp[j][i] = false;
            }
        }
    }

    backtrack(0, n, &s, &dp, &mut vec![], &mut res);

    res
}

fn backtrack(
    begin: usize,
    n: usize,
    vec: &Vec<String>,
    dp: &Vec<Vec<bool>>,
    track: &mut Vec<String>,
    res: &mut Vec<Vec<String>>,
) {
    if begin == n {
        res.push(track.to_vec());
        return;
    }

    for i in begin..n {
        if dp[begin][i] == true {
            track.push(vec[begin..(i + 1)].join(""));
            backtrack(i + 1, n, vec, dp, track, res);
            track.pop();
        }
    }
}
