//como lo resolvi
var searchMatrix = function(matrix, target) {
   matrix = matrix.flat()
   matrix = matrix.includes(target)
   return matrix

};
searchMatrix([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]],0)

searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],2)

searchMatrix([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]],19)



//la forma mas rapida 

var searchMatrix = function(matrix, target) {
    if(matrix.length < 1) return false;
 let row = 0;
 let col = matrix[0].length -1;

 //first row, last column
 while(row < matrix.length && col >= 0) {
     let value = matrix[row][col];
     if(value == target) return true;
     if(target > value) {
         row++;
     } else {
         col--;
     }
 }
 return false;
};

searchMatrix([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]],0)

searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],2)

searchMatrix([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]],19)


//asi lo hice yo version rapida
let array = 0
let item = (matrix[array].length -1)
while(array < matrix.length){
    if(matrix[array][item] === target){
        return true
    }else if(matrix[array][item] > target){
        item--
    }else{
        array++
    }
}
return false