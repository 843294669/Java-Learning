package spring.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;

import java.nio.file.Path;

@Controller
public class LearningController {

    private String index = "/index.html";

    /**
     * 1. `@GetMapping("/{path}")`：这个注解表示匹配一个带有路径参数的 URL。例如，如果请求的 URL 是 `/example`，则会匹配到这个注解，并将路径参数的值赋给 `path` 变量。例如，`/example` 将匹配到 `@GetMapping("/{path}")` 注解，并将 `path` 的值设置为 `"example"`。
     * 2. `@GetMapping("/")`：这个注解表示匹配根路径的 URL。例如，如果请求的 URL 是 `/`，则会匹配到这个注解。这个注解通常用于处理根路径的请求，例如主页或默认页面。
     * 3. `@GetMapping("{path}/")`：这个注解表示匹配以路径参数结尾的 URL。例如，如果请求的 URL 是 `/example/`，则会匹配到这个注解，并将路径参数的值赋给 `path` 变量。例如，`/example/` 将匹配到 `@GetMapping("{path}/")` 注解，并将 `path` 的值设置为 `"example"`。
     *
     * @return index.html
     */
    @GetMapping("/")
    public String index() {
        return index;
    }

    @GetMapping("/{path1}/")
    public String index1(@PathVariable String path1) {
        return Path.of(path1, index).toString();
    }

    @GetMapping("/{path1}/{path2}/")
    public String index2(@PathVariable String path1, @PathVariable String path2) {
        return Path.of(path1, path2, index).toString();
    }

    @GetMapping("/{path1}/{path2}/{path3}/")
    public String index3(@PathVariable String path1, @PathVariable String path2, @PathVariable String path3) {
        return Path.of(path1, path2, path3, index).toString();
    }

}
