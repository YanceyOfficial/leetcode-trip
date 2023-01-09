#[allow(unused)]
pub fn convert(s: String, num_rows: i32) -> String {
    if num_rows < 2 {
        return s;
    }
    let n = s.len();
    let vec = s
        .chars()
        .collect::<Vec<char>>()
        .iter()
        .map(|&x| x.to_string())
        .collect::<Vec<String>>();
    let mut arr = vec![String::from(""); num_rows as usize];
    let cycle = (num_rows - 1) * 2;

    for i in 0..n {
        let carry = (i as i32) % cycle;
        let idx = if carry < num_rows {
            carry
        } else {
            cycle - carry
        };

        // impl Add<&str> for String {
        //     type Output = String;
        
        //     #[inline]
        //     fn add(mut self, other: &str) -> String {
        //         self.push_str(other);
        //         self
        //     }
        // }
        // 注意字符串加法必须是 String + &str
        arr[idx as usize] += &vec[i];
    }

    arr.join("")
}
