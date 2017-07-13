/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var longest='', temp = '', i, j;
    for(i=0;i<s.length;i++){
        for(j=i;j<s.length;j++){
            if(~temp.indexOf(s[j])){
                if(longest.length<temp.length){
                    longest=temp;
                }
                temp = '';
                break;
            }else{
                temp += s[j];
            }
        }
    }
    console.log(longest);
};

lengthOfLongestSubstring("pwadwkew");