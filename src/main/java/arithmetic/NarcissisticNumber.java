package arithmetic;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * 【水仙花数】
 * <p>
 * 给定非空字符串s，将该字符串分割成一些子串，使每个子串的ASCII码值的和均为水仙花数。
 * <p>
 * 1、若分割不成功，则返回0:
 * 空字符串分隔不成功，长度超过200分隔不成功，存在子串中ASCII码值的和不是水仙花数分隔不成功
 * <p>
 * 2、若分割成功且分割结果不唯一（不唯一表示子串在索引上存在交集），则返回-1：
 * 输入：f3@d5a8  一组：f3 和 @d5a8，另一组: f3@d5 和 a8
 * <p>
 * 3、若分割成功且分割结果唯一，则返回分割后子串的数目：
 * 输入：AXdddF  AX(153) 和 dddF(370)
 * <p>
 * 输入描述
 * <p>
 * 输入字符串的最大长度为200
 */
public class NarcissisticNumber {
    // 水仙花数只有四个
    private final static List<Integer> narcissisticNumbers = new ArrayList<>() {
        {
            add(153);
            add(370);
            add(371);
            add(407);
        }
    };

    public static int splitStringToNarcissisticNumbers(String s) {
        // 分隔结果是否唯一:
        // uniqueCount：0 分隔不成功
        // uniqueCount：1 分隔成功且唯一
        // uniqueCount：>1 分隔成功且不唯一
        AtomicInteger uniqueCount = new AtomicInteger(0);
        int count = s != null && s.length() <= 200 ? splitString(s, uniqueCount) : 0;
        return uniqueCount.get() > 1 ? -1 : uniqueCount.get() == 1 ? count : 0;
    }

    private static int splitString(String s, AtomicInteger uniqueCount) {
        // 分隔结果数
        int count = 0;
        for (int i = 1; i <= s.length(); i++) {
            String substr = s.substring(0, i);
            if (isNarcissisticNumber(substr)) {
                count += splitString(s.substring(i), uniqueCount) + 1;
                if (i == s.length())
                    uniqueCount.incrementAndGet();
            }

        }
        return count;
    }

    private static boolean isNarcissisticNumber(String s) {
        int sum = 0;
        for (char c : s.toCharArray()) {
            sum += c;
        }
        return narcissisticNumbers.contains(sum);
        //return NarcissisticNumberList.findNarcissisticNumbers().contains(sum);
    }

    public static void main(String[] args) {
        // 测试案例
        long startTime = System.nanoTime();
        // 在这里执行您的代码
        System.out.println(splitStringToNarcissisticNumbers("f3@d5a8"));  // -1
        System.out.println(splitStringToNarcissisticNumbers("AXdddF"));   // 2
        System.out.println(splitStringToNarcissisticNumbers("123456"));   // 0
        long endTime = System.nanoTime();
        System.out.println((endTime - startTime)/1000000.0 + "ms");
    }
}