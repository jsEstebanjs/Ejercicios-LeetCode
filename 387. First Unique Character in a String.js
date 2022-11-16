//solucionado
/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    for(let i = 0;i<s.length;i++){
        let index = s.indexOf(s[i])
        let last = s.lastIndexOf(s[i])
        if(index === last){
            return index
        }else{
            continue
        }
    }
    return -1
    
};