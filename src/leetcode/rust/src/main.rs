mod easy;
mod hard;
mod medium;

fn main() {
    let res = hard::question_72::min_distance(
        String::from("horse"),
        String::from("ros"),
    );

    println!("{:?}", res);
}
