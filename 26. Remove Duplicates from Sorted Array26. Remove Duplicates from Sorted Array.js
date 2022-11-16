/*remueve duplicados*/
const duplicates = (array)=>{
     for(i = 0; i < array.length; i++){
        if(array[i] === array[i + 1]){
            array.splice(i,1)
            i--
        }
     }

}

duplicates([0,0,1,1,1,2,2,3,3,4])
/*ENTREGADOOO*/

let prueba = [0,0,1,1,1,2,2,3,3,4]
prueba = new Set(prueba)
prueba = [...prueba]
console.log(prueba)