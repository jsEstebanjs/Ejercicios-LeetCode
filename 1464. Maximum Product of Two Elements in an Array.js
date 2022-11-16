var maxProduct = function(nums) {
    nums = nums.sort((a,b)=>{
        return a-b
    })
    let numberOne = (nums[nums.length-1] - 1)
    let numberTwo = (nums[nums.length-2] - 1)
    return numberOne * numberTwo
};

maxProduct([2,3,4,5,6,7,8,9])
//entregado