mod easy;
mod hard;
mod medium;

fn main() {
    let res = medium::question_49::group_anagrams(vec![
        String::from("eat"),
        String::from("tea"),
        String::from("tan"),
        String::from("ate"),
        String::from("nat"),
        String::from("bat"),
    ]);

    println!("{:?}", res);
}
