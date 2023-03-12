#[allow(unused)]
pub fn generate_parenthesis(n: i32) -> Vec<String> {
    let mut res: Vec<String> = vec![];
    dfs(n, n, &mut vec![], &mut res);
    res
}

#[allow(unused)]
fn dfs(left: i32, right: i32, track: &mut Vec<String>, res: &mut Vec<String>) {
    if right < left {
        return;
    }

    if left < 0 || right < 0 {
        return;
    }

    if left == 0 && right == 0 {
        res.push(track.join(""));
        return;
    }

    track.push("(".to_string());
    dfs(left - 1, right, track, res);
    track.pop();

    track.push(")".to_string());
    dfs(left, right - 1, track, res);
    track.pop();
}
