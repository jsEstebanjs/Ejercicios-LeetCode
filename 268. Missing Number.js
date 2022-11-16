const missing = (nums)=>{
    nums = nums.sort(function(a,b){
        return a - b
    })
    console.log(nums)
    if(nums[nums.length - 1] < nums.length){
        return nums.length
    }
    if(nums[0] !== 0){
        return 0
    }
    for(i = 0; i<nums.length;i++){
        let resta = i + 1

        if(resta !== nums[i+1]){
            return resta
        }

    }
}
missing([45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14])

missing([0,2,3])
missing([1])
missing([0,1])
missing([3,0,1])
missing([0,1])
missing([9,6,4,2,3,5,7,0,1])


/*ASI LO ENTREGUE*/


/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    nums = nums.sort(function(a,b){
           return a - b
       })
       console.log(nums)
       if(nums[nums.length - 1] < nums.length){
           return nums.length
       }
       if(nums[0] !== 0){
           return 0
       }
       for(i = 0; i<nums.length;i++){
           let resta = i + 1
   
           if(resta !== nums[i+1]){
               return resta
           }
   
       }
   };