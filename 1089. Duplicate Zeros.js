var duplicateZeros = function(arr) {
    for(i=0;i<arr.length;i++){
        if(arr[i] === 0){
            arr.splice(i,0,0)
            i++
            arr.pop()
        }
    }
    return arr
};
duplicateZeros([1,0,2,3,0,4,5,0])

//asi lo entregue

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    for(i=0;i<arr.length;i++){
    if(arr[i] === 0){
        arr.splice(i,0,0)
        i++
        arr.pop()
    }
}
return arr

};