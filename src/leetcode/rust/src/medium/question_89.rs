#[allow(unused)]
pub fn gray_code(n: i32) -> Vec<i32> {
    let mut res = vec![0];

    for i in 1..=n {
        let m = res.len();

        for j in (0..m).rev() {
            res.push(res[j] | (1 << (i - 1)));
        }
    }

    res
}
