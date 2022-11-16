const indice = (num)=>{
    num=num.split("").map(value =>{
        return Number(value)
    })
    console.log(num)
    let array2 = []
    num.forEach((numero,indice)=>{
        let verificador = 0;
        for(i =0; i <= num.length;i++){
            if(indice === num[i]){
                verificador++
                continue;
            }else if(verificador === numero){
                array2.push(numero)
                i+=num.length
            }
        }
    })
    if(num.length === array2.length){
        return true
    }else{
        return false
    }
}

indice("1210")

/*ASI LO ENTREGUE*/

/**
 * @param {string} num
 * @return {boolean}
 */
 var digitCount = function(num) {
    num=num.split("").map(value =>{
       return Number(value)
   })
   console.log(num)
   let array2 = []
   num.forEach((numero,indice)=>{
       let verificador = 0;
       for(i =0; i <= num.length;i++){
           if(indice === num[i]){
               verificador++
               continue;
           }else if(verificador === numero){
               array2.push(numero)
               i+=num.length
           }
       }
   })
   if(num.length === array2.length){
       return true
   }else{
       return false
   }
   
};