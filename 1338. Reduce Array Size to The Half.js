//solucionado
/**
 * @param {number[]} arr
 * @return {number}
 */
 var minSetSize = function(arr) {
    let map = new Map()
     let mitad = (arr.length / 2);
     for(let i=0;i<arr.length;i++){
         if(map.has(arr[i])){
             let numero = map.get(arr[i]);
             map.set(arr[i],numero+1)
         }else{
             map.set(arr[i],1)
         }
     }
     const valores = [...map.values()];
     valores.sort((a,b)=>{
         return a-b
     })
     valores.reverse()
     let indice = 1
     let conteo = 0;
         for(let i = 0;i<valores.length;i++){
             conteo+=valores[i]
             if(conteo>= mitad){
                 return indice
             }else{
                 indice++
             }
         }
     return indice
     
 };