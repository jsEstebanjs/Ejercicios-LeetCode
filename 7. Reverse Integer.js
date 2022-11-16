var reverse = function(x) {
    let interruptor;
    let arrayFinal = []
    if(x < 0){
        interruptor = true
    }
    x = Math.abs(x)
    x = x.toString().split("").reverse()
    for(i = 0; i<x.length;i++){
        let conversor = x[i]
        conversor = Number(conversor)
        if(conversor === 0){
            if(arrayFinal.length > 0){
                arrayFinal.push(conversor)
            }else{
                continue
            }
        }else{
            arrayFinal.push(conversor)
        }
    }
    arrayFinal = arrayFinal.join("")
    arrayFinal = Number(arrayFinal)

    if(interruptor){
        arrayFinal = arrayFinal*(-1);
    }
    console.log(arrayFinal)
    if(arrayFinal >  2147483647){
        return 0
    }
    if(arrayFinal < -2147483648){
        return 0
    }
    return  arrayFinal


};
reverse(1563847412)
reverse(-2147483648)
reverse(901000)
reverse(-123)
reverse(1230)

//asi lo entegue

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let interruptor;
   let arrayFinal = []
   if(x < 0){
       interruptor = true
   }
   x = Math.abs(x)
   x = x.toString().split("").reverse()
   for(i = 0; i<x.length;i++){
       let conversor = x[i]
       conversor = Number(conversor)
       if(conversor === 0){
           if(arrayFinal.length > 0){
               arrayFinal.push(conversor)
           }else{
               continue
           }
       }else{
           arrayFinal.push(conversor)
       }
   }
   arrayFinal = arrayFinal.join("")
   arrayFinal = Number(arrayFinal)

   if(interruptor){
       arrayFinal = arrayFinal*(-1);
   }
   console.log(arrayFinal)
   if(arrayFinal >  2147483647){
       return 0
   }
   if(arrayFinal < -2147483648){
       return 0
   }
   return  arrayFinal

};