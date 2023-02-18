mod easy;
mod hard;
mod medium;

fn main() {
    let res = hard::question_51::solve_n_queens(4);

    println!("{:?}", res);
}
