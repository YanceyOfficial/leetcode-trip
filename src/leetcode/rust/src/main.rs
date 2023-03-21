mod easy;
mod hard;
mod medium;

fn main() {
    let res = medium::question_40::combination_sum2(vec![10, 1, 2, 7, 6, 1, 5], 8);

    println!("{:?}", res);
}
