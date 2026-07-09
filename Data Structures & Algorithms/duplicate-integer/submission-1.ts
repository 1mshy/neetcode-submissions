class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const a = new Set()
        for (let num of nums) {
            if (a.has(num)) {
                return true
            }
            a.add(num);
        }
        return false;
    }
}
