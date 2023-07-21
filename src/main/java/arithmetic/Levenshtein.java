package arithmetic;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * 描述
 * Levenshtein 距离，又称编辑距离，指的是两个字符串之间，由一个转换成另一个所需的最少编辑操作次数。
 * 许可的编辑操作包括将一个字符替换成另一个字符，插入一个字符，删除一个字符。
 * 编辑距离的算法是首先由俄国科学家 Levenshtein 提出的，故又叫 Levenshtein Distance 。
 *
 * 例如：
 *
 * 字符串A: abcdefg
 * 字符串B: abcdef
 *
 * 通过增加或是删掉字符 ”g” 的方式达到目的。这两种方案都需要一次操作。把这个操作所需要的次数定义为两个字符串的距离。
 *
 * 要求：
 * 给定任意两个字符串，写出一个算法计算它们的编辑距离。
 */
public class Levenshtein {
    public static void main(String[] args) throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        String s1, s2;
        while ((s1 = bf.readLine()) != null && (s2 = bf.readLine()) != null) {
            System.out.println(calculateDistance(s1, s2));
        }
    }

    public static int calculateDistance(String word1, String word2) {
        int m = word1.length();
        int n = word2.length();

        // 创建一个二维数组来保存编辑距离
        int[][] dp = new int[m + 1][n + 1];

        // 初始化边界条件
        for (int i = 0; i <= m; i++) {
            dp[i][0] = i;
        }
        for (int j = 0; j <= n; j++) {
            dp[0][j] = j;
        }

        // 动态规划计算编辑距离
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    int replace = dp[i - 1][j - 1];
                    int insert = dp[i][j - 1];
                    int delete = dp[i - 1][j];
                    dp[i][j] = Math.min(replace, Math.min(insert, delete)) + 1;
                }
            }
        }

        // 返回最终的编辑距离
        return dp[m][n];
    }
}