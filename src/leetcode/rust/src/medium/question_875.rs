#[allow(unused)]
pub fn min_eating_speed(piles: Vec<i32>, h: i32) -> i32 {
    let mut low = 1;
    let mut high = *piles.iter().max().unwrap();

    let mut k = high;
    while low < high {
        let speed = (low + high) / 2;
        let time = get_time(&piles, speed);

        if time <= h {
            k = speed;
            high = speed;
        } else {
            low = speed + 1;
        }
    }

    k
}

fn get_time(piles: &Vec<i32>, speed: i32) -> i32 {
    piles
        .iter()
        .map(|p| p / speed + if p % speed == 0 { 0 } else { 1 })
        .sum::<i32>()
}
