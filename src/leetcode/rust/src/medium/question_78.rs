#[allow(unused)]
pub fn subsets(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let mut res: Vec<Vec<i32>> = vec![];
    dfs(0, &nums, &mut vec![], &mut res);
    res
}

#[allow(unused)]
fn dfs(begin: usize, nums: &Vec<i32>, track: &mut Vec<i32>, res: &mut Vec<Vec<i32>>) {
    res.push(track.to_vec());

    for i in begin..nums.len() {
        track.push(nums[i]);
        dfs(i + 1, nums, track, res);
        track.pop();
    }
}
