//solucionado
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    let array = [];
    for(let i = 0; i<matrix.length;i++){
        let items = [];
        
        for(let x = 0;x<matrix.length;x++){
            items.unshift(matrix[x][i]);
        }
        array.push(items)
    }
    for(let x = 0;x<matrix.length;x++){
           matrix.splice(x,1,array[x])
        }
    
};