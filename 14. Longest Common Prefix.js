/*ASI LO ENTREGUE*/

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    strs.sort((a,b)=>{
           return a.length - b.length
      })
      if(strs.length===1){
          return strs[0]
      }
      let arrayFinal=[]
  
      for(i = 0;i<strs[0].length;i++){
          let conteo = 0;
          for(x=1;x<strs.length;x++){
              if(strs[0][i] === strs[x][i]){
                  conteo++
              }
              if(conteo === strs.length - 1){
                  arrayFinal.push(strs[0][i])
              }
              if(strs[0][i] !== strs[x][i]){
                  return arrayFinal.join("")
              }
          }
      }
      if(arrayFinal.length==0){
          return ""
      }
      return arrayFinal.join("")
  };
//luego de menos de 1 mes lo volvi a hacer y asi fue

var longestCommonPrefix = function(strs) {
    strs = strs.sort((a,b)=>{
        return a.length - b.length
    })
    let result = ""
    for(i = 1;i<=strs[0].length;i++){
        let substring = strs[0].substring(0,i)
        for(x = 0;x<strs.length;x++){
            let confirmacion = strs[x].substring(0,i)
            if(confirmacion !== substring){
                return result
            }
        }
        result = substring;
    }
    return result

};
longestCommonPrefix(["flower","flow","flight"])