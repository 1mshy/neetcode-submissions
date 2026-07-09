class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const m: Map<number, number> = new Map();
        for (let i = 0; i < nums.length; i++) {
            m.set(nums[i], i);
        }
        
        for (let index = 0; index < nums.length; index++) {
            const needed = m.get(target-nums[index]);
            if (needed===index) continue;
            if (needed !== undefined) {
                return [Math.min(index, needed), Math.max(index, needed)]
            }
        }

        return [0,1233]
    }
}
