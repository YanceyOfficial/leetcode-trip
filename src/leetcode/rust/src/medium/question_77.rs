#[allow(unused)]
pub fn combine(n: i32, k: i32) -> Vec<Vec<i32>> {
    let mut res: Vec<Vec<i32>> = vec![];
    dfs(1, n as usize, k as usize, &mut vec![], &mut res);
    res
}

#[allow(unused)]
fn dfs(begin: usize, n: usize, k: usize, track: &mut Vec<i32>, res: &mut Vec<Vec<i32>>) {
    if track.len() == k {
        res.push(track.to_vec());
        return;
    }

    for i in begin..=n {
        if !track.contains(&(i as i32)) {
            track.push(i as i32);
            dfs(i, n, k, track, res);
            track.pop();
        }
    }
}
