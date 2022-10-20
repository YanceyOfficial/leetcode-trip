mod easy;
mod hard;
mod medium;

fn main() {
    let res = easy::question_953::is_alien_sorted(vec![
        String::from("eat"),
        String::from("tea"),
        String::from("tan"),
    ], String::from("hlabcdefgijkmnopqrstuvwxyz"));

    println!("{:?}", res);
}
