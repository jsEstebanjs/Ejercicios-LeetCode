var getRow = function(numRows) {
    if(numRows === 0)return[1];
    if(numRows === 1)return[1,1];
    let arrayFinal = [[1,2,1]]

    for(i = 0;i < numRows - 2;i++){
        let sumaCompleta = []
        for(x = 0;x<arrayFinal[i].length;x++){
            let suma = arrayFinal[i][x] + arrayFinal[i][x+1]
            sumaCompleta.push(suma)
        }
        sumaCompleta = sumaCompleta.filter(Boolean)
        sumaCompleta.unshift(1)
        sumaCompleta.push(1)
        arrayFinal.push(sumaCompleta)

    

    }
    return arrayFinal[arrayFinal.length - 1]
};


getRow(2)
/*asi mismo lo entregue*/
