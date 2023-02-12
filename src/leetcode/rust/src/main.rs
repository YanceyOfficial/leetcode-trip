mod easy;
mod hard;
mod medium;

fn main() {
    let res = hard::question_42::trap(vec![1, 2, 3]);

    println!("{:?}", res);
}
