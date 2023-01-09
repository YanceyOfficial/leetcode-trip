mod easy;
mod hard;
mod medium;

fn main() {
    let res = hard::question_4::find_median_sorted_arrays(vec![1, 2], vec![3, 4]);

    println!("{:?}", res);
}
