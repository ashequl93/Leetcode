function uniquePaths(m: number, n: number): number {
  /**
      3 steps to solve:
      1. Define what the function does/express every possible state in indices
      2. Express every possible move/steps from the current index (recursion)
      3. Take the best/min/max/total out of all the possible solutions
   */
  // initialize a 2D array for memoization
  const memo = Array.from(new Array(m), () => new Array(n).fill(-1));

  const dp = (row: number, col: number): number => {
    // Base case
    if (row === m - 1 && col === n - 1) {
      return 1;
    }

    if (row >= m || col >= n) {
      return 0;
    }

    if (memo[row][col] !== -1) {
      return memo[row][col];
    }

    // Express every possible move/step from the current index (recursion)
    // I can either go right or down
    let right = dp(row, col + 1);
    let down = dp(row + 1, col);
    let total = right + down;
    memo[row][col] = total;
    return total;
  };

  return dp(0, 0);
}
