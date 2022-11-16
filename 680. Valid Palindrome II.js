/*ASI LO HICE PERO NO LO ACEPTO POR QUE ESTABA LENTO*/
const palindromo2=(s)=>{

    s =  s.toLowerCase().split("")
    let letra;
    
  
    for(i = 0;i < s.length;i++){
        letra = s[i]
         s.splice(i,1)
        s = s.join("")
        let comparacion = s
        comparacion = comparacion.split("").reverse().join("")
        if(comparacion === s){
            return true
        }else{
            s = s.split("")
            s.splice(i,0,letra)
        }
        
        }
        return false
   }
    

palindromo2("abc")
palindromo2("aba")
palindromo2("aba")

/*asi encontre 1 que es rapido*/

var validPalindrome = function (s) {

    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        if (s[i] === s[j]) {
            i++;
            j--;
            continue;
        }

        return !!(isPalidrome(i + 1, j, s) || isPalidrome(i, j - 1, s));
    }

    return true;
};

const isPalidrome = (start, end, s) => {
    for (let i = start, j = end; i < j; i++, j--) {
        if (s[i] !== s[j]) return false;
    }
    return true;
};

