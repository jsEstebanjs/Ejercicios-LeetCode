const Arrays = (valor = undefined)=>{
    if(valor === undefined)return console.warn("No ingresaste un valor");
    if(!(valor instanceof Array))return console.error("el valor que ingresaste no es un array");
    if(valor.length === 0)return console.error("el array esta vacio");
    let conteo = [];
    for(i = 0; i < valor.length;i++){
       
       conteo[i] = valor[i].reduce((acc,item)=>{
         return acc = acc + item;
            
         })   
        
        
    } 
    console.log(conteo)
    console.log(typeof(conteo[0]));
    console.log(`el Cliente numero 1 tiene ${Math.max(...conteo)} Dinero`)


}

Arrays([[1,2,3],[3,2,1],[4,5,6],[7,8,9]])



/*ASI LO PRESENTE

/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts = undefined) {
    if(accounts === undefined)return console.warn("No ingresaste un valor");
      if(!(accounts instanceof Array))return console.error("el valor que ingresaste no es un array");
      if(accounts.length === 0)return console.error("el array esta vacio");
      let conteo = [];
      for(i = 0; i < accounts.length;i++){
         
         conteo[i] = accounts[i].reduce((acc,item)=>{
           return acc = acc + item;
              
           })   
          
          
      } 
      return Math.max(...conteo)
      
      
  };
