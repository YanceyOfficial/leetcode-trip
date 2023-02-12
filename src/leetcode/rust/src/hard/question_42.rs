use std::cmp;

#[allow(unused)]
pub fn trap(height: Vec<i32>) -> i32 {
    let n = height.len();
    let mut stack: Vec<usize> = vec![];
    let mut ans = 0;

    for i in 0..n {
        while stack.len() > 0 && height[i] > height[*stack.last().unwrap()] {
            let top = stack.pop().unwrap();

            if stack.len() == 0 {
                break;
            }

            let left = *stack.last().unwrap();
            let curr_width = (i - left - 1) as i32;
            let curr_height = cmp::min(height[left], height[i]) - height[top];
            ans += curr_width * curr_height;
        }

        stack.push(i);
    }

    ans
}
