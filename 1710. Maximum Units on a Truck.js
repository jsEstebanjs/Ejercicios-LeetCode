const maximumUnits = (boxTypes, truckSize) =>{
    boxTypes.sort((a,b)=>{
        return a[1] - b[1]
    })
    boxTypes.reverse()
    let cantidad = 0;
    let cajas = 0;
    for(i = 0;i<boxTypes.length;i++){
        cajas+=boxTypes[i][0];
        cantidad+=(boxTypes[i][0] * boxTypes[i][1])
        let calculo = (truckSize - cajas)
        if(calculo < 0){
            calculo = Math.abs(calculo)
            cantidad-=(calculo*boxTypes[i][1])
            return cantidad
           
        }
        
    }
    return cantidad
};
maximumUnits([[1,3],[5,5],[2,5],[4,2],[4,1],[3,1],[2,2],[1,3],[2,5],[3,2]],35)
maximumUnits([[5,10],[2,5],[4,7],[3,9]],10)
maximumUnits([[1,3],[2,2],[3,1]],4)


/*ASI LO ENTREGUE*/
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b)=>{
     return a[1] - b[1]
 })
 boxTypes.reverse()
 let cantidad = 0;
 let cajas = 0;
 for(i = 0;i<boxTypes.length;i++){
     cajas+=boxTypes[i][0];
     cantidad+=(boxTypes[i][0] * boxTypes[i][1])
     let calculo = (truckSize - cajas)
     if(calculo < 0){
         calculo = Math.abs(calculo)
         cantidad-=(calculo*boxTypes[i][1])
         return cantidad
        
     }
     
 }
 return cantidad
 
};