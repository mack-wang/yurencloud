/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var longest = '', temp = '', i, j;
    for (i = 0; i < s.length; i++) {
        for (j = i; j < s.length; j++) {//时间复杂度O(n²)
            if (~temp.indexOf(s[j])) {//判断temp只是否包含字符s[j]
                if (longest.length < temp.length) longest = temp;//若temp长度大，则交换
                temp = '';
                break;
            } else {
                temp += s[j];
            }
        }
    }
    return longest.length;
};

console.log(
    lengthOfLongestSubstring("pwadwkew")
);