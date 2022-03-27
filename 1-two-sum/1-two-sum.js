/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  return nums.reduce((acc, cur, i, arr) => {
    arr.filter((item, index) => {
      if(i !== index && cur + item === target) {
        acc.push(i);
      }
    });
    return acc;
  }, [])
};