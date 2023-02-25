#[allow(unused)]
pub fn get_permutation(n: i32, k: i32) -> String {
    let mut res = String::new();
    let mut count = 0;
    let mut used = vec![false; n as usize];

    backtracking(n, k, &mut res, &mut count, &mut used, &mut vec![]);

    res
}

fn backtracking(
    n: i32,
    k: i32,
    res: &mut String,
    count: &mut i32,
    used: &mut Vec<bool>,
    track: &mut Vec<i32>,
) {
    if track.len() == n as usize {
        *count += 1;

        if *count == k {
            *res = track.iter().map(|x| x.to_string()).collect::<String>();
            return;
        }
    }

    for i in 0..(n as usize) {
        if used[i] {
            continue;
        }

        used[i] = true;
        track.push(i as i32 + 1);
        backtracking(n, k, res, count, used, track);
        track.pop();
        used[i] = false;
    }
}
