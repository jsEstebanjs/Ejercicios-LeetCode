var sortArrayByParityII = function(nums) {
    let impares = nums.filter((item)=>{
        if((item%2) != 0){
            return item
        }
    })
    let pares = []
    for(x = 0;x<nums.length;x++){
        if((nums[x]%2)=== 0){
            pares.push(nums[x])
        }
    }
    for(let i = 0;i<nums.length;i++){
        if((i%2)!= 0){
            pares.splice(i,0,impares[(impares.length - 1)])
            impares.splice((impares.length - 1),1)
        }
    }
    return pares
};
sortArrayByParityII([1,1,0,4])
sortArrayByParityII([4,2,5,7])
//asi lo entregue
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParityII = function(nums) {
    let impares = nums.filter((item)=>{
        if((item%2) != 0){
            return item
        }
    })
    let pares = []
    for(x = 0;x<nums.length;x++){
        if((nums[x]%2)=== 0){
            pares.push(nums[x])
        }
    }
    for(let i = 0;i<nums.length;i++){
        if((i%2)!= 0){
            pares.splice(i,0,impares[(impares.length - 1)])
            impares.splice((impares.length - 1),1)
        }
    }
    return pares
};

//pruebas
var sortArrayByParityII = function(nums) {
  nums = nums.sort((a,b)=>{
    return a - b
  })
  return nums
};
sortArrayByParityII([1,1,0,4])
sortArrayByParityII([4,2,5,7])