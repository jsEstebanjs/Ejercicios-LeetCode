const letra =(s,t)=>{

  s = s.split("").sort();
  t = t.split("").sort();
  for(i = 0; i < t.length; i++){
    if(t[i] !== s[i]){
        return t[i]
    }

  }
}

letra()

letra("abcd","abcde")

/*ASI LO ENTREGUE*/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {

    s = s.split("").sort();
    t = t.split("").sort();
    for(i = 0; i < t.length; i++){
      if(t[i] !== s[i]){
          return t[i]
      }
  
    }
  
  };
