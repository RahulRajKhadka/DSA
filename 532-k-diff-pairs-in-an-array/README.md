# K-diff Pairs in an Array

## Problem

Given an integer array `nums` and an integer `k`, return the number of **unique pairs** `(nums[i], nums[j])` such that:

```text
|nums[i] - nums[j]| = k
```

A pair should be counted only once, even if the same numbers appear multiple times.

---

## Example

```text
nums = [3, 1, 4, 1, 5]
k = 2

Unique pairs:
(1, 3)
(3, 5)

Answer = 2
```

---

## My Approach

### 1. Handle invalid cases

If `k < 0`, the answer is always `0` because an absolute difference cannot be negative.

If the array has fewer than 2 elements, a pair cannot be formed.

```js
if (k < 0 || nums.length < 2) return 0;
```

---

### 2. Sort the array

```js
nums.sort((a, b) => a - b);
```

Sorting allows us to use the **two-pointer technique**.

For example:

```text
[3, 1, 4, 1, 5]

after sorting:

[1, 1, 3, 4, 5]
```

Now, as we move the pointers, the difference changes in a predictable way.

---

## 3. Use Two Pointers

We use:

```js
let left = 0;
let right = 0;
```

The important idea is:

```text
diff = nums[right] - nums[left]
```

Because the array is sorted:

### If `diff === k`

We found a valid pair.

```js
count++;
left++;
right++;
```

Then we skip duplicates so the same pair isn't counted again.

---

### If `diff < k`

The difference is too small.

We need to make the difference larger, so we move `right`:

```js
right++;
```

---

### If `diff > k`

The difference is too large.

We need to make the difference smaller, so we move `left`:

```js
left++;
```

---

## 4. Why Skip Duplicates?

The problem asks for **unique pairs**.

For example:

```text
nums = [1, 1, 3, 3]
k = 2
```

The pair `(1, 3)` should only be counted once.

After finding a pair, we skip duplicate values:

```js
while (left < nums.length && nums[left] === nums[left - 1]) {
    left++;
}

while (right < nums.length && nums[right] === nums[right - 1]) {
    right++;
}
```

This prevents counting the same value pair multiple times.

---

## Dry Run

Consider:

```text
nums = [3, 1, 4, 1, 5]
k = 2
```

After sorting:

```text
[1, 1, 3, 4, 5]
```

Start:

```text
left = 0
right = 0
```

Since both pointers are equal:

```text
right++
```

Now:

```text
left = 0 → 1
right = 1
```

Difference:

```text
3 - 1 = 2
```

Found a pair:

```text
(1, 3)
```

```text
count = 1
```

Move both pointers and skip duplicates.

Eventually:

```text
(3, 5)
```

is found.

Therefore:

```text
answer = 2
```

---

## Code

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if (k < 0 || nums.length < 2) return 0;

    nums.sort((a, b) => a - b);

    let count = 0;
    let left = 0;
    let right = 0;

    while (right < nums.length) {

        if (left === right) {
            right++;
            continue;
        }

        const diff = nums[right] - nums[left];

        if (diff === k) {
            count++;

            left++;
            right++;

            // Skip duplicate left values
            while (
                left < nums.length &&
                nums[left] === nums[left - 1]
            ) {
                left++;
            }

            // Skip duplicate right values
            while (
                right < nums.length &&
                nums[right] === nums[right - 1]
            ) {
                right++;
            }

        } else if (diff < k) {
            right++;
        } else {
            left++;
        }
    }

    return count;
};
```

---

## Important Pattern to Remember

This problem follows the:

> **Sort + Two Pointers + Skip Duplicates**

pattern.

The main decision is:

```text
difference < k
       ↓
move right
       ↓
increase difference


difference > k
       ↓
move left
       ↓
decrease difference


difference === k
       ↓
found unique pair
       ↓
count + move both + skip duplicates
```

---

## Complexity

### Time

Sorting:

```text
O(n log n)
```

Two-pointer traversal:

```text
O(n)
```

Overall:

```text
O(n log n)
```

### Space

Apart from the sorting implementation:

```text
O(1)
```

extra space.

---

## What I Should Remember

When I see:

* **Unique pairs**
* Difference between two numbers
* `|a - b| = k`
* Need an efficient solution

Think:

```text
Sort
  ↓
Two pointers
  ↓
Compare difference with k
  ↓
Move the correct pointer
  ↓
Skip duplicates
```

### Pointer Movement Rule

```text
diff < k  → right++

diff > k  → left++

diff = k  → count++, move both
```

This is the key idea I should remember for revision.
