#[allow(unused)]
pub fn find_median_sorted_arrays(nums1: Vec<i32>, nums2: Vec<i32>) -> f64 {
    let (m, n) = (nums1.len(), nums2.len());
    let mut is_odd = true;
    let mut total = m + n;

    if total % 2 == 0 {
        is_odd = false;
    }

    total /= 2;

    let mut arr = vec![];

    let (mut i, mut j) = (0, 0);

    while i + j <= total {
        if i == m {
            arr.append(&mut nums2[j..].to_vec());
            break;
        }

        if j == n {
            arr.append(&mut nums1[i..].to_vec());
            break;
        }

        if nums1[i] < nums2[j] {
            arr.push(nums1[i]);
            i += 1;
        } else {
            arr.push(nums2[j]);
            j += 1;
        }
    }

    println!("{:?}", arr);
    println!("{}", total);

    if is_odd {
        arr[total] as f64
    } else {
        (arr[total] + arr[total - 1]) as f64 / 2.0
    }
}
