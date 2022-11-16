//SOLUCIONADO
/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    let arrays = [[],[],[],[],[],[],[],[],[]];
    let indiceA = 0;
    let indiceB = 1;
    let indiceC = 2;
    for(let i=0;i<board.length;i++){
        let arrayHorizontal = []
        let arrayVertical = []
        if(i == 3){
            indiceA = 3;
            indiceB = 4;
            indiceC = 5;
        }
        if(i == 6){
            indiceA = 6;
            indiceB = 7;
            indiceC = 8;
        }
        for(let x = 0;x<board[i].length;x++){
            let item = board[i][x];
            let item2 = board[x][i];
            if(item2 != "."){
                if(arrayVertical.includes(item2)){
                    return false
                }else{
                    arrayVertical.push(item2)
                }
            }

            if(item != "."){
                if(arrayHorizontal.includes(item)){
                    return false
                }else{
                    arrayHorizontal.push(item)
                }
            }

            if(x < 3){
                if(item != "."){
                    if(arrays[indiceA].includes(item)){
                        return false
                    }else{
                        arrays[indiceA].push(board[i][x])
                    }
                }
            }
            if(x < 6 && x > 2){
                if(item != "."){
                    if(arrays[indiceB].includes(item)){
                        return false
                    }else{
                        arrays[indiceB].push(board[i][x])
                    }
                }
                
            }
            if(x < 9 && x > 5){
                if(item != "."){
                    if(arrays[indiceC].includes(item)){
                        return false
                    }else{
                        arrays[indiceC].push(board[i][x])
                    }
                }
            }
        }
    }

    return true
    
};
isValidSudoku([
[".",".","4",".",".",".","6","3","."],
[".",".",".",".",".",".",".",".","."],
["5",".",".",".",".",".",".","9","."],
[".",".",".","5","6",".",".",".","."],
["4",".","3",".",".",".",".",".","1"],
[".",".",".","7",".",".",".",".","."],
[".",".",".","5",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."]])

isValidSudoku([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]);

isValidSudoku([["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]])

isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]])



var isValidSudoku = function(board) {
    let arrays = [[],[],[],[],[],[],[],[],[]];
    let indiceA = 0;
    let indiceB = 1;
    let indiceC = 2;
    for(let i=0;i<board.length;i++){
        let arrayHorizontal = []
        let arrayVertical = []
        if(i == 3){
            indiceA = 3;
            indiceB = 4;
            indiceC = 5;
        }
        if(i == 6){
            indiceA = 6;
            indiceB = 7;
            indiceC = 8;
        }
        for(let x = 0;x<board[i].length;x++){
            let item = board[i][x];
            let item2 = board[x][i];
            if(arrayVertical.includes(item2)){
                return false
            }else{
                arrayVertical.push(item2)
            }
            if(arrayHorizontal.includes(item)){
                return false
            }else{
                arrayHorizontal.push(item)
            }
            if(x < 3){
                if(item != "."){
                    if(arrays[indiceA].includes(item)){
                        return false
                    }else{
                        arrays[indiceA].push(board[i][x])
                    }
                }
            }
            if(x < 6 && x > 2){
                if(item != "."){
                    if(arrays[indiceB].includes(item)){
                        return false
                    }else{
                        arrays[indiceB].push(board[i][x])
                    }
                }
                
            }
            if(x < 9 && x > 5){
                if(item != "."){
                    if(arrays[indiceC].includes(item)){
                        return false
                    }else{
                        arrays[indiceC].push(board[i][x])
                    }
                }
            }
        }
    }
    //verificacion vertical

    return true
};