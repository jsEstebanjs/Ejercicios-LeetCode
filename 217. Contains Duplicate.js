const duplicado = (array) =>{

    let encendedor;

   for(i = 0; i < array.length; i++){
   encendedor = array.shift();
        for(numero of array){
        if(encendedor === numero){
        return encendedor = true
        }
        }

    array.push(encendedor)
   
   }
   return encendedor = false
}

duplicado([1,2,3,4]);


duplicado([1,2,3,1]);

duplicado([1,1,1,3,3,4,3,2,4,2]);


/*ASI LO PRESENTE*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(array) {
    let encendedor;
 
    for(i = 0; i < array.length; i++){
    encendedor = array.shift();
         for(numero of array){
         if(encendedor === numero){
         return encendedor = true
         }
         }
 
     array.push(encendedor)
    
    }
    return encendedor = false
     
 };


