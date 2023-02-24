use std::cmp;

#[allow(unused)]
pub fn insert(intervals: Vec<Vec<i32>>, new_interval: Vec<i32>) -> Vec<Vec<i32>> {
    let n = intervals.len();
    let mut new_interval = new_interval;
    let mut new_intervals = vec![];
    let mut i = 0;

    while i < n && intervals[i][1] < new_interval[0] {
        new_intervals.push(intervals[i].to_vec());
        i += 1;
    }

    while i < n && intervals[i][0] <= new_interval[1] {
        new_interval[0] = cmp::min(new_interval[0], intervals[i][0]);
        new_interval[1] = cmp::max(new_interval[1], intervals[i][1]);
        i += 1;
    }
    new_intervals.push(new_interval.to_vec());

    while i < n {
        new_intervals.push(intervals[i].to_vec());
        i += 1;
    }

    new_intervals
}
