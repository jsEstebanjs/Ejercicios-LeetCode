const pivotIndex =(nums)=> {
    if(nums.length === 1){
        return 0
    }
    for(i =0; i < nums.length;i++){
        Array1 = nums.slice(i + 1)
        Array2 = nums.slice(0,i)
        console.log(Array2.length)
        if(Array1.length === 0 && Array2.length === 0){
            return i
        }else if(Array1.length === 0){
            Array2 = Array2.reduce((a,b)=>{return a+b})
            Array1 = 0
            if(Array2 === Array1){
                return i
            }

        }else if(Array2.length === 0){
            Array1 = Array1.reduce((a,b)=>{return a+b})
            Array2 = 0
            if(Array1 === Array2){
                return i
            }

        }else{
            Array1 = Array1.reduce((a,b)=>{ return a+b})
            Array2 = Array2.reduce((a,b)=>{return a+b})
            if(Array2 === Array1){
                return i
            }
        }

    }
    return -1

};
pivotIndex([1,7,3,6,5,6])
pivotIndex([1,2,3])


/*ASI LO ENTREGUE*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    if(nums.length === 1){
        return 0
    }
    for(i =0; i < nums.length;i++){
        Array1 = nums.slice(i + 1)
        Array2 = nums.slice(0,i)
        console.log(Array2.length)
        if(Array1.length === 0 && Array2.length === 0){
            return i
        }else if(Array1.length === 0){
            Array2 = Array2.reduce((a,b)=>{return a+b})
            Array1 = 0
            if(Array2 === Array1){
                return i
            }

        }else if(Array2.length === 0){
            Array1 = Array1.reduce((a,b)=>{return a+b})
            Array2 = 0
            if(Array1 === Array2){
                return i
            }

        }else{
            Array1 = Array1.reduce((a,b)=>{ return a+b})
            Array2 = Array2.reduce((a,b)=>{return a+b})
            if(Array2 === Array1){
                return i
            }
        }

    }
    return -1
  
};