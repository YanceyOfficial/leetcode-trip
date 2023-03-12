#[allow(unused)]
pub fn simplify_path(path: String) -> String {
    let dirs = path.split("/").collect::<Vec<&str>>();
    let mut stack = vec![];

    for dir in dirs {
        match dir {
            "." | "" => (),
            ".." => {
                if !stack.is_empty() {
                    stack.pop();
                }
            }
            _ => stack.push(dir),
        }
    }

    "/".to_string() + &stack.join("/")
}
