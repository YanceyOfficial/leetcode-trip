use std::collections::HashMap;

#[allow(unused)]
pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
    let mut map: HashMap<String, Vec<String>> = HashMap::new();
    
    for str in strs {
        let mut order_vec = str.chars().collect::<Vec<char>>();
        order_vec.sort();
        let order_str = order_vec.iter().collect::<String>();

        map.entry(order_str).or_insert(Vec::new()).push(str);
    }

    map.values().cloned().collect()
}
