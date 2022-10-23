use std::cmp;

pub fn largest_rectangle_area(heights: Vec<i32>) -> i32 {
    let n = heights.len();
    let mut left: Vec<isize> = vec![-1; n];
    let mut right = vec![n; n];
    let mut stack = vec![];

    for i in 0..n {
        while !stack.is_empty() && heights[stack[stack.len() - 1]] > heights[i] {
            right[stack.pop().unwrap()] = i;
        }

        stack.push(i);
    }

    for i in (0..n).rev() {
        while !stack.is_empty() && heights[stack[stack.len() - 1]] > heights[i] {
            left[stack.pop().unwrap()] = i as isize;
        }

        stack.push(i);
    }

    let mut max = 0;
    for i in 0..n {
        let height = heights[i];
        let left_idx = left[i];
        let right_idx = right[i];
        max = cmp::max(max, height * (right_idx as i32 - left_idx as i32 - 1));
    }

    max
}
