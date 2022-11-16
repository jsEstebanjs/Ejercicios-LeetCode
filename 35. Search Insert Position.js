var searchInsert =(nums, target)=>{
    nums.forEach((valor,indice)=>{
        if(valor == target){
            return indice
        }
    })
    nums.push(target)
    nums = nums.sort((valor1,valor2)=>{return valor1 - valor2});
    return nums.indexOf(target)
    
};

/*ASI LO ENTRGUE*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    nums.forEach((valor,indice)=>{
       if(valor == target){
           return indice
       }
   })
   nums.push(target)
   nums = nums.sort((valor1,valor2)=>{return valor1 - valor2});
   return nums.indexOf(target)
   
};