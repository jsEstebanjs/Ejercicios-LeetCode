const generate = (numRows)=>{
    if(numRows === 1)return[[1]];
    if(numRows === 2)return[[1],[1,1]];

    let arrayFinal = [[1,2,1]]

    for(i = 0;i < numRows - 3;i++){
        let sumaCompleta = []
        for(x = 0;x<arrayFinal[i].length;x++){
            let suma = arrayFinal[i][x] + arrayFinal[i][x+1]
            sumaCompleta.push(suma)
        }
        sumaCompleta = sumaCompleta.filter(Boolean)
        sumaCompleta.unshift(1)
        sumaCompleta.push(1)
        arrayFinal.push(sumaCompleta)

    

    }
    arrayFinal.unshift([1],[1,1])
    return arrayFinal
};

generate(5)

sumaCompleta = sumaCompleta.filter(Boolean)
sumaCompleta.unshift(1)
sumaCompleta.push(1)
arrayFinal.push(sumaCompleta)

/*ASI LO ENTEGUE*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    if(numRows === 1)return[[1]];
      if(numRows === 2)return[[1],[1,1]];
  
      let arrayFinal = [[1,2,1]]
  
      for(i = 0;i < numRows - 3;i++){
          let sumaCompleta = []
          for(x = 0;x<arrayFinal[i].length;x++){
              let suma = arrayFinal[i][x] + arrayFinal[i][x+1]
              sumaCompleta.push(suma)
          }
          sumaCompleta = sumaCompleta.filter(Boolean)
          sumaCompleta.unshift(1)
          sumaCompleta.push(1)
          arrayFinal.push(sumaCompleta)
  
      
  
      }
      arrayFinal.unshift([1],[1,1])
      return arrayFinal
      
  };

