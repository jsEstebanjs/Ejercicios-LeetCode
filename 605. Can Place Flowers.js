const canPlaceFlowers =(flowerbed, n)=> {
    let conteo = 0
    if(n = 0){
        return true
    }
    for(i = 0; i<flowerbed.length;i++){
        if(flowerbed[i-1] != 1 && flowerbed[i] == 0 && flowerbed[i+1] != 1){
            flowerbed.splice(i,1,1)
            conteo++
        }
        if(conteo == n){
            return true
        }
    }
    return false
    
};
canPlaceFlowers([0,0,0,0,0,1,0,0],0)
canPlaceFlowers([0,0,1,0,1],1)
canPlaceFlowers([0,0,1,0,1],1)
canPlaceFlowers([1,0,0,0,0,1],2)

/*ASI LO ENTREGUE*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 var canPlaceFlowers = function(flowerbed, n) {
    let conteo = 0
     if(n === 0){
         return true
     }
     for(i = 0; i<flowerbed.length;i++){
         if(flowerbed[i-1] != 1 && flowerbed[i] == 0 && flowerbed[i+1] != 1){
             flowerbed.splice(i,1,1)
             conteo++
         }
         if(conteo == n){
             return true
         }
     }
     return false
     
 };