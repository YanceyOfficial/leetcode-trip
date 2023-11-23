#[allow(unused)]
pub fn longest_common_prefix(strs: Vec<String>) -> String {
    let mut strs = strs;
    strs.sort();
    let mut prefix: &str = &strs[0];
    let mut has_found = false;

    while !has_found {
        has_found = strs.iter().all(|str| str.starts_with(prefix));

        if !has_found {
            prefix = &prefix[0..prefix.len() - 1];
        }
    }

    prefix.to_string()
}
