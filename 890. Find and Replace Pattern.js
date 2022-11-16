var findAndReplacePattern = function(words, pattern) {
    let objetoAlgoritmo = {}
    let concatenacion = ""
    for(let i = 0;i < pattern.length;i++){
        const variable = pattern[i]
        if(objetoAlgoritmo[variable] === undefined){
            objetoAlgoritmo[variable] = i
        }
        concatenacion = concatenacion + objetoAlgoritmo[variable]
    }
    let arrayFinal = []
    for(let i = 0;i<words.length;i++){
        let objeto = {}
        let concatenacionTwo = ""
        for(let x = 0; x<words[0].length;x++){
            const variableTwo = words[i][x]
            if(objeto[variableTwo] === undefined){
                objeto[variableTwo] = x
            }
            concatenacionTwo = concatenacionTwo + objeto[variableTwo]
            if(concatenacion == concatenacionTwo){
                arrayFinal.push(words[i])
            }

        }
    }

    return arrayFinal
};
findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"],"abb")

array = ["c"]
let z = array[0]
const l = {
    a:1,
    b:0
}
if(l[z] === undefined){
    l[z] = 3
}

console.log(l)