/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for (let i=0 ; i<nums.length; i++){
        let x=Math.abs(nums[i]);
        let index=x-1;
        if(nums[index]>0){
            nums[index]*=-1;
        }
    }
    let result =[];

    for (let i=0; i<nums.length;i++){
        if(nums[i]>0){
            result.push(i+1);
        }
    }

    return result;
};