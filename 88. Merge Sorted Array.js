const merge =(nums1, m, nums2, n)=> {
    let i = 0
    for(numero of nums2){
        nums1.splice(m + i,1,numero)
        i++
    }
    nums1 = nums1.sort((a,b)=>{
       return a - b
    })
    console.log(nums1)
};

merge([1,2,3,0,0],3,[2,5,6],3)


/*ASI LO ENTREGUE*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let i = 0
   for(numero of nums2){
       nums1.splice(m + i,1,numero)
       i++
   }
   nums1 = nums1.sort((a,b)=>{
      return a - b
   })
   
};