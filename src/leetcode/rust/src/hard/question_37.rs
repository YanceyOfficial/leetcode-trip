#[allow(unused)]
pub fn solve_sudoku(board: &mut Vec<Vec<char>>) {
    backtracking(board, 0, 0);
}

fn backtracking(board: &mut Vec<Vec<char>>, row: usize, col: usize) -> bool {
    if col == 9 {
        return backtracking(board, row + 1, 0);
    }

    if row == 9 {
        return true;
    }

    for i in row..9 {
        for j in col..9 {
            if board[i][j] != '.' {
                return backtracking(board, i, j + 1);
            }

            for ch in '1'..='9' {
                if !is_valid(board, row, col, ch) {
                    continue;
                }

                board[i][j] = ch;
                if backtracking(board, i, j + 1) {
                    return true;
                }
                board[i][j] = '.';
            }

            return false;
        }
    }

    return true;
}

fn is_valid(board: &Vec<Vec<char>>, row: usize, col: usize, ch: char) -> bool {
    let ret: Result<i32, std::io::Error> = Ok(1);
    if let Err(_) = ret {}

    for i in 0..9 {
        if board[row][i] == ch {
            return false;
        }

        if board[i][col] == ch {
            return false;
        }

        if board[row / 3 * 3 + (i / 3)][col / 3 * 3 + (i % 3)] == ch {
            return false;
        }
    }

    return true;
}
