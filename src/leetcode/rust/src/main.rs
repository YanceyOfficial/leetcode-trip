mod easy;
mod hard;
mod medium;

fn main() {
    let res = medium::question_8::my_atoi(String::from("  -43"));

    println!("{:?}", res);
}
