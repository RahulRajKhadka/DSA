/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    if (k < 0) return 0;
    const frequencyMap = new Map();
    let pairCount = 0;
    for (const number of nums) {
        frequencyMap.set(
            number,
         (frequencyMap.get(number) || 0) + 1);
    }
    
    for (const [number, frequency] of frequencyMap) {
        if (k === 0) {
            if (frequency >= 2) {
                pairCount++;
            }
        }
        else {
            if (frequencyMap.has(number + k)) {
                pairCount++;
            }
        }
    }

    return pairCount;



};