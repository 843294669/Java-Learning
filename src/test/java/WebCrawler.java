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
    private static int time = 0;

    public static void main(String[] args) {
        crawPage(BASE_URL + "/home.html");
        logger.info("Finished.");
    }

    private static void crawPage(String url) {
        try {
            logger.info("Craw Page: {}", url);
            Connection.Response resp = Jsoup.connect(url)
                    .timeout(6000)
                    .maxBodySize(0)
                    .ignoreContentType(true)
                    .ignoreHttpErrors(true).execute();
            String filePath = getFilePath(url);
            if (resp.contentType().contains("image/")) {
                saveFile(resp.bodyAsBytes(), filePath);
            } else {
                // 保留原字符
                String body = resp.body();
                saveFile(body, filePath);
                // 继续提取URL
                Document doc = Jsoup.parse(body);
                extractURLs(doc.select("link[rel]"));
                extractURLs(doc.select("script[src]"));
                extractURLs(doc.select("img[src]"));
                extractURLs(doc.select("a[href]"));
            }
        } catch (Exception e) {
            logger.error(e.getMessage());
            // 重试，可能是超时问题
            if (time > 2) {
                time = 0;
                return;
            }
            time++;
            crawPage(url);
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

    private static void saveFile(String content, String filePath) throws IOException {
        if (Files.notExists(Path.of(filePath))) {
            logger.info("Creating Page: {}", filePath);
            try (FileOutputStream output = new FileOutputStream(filePath)) {
                output.write(content.replaceAll(replaceURL, "").getBytes());
            }
        }
    }

    // 图片处理用字节流，防止格式错误不能打开
    private static void saveFile(byte[] content, String filePath) throws IOException {
        if (Files.notExists(Path.of(filePath))) {
            logger.info("Creating Page: {}", filePath);
            try (FileOutputStream output = new FileOutputStream(filePath)) {
                output.write(content);
            }
        }
    }

}