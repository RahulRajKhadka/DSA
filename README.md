# Two Sum

## Approach

I used a brute-force approach with two nested loops.

- The first loop selects an element.
- The second loop checks every element after it.
- If the sum of the two elements equals the target, I return their indices.
- I start the second loop from `i + 1` so the same element is not used twice.

## Complexity

- Time: O(n²)
- Space: O(1)
