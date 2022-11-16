var numberOfBeams = function(bank) {
    let array = []
    let contador = 0
    for(i = 0;i<bank.length;i++){
        let contador = 0;
       let l = bank[i]
        l = l.split("")
        for(x = 0;x<l.length;x++){
            if(l[x] == 1){
                contador++
            }
        }
        if(contador>0){
            array.push(contador)
        }
    }
    if(array.length === 1){
        return 0
    }
 for(x = 0;x<array.length;x++){
    if(array[x+1] != undefined){
        let numero = (array[x] * array[x+1])
        contador+=numero
    }
}
    
    return contador
}
numberOfBeams(["000","111","000"])
numberOfBeams(["011001","000000","010100","001000"])//8

//ASI LO ENTREGUE
/**
 * @param {string[]} bank
 * @return {number}
 */
 var numberOfBeams = function(bank) {
    let array = []
let contador = 0
for(i = 0;i<bank.length;i++){
    let contador = 0;
   let l = bank[i]
    l = l.split("")
    for(x = 0;x<l.length;x++){
        if(l[x] == 1){
            contador++
        }
    }
    if(contador>0){
        array.push(contador)
    }
}
if(array.length === 1){
    return 0
}
for(x = 0;x<array.length;x++){
if(array[x+1] != undefined){
    let numero = (array[x] * array[x+1])
    contador+=numero
}
}

return contador

};

