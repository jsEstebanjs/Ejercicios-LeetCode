const Romanos = (array) =>{

    let informacion = ["I","V","X","L","C","D","M"]
    let conteo = 0
    let indexLetra;
    let indexLetra2;
    let i = 1;
            for(letra of array){
                    indexLetra = informacion.indexOf(letra)

                    indexLetra2 = informacion.indexOf(array[i])
                    if(indexLetra2 ===  -1){
                        indexLetra2 = 0
                    }
                    i++
                
            

                if(letra === "I" && indexLetra >= indexLetra2){
                    conteo++
                }else if(letra === "I" && indexLetra < indexLetra2){
                    conteo--
                }else if(letra === "V" && indexLetra >= indexLetra2){
                    conteo += 5
                }else if(letra === "V" && indexLetra < indexLetra2){
                    conteo -= 5
                }else if(letra === "X" && indexLetra >= indexLetra2){
                    conteo += 10
                }else if(letra === "X" && indexLetra < indexLetra2){
                    conteo -= 10
                }else if(letra === "L" && indexLetra >= indexLetra2){
                    conteo += 50
                }else if(letra === "L" && indexLetra < indexLetra2){
                    conteo -= 50
                }else if(letra === "C" && indexLetra >= indexLetra2){
                    conteo += 100
                }else if(letra === "C" && indexLetra < indexLetra2){
                    conteo -= 100
                }else if(letra === "D" && indexLetra >= indexLetra2){
                    conteo += 500
                }else if(letra === "D" && indexLetra < indexLetra2){
                    conteo -= 500
                }else if(letra === "M" && indexLetra >= indexLetra2){
                    conteo += 1000
                }else if(letra === "M" && indexLetra < indexLetra2){
                    conteo -= 1000
                }
            }
          
    
return (conteo)
    
}

Romanos("III");
Romanos("LVIII");
Romanos("MCMXCIV");


/*ASI LO ENTREGUE*/

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(array) {
    let informacion = ["I","V","X","L","C","D","M"]
  let conteo = 0
  let indexLetra;
  let indexLetra2;
  let i = 1;
          for(letra of array){
                  indexLetra = informacion.indexOf(letra)

                  indexLetra2 = informacion.indexOf(array[i])
                  if(indexLetra2 ===  -1){
                      indexLetra2 = 0
                  }
                  i++
              
          

              if(letra === "I" && indexLetra >= indexLetra2){
                  conteo++
              }else if(letra === "I" && indexLetra < indexLetra2){
                  conteo--
              }else if(letra === "V" && indexLetra >= indexLetra2){
                  conteo += 5
              }else if(letra === "V" && indexLetra < indexLetra2){
                  conteo -= 5
              }else if(letra === "X" && indexLetra >= indexLetra2){
                  conteo += 10
              }else if(letra === "X" && indexLetra < indexLetra2){
                  conteo -= 10
              }else if(letra === "L" && indexLetra >= indexLetra2){
                  conteo += 50
              }else if(letra === "L" && indexLetra < indexLetra2){
                  conteo -= 50
              }else if(letra === "C" && indexLetra >= indexLetra2){
                  conteo += 100
              }else if(letra === "C" && indexLetra < indexLetra2){
                  conteo -= 100
              }else if(letra === "D" && indexLetra >= indexLetra2){
                  conteo += 500
              }else if(letra === "D" && indexLetra < indexLetra2){
                  conteo -= 500
              }else if(letra === "M" && indexLetra >= indexLetra2){
                  conteo += 1000
              }else if(letra === "M" && indexLetra < indexLetra2){
                  conteo -= 1000
              }
          }
        
  
return (conteo)
  
};


