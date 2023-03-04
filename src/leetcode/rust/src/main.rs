mod easy;
mod hard;
mod medium;

fn main() {
    let res = easy::question_67::add_binary(String::from("11"), String::from("1"));

    println!("{:?}", res);
}
