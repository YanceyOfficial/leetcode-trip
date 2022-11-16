use std::cmp;

#[allow(unused)]
pub fn merge(intervals: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    let mut intervals = intervals;
    let n = intervals.len();
    let mut res: Vec<Vec<i32>> = vec![];
    if n == 0 {
        return res;
    }
    intervals.sort_by(|a, b| a[0].cmp(&b[0]));
    res.push(intervals[0].to_vec());


    for i in 1..n {
        let curr = &intervals[i];
        let mut peek = res.last_mut().unwrap();

        if curr[0] <= peek[1] {
            peek[1] = cmp::max(peek[1], curr[1]);
        } else {
            res.push(curr.to_vec());
        }
    }

    res
}
