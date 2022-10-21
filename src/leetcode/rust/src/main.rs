mod easy;
mod hard;
mod medium;

fn main() {
    let res = medium::question_539::find_min_difference(vec![
        String::from("00:00"),
        String::from("01:00"),
        String::from("23:59"),
    ]);

    println!("{:?}", res);
}
