use std::collections::HashMap;

pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
    let mut map: HashMap<String, Vec<String>> = HashMap::with_capacity(strs.len());

    for str in strs {
        let mut order_vec = str.as_bytes().to_vec();
        order_vec.sort();
        let order_str = format!("{:?}", order_vec);

        map.entry(order_str)
            .and_modify(|e| e.push(str.clone()))
            .or_insert(vec![str]);
    }

    map.values().cloned().collect()
}
