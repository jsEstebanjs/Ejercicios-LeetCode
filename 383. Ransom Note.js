/*ASI LO ENTREGUE*/
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    if(magazine.length < ransomNote.length){
         return false
     }
     ransomNote = ransomNote.split("")
     magazine = magazine.split("")
     let array = new Array(ransomNote.length)
     let conteo = 0
     for(i = 0; i<magazine.length;i++){
         let afirmacion = ransomNote.indexOf(magazine[i])
         console.log(afirmacion)
         if(afirmacion >= 0){
             conteo++
            ransomNote.splice(afirmacion,1,)
           magazine.splice(i,1,)
            console.log(ransomNote,magazine)
             i--
         }
         if(conteo === array.length){
         
             return true
         }
     }
     return false
         
 };

 //haci lo hice luego de casi 2 meses
 var canConstruct = function(ransomNote, magazine) {
    let map1 = new Map();
    let map2 = new Map();
    for(i = 0;i<ransomNote.length || i<magazine.length;i++){
        if(map1.has(ransomNote[i])){
            let item = map1.get(ransomNote[i]);
            map1.set(ransomNote[i],item+1);
        }else if(ransomNote[i]!= undefined){
            map1.set(ransomNote[i],1);
        }

        if(map2.has(magazine[i])){
            let item = map2.get(magazine[i]);
            map2.set(magazine[i],item+1);
        }else if(magazine[i] != undefined){
            map2.set(magazine[i],1);
        }

    }
    for(let [key,value] of map1){
        if(map2.has(key)){
            let item = map2.get(key);
            if(item >= value){
                continue
            }else{
                return false
            }
        }else{
            return false
        }
    }
    return true
};
canConstruct("aa","ab")
canConstruct("bg","efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj")
canConstruct("aa","aab")

//pero encontre esta mucho mas rapida
var canConstruct = function(ransomNote, magazine) {
    let mag_arr = magazine.split("")
    let ran_arr = ransomNote.split("")
  
    for(let i=0; i<ran_arr.length; i++){
      let z = mag_arr.indexOf(ran_arr[i])
      if(z >= 0){
        mag_arr.splice(z,1)
        continue
      }else{
        return false
      }
    }
    return true 
  };