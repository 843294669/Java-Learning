package arithmetic;

/**
 * Avoiding Landmines: Dynamic Programming Hard Algorithms Data Structures Problem-Solving
 * <p>
 * A robot is moving on a grid of size n*m. In one move, it moves one step
 * right or one step down. Some cells of the grid have landmines, so the
 * robot has to avoid them. The grid is given as an array of size n*m, grid[n][m], where grid[i][j] = 0
 * means that the cell has a landmine, and grid[i][j] = 1 means the cell is safe to step upon.
 * Find the number of ways in which the robot can reach the bottom-right most cell, grid[n-1][m-1],
 * starting from the top-left most cell, grid[0][0].
 * The number can be large, so return the value modulo (10^9 + 7).
 */
public class AvoidingLandmines {
    public static int findSafeWays(int[][] grid) {

        if (grid[0][0] == 0) return 0;

        int n = grid.length;
        int m = grid[0].length;
        int[][] ways = new int[n][m];

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (grid[i][j] == 0) {
                    continue;
                }
                if (i == 0 || j == 0) {
                    ways[i][j] = 1;
                    continue;
                }
                ways[i][j] = (ways[i - 1][j] + ways[i][j - 1]) % 1000000007;
            }
        }

        // Perform modulo operation on the number of ways to ensure the result is within the range
        return ways[n - 1][m - 1];
    }

    public static void main(String[] args) {
        int[][] grid = {
                {1, 1, 1},
                {1, 0, 1},
                {1, 1, 1}
        };
        int ways = findSafeWays(grid);
        System.out.println("Number of ways: " + ways);
    }
}