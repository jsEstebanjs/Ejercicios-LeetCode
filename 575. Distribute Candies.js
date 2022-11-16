const dulces = (candyType)=>{
    let cantidad = new Array(candyType.length)
    cantidad = cantidad.length/2

    candyType = new Set(candyType)
    /*convierte en objeto*/
    candyType = [...candyType]//convierte en array
    if(cantidad === candyType.length){
        return cantidad
    }
    if(candyType.length === 1){
        return 1
    }
    if(cantidad < candyType.length){
        return cantidad
    }
    if(cantidad > candyType.length){
        return candyType.length
    }
}
dulces([1,1,1,1,2,2,2,3,3,3])
dulces([1,1,2,2,3,3])

/*ASI LO ENTREGUE*/

/**
 * @param {number[]} candyType
 * @return {number}
 */
 var distributeCandies = function(candyType) {

    let cantidad = new Array(candyType.length)
       cantidad = cantidad.length/2
   
       candyType = new Set(candyType)
       /*convierte en objeto*/
       candyType = [...candyType]//convierte en array
       if(cantidad === candyType.length){
           return cantidad
       }
       if(candyType.length === 1){
           return 1
       }
       if(cantidad < candyType.length){
           return cantidad
       }
       if(cantidad > candyType.length){
           return candyType.length
       }
       
   };