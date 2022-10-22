pub fn eval_rpn(tokens: Vec<String>) -> i32 {
    let mut stack = vec![];

    #[inline]
    fn calc(op: &str, a: i32, b: i32) -> i32 {
        match op {
            "*" => b * a,
            "/" => b / a,
            "+" => b + a,
            _ => b - a,
        }
    }

    for token in tokens.iter() {
        match token.parse::<i32>() {
            Ok(num) => stack.push(num),
            Err(_) => {
                let a = stack.pop().unwrap();
                let b = stack.pop().unwrap();
                stack.push(calc(token, a, b));
            }
        }
    }

    stack[0]
}
