#[allow(unused)]
pub fn subsets_with_dup(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let mut res = Vec::new();
    let mut visited = vec![false; nums.len()];

    let mut nums = nums;
    nums.sort();

    dfs(0, &nums, &mut visited, &mut vec![], &mut res);

    res
}

fn dfs(
    begin: usize,
    nums: &Vec<i32>,
    visited: &mut Vec<bool>,
    track: &mut Vec<i32>,
    res: &mut Vec<Vec<i32>>,
) {
    res.push(track.to_vec());

    for i in begin..nums.len() {
        if i >= 1 && nums[i - 1] == nums[i] && !visited[i - 1] {
            continue;
        }

        if visited[i] {
            continue;
        }

        track.push(nums[i]);
        visited[i] = true;
        dfs(i + 1, nums, visited, track, res);
        track.pop();
        visited[i] = false;
    }
}
