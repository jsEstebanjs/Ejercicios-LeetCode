const add = (num)=>{
    let interruptor;
        while(interruptor === undefined){
            num = num.toString().split("").map((numero)=>{   
                return Number(numero)});

            num = num.reduce((valor1,valor2)=> valor1 + valor2);

            if(num < 10){
                console.log("si entra al if")
                interruptor = true
                return num
            }
        }

        

}

add(38)


/*ASI LO ENTREGUE*/


/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {

    let interruptor;
           while(interruptor === undefined){
               num = num.toString().split("").map((numero)=>{   
                   return Number(numero)});
   
               num = num.reduce((valor1,valor2)=> valor1 + valor2);
   
               if(num < 10){
                   console.log("si entra al if")
                   interruptor = true
                   return num
               }
           }
       
   };