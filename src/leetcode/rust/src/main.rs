mod easy;
mod hard;
mod medium;

fn main() {
    let res = medium::question_6::convert(String::from("PAYPALISHIRING"), 4);

    println!("{:?}", res);
}
