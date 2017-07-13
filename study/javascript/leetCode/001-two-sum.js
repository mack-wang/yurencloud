/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var i, j;
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {
            if ((nums[i] + nums[j]) === target) {
                console.log([i + 1, j + 1]);
                return false;
            }
        }
    }
};

twoSum([2, 7, 11, 15], 9);