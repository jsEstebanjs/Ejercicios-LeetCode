var kthSmallest = function(matrix, k) {
   matrix =  matrix.flat()
   matrix.sort((a,b)=>{
    return a - b
   })
    
  return matrix[k-1]
};
kthSmallest([[1,5,9],[10,11,13],[12,13,15]],8)

//*asi lo entregue
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(matrix, k) {
    matrix =  matrix.flat()
    matrix.sort((a,b)=>{
     return a - b
    })
     
   return matrix[k-1]
 };