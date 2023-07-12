package arithmetic;

import java.util.ArrayList;
import java.util.List;

/**
 * 生成水仙花数
 */
public class NarcissisticNumberList {
    static int[] digitCubes = {0, 1, 8, 27, 64, 125, 216, 343, 512, 729};
    public static void main(String[] args) {
        findNarcissisticNumbers().forEach(System.out::println);
    }

    public static List<Integer> findNarcissisticNumbers() {
        List<Integer> narcissisticNumbers = new ArrayList<>();
        for (int number = 100; number <= 999; number++) {
            if (isNarcissisticNumber(number)) {
                narcissisticNumbers.add(number);
            }
        }
        return narcissisticNumbers;
    }

    private static boolean isNarcissisticNumber(int number) {
        int originalNumber = number;
        int sum = 0;
        while (number != 0) {
            int digit = number % 10;
            sum += digitCubes[digit];
            // 早期终止条件
            if (sum > originalNumber) {
                return false;
            }
            number /= 10;
        }

        return sum == originalNumber;
    }
}