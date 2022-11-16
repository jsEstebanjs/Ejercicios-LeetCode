var longestPalindrome = function(s) {
    const mapeo = new Map()
    let longitud = 0
    let unica = false
    for(let i = 0;i<s.length;i++){
        if(mapeo.has(s[i])){
            let o = mapeo.get(s[i])
            mapeo.set(s[i],o+1)
        }else{
            mapeo.set(s[i],1)
        }
    }
    for(let[key,valor] of mapeo){
        if(valor !== 1 && valor % 2 !== 0 && unica === false ){
            longitud+=valor
            unica = true
        }else if( valor > 1){
            if(valor % 2 !== 0){
                longitud+= (valor - 1)
            }else{
                longitud+= valor
            }
        }
    if(valor === 1 && unica === false){
            longitud++
            unica = true
        }
    }

     return longitud
};
longestPalindrome("bananas")
/*ASI LO ENTREGUE*/
var longestPalindrome = function(s) {
    const mapeo = new Map()
    let longitud = 0
    let unica = false
    for(let i = 0;i<s.length;i++){
        if(mapeo.has(s[i])){
            let o = mapeo.get(s[i])
            mapeo.set(s[i],o+1)
        }else{
            mapeo.set(s[i],1)
        }
    }
    for(let[key,valor] of mapeo){
        if(valor !== 1 && valor % 2 !== 0 && unica === false ){
            longitud+=valor
            unica = true
        }else if( valor > 1){
            if(valor % 2 !== 0){
                longitud+= (valor - 1)
            }else{
                longitud+= valor
            }
        }
    if(valor === 1 && unica === false){
            longitud++
            unica = true
        }
    }

     return longitud
};