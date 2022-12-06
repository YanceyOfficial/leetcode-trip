use std::cmp;

#[allow(unused)]
pub fn min_cost(costs: Vec<Vec<i32>>) -> i32 {
    let mut a = costs[0][0];
    let mut b = costs[0][1];
    let mut c = costs[0][2];

    for i in 1..costs.len() {
        let d = cmp::min(b, c) + costs[i][0];
        let e = cmp::min(a, c) + costs[i][1];
        let f = cmp::min(a, b) + costs[i][2];

        a = d;
        b = e;
        c = f;
    }

    cmp::min(a, cmp::min(b, c))
}
