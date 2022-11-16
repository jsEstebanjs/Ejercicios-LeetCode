const palindromo =(s)=>{
   s =  s.toLowerCase().split("").filter((valor)=>{
    if(/^[a-z0-9]$/.test(valor)){
        return valor
    }
   })
   s = s.join("")

   let comparacion = s
   comparacion = comparacion.split("").reverse().join("")
   if(comparacion === s){
    return true
   }else{
    return false
   }
}

palindromo("0P")
palindromo("race a car")

palindromo("A man, a plan, a canal: Panama")

/*ASI LO ENTREGUE*/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    s =  s.toLowerCase().split("").filter((valor)=>{
      if(/^[a-z0-9]$/.test(valor)){
          return valor
      }
     })
     s = s.join("")
  
     let comparacion = s
     comparacion = comparacion.split("").reverse().join("")
     if(comparacion === s){
      return true
     }else{
      return false
     }
      
  };