#[allow(unused)]
pub fn min_cost_climbing_stairs(cost: Vec<i32>) -> i32 {
    cost.iter()
        .fold((0, 0), |acc, x| (acc.1.min(acc.0 + x), acc.0 + x))
        .0
}
