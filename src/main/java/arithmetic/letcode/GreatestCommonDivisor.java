package arithmetic.letcode;

/**
 * 使用欧几里德算法递归求解最大公约数
 *
 * 欧几里德算法的定理可以通过数学的论证得出。以下是一个简单的证明思路：
 * 首先，令 a 和 b 为任意的非零整数，假设 a ≥ b。我们可以使用数学归纳法证明：
 * 1. 当 b = 0 时，余数 r 为 0，a 即为最大公约数，定理成立。
 * 2. 假设对于某个 k ≥ 0，当 r = k 时，定理成立，即对于 a 和 b，存在整数 q 和 r，使得 a = qb + r，其中 r = a % b = k。
 * 3. 当 r = k + 1 时，由于 a = qb + r，代入 r = k + 1，可以得到 a = qb + (k + 1)，我们可以对 a 进行下列变换：
 *    a = qb + (k + 1)
 *      = (q + 1)b + k + 1
 *      = (q + 1)b + (r - 1)
 *    这个等式说明，当余数由 k 变为 k + 1 时，a 和 b 的值会发生变化，但是除数 b 和余数 r 之间的关系并没有变化。
 *    因此，我们可以继续进行迭代，不断将余数减小，直到余数为 0。
 * 通过数学归纳法的证明，可以得出欧几里德算法的定理成立。
 * 需要注意的是，这只是一个简化的证明思路，实际的证明可能更加严谨和详细，涉及更多的数学推导和证明细节。
 */
public class GreatestCommonDivisor {
    public static void main(String[] args) {
        int a = 3;
        int b = 4;
        int gcd = findGCD(a, b);
        System.out.println("最大公约数为: " + gcd);
    }

    // 使用欧几里德算法递归求解最大公约数
    public static int findGCD(int a, int b) {
        if (b == 0) {
            return a;
        } else {
            return findGCD(b, a % b);
        }
    }
}