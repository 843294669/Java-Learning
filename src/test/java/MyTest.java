import org.jsoup.Connection;
import org.jsoup.Jsoup;

import java.io.FileOutputStream;
import java.io.IOException;

public class MyTest {

    public static void main(String[] args) throws IOException {
        //System.out.println(Path.of(System.getProperty("user.dir"), "src/static/resources/static"));
        Connection connection = Jsoup.connect("https://javaguide.cn/assets/arp.html-905bf722.js")
                .timeout(6000)
                .maxBodySize(0)
                .ignoreContentType(true)
                .ignoreHttpErrors(true);
        Connection.Response resp = connection.execute();
        System.out.println(Jsoup.parse(resp.body()));
    }
}
