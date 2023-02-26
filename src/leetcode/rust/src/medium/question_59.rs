#[allow(unused)]
pub fn generate_matrix(n: i32) -> Vec<Vec<i32>> {
    let n = n as usize;
    let mut matrix = vec![vec![0; n]; n];
    let (mut top, mut right, mut bottom, mut left) = (0, n - 1, n - 1, 0);
    let mut val = 1;

    while val <= (n * n) as i32 {
        for i in left..=right {
            matrix[top][i] = val;
            val += 1;
        }
        top += 1;

        for i in top..=bottom {
            matrix[i][right] = val;
            val += 1;
        }
        if right == 0 {
            break;
        }
        right -= 1;

        for i in (left..=right).rev() {
            matrix[bottom][i] = val;
            val += 1;
        }
        if bottom == 0 {
            break;
        }
        bottom -= 1;

        for i in (top..=bottom).rev() {
            matrix[i][left] = val;
            val += 1;
        }
        left += 1;
    }

    matrix
}
