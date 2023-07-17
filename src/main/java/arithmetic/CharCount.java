package arithmetic;

import java.io.*;

/**
 * 输入一个只包含小写英文字母和数字的字符串，按照不同字符统计个数由多到少输出统计结果，
 * 如果统计的个数相同，则按照ASCII码由小到大排序输出。
 * 数据范围：字符串长度满足 1 <= len(str) <= 1000
 *
 * 解题思路：
 * 能直接查找就不排序
 */
public class CharCount {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String str;
        while ((str = br.readLine()) != null) {
            // 同一个字符出现的次数累加并存储
            int[] temp = new int[150];
            for (int i = 0; i < str.length(); i++) {
                temp[str.charAt(i)]++;
            }
            int max = 0;
            for (int j = 0; j < temp.length; j++) {
                if (max < temp[j]) {
                    max = temp[j];
                }
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
}