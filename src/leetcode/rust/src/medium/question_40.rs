#[allow(unused)]
pub fn combination_sum2(candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
    let mut candidates: Vec<i32> = candidates;
    candidates.sort();

    let mut res: Vec<Vec<i32>> = vec![];
    let mut used = vec![false; candidates.len()];

    backtracking(0, 0, target, &candidates, &mut used, &mut vec![], &mut res);
    res
}

#[allow(unused)]
fn backtracking(
    begin: usize,
    sum: i32,
    target: i32,
    candidates: &Vec<i32>,
    used: &mut Vec<bool>,
    track: &mut Vec<i32>,
    res: &mut Vec<Vec<i32>>,
) {
    if sum == target {
        res.push(track.to_vec());
        return;
    }

    for i in begin..candidates.len() {
        if i as i32 - 1 >= 0 && candidates[i - 1] == candidates[i] && !used[i - 1] {
            continue;
        }

        if used[i] {
            continue;
        }

        if sum < target {
            used[i] = true;
            track.push(candidates[i]);
            backtracking(i, sum + candidates[i], target, candidates, used, track, res);
            track.pop();
            used[i] = false;
        }
    }
}
