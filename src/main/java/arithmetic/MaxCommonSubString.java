package arithmetic;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class MaxCommonSubString {

    public static void main(String[] args) throws IOException {
        // 在处理大量数据的情况下，BufferedReader通常比Scanner更快。这是因为BufferedReader具有更高的读取效率和更少的开销。
        // Scanner类提供了更高级别的功能，例如将输入解析为特定类型的数据（如int、double等）以及处理不同的分隔符。然而，这些额外的功能导致了一些性能上的损失。
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        String s1;
        String s2;
        while ((s1 = bf.readLine()) != null && (s2 = bf.readLine()) != null) {
            //maxNumber(s1, s2);
            if (s1.length() < s2.length()) {
                maxStringAnother(s1, s2);
            } else {
                maxStringAnother(s1, s2);
            }
        }
    }

    /**
     * 查找两个字符串a,b中的最长公共子串。若有多个，输出在较短串中最先出现的那个。
     * 注：子串的定义：将一个字符串删去前缀和后缀（也可以不删）形成的字符串。请和“子序列”的概念分开！
     *
     * @param s1 s1
     * @param s2 s2
     */
    private static void maxString(String s1, String s2) {
        char[] ch1 = s1.toCharArray();
        char[] ch2 = s2.toCharArray();
        int[][] ins = new int[ch1.length + 1][ch2.length + 1];
        int max = 0;
        int start = 0;
        for (int i = 0; i < ch1.length; i++) {
            for (int j = 0; j < ch2.length; j++) {
                if (ch1[i] == ch2[j]) {
                    ins[i + 1][j + 1] = ins[i][j] + 1;
                    if (ins[i + 1][j + 1] > max) {
                        max = ins[i + 1][j + 1];
                        start = i - max;
                    }
                }
            }
        }
        System.out.println(s1.substring(start + 1, start + max + 1));
    }

    /**
     * 上一个方法的另一种思路
     * @param s1
     * @param s2
     */
    private static void maxStringAnother(String s1, String s2) {
        int end = 0, max = 0;
        boolean flag = false;
        int l1 = s1.length(), l2 = s2.length();
        for (int i = 0; i < l1; i++) {
            for (int j = 0; j < l2; j++) {
                int m = i;
                int n = j;
                int count = 0;
                while (s1.charAt(m) == s2.charAt(n)) {
                    m++;
                    n++;
                    count++;
                    if (max < count) {
                        max = count;
                        end = m;
                        flag = false;
                    }
                    if (m == l1 || n == l2) break;
                }
                // 有多个
                if (count == max && !flag) {
                    flag = true;
                }
            }
        }
        System.out.println(s1.substring(end - max, end));
    }


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
    private static void maxNumber(String s1, String s2) {
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
