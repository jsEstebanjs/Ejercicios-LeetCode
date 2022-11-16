const guessNumber = (n)=> {
    let guess = 7
let numeroFinal = 0
let p = Math.floor(Math.random(n)* (n + 1))
while(numeroFinal < guess){
    if(guess(p) < n){
        numeroFinal--
    }
    if(guess(p) > n){
        numeroFinal++
    }
    if(guess(p) === n){
        return numeroFinal
    }
}
};/*guess es un api que nos devuelve un resultado ya sea 1,-1,0 debemos crear un algoritmo
que desifre el numero que guees escogio entre n*/

guessNumber(10)

/*ASI LO ENTREGUE*/

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
 var guessNumber = function(n) {
    let encendedor = false
    let inicio = 1
    let final = n
while(encendedor == false){
let resultado = Math.floor(inicio+final)/2;
    if(guess(resultado) == -1){
        final = resultado-1 
    }else if(guess(resultado) == 1){
        inicio = resultado+1
    }else if(guess(resultado)==0){
         return resultado
        encendedor = true
    }
}  
};

/*guess es un api que nos devuelve un resultado ya sea 1,-1,0 debemos crear un algoritmo
que desifre el numero que guees escogio entre n*/


  