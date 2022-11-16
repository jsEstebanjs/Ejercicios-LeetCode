const felicez = (n)=>{
    let interruptor;
    let reduceR = 0;
    let numeroM = n
    let contador = 0
        while(interruptor === undefined){
            numeroM = numeroM.toString().split("").map((num)=>{   
                Number(num)
                return Math.pow(num,2) });

                reduceR = numeroM.reduce((valor1,valor2)=> valor1 + valor2);

                if(reduceR === 1){
                    return interruptor = true
                }

                if(reduceR === n){
                    return interruptor = false
                }
                if(contador > 400){
                    return false
                }
                numeroM = reduceR
                contador++
        }
        
       

}

felicez(2002)

/*ASI LO ENTREGUE*/

/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    let interruptor;
      let reduceR = 0;
      let numeroM = n
      let contador = 0
          while(interruptor === undefined){
              numeroM = numeroM.toString().split("").map((num)=>{   
                  Number(num)
                  return Math.pow(num,2) });
  
                  reduceR = numeroM.reduce((valor1,valor2)=> valor1 + valor2);
  
                  if(reduceR === 1){
                      return interruptor = true
                  }
  
                  if(reduceR === n){
                      return interruptor = false
                  }
                  if(contador > 400){
                      return false
                  }
                  numeroM = reduceR
                  contador++
          }
  };







