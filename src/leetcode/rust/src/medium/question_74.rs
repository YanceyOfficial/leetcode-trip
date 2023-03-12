#[allow(unused)]
pub fn search_matrix(matrix: Vec<Vec<i32>>, target: i32) -> bool {
    let (m, n) = (matrix.len(), matrix[0].len());
    let (mut left, mut right) = (0, m * n - 1);

    while left <= right {
        let mid = (left + right) / 2;
        let mid_num = matrix[mid / n][mid % n];

        if (mid_num < target) {
            left = mid + 1;
        } else if mid_num > target {
            if (mid == 0) {
                break;
            }

            right = mid - 1;
        } else {
            return true;
        }
    }

    return false;
}
