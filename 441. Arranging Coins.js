const coins = (n)=>{
    let filas = 0

    for(i = 1;i<=n;i++){
        n-=i
        if(n >= 0){
            filas++
        }
    }
    return filas
}
coins(1)
coins(3)


coins(5)

coins(8)


/*ASI LO ENTREGUE*/

/**
 * @param {number} n
 * @return {number}
 */
 var arrangeCoins = function(n) {
    let filas = 0

 for(i = 1;i<=n;i++){
     n-=i
     if(n >= 0){
         filas++
     }
 }
 return filas
 
};