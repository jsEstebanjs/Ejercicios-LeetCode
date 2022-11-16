
//ASI SERIA CON SORT
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    nums.sort()
    return nums

};
//SIN SORT
var sortColors = function(nums) {
    let array = []
    let iterador = [...nums]
    let iterador2 = [...nums]
    for(i = 0;i<iterador2.length;i++){
        let number = Math.max(...iterador)
        number = iterador.indexOf(number)
        nums.unshift(iterador[number])
        iterador.splice(number,1)
    }
    nums.splice((iterador2.length),(nums.length - iterador2.length ))
    return nums
};
sortColors([2,0,2,1,1,0])

