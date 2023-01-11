//completado con fuerza bruta

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const result = [];

    while (strs.length !== 0) {
        const words = []

        for (let i = 1; i < strs.length; i++) {
            const word = strs[0].split("")
            let verify = 0

            if (strs[0].length === strs[i].length) {
                for (let x = 0; x < strs[0].length; x++) {
                    if (strs[0] === strs[i]) {
                        words.push(strs[i])
                        strs.splice(i, 1)
                        i--
                        break
                    } else {
                        const index = word.indexOf(strs[i][x])
                        if (index >= 0) {
                            word.splice(index, 1)
                            verify++
                        } else {
                            break
                        }
                    }
                }
                if (verify === strs[0].length) {
                    words.push(strs[i])
                    strs.splice(i, 1)
                    i--
                }

            }
        }
        words.push(strs[0])
        strs.splice(0, 1)
        result.push(words)
    }
    return result
};
groupAnagrams(["h", "h", "h"])
groupAnagrams(["", "b", ""])
groupAnagrams(["c", "c"])
groupAnagrams(["", "b"])
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
groupAnagrams([""])
groupAnagrams(["", "", "", "", "", ""])