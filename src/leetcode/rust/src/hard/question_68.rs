#[allow(unused)]
pub fn full_justify(words: Vec<String>, max_width: i32) -> Vec<String> {
    let n = words.len();
    let mut res = vec![];
    let mut i = 0;

    while i < n {
        let mut line = vec![];

        let mut curr_line_len = words[i].len();
        line.push(words[i].to_string());
        i += 1;
        while i < n && curr_line_len + 1 + words[i].len() <= max_width as usize {
            curr_line_len += 1 + words[i].len();
            line.push(words[i].to_string());
            i += 1;
        }

        if i == n {
            let mut str = line.join(" ");
            for _ in 0..(max_width as usize - str.len()) {
                str += " ";
            }
            res.push(str);
        } else if i < n && line.len() == 1 {
            let mut str = line[0].to_string();
            for _ in 0..(max_width as usize - str.len()) {
                str += " ";
            }
            res.push(str);
        } else if i < n && line.len() > 1 {
            let total_word_width = curr_line_len - (line.len() - 1);
            let total_space_width = max_width as usize - total_word_width;

            let mut carry = total_space_width % (line.len() - 1);
            let space_item_width = total_space_width / (line.len() - 1);

            let mut space_item = String::new();
            for _ in 0..space_item_width {
                space_item += " ";
            }

            for i in 0..(line.len() - 1) {
                if carry > 0 {
                    line[i] += (space_item.to_string() + " ").as_str();
                    carry -= 1;
                } else {
                    line[i] += space_item.as_str();
                }
            }

            res.push(line.join(""));
        }
    }

    res
}
