mod easy;
mod hard;
mod medium;

fn main() {
    let res = medium::question_18::four_sum(
        vec![1000000000, 1000000000, 1000000000, 1000000000],
        -294967296,
    );

    println!("{:?}", res);
}
