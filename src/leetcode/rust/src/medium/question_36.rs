#[allow(unused)]
pub fn is_valid_sudoku(board: Vec<Vec<char>>) -> bool {
    let mut rows = vec![vec![0; 9]; 9];
    let mut columns = vec![vec![0; 9]; 9];
    let mut sub_boxes = vec![vec![vec![0; 9]; 3]; 3];

    for i in 0..9 {
        for j in 0..9 {
            if let Some(num) = board[i][j].to_digit(10) {
                let idx = (num - 1) as usize;

                rows[i][idx] += 1;
                columns[j][idx] += 1;
                sub_boxes[i / 3][j / 3][idx] += 1;

                if rows[i][idx] > 1 || columns[j][idx] > 1 || sub_boxes[i / 3][j / 3][idx] > 1 {
                    return false;
                }
            }
        }
    }

    true
}
