use std::cmp;

#[allow(unused)]
pub fn maximal_rectangle(matrix: Vec<Vec<char>>) -> i32 {
    let m = matrix.len();
    if m == 0 {
        return 0;
    };
    let n = matrix[0].len();

    let mut all_heights = vec![];
    for i in (0..m).rev() {
        let mut heights = vec![];

        for j in (0..n) {
            let mut max_height = 0;

            for k in (0..=i).rev() {
                if matrix[k][j] == '1' {
                    max_height += 1;
                } else {
                    break;
                }
            }

            heights.push(max_height);
        }

        all_heights.push(heights);
    }

    let mut max = 0;

    for heights in all_heights {
        max = cmp::max(max, largest_rectangle_area(heights));
    }

    max
}

fn largest_rectangle_area(heights: Vec<i32>) -> i32 {
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
