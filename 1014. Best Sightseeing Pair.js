//tenemos que tomar dos indices
/* tomamos los dos indices i y j y values[i] y values[j]
ejemplo
values = [8,1,5,2,6]
i = 0, j = 2, values[i] + values[j] + i - j =
8 + 5 + 0 - 2 = 11*/

/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
  const results = 0;

  for (let i = 0; i < values.length; i++) {
      for (let j = i + 1; j < values.length; j++) {
        const sum = values[i] + values[j] + i - j;
        if(sum > results){
            results = sum
        }
      }
  }
  return results
};
