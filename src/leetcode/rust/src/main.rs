mod easy;
mod hard;
mod medium;

fn main() {
    let res = hard::question_84::largest_rectangle_area(vec![2, 1, 5, 6, 2, 3]);

    println!("{:?}", res);
}
