const partition = (nums)=>{
    let resultado = 0;
    if(nums.length === 1){
        return nums[0]
    }
    nums.sort(function(a,b){
        return a-b
    });
    console.log(nums)
for(i =0; i < nums.length;i++){
    if(i % 2 === 0){
        resultado+= nums[i]
    }
}
return resultado
}

partition([6214, -2290, 2833,-7908])

partition([1,4,3,2])
partition([6,2,6,5,1,2])

/*ASI LO ENTREGUE*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var arrayPairSum = function(nums) {

    let resultado = 0;
  if(nums.length === 1){
      return nums[0]
  }
  nums.sort(function(a,b){
      return a-b
  });
  console.log(nums)
for(i =0; i < nums.length;i++){
  if(i % 2 === 0){
      resultado+= nums[i]
  }
}
return resultado
  
  
  
};

