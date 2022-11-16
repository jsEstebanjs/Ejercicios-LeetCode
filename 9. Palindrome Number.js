const palindromoNumero = (numero) =>{
let numero3;
    numer3 = numero.toString().split("").reverse().join("")
    numero2 = Math.abs(numer3)


    if(isNaN(numero2)){
        return numero = false
    }
    if(numero2.toString().length < numero.length){
        console.log("entro en to string")
        return numero = false
    }
    if(numero2 === 0){
        return true
    }

    console.log(numero,numero2)
  
    if(numero2 == numero){
    return true
    }else if(numero2 != numero){
    return false
    }

  
}

palindromoNumero(121);

/*ASI LO PRESENTE*/

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(numero) {

    let numero3;
     numer3 = numero.toString().split("").reverse().join("")
     numero2 = Math.abs(numer3)
 
 
     if(isNaN(numero2)){
         return numero = false
     }
     if(numero2.toString().length < numero.length){
         console.log("entro en to string")
         return numero = false
     }
     if(numero2 === 0){
         return true
     }
 
     console.log(numero,numero2)
   
     if(numero2 == numero){
     return true
     }else if(numero2 != numero){
     return false
     }
     
 };
