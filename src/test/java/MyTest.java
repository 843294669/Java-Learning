import java.nio.file.Path;

public class MyTest {

    public static void main(String[] args) {
        System.out.println(Path.of(System.getProperty("user.dir"), "src/static/resources/static"));
    }
}
