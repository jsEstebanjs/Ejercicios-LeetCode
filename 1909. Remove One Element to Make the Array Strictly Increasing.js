
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canBeIncreasing = function(nums) {
    if(nums.length == 2){
  return true
}
for(i = 0;i<nums.length;i++){
  let conteo = 0
  let array = [...nums]
  array.splice(i,1)
  console.log(array)
  for(x = 1;x<array.length;x++){
      if(array[x-1] < array[x]){
          conteo++
      }
      if(conteo === (array.length - 1)){
          return true
      }
  }
}
return false
   
};

canBeIncreasing([1,1,1])

canBeIncreasing([1,2,10,5,7])
/*ASI LO ENTREGUE*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canBeIncreasing = function(nums) {
    if(nums.length == 2){
   return true
}
for(i = 0;i<nums.length;i++){
   let conteo = 0
   let array = [...nums]
   array.splice(i,1)
   console.log(array)
   for(x = 1;x<array.length;x++){
       if(array[x-1] < array[x]){
           conteo++
       }
       if(conteo === (array.length - 1)){
           return true
       }
   }
}
return false

};
canBeIncreasing([391,993,703,903])
canBeIncreasing([1,1,1])
