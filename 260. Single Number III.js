//SOLUCIONADO
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var singleNumber = function(nums) {
    const map = new Map()
const array = [];

for(i = 0;i<nums.length;i++){
    if(map.has(nums[i])){
        let veces = map.get(nums[i]);
        map.set(nums[i],veces+1);
    }else{
        map.set(nums[i],1)
    }
}
for(let[key,valor] of map){
    if(valor === 1){
        array.push(key);
    }
}
return array

};
singleNumber([1,2,1,3,2,5])