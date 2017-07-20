/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    var i, j;
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {//时间复杂度O(n²)
            if (i !== j && (nums[i] + nums[j]) === target) {//关键点i和j不相同
                return [i, j];
            }
        }
    }
};

console.log(
    twoSum([3, 2, 4], 6)
);