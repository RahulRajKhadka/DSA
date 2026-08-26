## Majority Element

### Problem
Find the element that appears more than `n / 2` times in the array.

### Approach
Used the **Boyer-Moore Voting Algorithm**.

I keep a candidate and a count:
- If `count` becomes `0`, choose the current element as the new candidate.
- If the current element equals the candidate, increase `count`.
- Otherwise, decrease `count`.

### Complexity
- Time: `O(n)`
- Space: `O(1)`
