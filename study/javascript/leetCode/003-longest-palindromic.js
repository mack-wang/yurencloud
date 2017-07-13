/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var longest='', temp = '', i, j;
    for(i=0;i<s.length;i++){
        for(j=i;j<s.length;j++){
            if(temp[0] === s[j]){
                if(longest.length<temp.length+1){
                    temp += s[j];
                    longest=temp;
                }
                temp = '';
                break;
            }else{
                temp += s[j];
            }
        }
        temp = '';
    }
    console.log(longest);
};

longestPalindrome("pwadwkedsw");