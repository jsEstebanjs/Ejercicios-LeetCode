const remove = (nums,val)=>{
    for(i =0; i < nums.length;i++){
        if(nums[i] === val){
            nums.splice(i,1)
            i--
        }
    }
    return nums.length
}

remove([3,2,2,3],3)

remove([0,1,2,2,3,0,4,2],2)

/*ASI LO ENTREGUE*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    
    for(i =0; i < nums.length;i++){
            if(nums[i] === val){
                nums.splice(i,1)
                i--
            }
        }
        return nums.length
    };



