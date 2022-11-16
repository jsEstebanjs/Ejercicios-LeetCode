var twoSum = function(nums, target) {
    for(i = 0; i<nums.length;i++){
        for(x = 0;x<nums.length;x++){
            if(x === i){
                continue
            }
            let suma = nums[i] + nums[x]
            if(suma === target){
                return[i,x]
            }
        }
    }
};
twoSum([-1,-2,-3,-4,-5],-8)
twoSum([2,7,11,15],9)

//asi lo entregue lento
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for(i = 0; i<nums.length;i++){
    for(x = 0;x<nums.length;x++){
        if(x === i ){
            continue
        }
        let suma = nums[i] + nums[x]
        if(suma === target){
            return[i,x]
        }
    }
}

};