//asi lo entregue
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    let resultado = []
    nums.forEach((item,index)=>{
        if(item === target){
           if(resultado.length > 1){
               resultado.splice(1,1,index)
           }else{
               resultado.push(index)
           }
        }
    })
    if(resultado.length === 0){
        return [-1,-1]
    }else if(resultado.length === 1){
        return [resultado[0],resultado[0]]
    }
    return resultado
};