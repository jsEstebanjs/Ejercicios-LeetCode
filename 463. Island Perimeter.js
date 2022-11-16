const islandPerimeter =(grid)=> {
    let perimeter = 0
    for(i = 0; i<grid.length;i++){

        for(x=0;x<grid[i].length;x++){
            let conteo = 4
            if(grid[i][x] === 1){
                if(grid[i][x+1] === 1){
                    conteo--
                }
                if(grid[i][x-1] === 1){
                    conteo--
                }
               if(grid[i+1] != undefined){
                if(grid[i+1][x] === 1){
                    conteo--
                }
               }
                if(i > 0){
                    if(grid[i-1][x] === 1){
                        conteo--
                    }
                }
                perimeter+=conteo
            }
        }
    }
    return perimeter
    
};
islandPerimeter([[1,0]])
islandPerimeter([[1]])
islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])

/*ASI LO ENTREGUE*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var islandPerimeter = function(grid) {
    
    let perimeter = 0
  for(i = 0; i<grid.length;i++){

      for(x=0;x<grid[i].length;x++){
          let conteo = 4
          if(grid[i][x] === 1){
              if(grid[i][x+1] === 1){
                  conteo--
              }
              if(grid[i][x-1] === 1){
                  conteo--
              }
             if(grid[i+1] != undefined){
              if(grid[i+1][x] === 1){
                  conteo--
              }
             }
              if(i > 0){
                  if(grid[i-1][x] === 1){
                      conteo--
                  }
              }
              perimeter+=conteo
          }
      }
  }
  return perimeter
  
};

