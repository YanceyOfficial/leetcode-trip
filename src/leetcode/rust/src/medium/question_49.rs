use std::collections::HashMap;

#[allow(unused)]
pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
    let mut map: HashMap<String, Vec<String>> = HashMap::with_capacity(strs.len());

    for str in strs {
        // 将字符串转为 Vec<u8>
        let mut order_vec = str.as_bytes().to_vec();
        // sort 会影响到原 vec, 所以要加 mut
        order_vec.sort();
        // vec 转字符串的小技巧
        let order_str = format!("{:?}", order_vec);

        map.entry(order_str)
            // push 方法由于 self 就是 &mut self, 所以无需解引用
            // 注意这里必须 clone 一下 str, 因为如果直接用 str, 所有权就被 and_modify 的闭包 move 走了,
            // 导致下面 or_insert 就没法使用 str 了
            .and_modify(|e| e.push(str.clone()))
            .or_insert(vec![str]);
    }

    // 先记住这个语法好了, 还没搞懂
    map.values().cloned().collect()
}
