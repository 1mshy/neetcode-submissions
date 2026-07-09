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
        
        for (const [index, value] of nums.entries()) {
            const needed = m.get(target-value);
            if (needed===index) continue;
            if (needed !== undefined) {
                return [Math.min(index, needed)+1, Math.max(index, needed)+1]
            }
        }

        return [0,1233]
    }
}
