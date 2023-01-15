mod easy;
mod hard;
mod medium;

fn main() {
    let res = medium::question_15::three_sum(vec![-1, 0, 1, 2, -1, -4]);

    println!("{:?}", res);
}
