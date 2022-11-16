var frequencySort = function(s) {
    let array = []
    array[0] = [s[0]]
    for(i = 0; i<s.length - 1;i++){
        for(x = 0;x < array.length;x++){
            if(array[x][0] === s[i+1]){
                array[x].push(s[i+1])
                break;
            }
            if(x === array.length -1){
                array[array.length] = [s[i+1]]
                break
            }
        }
    }
  array.sort((a,b)=>{
      return a.length - b.length
    })
    array = array.reverse().flat().join("")
    return array
    
};
frequencySort("treep")

frequencySort("cccaaa")

/*ASI LO ENTREGUE*/

/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
    let array = []
array[0] = [s[0]]
for(i = 0; i<s.length - 1;i++){
    for(x = 0;x < array.length;x++){
        if(array[x][0] === s[i+1]){
            array[x].push(s[i+1])
            break;
        }
        if(x === array.length -1){
            array[array.length] = [s[i+1]]
            break
        }
    }
}
array.sort((a,b)=>{
  return a.length - b.length
})
array = array.reverse().flat().join("")
return array

};

