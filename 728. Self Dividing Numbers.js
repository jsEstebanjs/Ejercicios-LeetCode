const dividir = (left, right)=>{
    let resultado = [];
    for(i = 0 + left; i<=right;i++){
        let aprobacion = 0;
        let arraySuma = []
        arraySuma.push(i)
        arraySuma = arraySuma.join("").split("");

        for(x = 0; x <= arraySuma.length;x++){
            let operacion = i / arraySuma[x]
            if(operacion % 1 === 0 ){
                aprobacion++
                if(operacion % 1 === 0 && aprobacion == arraySuma.length ){
                    resultado.push(i)
                    }
            }
    }
}
return resultado
    
}
dividir(1,22)
dividir(30,50)

/*ASI LO ENTREGUE*/
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 var selfDividingNumbers = function(left, right) {

    let resultado = [];
  for(i = 0 + left; i<=right;i++){
      let aprobacion = 0;
      let arraySuma = []
      arraySuma.push(i)
      arraySuma = arraySuma.join("").split("");

      for(x = 0; x <= arraySuma.length;x++){
          let operacion = i / arraySuma[x]
          if(operacion % 1 === 0 ){
              aprobacion++
              if(operacion % 1 === 0 && aprobacion == arraySuma.length ){
                  resultado.push(i)
                  }
          }
  }
}
return resultado
  
};

