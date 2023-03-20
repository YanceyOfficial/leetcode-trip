#[allow(unused)]
pub fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &mut Vec<i32>, n: i32) {
    let (mut p1, mut p2, mut tail, mut curr) = (m - 1, n - 1, m + n - 1, 0);

    while p1 >= 0 || p2 >= 0 {
        if p1 == -1 {
            curr = nums2[p2 as usize];
            p2 -= 1;
        } else if p2 == -1 {
            curr = nums1[p1 as usize];
            p1 -= 1;
        } else if nums1[p1 as usize] > nums2[p2 as usize] {
            curr = nums1[p1 as usize];
            p1 -= 1;
        } else {
            curr = nums2[p2 as usize];
            p2 -= 1;
        }

        nums1[tail as usize] = curr;
        tail -= 1;
    }
}
