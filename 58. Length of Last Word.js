const palabra = (s)=>{
    s = s.trim()
    s = s.split(" ")
   return s[s.length-1].length

}
palabra("   fly me   to   the moon  ")


/*ASI LO ENTREGUE*/
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    s = s.trim()
    s = s.split(" ")
    return s[s.length-1].length
    
};