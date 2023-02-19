#[allow(unused)]
pub fn permute_unique(nums: Vec<i32>) -> Vec<Vec<i32>> {
    let mut nums: Vec<i32> = nums;
    nums.sort();

    let mut used = vec![false; nums.len()];
    let mut res: Vec<Vec<i32>> = vec![];
    backtracking(&nums, &mut used, &mut vec![], &mut res);
    res
}

#[allow(unused)]
fn backtracking(nums: &Vec<i32>, used: &mut Vec<bool>, track: &mut Vec<i32>, res: &mut Vec<Vec<i32>>) {
    if track.len() == nums.len() {
        res.push(track.to_vec());
        return;
    }

    for i in 0..nums.len() {
        if i as i32 - 1 >= 0 && nums[i - 1] == nums[i] && !used[i - 1] {
            continue;
        }

        if (used[i]) {
            continue;
        }

        used[i] = true;
        track.push(nums[i]);
        backtracking(nums, used, track, res);
        track.pop();
        used[i] = false;
    }
}
