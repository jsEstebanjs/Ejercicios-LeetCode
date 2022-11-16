const fizz = (numero)=>{
    
    let array = [];
    for(i = 1; i <= numero;i++){
        array.push(i)
    }
    array = array.join(" ").split(" ")
    console.log(array)
    for(x = 0; x < array.length; x++){

        if(array[x] % 3 === 0 && array[x] % 5 === 0){
            array.splice(x,1,"FizzBuzz")

        }else if(array[x] % 3 === 0){
            array.splice(x,1,"Fizz")

        }else if(array[x] % 5 === 0){
            array.splice(x,1,"Buzz")

        }
    }

    return array

}
fizz(15);


/*ASI LO ENTREGUE*/

/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(numero) {
    let array = [];
      for(i = 1; i <= numero;i++){
          array.push(i)
      }
      array = array.join(" ").split(" ")
      
      for(x = 0; x < array.length; x++){
  
          if(array[x] % 3 === 0 && array[x] % 5 === 0){
              array.splice(x,1,"FizzBuzz")
  
          }else if(array[x] % 3 === 0){
              array.splice(x,1,"Fizz")
  
          }else if(array[x] % 5 === 0){
              array.splice(x,1,"Buzz")
  
          }
      }
  
      return array
  
  
      
  };