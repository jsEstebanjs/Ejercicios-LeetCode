/*es identico al problema 70 de escaleras*/

/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    let array = [0,1]
    for(i = 2; i<=n;i++){
        array[i]=array[i-1] + array[i-2]
    }
    return array[n]
        
    
};
/*Este problema es en realidad una secuencia de Fibonacci*/