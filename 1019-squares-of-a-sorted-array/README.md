# Squares of a Sorted Array

## My Approach — Two Pointer

### What I thought

The array is already sorted, but it can contain negative numbers.

Example:

```text
[-7, -3, 2, 3, 11]
```

If I square everything, the order can change:

```text
49, 9, 4, 9, 121
```

So I need to return the squares in sorted order.

### Main Observation

The **largest square will always come from either end of the array**.

Why?

Because the array is sorted:

```text
[-7, -3, 2, 3, 11]
 ↑              ↑
left           right
```

The biggest absolute value can only be at the `left` or `right`.

So I use two pointers:

```js
let left = 0;
let right = n - 1;
```

I compare:

```js
nums[left] ** 2
nums[right] ** 2
```

Whichever square is bigger, I put it at the **end of the result array**.

### Why fill from right to left?

The biggest square should be at the last position.

So:

```text
result = [_, _, _, _, _]
                    ↑
                    i
```

After placing the biggest square, move `i` backwards.

```js
for (let i = n - 1; i >= 0; i--)
```

### Logic

```text
If left² < right²
    → right² is bigger
    → result[i] = right²
    → right--

Else
    → left² is bigger
    → result[i] = left²
    → left++
```

### Code

```js
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
```

### Example

```text
nums = [-7, -3, 2, 3, 11]

Compare:
49 vs 121 → take 121

Compare:
49 vs 9 → take 49

Compare:
9 vs 9 → take 9

Compare:
9 vs 4 → take 9

Finally:
4
```

Result:

```text
[4, 9, 9, 49, 121]
```

## What I Need to Remember

* Use **two pointers** because the array is sorted.
* `left` starts at `0`.
* `right` starts at `n - 1`.
* Compare the **squares**, not the original values.
* Put the **larger square at the end** of `result`.
* Move the pointer from which I took the square.
* Fill `result` from **right → left**.
* Time: `O(n)`
* Space: `O(n)` because I create the `result` array.
