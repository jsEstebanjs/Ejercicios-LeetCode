const truncateSentence = (s, k)=> {
s = s.split(" ")
while(s.length > k){
    s.pop()
}
s = s.join(" ")
return s
};

truncateSentence("Hello how are you Contestant",4)

/*ASI LO ENTREGUE*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var truncateSentence = function(s, k) {
    s = s.split(" ")
while(s.length > k){
    s.pop()
}
s = s.join(" ")
return s
};
