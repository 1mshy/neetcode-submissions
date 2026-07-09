use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut m = HashMap::new();
        for i in 0..nums.len() {
            m.insert(nums.get(i).unwrap(), i);
        }
        for i in 0..nums.len() {
            let n = &target-&nums[i];
            let needed = m.get(&n);
            if needed == None {
                continue;
            }
            let needed_unpacked = needed.unwrap();
            if *needed_unpacked == i {
                continue;
            }
            else if i < *needed_unpacked {
                return vec![i as i32, *needed_unpacked as i32];
            }
            
            return vec![*needed_unpacked as i32, i as i32];
        }
        vec![]
    }
}