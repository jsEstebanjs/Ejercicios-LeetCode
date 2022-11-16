const calPoints = (ops)=> {
    let resultado = []
   ops = ops.map((valor)=>{
        if(/^[0-9\.-]+$/.test(valor)){
            return Number(valor)
        }else{
            return valor
        }
    })

    for(i = 0; i<ops.length;i++){
        if(typeof ops[i] === "number"){
            resultado.push(ops[i])
        }else if(ops[i] === "+"){
            if(typeof resultado[resultado.length - 1] === "number" && typeof resultado[resultado.length - 2] === "number"){
                resultado.push(resultado[resultado.length - 1] + resultado[resultado.length - 2] );
            }
        }else if(ops[i] === "D"){
            if(typeof resultado[resultado.length - 1] === "number"){
                resultado.push(resultado[resultado.length - 1] + resultado[resultado.length - 1]);
            }

        }else if(ops[i] === "C"){
            resultado.splice(resultado.length - 1,1)
        }
    }
    if(resultado.length === 0){
        return 0
    }else{
        resultado = resultado.reduce((a,b)=>{
            return a+b
        })
        return resultado
    }
   
    
};
calPoints(["-60","D","-36","30","13","C","C","-33","53","79"])
calPoints(["5","2","C","D","+"])
calPoints(["5","-2","4","C","D","9","+","+"])
calPoints(["5","2","C","D","+"])

/*ASI LO ENTREGUE*/

/**
 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
    let resultado = []
ops = ops.map((valor)=>{
     if(/^[0-9\.-]+$/.test(valor)){
         return Number(valor)
     }else{
         return valor
     }
 })

 for(i = 0; i<ops.length;i++){
     if(typeof ops[i] === "number"){
         resultado.push(ops[i])
     }else if(ops[i] === "+"){
         if(typeof resultado[resultado.length - 1] === "number" && typeof resultado[resultado.length - 2] === "number"){
             resultado.push(resultado[resultado.length - 1] + resultado[resultado.length - 2] );
         }
     }else if(ops[i] === "D"){
         if(typeof resultado[resultado.length - 1] === "number"){
             resultado.push(resultado[resultado.length - 1] + resultado[resultado.length - 1]);
         }

     }else if(ops[i] === "C"){
         resultado.splice(resultado.length - 1,1)
     }
 }
 if(resultado.length === 0){
     return 0
 }else{
     resultado = resultado.reduce((a,b)=>{
         return a+b
     })
     return resultado
 }
};