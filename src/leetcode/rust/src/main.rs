mod easy;
mod hard;
mod medium;

fn main() {
    let res = medium::question_316::remove_duplicate_letters(String::from("cbacdcbc"));

    println!("{:?}", res);
}
