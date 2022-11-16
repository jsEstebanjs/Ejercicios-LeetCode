// asi lo entregue

/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    digits = digits.join("")
    digits = BigInt(digits)
    digits++
    digits = digits.toString()
    digits=[...digits]
    arrayFinal = []
    digits.forEach(element => {
        arrayFinal.push(Number(element));
        
    });
    return arrayFinal
        
    };