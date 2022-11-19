mod easy;
mod hard;
mod medium;

fn main() {
    let res = medium::question_78::subsets(vec![1, 2, 3]);

    println!("{:?}", res);
}
