use std::cmp;

#[allow(unused)]
pub fn min_flips_mono_incr(s: String) -> i32 {
    let mut dp0 = 0;
    let mut dp1 = 0;

    for byte in s.as_bytes() {
        dp1 = cmp::min(dp0, dp1) + (b'1' - byte) as i32;
        dp0 += (byte - b'0') as i32;
    }

    cmp::min(dp0, dp1)
}
