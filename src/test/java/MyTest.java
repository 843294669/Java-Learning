import org.jsoup.Connection;
import org.jsoup.Jsoup;

import java.io.IOException;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.file.Path;

public class MyTest {

    public static void main(String[] args) throws IOException, URISyntaxException {
        //System.out.println(Path.of(System.getProperty("user.dir"), "src/static/resources/static"));
        Connection connection = Jsoup.connect("https://javaguide.cn/66/")
                .timeout(6000)
                .maxBodySize(0)
                .ignoreContentType(true)
                .ignoreHttpErrors(true);
        Connection.Response resp = connection.execute();
        System.out.println(Path.of("s", "2").toString());
    }
}
