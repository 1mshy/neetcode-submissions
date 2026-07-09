class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        m = {}
        for i in range(0, len(nums)):
            m[nums[i]] = i
        
        for i in range(0, len(nums)):
            needed = m.get(target-nums[i])
            if needed==i: 
                continue
            elif needed != None:
                return [min(i, needed), max(i,needed)]

        return [0,1234]
