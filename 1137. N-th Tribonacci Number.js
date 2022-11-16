/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n) {
    let array = [0,1,1]
    for(i = 3; i<=n;i++){
        array[i]=array[i-1] + array[i-2] + array[i-3];
    }
    return array[n]
    
};

/*ES MUY PARECIDO AL 70 Y 1137 SOLO QUE COMIENZA EN 0,1,1 Y SE CUENTAN 3 Y NO DOS COMO LOS ANTERIORES*/