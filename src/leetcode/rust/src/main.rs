mod easy;
mod hard;
mod medium;

fn main() {
    let res = medium::question_97::is_interleave(
        String::from("db"),
        String::from("b"),
        String::from("cbb"),
    );

    println!("{:?}", res);
}
