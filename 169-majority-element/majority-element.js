/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    let currentPossibleMajority=-1;
    let count=0;

    for(let i=0;i<nums.length;i++ ){
        if(count==0){
            currentPossibleMajority=nums[i];
        }
        if(currentPossibleMajority==nums[i]){
            count++;
        }else  {
            count--;
        }
    }
    return currentPossibleMajority;
};