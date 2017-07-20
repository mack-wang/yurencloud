/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var compare = function (x, y) {
        if (x < y) {
            return -1;
        } else if (x > y) {
            return 1;
        } else {
            return 0;
        }
    };
    var length = nums1.length + nums2.length;
    var arr = nums1.concat(nums2).sort(compare);//先合并数组，再进行排序，若认排序是以字符串ASCII的序号为排序 10<2，所以要加参数compare

    if (length % 2) {//取模判断奇偶
        return arr[(length - 1) / 2];
    } else {
        return (arr[(length / 2) - 1] + arr[length / 2]) / 2;
    }
};

console.log(
    findMedianSortedArrays([1], [2, 3, 4, 5, 6, 7, 8, 9, 10])
);
