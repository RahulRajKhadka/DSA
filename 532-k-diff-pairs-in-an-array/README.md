## K-diff Pairs in an Array

### Problem

Given an array `nums` and an integer `k`, find the number of **unique pairs** whose absolute difference is `k`.

### Constraints

* `1 <= nums.length <= 10^4`
* `-10^7 <= nums[i] <= 10^7`
* `0 <= k <= 10^7`

### My Approach — HashMap

First, create a frequency map:

```text
number → frequency
```

Then loop through the Map.

#### Case 1: `k === 0`

We need two occurrences of the **same number**.

```text
frequency >= 2
→ pairCount++
```

Example:

```text
1 → 2
```

This gives the pair:

```text
(1, 1)
```

#### Case 2: `k > 0`

The condition is:

```text
|ai - aj| = k
```

For positive `k`:

```text
ai - aj = k

ai = aj + k
```

So while looping over `aj`, check whether:

```text
aj + k
```

exists in the Map.

```js
frequencyMap.has(number + k)
```

If it exists:

```text
→ valid pair
→ pairCount++
```

### Why `number + k`?

Example:

```text
number = 1
k = 2

1 + 2 = 3
```

If `3` exists:

```text
ai = 3
aj = 1

3 - 1 = 2
```

So `(1, 3)` is a valid pair.

### Important Points

```text
Map key   → number
Map value → frequency

k = 0
→ frequency >= 2

k > 0
→ check number + k

valid pair
→ pairCount++
```

### Complexity

```text
Time:  O(n) average
Space: O(n)
```
