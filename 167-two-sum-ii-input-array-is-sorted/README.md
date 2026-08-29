# Two Sum II – Input Array Is Sorted

## Problem

Given a **1-indexed** array of integers `numbers` that is already sorted in **non-decreasing order**, find two numbers such that:

```text
numbers[i] + numbers[j] = target
```

Return the indices of the two numbers.

The array uses **1-based indexing**, so the answer should return:

```text
[i + 1, j + 1]
```

---

## Example

```text
numbers = [2, 7, 11, 15]
target = 9
```

We need to find two numbers whose sum is `9`.

```text
2 + 7 = 9
```

So the answer is:

```text
[1, 2]
```

---

# Approach 1: Brute Force

First, I think about the simplest solution without worrying about optimization.

We can check **every possible pair** in the array.

For every `i`, check all elements after it using another loop.

### Code

```js
var twoSum = function(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {

            if (numbers[i] + numbers[j] === target) {
                return [i + 1, j + 1];
            }

        }
    }
};
```

### How it works

For:

```text
[2, 7, 11, 15]
```

We check:

```text
2 + 7
2 + 11
2 + 15
7 + 11
7 + 15
11 + 15
```

When the sum equals the target, we return the indices.

### Complexity

```text
Time:  O(n²)
Space: O(1)
```

---

# Approach 2: Two Pointers

Now we notice an important property:

> The array is already sorted.

Because the array is sorted, we don't need to check every possible pair.

We can use **two pointers**:

```text
i → starts from the beginning
j → starts from the end
```

### Initial setup

```js
let i = 0;
let j = numbers.length - 1;
```

For:

```text
numbers = [2, 7, 11, 15]
```

We have:

```text
 i              j
 ↓              ↓
[2, 7, 11, 15]
```

---

## Step 1: Calculate the sum

```js
let sum = numbers[i] + numbers[j];
```

Initially:

```text
2 + 15 = 17
```

Our target is:

```text
9
```

Since:

```text
17 > 9
```

the sum is too large.

Because the array is sorted, we need a smaller number.

So we move the right pointer to the left:

```js
j--;
```

Now:

```text
 i          j
 ↓          ↓
[2, 7, 11, 15]
```

---

## Step 2: Calculate again

Now:

```text
2 + 11 = 13
```

Again:

```text
13 > 9
```

The sum is still too large.

So:

```js
j--;
```

Now:

```text
 i   j
 ↓   ↓
[2, 7, 11, 15]
```

---

## Step 3: Calculate again

Now:

```text
2 + 7 = 9
```

And:

```text
9 === 9
```

We found the answer.

So we return:

```js
return [i + 1, j + 1];
```

The result is:

```text
[1, 2]
```

---

# Why Do We Move the Pointers?

This is the most important part of the solution.

### If the sum is greater than the target

```text
sum > target
```

We need to **decrease the sum**.

Since the array is sorted, move the right pointer left:

```js
j--;
```

Example:

```text
2 + 15 = 17
```

Move `j`:

```text
2 + 11 = 13
```

The sum became smaller.

---

### If the sum is smaller than the target

```text
sum < target
```

We need to **increase the sum**.

Since the array is sorted, move the left pointer right:

```js
i++;
```

Example:

```text
2 + 7 = 9
```

If the target were `12` instead:

```text
2 + 7 = 9
```

The sum is too small, so we move `i`:

```text
7 + 7...
```

The left value becomes larger, which increases the sum.

---

# Final Optimized Code

```js
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;

    while (i < j) {

        let sum = numbers[i] + numbers[j];

        if (sum === target) {
            return [i + 1, j + 1];
        }

        if (sum > target) {
            j--;
        } else {
            i++;
        }
    }
};
```

---

# The Main Logic to Remember

```text
             Calculate sum
                  ↓
        numbers[i] + numbers[j]
                  ↓
        ┌─────────┼─────────┐
        ↓         ↓         ↓
      sum <     sum ==     sum >
      target    target     target
        ↓         ↓         ↓
       i++      return      j--
```

In simple words:

```text
sum == target
    → Found the answer → stop

sum > target
    → Sum is too big → decrease j

sum < target
    → Sum is too small → increase i
```

---

# Why Two Pointers Is Better

### Brute Force

```text
Two loops
    ↓
Check every pair
    ↓
O(n²)
```

### Two Pointers

```text
One pointer from left
One pointer from right
        ↓
Move one pointer each time
        ↓
O(n)
```

So the optimization is:

```text
Brute Force → O(n²)

        ↓
Use the fact that the array is sorted

        ↓

Two Pointers → O(n)
```

### Complexity

```text
Time Complexity:  O(n)
Space Complexity: O(1)
```

---

# My Problem-Solving Pattern

When solving DSA problems, my first thought is:

```text
1. Understand the problem
2. Think about the brute-force solution
3. Check the constraints
4. Look for a useful property
5. Optimize the brute-force approach
```

For this problem:

```text
Brute Force
    ↓
Check every pair
    ↓
Notice the array is sorted
    ↓
Use two pointers
    ↓
O(n²) → O(n)
```

The key observation here is:

> **Because the array is sorted, we can decide which pointer to move based on whether the current sum is too small or too large.**
