use std::cmp;

#[allow(unused)]
pub fn find_median_sorted_arrays(nums1: Vec<i32>, nums2: Vec<i32>) -> f64 {
    let m = nums1.len();
    let n = nums2.len();

    let left = (m + n + 1) / 2;
    let right = (m + n + 2) / 2;

    (find_kth(&nums1, 0, m - 1, &nums2, 0, n - 1, left)
        + find_kth(&nums1, 0, m - 1, &nums2, 0, n - 1, right))
        / 2.0
}

fn find_kth(
    arr1: &Vec<i32>,
    start1: usize,
    end1: usize,
    arr2: &Vec<i32>,
    start2: usize,
    end2: usize,
    k: usize,
) -> f64 {
    let m = end1 - start1 + 1;
    let n = end2 - start2 + 1;

    if m == 0 {
        return arr2[start2 + k - 1].into();
    }

    if n == 0 {
        return arr1[start1 + k - 1].into();
    }

    if k == 1 {
        return cmp::min(arr1[start1], arr2[start2]).into();
    }

    let i = start1 + cmp::min(m, k / 2) - 1;
    let j = start2 + cmp::min(n, k / 2) - 1;

    if arr1[i] > arr2[j] {
        return find_kth(arr1, start1, end1, arr2, j + 1, end2, k - (j - start2 + 1));
    } else {
        return find_kth(arr1, i + 1, end1, arr2, start2, end2, k - (i - start1 + 1));
    }
}
