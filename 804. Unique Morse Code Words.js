//solucionado
/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
const map = new Map([
    ["a",".-"],
    ["b","-..."],
    ["c","-.-."],
    ["d","-.."],
    ["e","."],
    ["f","..-."],
    ["g","--."],
    ["h","...."],
    ["i",".."],
    ["j",".---"],
    ["k","-.-"],
    ["l",".-.."],
    ["m","--"],
    ["n","-."],
    ["o","---"],
    ["p",".--."],
    ["q","--.-"],
    ["r",".-."],
    ["s","..."],
    ["t","-"],
    ["u","..-"],
    ["v","...-"],
    ["w",".--"],
    ["x","-..-"],
    ["y","-.--"],
    ["z","--.."],

])
let arrayFinal = []
for(let i=0;i<words.length;i++){
    let concatenacion = ""
    for(let x = 0; x<words[i].length;x++){
        let palabra = map.get(words[i][x])
        concatenacion = concatenacion.concat(palabra)
    }
    if(!(arrayFinal.includes(concatenacion))){
        arrayFinal.push(concatenacion)
    }
}

return arrayFinal.length

};