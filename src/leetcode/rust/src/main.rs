mod easy;
mod hard;
mod medium;

fn main() {
    let res = medium::question_150::eval_rpn(vec![
        String::from("2"),
        String::from("1"),
        String::from("+"),
        String::from("3"),
        String::from("*"),
    ]);

    println!("{:?}", res);
}
