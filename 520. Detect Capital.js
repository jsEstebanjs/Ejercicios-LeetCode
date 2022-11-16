const detectCapitalUse =(word)=> {

if(/^([A-Z])+$/.test(word)){
    return true
}else if(/^([A-Z]{1})[a-z]+$/.test(word)){
    return true
}else if(/^[a-z]+$/.test(word)){
    return true
}

return false
};
detectCapitalUse("Google")
detectCapitalUse("USA")
detectCapitalUse("FlaG")

/*ASI LO ENTREGUE*/

/**
 * @param {string} word
 * @return {boolean}
 */
 var detectCapitalUse = function(word) {

    if(/^([A-Z])+$/.test(word)){
        return true
    }else if(/^([A-Z]{1})[a-z]+$/.test(word)){
        return true
    }else if(/^[a-z]+$/.test(word)){
        return true
    }
    
    return false
    };