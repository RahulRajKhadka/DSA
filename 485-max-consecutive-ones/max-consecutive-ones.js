/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count=0;
    let maxcount=0;
    for (let i=0;i<nums.length;i++){

        if(nums[i]==1){
            count++;
            maxcount=Math.max(maxcount,count);
        }else {
            count=0;
        }
    }
return maxcount;
    
};