var isAnagram = function(s, t) {
    s = s.split("")
    let  array = [...s]
    let interruptor = 0
    for(i =0;i<array.length;i++){
        if(s.includes(t[i])){
            let index = s.indexOf(t[i])
            s.splice(index,1)
            interruptor++
        }else{
            return false
        }
    }
    if(interruptor === t.length){
        return true
    }
    else{
        return false
    }
};
isAnagram("aacc","ccac")
isAnagram("anagram","nagaram");
isAnagram("rat","car")
//asi lo entregue
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    s = s.split("")
    let  array = [...s]
    let interruptor = 0
    for(i =0;i<array.length;i++){
        if(s.includes(t[i])){
            let index = s.indexOf(t[i])
            s.splice(index,1)
            interruptor++
        }else{
            return false
        }
    }
    if(interruptor === t.length){
        return true
    }
    else{
        return false
    }
    
};