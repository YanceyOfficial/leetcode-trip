#[allow(unused)]
pub fn get_permutation(n: i32, k: i32) -> String {
    let mut res = String::new();
    let mut count = 0;
    let mut visited = vec![false; n as usize];

    dfs(n, k, &mut res, &mut count, &mut visited, &mut vec![]);

    res
}

fn dfs(
    n: i32,
    k: i32,
    res: &mut String,
    count: &mut i32,
    visited: &mut Vec<bool>,
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
        if visited[i] {
            continue;
        }

        visited[i] = true;
        track.push(i as i32 + 1);
        dfs(n, k, res, count, visited, track);
        track.pop();
        visited[i] = false;
    }
}
