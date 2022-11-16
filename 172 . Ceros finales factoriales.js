//como lo hice yo
/**
 * @param {number} n
 * @return {number}
 */
 var trailingZeroes = function(n) {
    if(n === 0) return n
    let digito = BigInt(n)
    for(let i=1; i<n;i++){
        digito = BigInt(digito * BigInt((n - i)));
    }
    digito = digito.toString();
    digito = digito.split("").reverse()
    let item = 0;
    for(let x = 0;x<digito.length;x++){
        if(digito[x] === "0"){
            item++
        }else{
            return item
        }
    }
    return item
};
//implimentacion que me gusto

/**
 * @param {number} n
 * @return {number}
 */
 var trailingZeroes = function(n) {
    let zeroes =0;
     let num = 5;
     
     while(n >= num){
         zeroes = zeroes + Math.floor(n/num);
         n = Math.floor(n/num)
     }
     
     return zeroes;
 };