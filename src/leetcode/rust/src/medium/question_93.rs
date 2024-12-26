#[allow(unused)]
pub fn restore_ip_addresses(s: String) -> Vec<String> {
    let n = s.len();
    let mut res = Vec::new();
    if n < 4 || n > 12 {
        return res;
    }

    dfs(&s, 0, &mut Vec::new(), &mut res);
    res
}

// Helper function to validate the parts of the IP address
fn is_valid(part: &str) -> bool {
    if part.len() > 1 && part.starts_with('0') {
        return false;
    }
    if part.len() > 3 {
        return false;
    }
    if part.parse::<i32>().unwrap() > 255 {
        return false;
    }
    true
}

// Helper function to backtrack and restore IP addresses
fn dfs(s: &str, begin: usize, track: &mut Vec<String>, res: &mut Vec<String>) {
    if track.len() == 4 && begin == s.len() {
        res.push(track.join("."));
        return;
    }
    if track.len() == 4 {
        return;
    }

    for i in 1..4 {
        if begin + i > s.len() {
            break;
        }
        let part = &s[begin..begin + i];
        if is_valid(part) {
            track.push(part.to_string());
            dfs(s, begin + i, track, res);
            track.pop();
        }
    }
}
