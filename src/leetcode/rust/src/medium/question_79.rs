#[allow(unused)]
pub fn exist(board: Vec<Vec<char>>, word: String) -> bool {
    let (m, n) = (board.len(), board[0].len());
    let mut visited = vec![vec![false; n]; m];
    let word = word.chars().collect::<Vec<char>>();

    for row in 0..m {
        for col in 0..n {
            if board[row][col] == word[0] && dfs(&board, &word, &mut visited, row, col, 0) {
                return true;
            }
        }
    }

    false
}

fn dfs(
    board: &Vec<Vec<char>>,
    word: &Vec<char>,
    visited: &mut Vec<Vec<bool>>,
    row: usize,
    col: usize,
    i: usize,
) -> bool {
    if i == word.len() {
        return true;
    }

    let (m, n) = (board.len(), board[0].len());
    if row >= m || col >= n || visited[row][col] || board[row][col] != word[i] {
        return false;
    }

    visited[row][col] = true;
    // 这道题很巧妙的一点是不用纠结当 row 或 col 为 0 时, row - 1 和 col - 1 越界的问题
    // 我们知道这种情况会把 row 或 col 变成 usize::MAX, 但这道题恰好被上面的 row >= m 或 col >= n 兜住了
    let res = dfs(board, word, visited, row + 1, col, i + 1)
        || dfs(board, word, visited, row - 1, col, i + 1)
        || dfs(board, word, visited, row, col + 1, i + 1)
        || dfs(board, word, visited, row, col - 1, i + 1);
    visited[row][col] = false;

    res
}
