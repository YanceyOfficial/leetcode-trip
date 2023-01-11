use std::cmp;

#[allow(unused)]
pub fn max_area(height: Vec<i32>) -> i32 {
    let (mut i, mut j, mut max) = (0, height.len() - 1, 0);

    while i < j {
        let min = cmp::min(height[i], height[j]);
        max = cmp::max(max, min * (j - i) as i32);

        if height[i] < height[j] {
            i += 1;
        } else {
            j -= 1;
        }
    }

    max
}
