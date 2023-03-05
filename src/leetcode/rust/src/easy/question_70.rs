#[allow(unused)]
pub fn climb_stairs(n: i32) -> i32 {
    let mut prev = 1;
    let mut curr = 1;

    for i in 2..=(n as usize) {
        let sum = prev + curr;
        prev = curr;
        curr = sum;
    }

    curr
}
