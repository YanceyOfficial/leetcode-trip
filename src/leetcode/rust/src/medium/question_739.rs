#[allow(unused)]
pub fn daily_temperatures(temperatures: Vec<i32>) -> Vec<i32> {
    let n = temperatures.len();
    let mut stack = vec![];
    let mut res = vec![0; n];

    for (i, temperature) in temperatures.iter().enumerate() {
        while !stack.is_empty() && temperatures[stack[stack.len() - 1]] < *temperature {
            let idx = stack.pop().unwrap();
            res[idx] = (i - idx) as i32;
        }

        stack.push(i);
    }

    res
}
