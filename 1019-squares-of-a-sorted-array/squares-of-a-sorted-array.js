/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let n = nums.length;

    let left = 0;
    let right = n - 1;

    let result = new Array(n);

    for (let i = n - 1; i >= 0; i--) {

        if (nums[left] ** 2 < nums[right] ** 2) {
            result[i] = nums[right] ** 2;
            right--;
        } else {
            result[i] = nums[left] ** 2;
            left++;
        }
    }

    return result;
};