mod easy;
mod hard;
mod medium;

fn main() {
    let res = medium::question_735::asteroid_collision(vec![5, 10, -5]);

    println!("{:?}", res);
}
