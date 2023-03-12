#[allow(unused)]
pub fn permute(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let mut res: Vec<Vec<i32>> = vec![];
    dfs(&nums, &mut vec![], &mut res);
    res
}

#[allow(unused)]
fn dfs(nums: &Vec<i32>, track: &mut Vec<i32>, res: &mut Vec<Vec<i32>>) {
    if track.len() == nums.len() {
        res.push(track.to_vec());
        return;
    }

    for num in nums {
        if !track.contains(num) {
            track.push(*num);
            dfs(nums, track, res);
            track.pop();
        }
    }
}
