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
import java.util.Vector;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.IntStream;

public class WebCrawler {

    static Logger logger = LoggerFactory.getLogger(WebCrawler.class);
    private static String BASE_URL = "https://javaguide.cn";
    private static String replace1 = "https://oss.javaguide.cn";
    private static String replace2 = "https://my-blog-to-use.oss-cn-beijing.aliyuncs.com";
    private static String STATIC_RESOURCE_DIRECTORY = Path.of(System.getProperty("user.dir"), "src/main/resources/static").toString();
    private static Vector visited = new Vector<>();
    // 重试次数
    private static AtomicInteger time = new AtomicInteger(0);
    // 是否覆写文件开关
    private static boolean override = false;

    public static void main(String[] args) throws InterruptedException {
        CountDownLatch cdl = new CountDownLatch(1000);
        try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
            IntStream.range(0, 1000).forEach(i -> {
                executor.submit(() -> {
                    crawPage(BASE_URL);
                    cdl.countDown();
                });
            });
        }
        cdl.await();
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
            if (time.get() > 2) {
                time.set(0);
                return;
            }
            time.getAndIncrement();
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
            if (page.contains("https")) {
                // 白名单中的黑名单
                if (!(page.contains(replace1) || page.contains(replace2))) {
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
                    || page.endsWith(".css")
                    || page.endsWith("/")) {
                visited.add(page);
                crawPage(url);
            }
        }
    }

    private static String getFilePath(String url) throws IOException {
        url = url.endsWith("/") ? url + "index.html" : url;
        String fileName = new URL(url).getPath().replace("/", "\\");
        String filePath = STATIC_RESOURCE_DIRECTORY + (fileName.isEmpty() ? "\\index.html" : fileName);
        Path directory = Paths.get(filePath.substring(0, filePath.lastIndexOf('\\')));
        Files.createDirectories(directory);
        return filePath;
    }

    private static void saveFile(String content, String filePath) throws IOException {
        if (override || Files.notExists(Path.of(filePath))) {
            logger.info("Creating File: {}", filePath);
            try (FileOutputStream output = new FileOutputStream(filePath)) {
                output.write(content.replaceAll(replace1, "").replaceAll(replace2, "").getBytes());
            }
        }
    }

    // 图片处理用字节流，防止格式错误不能打开
    private static void saveFile(byte[] content, String filePath) throws IOException {
        if (Files.notExists(Path.of(filePath))) {
            logger.info("Creating Image: {}", filePath);
            try (FileOutputStream output = new FileOutputStream(filePath)) {
                output.write(content);
            }
        }
    }

}