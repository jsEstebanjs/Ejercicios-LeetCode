const single = (array)=>{
    if(array.length <=2){
        return array[0]
    }for(i = 0;i<array.length;i++){
        let conteo = 0;
        for(x = 0;x<array.length;x++){
            if(array[i] !== array[x]){
                conteo++
            }
            if(conteo === array.length - 1){
                return array[i]
            }
}
}
}
single([2,2,1])
single([4,1,2,1,2])
single([2,2,1])



/*ASI LO ENTREGUE*/


/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(array) {
    
    if(array.length <=2){
       return array[0]
   }for(i = 0;i<array.length;i++){
       let conteo = 0;
       for(x = 0;x<array.length;x++){
           if(array[i] !== array[x]){
               conteo++
           }
           if(conteo === array.length - 1){
               return array[i]
           }
}
}
   
};