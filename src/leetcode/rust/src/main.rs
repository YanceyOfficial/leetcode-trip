mod easy;
mod hard;
mod medium;

fn main() {
    let res = hard::question_52::total_n_queens(4);

    println!("{:?}", res);
}
