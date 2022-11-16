var isValid = function(s) {
    if((s.length % 2)!= 0){
        return false
    }
    let map = new Map()
    let c;
    for(i =0; i<s.length;i++){

      if(s[i] === "(" || s[i]===")"){
        if(map.has("(")){
            c = "("
            c = map.get(c)
            map.set("(",c+1)

        }else{
            map.set("(",1)
        }

      }else if(s[i] === "[" || s[i]=== "]"){
        if(map.has("[")){
            c = "["
            c = map.get(c)
            map.set("[",c+1)

        }else{
            map.set("[",1)
        }

      }else if(s[i] === "{" || s[i] === "}"){
        if(map.has("{")){
            c = "{"
            c = map.get(c)
            map.set("{",c+1)

        }else{
            map.set("{",1)
        }


      }
    }
    let array = [...map.values()]

    for(i = 0; i<array.length;i++){
        if((array[i] % 2)!=0){
            return false
        }
    }
    return true
    
};
isValid("(]()()")
isValid("()[]{}")
isValid("(]()()")
isValid("()()()")
