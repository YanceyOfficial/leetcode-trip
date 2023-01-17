mod easy;
mod hard;
mod medium;

fn main() {
    let res = medium::question_17::letter_combinations("23".to_string());

    println!("{:?}", res);
}
