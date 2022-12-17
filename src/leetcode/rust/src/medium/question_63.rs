#[allow(unused)]
pub fn unique_paths_with_obstacles(obstacle_grid: Vec<Vec<i32>>) -> i32 {
    let m = obstacle_grid.len();
    let n = obstacle_grid[0].len();
    let mut dp = vec![vec![0; n]; m];

    for i in 0..m {
        match obstacle_grid[i][0] == 0 {
            true => dp[i][0] = 1,
            false => break,
        }
    }

    for j in 0..n {
        match obstacle_grid[0][j] == 0 {
            true => dp[0][j] = 1,
            false => break,
        }
    }

    for i in 1..m {
        for j in 1..n {
            if obstacle_grid[i][j] == 0 {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }

    dp[m - 1][n - 1]
}
