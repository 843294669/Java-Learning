package arithmetic;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

/**
 * 输入int型数组，询问该数组能否分成两组，使得两组中各元素加起来的和相等，
 * 并且，所有5的倍数必须在其中一个组中，所有3的倍数在另一个组中（不包括5的倍数），
 * 不是5的倍数也不是3的倍数能放在任意一组，可以将数组分为空数组，能满足以上条件，输出true；不满足时输出false。
 */
public class ArrayGrouping {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String str = "";
        while ((str = br.readLine()) != null) {
            int a = Integer.parseInt(str);
            int[] num = new int[a];
            str = br.readLine();
            String s[] = str.split(" ");
            int sum = 0;
            for (int i = 0; i < a; i++) {
                int b = Integer.parseInt(s[i]);
                if (b % 5 == 0) {
                    sum += b;  //如果是5的倍数，sum+b
                } else if (b % 3 == 0) {
                    sum -= b; //如果是3的倍数，sum-b
                } else {
                    num[i] = Math.abs(b); //其他，存绝对值
                }
            }
            Arrays.sort(num);
            for (int i = a - 1; i >= 0; i--) {
                if (sum * num[i] > 0) {
                    sum -= num[i];
                } else {
                    sum += num[i];
                }
            }
            if (sum == 0) {
                System.out.println(true);
            } else {
                System.out.println(false);
            }
        }

    }

}    