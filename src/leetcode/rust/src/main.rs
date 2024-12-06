mod easy;
mod hard;
mod medium;

fn main() {
    let res = medium::question_18::four_sum(vec![1, 0, -1, 0, -2, 2], 0);

    println!("{:?}", res);
}
