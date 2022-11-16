// forma lenta

var maxProfit = function(prices) {
    let array = []
    let array2 =[...prices]
    for(i = 0;i<array2.length;i++){
        prices.shift()
        array.push((Math.max(...prices) - array2[i]))
    }
    if(Math.max(...array) <= 0){
        return 0
    }
    return Math.max(...array)
};


maxProfit([2,1,2,1,0,1,2])
maxProfit([7,1,5,3,6,4])
maxProfit([7,6,4,3,1])
maxProfit([2,4,1])