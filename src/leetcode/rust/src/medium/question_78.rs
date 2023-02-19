#[allow(unused)]
pub fn subsets(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let mut res: Vec<Vec<i32>> = vec![];
    backtracking(0, &nums, &mut vec![], &mut res);
    res
}

#[allow(unused)]
fn backtracking(begin: usize, nums: &Vec<i32>, track: &mut Vec<i32>, res: &mut Vec<Vec<i32>>) {
    res.push(track.to_vec());

    for i in begin..nums.len() {
        track.push(nums[i]);
        backtracking(i + 1, nums, track, res);
        track.pop();
    }
}
