mod easy;
mod hard;
mod medium;

fn main() {
    let res = medium::question_31::next_permutation(&mut vec![1, 2, 3]);

    println!("{:?}", res);
}
