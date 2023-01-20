mod easy;
mod hard;
mod medium;

fn main() {
    let res = easy::question_20::is_valid("()[]{}".to_string());

    println!("{:?}", res);
}
