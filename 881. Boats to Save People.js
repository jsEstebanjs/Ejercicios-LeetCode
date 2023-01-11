/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let boats = 0;
  let weight = limit;

  for (let i = 0; i < people.length; i++) {
    if (people[i] !== "A") {
      weight = weight - people[i];
      let verifyNumber = people.indexOf(weight);

      if (verifyNumber >= 0 && verifyNumber > i) {
        boats++;
        people.splice(verifyNumber, 1, "A");
        weight = limit;
      } else if (weight < 0) {
        boats++;
        weight = limit;
        weight = weight - people[i];
      } else if (weight === 0) {
        boats++;
        weight = limit;
      }
    }
  }
  if (weight < limit) {
    boats++;
  }

  return boats;
};
numRescueBoats([3, 2, 3, 2, 2], 6); //esperaba 3
numRescueBoats([3, 5, 3, 4], 5); //4 [3 3 4 5]
numRescueBoats([3, 2, 2, 1], 3); //3 [1 2 2 3]
numRescueBoats([1, 2], 3);
numRescueBoats([5, 1, 4, 2], 6);

