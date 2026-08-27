# Find All Numbers Disappeared in an Array

## Problem
Given an array `nums` of `n` integers where `nums[i]` is in the range `[1, n]`,
return all the integers in the range `[1, n]` that do not appear in `nums`.

## Concept: Array as a Hash Map (In-Place Index Marking)

Instead of using extra space (a `Set` or `Map`) to track which numbers we've
seen, we use **the array itself** as the hash map.

The key insight: since every value is guaranteed to be in `[1, n]`, each value
has a natural "home index" — `value - 1`. We can use that relationship to turn
positions in the array into presence flags, using the **sign of the number**
as a marker (negative = "this value exists somewhere in the array").

## How it works

**1. Marking pass**
```js
let x = Math.abs(nums[i]);      // original value, even if this slot was already negated
let index = x - 1;              // find the "home" index for this value
if (nums[index] > 0) {
    nums[index] *= -1;          // flip the sign at that index to mark it "seen"
}
```
- `Math.abs(nums[i])` is used because a value may have already been negated by
  a previous iteration — we need the *original* magnitude to compute its
  correct home index.
- The `if (nums[index] > 0)` check guards against double-flipping when a value
  appears more than once (duplicates) — once a slot is negative, we leave it
  alone.

**2. Reading pass**
```js
if (nums[i] > 0) {
    result.push(i + 1);
}
```
If a position was **never marked negative**, it means no value in the array
ever pointed to it — so the number `i + 1` never appeared, i.e. it "disappeared."

## Why this approach

| Approach              | Time  | Space |
|------------------------|-------|-------|
| Set / Map lookup        | O(n)  | O(n)  |
| Sort first               | O(n log n) | O(1) / O(log n) |
| **In-place sign marking** | **O(n)** | **O(1)** (excluding output) |

Because the values are bounded to `[1, n]`, we can exploit the array's own
indices as a hash table with O(1) extra space — no auxiliary data structure
needed. The tradeoff is that this **mutates the input array**.

## Mental model
> **index = a value's home address, sign = a "visited" flag.**

Every number "checks into" its own house (`value - 1`) and turns off the
porch light (negates it). At the end, any house whose light is still on
belongs to a number that never showed up.

## Solution

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let x = Math.abs(nums[i]);
        let index = x - 1;
        if (nums[index] > 0) {
            nums[index] *= -1;
        }
    }

    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
};
```
