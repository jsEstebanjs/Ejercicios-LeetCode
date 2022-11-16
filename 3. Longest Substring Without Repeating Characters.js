var lengthOfLongestSubstring = function(s) {
    if(s.length === 0){
        return 0
    }
let array = [];
let array2= []
for(i=0;i < s.length;i++){
    for(x = i;x < s.length;x++){
        if(!(array2.includes(s[x]))){
            array2.push(s[x])
        }else{
            array[array.length] = array2.length
            array2=[]
            break;
        }
    }

}  
return Math.max(...array)
};
lengthOfLongestSubstring("abcabcbb")
lengthOfLongestSubstring("bbbbbbb")
lengthOfLongestSubstring("dvdf")
lengthOfLongestSubstring("abcdefgho")
lengthOfLongestSubstring("dvdf")



//asi lo entregue
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if(s.length <=1){
     return s.length
    }
    let array = [];
    let array2= []
    for(i=0;i < s.length;i++){
        for(x = i;x < s.length;x++){
            if(!(array2.includes(s[x]))){
                array2.push(s[x])
            }else{
                array[array.length] = array2.length
                array2=[]
                break;
            }
        }
    
    }  
    return Math.max(...array)
    };