#[allow(unused)]
pub fn count_and_say(n: i32) -> String {
    let mut n = n;
    let mut res = String::from("1");

    while n - 1 > 0 {
        let mut curr = '1';
        let mut count = 0;
        let mut say = String::from("");

        for ch in res.chars().rev() {
            if ch == curr {
                count += 1;
            } else {
                say = format!("{}{}{}", count, curr, say);
                curr = ch;
                count = 1;
            }
        }

        say = format!("{}{}{}", count, curr, say);
        res = say;
        n -= 1;
    }

    res
}
