package arithmetic.letcode;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * 通配符
 * https://www.nowcoder.com/practice/43072d50a6eb44d2a6c816a283b02036?tpId=37&tqId=21294&rp=1&ru=/exam/oj/ta&qru=/exam/oj/ta&sourceUrl=%2Fexam%2Foj%2Fta%3Fpage%3D2%26pageSize%3D50%26search%3D%26tpId%3D37%26type%3D37&difficulty=undefined&judgeStatus=undefined&tags=&title=%E5%AD%97%E7%AC%A6
 *
 * 输入：
 * p*p*qp**pq*p**p***ppq
 * pppppppqppqqppqppppqqqppqppqpqqqppqpqpppqpppqpqqqpqqp
 *
 * 输出：
 * false
 **/
public class WildCard {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String str = "";
        while ((str = br.readLine()) != null) {
            char[] p = str.toLowerCase().toCharArray();  // 通配符
            char[] s = br.readLine().toLowerCase().toCharArray();  // 被匹配字符
            int m = s.length;
            int n = p.length;

            // 1. 动态规划，s在前，p在后
            boolean[][] dp = new boolean[m + 1][n + 1];

            dp[0][0] = true; // 空字符串匹配
            for (int j = 1; j <= n; j++) {  // 当s是空字符时，p前面的必须都是空(0)或*(>=1)时才真
                if (p[j - 1] == '*') {
                    dp[0][j] = true;
                } else {
                    break;
                }
            }

            for (int i = 1; i <= m; i++) {
                for (int j = 1; j <= n; j++) {
                    if (p[j - 1] == '?') {
                        if (dp[i - 1][j - 1] && check(s[i - 1])) {
                            dp[i][j] = true;
                        }
                    } else if (p[j - 1] == '*') {
                        if ((dp[i - 1][j] || dp[i][j - 1]) && check(s[i - 1])) {
                            dp[i][j] = true;   // 匹配任意次或0次
                        }
                    } else if (s[i - 1] == p[j - 1]) {
                        if (dp[i - 1][j - 1] && check(s[i - 1])) {
                            dp[i][j] = true;
                        }
                    }
                }
            }
            System.out.println(dp[m][n]);
        }

    }

    // 合法字符。案例有问题，按题意.应该是非法字符，但系统判：p = "t?t*1*.*""  s = "txt12.xls" 为真
    public static boolean check(char letter) {
        return (letter >= 'a' && letter <= 'z') || (letter >= '0' && letter <= '9') || letter == '.';
    }
}
