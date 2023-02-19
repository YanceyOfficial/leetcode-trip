#[allow(unused)]
pub fn combination_sum(candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
    let mut res: Vec<Vec<i32>> = vec![];
    backtracking(0, 0, target, &candidates, &mut vec![], &mut res);
    res
}

#[allow(unused)]
fn backtracking(
    begin: usize,
    sum: i32,
    target: i32,

    candidates: &Vec<i32>,
    track: &mut Vec<i32>,
    res: &mut Vec<Vec<i32>>,
) {
    if sum == target {
        res.push(track.to_vec());
        return;
    }

    for i in begin..candidates.len() {
        if sum < target {
            track.push(candidates[i]);
            backtracking(i, sum + candidates[i], target, candidates, track, res);
            track.pop();
        }
    }
}
