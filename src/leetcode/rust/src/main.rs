mod easy;
mod hard;
mod medium;

fn main() {
    let res = medium::question_54::spiral_order(vec![
        vec![1, 2, 3, 4],
        vec![5, 6, 7, 8],
        vec![9, 10, 11, 12],
    ]);

    println!("{:?}", res);
}
