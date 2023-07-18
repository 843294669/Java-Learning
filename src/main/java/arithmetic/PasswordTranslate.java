package arithmetic;

import java.util.Scanner;

/**
 * 现在有一种密码变换算法。
 * 九键手机键盘上的数字与字母的对应： 1--1， abc--2, def--3, ghi--4, jkl--5, mno--6, pqrs--7, tuv--8 wxyz--9, 0--0，把密码中出现的小写字母都变成九键键盘对应的数字，如：a 变成 2，x 变成 9.
 * 而密码中出现的大写字母则变成小写之后往后移一位，如：X ，先变成小写，再往后移一位，变成了 y ，例外：Z 往后移是 a 。
 * 数字和其它的符号都不做变换。
 * 数据范围: 输入的字符串长度满足 1 ≤ n ≤ 100
 * 输入: YUANzhi1987
 * 输出: zvbo9441987
 */
public class PasswordTranslate {

    private static final String[] keyMapping = {"abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String password = scanner.next();
        long startTime = System.nanoTime();
        System.out.println(getPassword(password));
        long endTime = System.nanoTime();
        System.out.println((endTime - startTime)/1000000.0 + "ms");
    }

    private static String getPassword(String password) {
        StringBuffer bf = new StringBuffer();
        for (int i = 0; i < password.length(); i++) {
            char ch = password.charAt(i);
            if (ch >= 'A' && ch <= 'Z') {
                if (ch == 'Z')
                    ch = 'a';
                else
                    // 大写字母+32等于小写字母
                    ch = (char)(ch + 33);
                //Character.toLowerCase(ch);
            }
            else if (ch >= 'a' && ch <= 'z') {
                // ch 在a-z之间则匹配相应数字
                for (int j = 0; j < keyMapping.length; j++) {
                    if (keyMapping[j].contains(String.valueOf(ch))) {
                        ch = (char) (j + 2);
                    }
                }
            }
            bf.append(ch);
        }
        return bf.toString();
    }

}
