var suggestedProducts = function(products, searchWord) {
    let arraysFinal = []
    products=products.sort()
    //for longitud de la palabra
    for(let i = 0;i<searchWord.length;i++){
        let itemA = searchWord.substring(0,i+1)
        let arrayMomentaneo=[]

        //for de comparacion
        for(let x = 0;x<products.length;x++){
            let itemB = products[x].substring(0,i+1);
            if(itemA === itemB){
                arrayMomentaneo.push(products[x])
            }
            if(arrayMomentaneo.length === 3){
                break;
            }
        }
        arraysFinal.push(arrayMomentaneo);


    }
    return arraysFinal
};
suggestedProducts( ["mobile","mouse","moneypot","monitor","mousepad"],"mouse")

/*ASI LO ENTREGUE*/
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
 var suggestedProducts = function(products, searchWord) {
    let arraysFinal = []
  products=products.sort()
  //for longitud de la palabra
  for(let i = 0;i<searchWord.length;i++){
      let itemA = searchWord.substring(0,i+1)
      let arrayMomentaneo=[]

      //for de comparacion
      for(let x = 0;x<products.length;x++){
          let itemB = products[x].substring(0,i+1);
          if(itemA === itemB){
              arrayMomentaneo.push(products[x])
          }
          if(arrayMomentaneo.length === 3){
              break;
          }
      }
      arraysFinal.push(arrayMomentaneo);


  }
  return arraysFinal
};

