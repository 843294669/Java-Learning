package arithmetic.letcode;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;


public class StringSort {

    public static void main(String[] args) throws IOException {
            descSort();
            // letterSort();
    }

    /**
     * 逆序输出输入字符
     * 由于只是逆序输出，对于输入字符无需转换，使用字节流
     */
    private static void descSort() throws IOException {
        int length;
        InputStream in = System.in;
        while (true) {
            length = in.available();
            if (length > 1) {
                byte[] bytes = new byte[length];
                if (in.read(bytes) != -1) {
                    byte[] temp = new byte[length];
                    for (int i = 0; i < length; i++) {
                        temp[length - i - 1] = bytes[i];
                    }
                    System.out.println(new String(temp).trim());
                }
            }
        }
    }

    /**
     * 描述
     * 编写一个程序，将输入字符串中的字符按如下规则排序。
     *
     * 规则 1 ：英文字母从 A 到 Z 排列，不区分大小写。
     * 如，输入： Type 输出： epTy
     *
     * 规则 2 ：同一个英文字母的大小写同时存在时，按照输入顺序排列。
     * 如，输入： BabA 输出： aABb
     *
     * 规则 3 ：非英文字母的其它字符保持原来的位置。
     * 如，输入： By?e 输出： Be?y
     *
     * 数据范围：输入的字符串长度满足 1 <= n <= 1000
     *
     */
    private static void letterSort() throws IOException {
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        String str;
        while ((str = bf.readLine()) != null) {
            int length = str.length();
            int[][] a = new int[127][length];
            int shift = 1;
            for (int i = 0; i < length; i++) {
                char ch = str.charAt(i);
                if (ch >= 'A' && ch <= 'Z') {
                    ch += 32;
                    shift = 2;
                }
                if (a[ch][0] != 0) {
                    a[ch][i] = shift;
                } else if (ch >= 'a' && ch <= 'z') {
                    a[ch][0] = shift;
                }
                shift = 1;
            }
            StringBuilder sb = new StringBuilder();
            for (int m = 0; m < a.length; m++) {
                for (int n = 0; n < a[m].length; n++) {
                    if (a[m][n] > 0) {
                        if (a[m][n] == 2)
                            sb.append((char) (m - 32));
                        else
                            sb.append((char) m);
                    }
                }
            }
            for (int i = 0; i < length; i++) {
                char ch = str.charAt(i);
                if (!Character.isLetter(ch)) {
                    sb.insert(i, ch);
                }
            }
            System.out.println(sb);
        }
    }
}
