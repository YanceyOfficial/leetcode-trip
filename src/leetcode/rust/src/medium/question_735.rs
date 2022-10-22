pub fn asteroid_collision(asteroids: Vec<i32>) -> Vec<i32> {
    let mut stack = vec![];
    for asteroid in asteroids {
        let mut alive = true;

        while alive && asteroid < 0 && !stack.is_empty() && *stack.last().unwrap() > 0 {
            let last = *stack.last().unwrap();
            let curr = -asteroid;

            alive = curr > last;
            if curr >= last {
                stack.pop();
            }
        }

        if alive {
            stack.push(asteroid);
        }
    }

    stack
}
