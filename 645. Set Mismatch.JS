const findErrorNums = (nums)=> {
    let falta;
    let repetido;
    let Array = new Set(nums)
    Array = [...Array]
    Array.sort((a,b)=>{return a - b})
    console.log(Array)
    if(Array[0] === 1){
        for(i =0;i<nums.length;i++){
            if(i + 1 != Array[i]){
                console.log(i + 1,Array[i])
                falta = i+1
                break;
            }
        }
    }else{
        falta = 1
    }
  
    for(x = 0;x<nums.length;x++){
        for(z = x+1; z<nums.length;z++){
            if(nums[x] === nums[z]){
                repetido = nums[z]
            }
        }
    }
    return [repetido,falta]
};
findErrorNums([1,5,3,2,2,7,6,4,8,9])
findErrorNums([5,3,6,1,5,4,7,8])
findErrorNums([2,2])

findErrorNums([1,2,3,4,5,6,2])

/*ASI LO ENTREGUE*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findErrorNums = function(nums) {
    let falta;
   let repetido;
   let Array = new Set(nums)
   Array = [...Array]
   Array.sort((a,b)=>{return a - b})
   console.log(Array)
   if(Array[0] === 1){
       for(i =0;i<nums.length;i++){
           if(i + 1 != Array[i]){
               console.log(i + 1,Array[i])
               falta = i+1
               break;
           }
       }
   }else{
       falta = 1
   }
 
   for(x = 0;x<nums.length;x++){
       for(z = x+1; z<nums.length;z++){
           if(nums[x] === nums[z]){
               repetido = nums[z]
           }
       }
   }
   return [repetido,falta]
};