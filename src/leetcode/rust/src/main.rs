mod easy;
mod hard;
mod medium;

fn main() {
    let res = hard::question_85::maximal_rectangle(vec![
        vec!['1', '0', '1', '0', '0'],
        vec!['1', '0', '1', '1', '1'],
        vec!['1', '1', '1', '1', '1'],
        vec!['1', '0', '0', '1', '0'],
    ]);

    println!("{:?}", res);
}
