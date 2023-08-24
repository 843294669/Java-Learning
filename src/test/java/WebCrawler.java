import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

public class WebCrawler {

    static Logger logger = LoggerFactory.getLogger(WebCrawler.class);
    private static String BASE_URL = "https://javaguide.cn";
    private static String replaceURL = "https://oss.javaguide.cn";
    private static String STATIC_RESOURCE_DIRECTORY = Path.of(System.getProperty("user.dir"), "src/main/resources/static").toString();
    private static List visited = new ArrayList<>();

    public static void main(String[] args) {
        crawPage(BASE_URL + "/home.html");
        logger.info("Finished.");
    }

    private static void crawPage(String url) {
        try {
            logger.info("Craw Page:{}", url);
            Connection.Response resp = Jsoup.connect(url)
                    .ignoreContentType(true)
                    .ignoreHttpErrors(true)
                    .timeout(5000).execute();
            String filePath = getFilePath(url);
            try (FileOutputStream output = new FileOutputStream(filePath)) {
                if (url.endsWith(".html")) {
                    Document doc = resp.parse();
                    output.write(doc.html().replaceAll(replaceURL, "").getBytes());
                    // 继续提取URL
                    extractURLs(doc.select("link[rel]"));
                    extractURLs(doc.select("script[src]"));
                    extractURLs(doc.select("img[src]"));
                    extractURLs(doc.select("a[href]"));
                } else if (url.endsWith(".js")) {
                    output.write(resp.body().replaceAll(replaceURL, "").getBytes());
                } else {
                    output.write(resp.bodyAsBytes());
                }
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
    }

    private static void extractURLs(Elements links) {
        for (Element link : links) {
            // 获取链接地址
            String page = link.attr("src");
            page = page.isEmpty() ? link.attr("href") : page;
            // 黑名单
            if (visited.contains(page) || page.contains("mailto:") || page.contains("#")) {
                continue;
            }
            String url = BASE_URL + page;
            // 白名单中的黑名单
            if (page.contains("http")) {
                if (!page.contains("javaguide.cn")) {
                    continue;
                }
                url = page;
            }
            // 白名单
            if (page.endsWith(".html")
                    || page.endsWith(".png")
                    || page.endsWith(".jpg")
                    || page.endsWith(".svg")
                    || page.endsWith(".js")
                    || page.endsWith(".css")) {
                visited.add(page);
                crawPage(url);
            }
        }
    }

    private static String getFilePath(String url) throws IOException {
        String filePath = STATIC_RESOURCE_DIRECTORY + new URL(url).getPath().replace("/", "\\");
        Path directory = Paths.get(filePath.substring(0, filePath.lastIndexOf('\\')));
        Files.createDirectories(directory);
        return filePath;
    }

}