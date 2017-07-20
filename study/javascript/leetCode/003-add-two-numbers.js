/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
/*ListNode {
 val: 2,
 next: ListNode {
 val: 4,
 next: ListNode {
 val: 3,
 next: null
 }
 }
 }*/

var addTwoNumbers = function (l1, l2) {
    var i = 0, j, result = [];
    while (l1 !== null || l2 !== null) {//时间复杂度为O(n)
        if (l1 === null) l1 = {val: 0, next: null};
        if (l2 === null) l2 = {val: 0, next: null};
        result[i] = l1.val + l2.val;
        l1 = l1.next;//逐级自我覆盖
        l2 = l2.next;
        i++;
    }

    for (j = 0; j < result.length; j++) {
        if (result[j] > 9) {
            result[j] = result[j] - 10;
            j !== result.length - 1 ? result[j + 1]++ : result[j + 1] = 1;
        }
    }

    return result;
};

console.log(
    addTwoNumbers({val: 2, next: {val: 4, next: {val: 3, next: null}}}, {
        val: 5,
        next: {val: 6, next: {val: 4, next: null}}
    })
);