use std::cmp;

#[allow(unused)]
pub fn min_path_sum(grid: Vec<Vec<i32>>) -> i32 {
    let rows = grid.len();
    let columns = grid[0].len();
    if rows == 0 || columns == 0 {
        return 0;
    }

    let mut dp = vec![vec![0; columns]; rows];
    dp[0][0] = grid[0][0];

    for i in 1..rows {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }

    for j in 1..columns {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }

    for i in 1..rows {
        for j in 1..columns {
            dp[i][j] = cmp::min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }

    dp[rows - 1][columns - 1]
}
