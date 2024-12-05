#[allow(unused)]
pub fn longest_common_prefix(strs: Vec<String>) -> String {
    let mut prefix: &str = &strs[0];

    loop {
        if strs.iter().all(|str| str.starts_with(prefix)) {
            break;
        } else {
            prefix = &prefix[0..prefix.len() - 1];
        }
    }

    prefix.to_string()
}
