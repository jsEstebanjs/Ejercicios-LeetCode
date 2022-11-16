/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    const result = [];
    nums.map((item)=>{
        if(result.length > 0){
            result.push(result[result.length - 1] + item )
        }else{
            result.push(item)
        }
    })
    return result
};