#[allow(unused)]
pub fn total_n_queens(n: i32) -> i32 {
    let mut count = 0;
    let mut board = vec![vec!['.'; n as usize]; n as usize];

    dfs(&mut board, &mut count, 0);

    count
}

fn dfs(board: &mut Vec<Vec<char>>, count: &mut i32, row: usize) {
    let n = board.len();

    if row == n {
        *count += 1;
        return;
    }

    for col in 0..n {
        if !is_valid(board, row, col) {
            continue;
        }

        board[row][col] = 'Q';
        dfs(board, count, row + 1);
        board[row][col] = '.';
    }
}

fn is_valid(board: &mut Vec<Vec<char>>, row: usize, col: usize) -> bool {
    let n = board.len();

    for i in 0..row {
        if board[i][col] == 'Q' {
            return false;
        }
    }

    let (mut i, mut j) = (row as i32 - 1, col as i32 + 1);
    while i >= 0 && j < n as i32 {
        if board[i as usize][j as usize] == 'Q' {
            return false;
        }

        i -= 1;
        j += 1;
    }

    let (mut i, mut j) = (row as i32 - 1, col as i32 - 1);
    while i >= 0 && j >= 0 {
        if board[i as usize][j as usize] == 'Q' {
            return false;
        }

        i -= 1;
        j -= 1;
    }

    true
}
