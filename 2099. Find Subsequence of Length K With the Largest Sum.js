/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
  const numsOrigin = [...nums];
  const result = [];
  nums.sort((a, b) => a - b);
  const max = nums.slice(nums.length - k);
  for (let i = 0; i < numsOrigin.length; i++) {
    if (max.includes(numsOrigin[i])) {
      result.push(numsOrigin[i]);
      const indexMax = max.indexOf(numsOrigin[i]);
      max.splice(indexMax, 1, "");
    }
  }

  return result;
};
maxSubsequence([50, -75], 2);
maxSubsequence([3, 4, 3, 3], 2);
