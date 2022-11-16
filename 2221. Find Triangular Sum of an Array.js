var triangularSum = function(nums) {
    let conteo;
   let arrayMomentaneo = []
   while(nums.length > 1){

       for(i = 0; i<nums.length;i++){
           if(nums[i] + nums[i+1] >= 10){
               conteo = (nums[i] + nums[i+1])%10
               arrayMomentaneo.push(conteo)
           }else{
               conteo = nums[i] + nums[i+1]
               arrayMomentaneo.push(conteo)
           }
       }
       arrayMomentaneo = arrayMomentaneo.filter(function (value) {
        return !Number.isNaN(value);
        });
       nums = arrayMomentaneo;
       arrayMomentaneo = []
   }
   return nums[0]
};

triangularSum([0,3,3,4,1,2,6,4,9,3,5,1,7,7,3,0,3,2,5,1,9,0,2,6,3,9,2,5,9,2,6,4,2,9,7,2,0,3,0,1,1,2,7,8,6,4,4,5])
triangularSum([2,6,6,5,5,3,3,8,6,4,3,3,5,1,0,1,3,6,9])
triangularSum([1,2,3,4,5])


/*ASI LO ENTREGUE*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var triangularSum = function(nums) {
    let conteo;
   let arrayMomentaneo = []
   while(nums.length > 1){

       for(i = 0; i<nums.length;i++){
           if(nums[i] + nums[i+1] >= 10){
               conteo = (nums[i] + nums[i+1])%10
               arrayMomentaneo.push(conteo)
           }else{
               conteo = nums[i] + nums[i+1]
               arrayMomentaneo.push(conteo)
           }
       }
       arrayMomentaneo = arrayMomentaneo.filter(function (value) {
        return !Number.isNaN(value);
        });
       nums = arrayMomentaneo;
       arrayMomentaneo = []
   }
   return nums[0]
};

/*OTRA FORMA CON UN SOLO CICLO LO HICE YO*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
let conteo;
let arrayMomentaneo = []
let i = 0

while(nums.length > 1){
    if(/^[0-9]+$/.test(nums[i])){
            if(nums[i] + nums[i+1] >= 10){
                conteo = (nums[i] + nums[i+1])%10
                arrayMomentaneo.push(conteo)
                i++
            }else{
                conteo = nums[i] + nums[i+1]
                arrayMomentaneo.push(conteo)
                i++
                }
    }else{
            arrayMomentaneo = arrayMomentaneo.filter(function (value) {
                     return !Number.isNaN(value);
            });
            nums = arrayMomentaneo;
            arrayMomentaneo = []
            i=0
        }
    }
       return nums[0]
};

triangularSum([0,3,3,4,1,2,6,4,9,3,5,1,7,7,3,0,3,2,5,1,9,0,2,6,3,9,2,5,9,2,6,4,2,9,7,2,0,3,0,1,1,2,7,8,6,4,4,5])
triangularSum([2,6,6,5,5,3,3,8,6,4,3,3,5,1,0,1,3,6,9])
triangularSum([1,2,3,4,5])