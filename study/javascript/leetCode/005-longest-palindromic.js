/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    var max = 0, judge = true, i, j, k, len = s.length, start, section;

    if (len === 1) return s;

    for (i = 0; i < len; i++) {
        for (k = len; k > i; k--) {
            section = k - i;
            for (j = 0; j < (0 | (section / 2)); j++) {
                if (s[i + j] !== s[k - j - 1]) {
                    judge = false;
                    break;
                }
            }
            if (judge && max < section) {
                max = section;
                start = i;
            }
            judge = true;
        }
    }
    return s.substring(start, start + max);
};

console.log(
    longestPalindrome("pwwppwwp")
);
