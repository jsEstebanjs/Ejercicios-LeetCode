
//expreciones regulares que verifiquen si es letra numero o espacio
var myAtoi = function(s) {
    let Esnegativo;
    let array = [];
    s = s.split("")

    console.log(s)
    for(i = 0;i<s.length;i++){

        if(s[i] === "-" && array.length === 0){
            if(typeof Esnegativo == "boolean"){
                break;
            }else{
                Esnegativo = true
            }
            
        }else if(s[i] === "-" && array.length >= 1 || s[i] === "+" && array.length >= 1 ){
            break;

        }else if(s[i] === "+" && array.length === 0){
            if(typeof Esnegativo == "boolean"){
                break;
            }else{
                Esnegativo = false
            }
        }else if( /^[0-9]+$/.test(s[i])){
            array.push(s[i])

        }else if(/^[a-zA-Z]+$/.test(s[i])){
            break;
    
        }else if(/\s/.test(s[i])&& array.length >= 1 || typeof Esnegativo == "boolean"){
            break;

        }else if(s[i] === "."){
            break;
        }
    }
    array = array.join("");
    array = Number(array)
    if(Esnegativo){
        array = array*(-1)
    }
    if(array > 2147483647 ){
        return 2147483647
    }else if(array < -2147483647){
        return -2147483647
    }
    return array
};
myAtoi("-91283472332")
myAtoi("-91283472332")
myAtoi("  -0@451")//0


//asi lo entregue
var myAtoi = function(s) {
    let Esnegativo;
    let array = [];
    s = s.split("")

    for(i = 0;i<s.length;i++){

        if(s[i] === "-" && array.length === 0){
            if(typeof Esnegativo == "boolean"){
                break;
            }else{
                Esnegativo = true
            }
            
        }else if(s[i] === "-" && array.length >= 1 || s[i] === "+" && array.length >= 1 ){
            break;

        }else if(s[i] === "+" && array.length === 0){
            if(typeof Esnegativo == "boolean"){
                break;
            }else{
                Esnegativo = false
            }
        }else if( /^[0-9]+$/.test(s[i])){
            array.push(s[i])

        }else if(/^[a-zA-Z]+$/.test(s[i])){
            break;
    
        }else if(/\s/.test(s[i])&& array.length >= 1 || typeof Esnegativo == "boolean"){
            break;

        }else if(s[i] === "."){
            break;
        }
    }
    array = array.join("");
    array = Number(array)
    if(Esnegativo){
        array = array*(-1)
    }
    if(array > 2147483647 ){
        return 2147483647
    }else if(array < -2147483648){
        return -2147483648
    }
    return array
};