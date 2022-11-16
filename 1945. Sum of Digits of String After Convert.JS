const sumaLetras = (string,veces = 1) =>{
    let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let conteo = [];
    let reduceR = []

    for(letras of string){
        conteo.push(abc.indexOf(letras)+1)
    }
    
   for(i = 0; i < veces; i++){

        reduceR = conteo.join("").split("").map((digito)=>{
            return Number(digito)
        })

       reduceR = reduceR.reduce((valor1,valor2)=> valor1 + valor2);
       conteo = [reduceR]
    }

    return reduceR
    

}
sumaLetras("iiii")

sumaLetras("leetcode",2)

sumaLetras("juanestebancarrenocamelo")

/*ASI LO ENTREGUE*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var getLucky = function(string, veces) {

    let abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        let conteo = [];
        let reduceR = []
    
        for(letras of string){
            conteo.push(abc.indexOf(letras)+1)
        }
        
       for(i = 0; i < veces; i++){
    
            reduceR = conteo.join("").split("").map((digito)=>{
                return Number(digito)
            })
    
           reduceR = reduceR.reduce((valor1,valor2)=> valor1 + valor2);
           conteo = [reduceR]
        }
    
        return reduceR
        
    };











