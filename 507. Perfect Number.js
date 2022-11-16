
const perfecto = (num)=>{
    if(num == 1){
        return false 
    }
    let array = 1;
    for(let i = 2; i * i <= num; i++){
        if(num % i === 0){
            array += i + num/i
        }
    }
    console.log(array)
    if(array == num){
        return true
    }else{
        return false
    }
}
perfecto(28)
perfecto(99999997)
perfecto(100000000)
perfecto(99999998)
/*ASI LO ENTREGUE*/
/**
 * @param {number} num
 * @return {boolean}
 */
 var checkPerfectNumber = function(num) {
    if(num == 1){
            return false 
        }
        let array = 1;
        for(let i = 2; i * i <= num; i++){
            if(num % i === 0){
                array += i + num/i
            }
        }
        console.log(array)
        if(array == num){
            return true
        }else{
            return false
        }
    };
        
