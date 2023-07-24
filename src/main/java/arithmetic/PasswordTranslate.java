package arithmetic;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedHashSet;
import java.util.Set;
import java.util.function.Function;
import java.util.function.IntBinaryOperator;
import java.util.function.ToIntFunction;

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
    static IntBinaryOperator f = (c, n) -> {
        n += c;
        if (n == 47) {
            n = 9 + 48;
        } else if (n == 58) {
            n = 48;
        } else if (n == 64) {
            n = 90;
        } else if (n == 91) {
            n = 65;
        } else if (n == 96) {
            n = 122;
        } else if (n == 123) {
            n = 97;
        }
        if (n > 64 && n < 91) {
            n += 32;
        } else if (n > 96 && n < 123) {
            n -= 32;
        }
        return n;
    };

    public static void main(String[] args) throws IOException {
//        Scanner scanner = new Scanner(System.in);
//        String password = scanner.next();
//        translatePassword(password);
//        String key = scanner.next();
//        String password = scanner.next();
//        encryptPassword(key, password);
        BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        String str1;
        String str2;
        while ((str1 = bf.readLine()) != null && (str2 = bf.readLine()) != null) {
            enOrDenPassword(str1, f, 1);
            enOrDenPassword(str2, f, -1);
        }
    }

    /**
     * 对输入的字符串进行加解密，并输出。
     * 加密方法为：
     * 当内容是英文字母时则用该英文字母的后一个字母替换，同时字母变换大小写,如字母a时则替换为B；字母Z时则替换为a；
     * 当内容是数字时则把该数字加1，如0替换1，1替换2，9替换0；
     * 其他字符不做变化。
     * 解密方法为加密的逆过程。
     *
     * @param str
     * @param num
     */
    private static void enOrDenPassword(String str, IntBinaryOperator f, int num) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if (Character.isLetterOrDigit(ch)) {
                sb.append((char) f.applyAsInt(ch, num));
            }
            else {
                sb.append(ch);
            }
        }
        System.out.println(sb);
    }

    /**
     * 有一种技巧可以对数据进行加密，它使用一个单词作为它的密匙。下面是它的工作原理：首先，选择一个单词作为密匙，如TRAILBLAZERS。
     * 如果单词中包含有重复的字母，只保留第1个，将所得结果作为新字母表开头，并将新建立的字母表中未出现的字母按照正常字母表顺序加入新字母表。如下所示：
     * A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
     * T R A I L B Z E S C D F G H J K M N O P Q U V W X Y (实际需建立小写字母的字母表，此字母表仅为方便演示）
     * <p>
     * 上面其他用字母表中剩余的字母填充完整。在对信息进行加密时，信息中的每个字母被固定于顶上那行，
     * 并用下面那行的对应字母一一取代原文的字母(字母字符的大小写状态应该保留)。因此，使用这个密匙， Attack AT DAWN (黎明时攻击)就会被加密为Tpptad TP ITVH。
     *
     * @param key
     * @param password
     */
    private static void encryptPassword(String key, String password) {
        int len = key.length();
        Set set = new LinkedHashSet();
        for (int i = 0; i < len; i++) {
            char ch = key.charAt(i);
            set.add(ch);

        }
        for (int i = 0; i < 26; i++) {
            set.add((char) ('a' + i));
        }
        StringBuilder sb = new StringBuilder();
        Object[] array = set.toArray();
        for (int i = 0; i < password.length(); i++) {
            sb.append(array[Character.toLowerCase(password.charAt(i)) - 'a']);
        }
        sb.trimToSize();
        System.out.println(sb);
    }

    private static void translatePassword(String password) {
        StringBuffer bf = new StringBuffer();
        for (int i = 0; i < password.length(); i++) {
            char ch = password.charAt(i);
            if (ch >= 'A' && ch <= 'Z') {
                if (ch == 'Z')
                    ch = 'a';
                else
                    // 大写字母+32等于小写字母
                    ch = (char) (ch + 33);
                //Character.toLowerCase(ch);
            } else if (ch >= 'a' && ch <= 'z') {
                // ch 在a-z之间则匹配相应数字
                for (int j = 0; j < keyMapping.length; j++) {
                    if (keyMapping[j].contains(String.valueOf(ch))) {
                        ch = (char) (j + 2);
                    }
                }
            }
            bf.append(ch);
        }
        System.out.println(bf);
    }

}
