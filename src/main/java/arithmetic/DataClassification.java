package arithmetic;

import java.util.HashMap;
import java.util.Map;

/**
 * 对一个数据a进行分类，分类方法为：
 * <p>
 * 此数据a（四个字节大小）的四个字节相加对一个给定的值b取模，如果得到的结果小于一个给定的值c，则数据a为有效类型，其类型为取模的值；如果得到的结果大于或者等于c，则数据a为无效类型。
 * <p>
 * 比如一个数据a=0x01010101，b=3，按照分类方法计算（0x01+0x01+0x01+0x01）%3=1，
 * <p>
 * 所以如果c=2，则此a为有效类型，其类型为1，如果c=1，则此a为无效类型；
 * <p>
 * 又比如一个数据a=0x01010103，b=3，按照分类方法计算（0x01+0x01+0x01+0x03）%3=0，
 * <p>
 * 所以如果c=2，则此a为有效类型，其类型为0，如果c=0，则此a为无效类型。
 * <p>
 * 输入12个数据，第一个数据为c，第二个数据为b，剩余10个数据为需要分类的数据，
 * <p>
 * 请找到有效类型中包含数据最多的类型，并输出该类型含有多少个数据。
 */
public class DataClassification {
    public static void main(String[] args) {
        long startTime = System.nanoTime();
        // 输入数据
        int c = 2; // c的值
        int b = 3; // b的值
        int[] data = {0x01010101, 0x01010103, 0x01010201, 0x01010105, 0x01010001,
                0x01010301, 0x02010101, 0x03010101, 0x01010101, 0x01030101};

        // 统计有效类型中数据数量
        Map<Integer, Integer> typeCount = new HashMap<>();
        for (int value : data) {
            int sum = 0;
            for (int j = 0; j < 4; j++) {
                int byteValue = (value >> (j * 8)) & 0xFF;
                sum += byteValue;
            }
            int type = sum % b;
            if (typeCount.containsKey(type)) {
                typeCount.put(type, typeCount.get(type) + 1);
            } else {
                typeCount.put(type, 1);
            }
        }

        // 找到有效类型中包含数据最多的类型及数量
        int maxDataCount = 0;
        int maxDataType = -1;
        for (Map.Entry<Integer, Integer> entry : typeCount.entrySet()) {
            int type = entry.getKey();
            int count = entry.getValue();
            if (type < c && count > maxDataCount) {
                maxDataType = type;
                maxDataCount = count;
            }
        }

        // 输出结果
        System.out.println("有效类型中包含数据最多的类型：" + maxDataType);
        System.out.println("该类型含有的数据数量：" + maxDataCount);
        long endTime = System.nanoTime();
        System.out.println((endTime - startTime)/1000000.0 + "ms");
    }
}