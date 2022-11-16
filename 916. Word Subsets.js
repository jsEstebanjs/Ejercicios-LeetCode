//debemos coger la palabras descompnerla por letras y quitarle la que si coincidan y asi hacerlo hasta la cantidas de words2
var wordSubsets = function(words1, words2) {
    let arrayF = [];
for(let i = 0;i<words2.length;i++){
    words2[i] = words2[i].split("")
}
//for Principal escoge palabra
for(i =0;i<words1.length;i++){
    let interruptor = 0
    //for2 escoge seccion a probar
    for(x = 0;x<words2.length;x++){
        let interruptorMini = 0
        let palabra = words1[i]
        palabra = palabra.split("")
        //for3 escoge letras de la seccion a probar
        for(z = 0;z<words2[x].length;z++){
            let index = palabra.indexOf(words2[x][z])
            if(index >=0){
                palabra.splice(index,1)
                interruptorMini++
            }
            if(interruptorMini === words2[x].length){
                interruptor++
            }
            if(interruptor === words2.length){
                arrayF.push(words1[i])
            }
        }
    }
}
return arrayF
};
wordSubsets(["amazon","apple","facebook","google","leetcode"],["ec","oc","ceo"])

//optimizacion
var wordSubsets = function(words1, words2) {
    let arrayF = [];
for(let i = 0;i<words2.length;i++){
    words2[i] = words2[i].split("")
}
//for Principal escoge palabra
for(i =0;i<words1.length;i++){
    let interruptor = 0
    let breakPregunta = false;
    //for2 escoge seccion a probar
    for(x = 0;x<words2.length;x++){
        if(breakPregunta){
            break;
        }
        let interruptorMini = 0
        let palabra = words1[i]
        palabra = palabra.split("")
        //for3 escoge letras de la seccion a probar
        for(z = 0;z<words2[x].length;z++){
            let index = palabra.indexOf(words2[x][z])
            if(index >=0){
                palabra.splice(index,1)
                interruptorMini++
            }else{
                breakPregunta = true
                break;
            }
            if(interruptorMini === words2[x].length){
                interruptor++
            }
            if(interruptor === words2.length){
                arrayF.push(words1[i])
            }
        }
    }
}
return arrayF
};
wordSubsets(["amazon","apple","facebook","google","leetcode"],["ec","oc","ceo"])