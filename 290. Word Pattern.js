const wordPattern = (pattern, s)=> {
   pattern =  pattern.split("")
   s = s.split(" ")
   if( pattern.length !== s.length ){
    return false
   }
   for(i = 0; i<pattern.length;i++){
  for(x = i + 1; x < pattern.length;x++){
    if(pattern[i] === pattern[x] && s[i] !== s[x]){
            return false
    }else if(pattern[i] !== pattern[x] && s[i] === s[x]){
        return false
    }
  }
   }
   return true
    
};
wordPattern("abba","dog cat cat fish")

wordPattern("abba","dog cat cat dog")


/*ASI LO ENTREGUE*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    pattern =  pattern.split("")
s = s.split(" ")
if( pattern.length !== s.length ){
 return false
}
for(i = 0; i<pattern.length;i++){
for(x = i + 1; x < pattern.length;x++){
 if(pattern[i] === pattern[x] && s[i] !== s[x]){
         return false
 }else if(pattern[i] !== pattern[x] && s[i] === s[x]){
     return false
 }
}
}
return true
 
};