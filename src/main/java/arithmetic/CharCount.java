package arithmetic;

import java.io.*;


public class CharCount {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String str;
        while ((str = br.readLine()) != null) {
            sameCharMaxCount(str);
            diffCharMaxCount(str);
            nonRepeatCharMaxCount(str);
        }
    }

    /**
     *
     * 计算字符串中含有的不同字符的个数。字符在 ASCII 码范围内( 0~127 ，包括 0 和 127 )，
     * 换行表示结束符，不算在字符里。不在范围内的不作统计。多个相同的字符只计算一次
     * 例如，对于字符串 abaca 而言，有 a、b、c 三种不同的字符，因此输出 3 。
     * @param str
     */
    private static void nonRepeatCharMaxCount(String str) {
        int[] a = new int[128];
        int count = 0;
        for (int i = 0; i < str.length(); i++) {
            char index = str.charAt(i);
            if (a[index] == 0) {
                a[index] = 1;
                count++;
            }
        }
        System.out.println(count);
    }

    /**
     * 至多包含 k 个不同字符的最长子串
     * @param str
     */
    private static void diffCharMaxCount(String str) {
        int k = 1, count = 1, startIndex = 0, currentIndex = 0;
        char ch = str.charAt(0);
        for (int i = 1; i < str.length(); i++) {
            char currentChar = str.charAt(i);
            if (ch != currentChar) {
               count++;
            }
            else {
                if (k < count) {
                    k = count;
                    currentIndex = startIndex;
                }
                count = 1;
                startIndex = i;
            }
            ch = currentChar;
        }
        if (k < count) {
            currentIndex = startIndex;
            k = count;
        }
        System.out.println(k);
        System.out.println(str.substring(currentIndex, k + currentIndex));
    }

    /**
     * 输入一个只包含小写英文字母和数字的字符串，按照不同字符统计个数由多到少输出统计结果，
     * 如果统计的个数相同，则按照ASCII码由小到大排序输出。
     * 数据范围：字符串长度满足 1 <= len(str) <= 1000
     *
     * 解题思路：
     * 能直接查找就不排序
     */
    private static void sameCharMaxCount(String str) {
        // 同一个字符出现的次数累加并存储
        int[] temp = new int[150];
        int max = 0;
        for (int i = 0; i < str.length(); i++) {
            int index = str.charAt(i);
            temp[index]++;
            // 刷新最大值
            if (max < temp[index])
                max = temp[index];
        }
        StringBuilder sbf = new StringBuilder();
        while (max != 0) {
            for (int j = 0; j < temp.length; j++) {
                // 如果两个字符的次数相同，则先添加ASCII值小的字符（即索引小的字符）
                if (temp[j] == max) {
                    sbf.append((char) j);
                }
            }
            max--;
        }
        System.out.println(sbf);
    }
}