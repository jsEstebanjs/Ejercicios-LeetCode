const contarbits = (numero)=>{
    let contador = 0;
    numero = numero.toString(2)/*Convertir un número en binario con la función toString(2)*/

    for(digito of numero){
        if(digito == 1){
                contador++

            }
        }

        return contador
}


contarbits(00000000000000000000000000001011)

/*LO ENTREGUE ASI*/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(numero) {

    let contador = 0;
      numero = numero.toString(2)
  
      for(digito of numero){
          if(digito == 1){
                  contador++
  
              }
          }
  
          return contador
      
  };