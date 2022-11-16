const findPoisonedDuration =(timeSeries, duration) =>{
    let result = 0
    for(i = 0; i< timeSeries.length;i++){
        let operation = timeSeries[i+1] - timeSeries[i];
        if(isNaN(operation)){
            operation = duration
        }
        if(operation > duration){
            operation = duration
        }
        console.log(operation)
        result += operation
    }
    return result
};

findPoisonedDuration([6,8,10,12],3)

/*ASI LO ENTREGUE*/

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
 var findPoisonedDuration = function(timeSeries, duration) {
    let result = 0
for(i = 0; i< timeSeries.length;i++){
    let operation = timeSeries[i+1] - timeSeries[i];
    if(isNaN(operation)){
        operation = duration
    }
    if(operation > duration){
        operation = duration
    }
    console.log(operation)
    result += operation
}
return result

};