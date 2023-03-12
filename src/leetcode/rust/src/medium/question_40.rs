#[allow(unused)]
pub fn combination_sum2(candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
    let mut candidates: Vec<i32> = candidates;
    candidates.sort();

    let mut res: Vec<Vec<i32>> = vec![];
    let mut visited = vec![false; candidates.len()];

    dfs(0, 0, target, &candidates, &mut visited, &mut vec![], &mut res);
    res
}

#[allow(unused)]
fn dfs(
    begin: usize,
    sum: i32,
    target: i32,
    candidates: &Vec<i32>,
    visited: &mut Vec<bool>,
    track: &mut Vec<i32>,
    res: &mut Vec<Vec<i32>>,
) {
    if sum == target {
        res.push(track.to_vec());
        return;
    }

    for i in begin..candidates.len() {
        if i as i32 - 1 >= 0 && candidates[i - 1] == candidates[i] && !visited[i - 1] {
            continue;
        }

        if visited[i] {
            continue;
        }

        if sum < target {
            visited[i] = true;
            track.push(candidates[i]);
            dfs(i, sum + candidates[i], target, candidates, visited, track, res);
            track.pop();
            visited[i] = false;
        }
    }
}
