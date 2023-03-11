#[allow(unused)]
pub fn restore_ip_addresses(s: String) -> Vec<String> {
    let mut res: Vec<String> = vec![];
    let arr = s
        .as_bytes()
        .iter()
        .enumerate()
        .fold(vec![], |mut arr, (i, byte)| {
            arr.push((byte - b'0') as i32);
            arr
        });

    if arr.len() < 4 || arr.len() > 12 {
        return res;
    }

    dfs(0, 0, &arr, &mut vec![0; 4], &mut res);

    res
}

fn dfs(
    begin: usize,
    segment_idx: usize,
    arr: &Vec<i32>,
    track: &mut Vec<i32>,
    res: &mut Vec<String>,
) {
    if segment_idx == 4 {
        if begin == arr.len() {
            res.push(
                track
                    .iter()
                    .map(|x| x.to_string())
                    .collect::<Vec<_>>()
                    .join("."),
            );
        }

        return;
    }

    if begin == arr.len() {
        return;
    }

    if arr[begin] == 0 {
        track[segment_idx] = 0;
        dfs(begin + 1, segment_idx + 1, arr, track, res);
    }

    let mut segment = 0;
    for i in begin..arr.len() {
        segment = segment * 10 + arr[i];

        if segment > 0 && segment <= 255 {
            track[segment_idx] = segment;
            dfs(i + 1, segment_idx + 1, arr, track, res);
        } else {
            break;
        }
    }
}
