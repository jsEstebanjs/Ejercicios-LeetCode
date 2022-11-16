const convertToBase7 =(num)=> {
    let resultado = []
    let numero = num

    while( numero>= 7 || -7 >= numero){
        resuido = numero%7
        resuido = Math.abs(resuido)
        resuido = parseInt(resuido)
        resultado.unshift(resuido)
        numero = numero/7
    }
    numero = Math.trunc(numero)
    resultado.unshift(numero)
    return resultado.join("")
};
convertToBase7(-8)
convertToBase7(-7)
convertToBase7(100)

/*ASI LO ENTREGUE*/
/**
 * @param {number} num
 * @return {string}
 */
 var convertToBase7 = function(num) {
    let resultado = []
    let numero = num

while( numero>= 7 || -7 >= numero){
        resuido = numero%7
        resuido = Math.abs(resuido)
        resuido = parseInt(resuido)
        resultado.unshift(resuido)
        numero = numero/7
}
    numero = Math.trunc(numero)
    resultado.unshift(numero)
    return resultado.join("")
    
};