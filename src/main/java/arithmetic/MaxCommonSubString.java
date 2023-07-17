package arithmetic;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * 给定两个只包含小写字母的字符串，计算两个字符串的最大公共子串的长度。
 * 注：子串的定义指一个字符串删掉其部分前缀和后缀（也可以不删）后形成的字。
 * <p>
 * 输入：
 * werasdfaswer
 * asdfas
 * <p>
 * 输入： 6
 */
public class MaxCommonSubString {

    public static void main(String[] args) throws IOException {
        // 在处理大量数据的情况下，BufferedReader通常比Scanner更快。这是因为BufferedReader具有更高的读取效率和更少的开销。
        // Scanner类提供了更高级别的功能，例如将输入解析为特定类型的数据（如int、double等）以及处理不同的分隔符。然而，这些额外的功能导致了一些性能上的损失。
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        String s1 = "";
        String s2 = "";
        while ((s1 = bf.readLine()) != null && (s2 = bf.readLine()) != null) {
            int max = 0;
            for (int i = 0; i < s1.length(); i++) {
                for (int j = 0; j < s2.length(); j++) {
                    int m = i;
                    int n = j;
                    int count = 0;
                    while (s1.charAt(m) == s2.charAt(n)) {
                        m++;
                        n++;
                        count++;
                        max = Math.max(count, max);
                        if (m == s1.length() || n == s2.length()) break;
                    }
                }
            }
            System.out.println(max);
        }
    }
}
