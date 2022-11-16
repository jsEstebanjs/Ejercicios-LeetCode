//solucionado
/**
 * @param {string} s
 * @return {boolean}
 */
 var repeatedSubstringPattern = function(s) {
    for(let i = 0;i<s.length;i++){
        let indice = s.substring(0,i+1)
        let array = s.split(indice);
        array = array.join("");
        if(indice.length>(s.length/2)){
            return false
        }
        if(array.length === 0){
            return true
        }

    }
    return false
};