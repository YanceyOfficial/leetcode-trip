use std::collections::HashMap;

#[allow(unused)]
pub fn is_scramble(s1: String, s2: String) -> bool {
    let mut cache = HashMap::new();
    dfs(&s1, &s2, &mut cache)
}

fn dfs(s1: &str, s2: &str, cache: &mut HashMap<String, bool>) -> bool {
    if s1.len() != s2.len() {
        return false;
    }

    if s1 == s2 {
        return true;
    }

    if !check(&s1, &s2) {
        return false;
    }

    let key = s1.to_string() + "_" + s2;
    if let Some(x) = cache.get(&key) {
        return *x;
    }

    let n = s1.len();
    for i in 1..n {
        let (x, y) = (&s1[0..i], &s1[i..]);
        let (a, b) = (&s2[0..i], &s2[i..]);
        let (c, d) = (&s2[0..(n - i)], &s2[(n - i)..]);

        if (dfs(x, a, cache) && dfs(y, b, cache)) || (dfs(x, d, cache) && dfs(y, c, cache)) {
            cache.entry(key.to_string()).or_insert(true);
            return true;
        }
    }

    cache.entry(key.to_string()).or_insert(false);
    false
}

fn check(s1: &str, s2: &str) -> bool {
    let mut s1 = s1.split("").collect::<Vec<&str>>();
    s1.sort();
    s1.join("");

    let mut s2 = s2.split("").collect::<Vec<&str>>();
    s2.sort();
    s2.join("");

    s1 == s2
}
