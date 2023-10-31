mod easy;
mod hard;
mod medium;

fn main() {
    let res = easy::question_14::longest_common_prefix(vec![
        "flow".to_string(),
        "flower".to_string(),
        "flight".to_string(),
    ]);

    println!("{:?}", res);
}
