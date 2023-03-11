#[allow(unused)]
pub fn permute_unique(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let mut nums: Vec<i32> = nums;
    nums.sort();

    let mut visited = vec![false; nums.len()];
    let mut res: Vec<Vec<i32>> = vec![];
    dfs(&nums, &mut visited, &mut vec![], &mut res);
    res
}

#[allow(unused)]
fn dfs(nums: &Vec<i32>, visited: &mut Vec<bool>, track: &mut Vec<i32>, res: &mut Vec<Vec<i32>>) {
    if track.len() == nums.len() {
        res.push(track.to_vec());
        return;
    }

    for i in 0..nums.len() {
        if i as i32 - 1 >= 0 && nums[i - 1] == nums[i] && !visited[i - 1] {
            continue;
        }

        if (visited[i]) {
            continue;
        }

        visited[i] = true;
        track.push(nums[i]);
        dfs(nums, visited, track, res);
        track.pop();
        visited[i] = false;
    }
}
