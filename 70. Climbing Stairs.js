/*asi lo entregue*/
/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let array = [1,1,2]
    for(i = 3; i<=n;i++){
        array[i]=array[i-1] + array[i-2]
    }
    return array[n]
        
    };
    
    /*Este problema es en realidad una secuencia de Fibonacci*/


    https://www.pcoroneos.com/climbing-stairs