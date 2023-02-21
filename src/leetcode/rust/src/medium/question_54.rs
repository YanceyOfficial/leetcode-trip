#[allow(unused)]
pub fn spiral_order(matrix: Vec<Vec<i32>>) -> Vec<i32> {
    let (mut top, mut right, mut bottom, mut left) = (0, matrix[0].len() - 1, matrix.len() - 1, 0);
    let mut res = vec![];

    while left <= right && top <= bottom {
        for i in left..=right {
            res.push(matrix[top][i]);
        }
        top += 1;

        for i in top..=bottom {
            res.push(matrix[i][right]);
        }
        if right == 0 {
            break;
        }
        right -= 1;

        if left > right || top > bottom {
            break;
        }

        for i in (left..=right).rev() {
            res.push(matrix[bottom][i]);
        }
        if bottom == 0 {
            break;
        }
        bottom -= 1;

        for i in (top..=bottom).rev() {
            res.push(matrix[i][left]);
        }
        left += 1;
    }

    res
}
