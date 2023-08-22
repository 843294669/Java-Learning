package basic.enumerate;

public enum EnumCall implements Father {

    CONSTANT_ONE {
        public EnumCall run() {
            return CONSTANT_TWO; // 跳转到另一个枚举常量
        }
    },
    CONSTANT_TWO {
        public EnumCall run() {
            return CONSTANT_ONE; // 跳转到另一个枚举常量
        }
    };

    public static void main(String[] args) {
        EnumCall current = CONSTANT_ONE;
        current = current.run(); // 调用枚举常量的方法进行跳转
        System.out.println("Current: " + current);

    }

}
interface Father {
    EnumCall run();
}