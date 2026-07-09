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
        console.log(m)
        for (const [index, value] of nums.entries()) {
            const needed = m.get(target-value);
            if (needed===index) continue;
            if (needed !== undefined) {
                return [Math.min(index, needed), Math.max(index, needed)]
            }
        }

        return [0,1233]
    }
}
