#[allow(unused)]
pub fn peak_index_in_mountain_array(arr: Vec<i32>) -> i32 {
    let n = arr.len();
    let (mut low, mut high, mut ans) = (1, n - 2, 0);

    while low <= high {
        let mid = (low + high) / 2;
        if arr[mid] > arr[mid + 1] {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    ans as i32
}
