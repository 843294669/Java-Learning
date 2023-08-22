package basic.polymorphism;

public class Interface implements Interface1, Interface2 {
    public static void main(String[] args) {
        Interface inf = new Interface();
        inf.show();
        // 优先重载子类参数
        inf.print(null);
    }

    @Override
    public void show() {
        System.out.println("Hello World!");
    }

    void print(Object o) {
        System.out.println(o);
    }

    void print(String o) {
        System.out.println(o);
    }
}

interface Interface1 {
    void show();
}

interface Interface2 {
    void show();
}