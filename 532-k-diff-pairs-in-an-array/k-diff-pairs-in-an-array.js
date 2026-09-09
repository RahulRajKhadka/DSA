/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if(k<0 || nums.legth<2)return 0;
    nums.sort((a,b)=>a-b);

    let count=0;
    let left=0;
    let right=0;
    while(right<nums.length){
        if(left==right){
            right++;
            continue;
        }
        const diff=nums[right]-nums[left];
        if(diff==k){
            count++;
            left++;
            right++;
              while (left < nums.length && nums[left] === nums[left - 1]) {
                left++;
            }
             while (right < nums.length && nums[right] === nums[right - 1]) {
                right++;
            }

        }else if(diff<k){
            right++;
        }else {
            left++;
        }
    }

    return count;
};