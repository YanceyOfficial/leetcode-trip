use std::cmp;

fn parse_time(time: &String) -> i32 {
    let vec: Vec<&str> = time.split(":").collect();
    let hour = vec[0].parse::<i32>().unwrap();
    let minute = vec[1].parse::<i32>().unwrap();

    hour * 60 + minute
}

pub fn find_min_difference(time_points: Vec<String>) -> i32 {
    let n = time_points.len();

    if n > 24 * 60 {
        return 0;
    }

    let mut times = time_points
        .iter()
        .enumerate()
        .fold(vec![0; n], |mut times, (i, time)| {
            times[i] = parse_time(time);
            times
        });
    times.sort();

    let mut min = times[0] + 24 * 60 - times[times.len() - 1];

    for i in 1..n {
        let prev = times[i - 1];
        let curr = times[i];
        min = cmp::min(min, curr - prev)
    }

    min
}
