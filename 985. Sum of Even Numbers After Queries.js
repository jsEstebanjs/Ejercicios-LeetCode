//entregado
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
 var sumEvenAfterQueries = function(nums, queries) {
  
    let arr = [];

    for(let i = 0; i<queries.length;i++){
        let count = 0;
        let index = queries[i][1];
        nums[index] = nums[index] + queries[i][0]

        nums.forEach(element => {
            if(element % 2 === 0){
                count += element
            }
        });
        arr.push(count)
    }
    return arr

};