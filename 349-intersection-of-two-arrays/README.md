# Intersection of Two Arrays

## Problem

Given two integer arrays `nums1` and `nums2`, return an array containing their intersection.

Each element in the result must be unique.

## Approach

I used two objects to solve the problem:

1. Create `freqNums1` to store the elements from `nums1`.
2. Iterate through `nums1` and store each element as a key in `freqNums1`.
3. Iterate through `nums2`.
4. If an element from `nums2` exists in `freqNums1`, store it in `freqNums2`.
5. Since object keys are unique, duplicate elements are automatically avoided.
6. Return the keys of `freqNums2` as numbers.

## Complexity

- **Time Complexity:** `O(n + m)`
- **Space Complexity:** `O(n + m)`

Where:
- `n` = length of `nums1`
- `m` = length of `nums2`
