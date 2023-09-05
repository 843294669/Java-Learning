const e=JSON.parse('{"key":"v-2b5fbedc","path":"/java/new-features/java8-tutorial-translate.html","title":"《Java8 指南》中文翻译","lang":"zh-CN","frontmatter":{"description":"《Java8 指南》中文翻译 随着 Java 8 的普及度越来越高，很多人都提到面试中关于 Java 8 也是非常常问的知识点。应各位要求和需要，我打算对这部分知识做一个总结。本来准备自己总结的，后面看到 GitHub 上有一个相关的仓库，地址： https://github.com/winterbe/java8-tutorial。这个仓库是英文的，我对其进行了翻译并添加和修改了部分内容，下面是正文。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/java/new-features/java8-tutorial-translate.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"《Java8 指南》中文翻译"}],["meta",{"property":"og:description","content":"《Java8 指南》中文翻译 随着 Java 8 的普及度越来越高，很多人都提到面试中关于 Java 8 也是非常常问的知识点。应各位要求和需要，我打算对这部分知识做一个总结。本来准备自己总结的，后面看到 GitHub 上有一个相关的仓库，地址： https://github.com/winterbe/java8-tutorial。这个仓库是英文的，我对其进行了翻译并添加和修改了部分内容，下面是正文。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-14T01:05:59.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:modified_time","content":"2023-08-14T01:05:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《Java8 指南》中文翻译\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-14T01:05:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":3,"title":"接口的默认方法(Default Methods for Interfaces)","slug":"接口的默认方法-default-methods-for-interfaces","link":"#接口的默认方法-default-methods-for-interfaces","children":[]},{"level":3,"title":"Lambda 表达式(Lambda expressions)","slug":"lambda-表达式-lambda-expressions","link":"#lambda-表达式-lambda-expressions","children":[]},{"level":3,"title":"函数式接口(Functional Interfaces)","slug":"函数式接口-functional-interfaces","link":"#函数式接口-functional-interfaces","children":[]},{"level":3,"title":"方法和构造函数引用(Method and Constructor References)","slug":"方法和构造函数引用-method-and-constructor-references","link":"#方法和构造函数引用-method-and-constructor-references","children":[]},{"level":3,"title":"Lambda 表达式作用域(Lambda Scopes)","slug":"lambda-表达式作用域-lambda-scopes","link":"#lambda-表达式作用域-lambda-scopes","children":[]},{"level":3,"title":"内置函数式接口(Built-in Functional Interfaces)","slug":"内置函数式接口-built-in-functional-interfaces","link":"#内置函数式接口-built-in-functional-interfaces","children":[]},{"level":2,"title":"Optional","slug":"optional","link":"#optional","children":[]},{"level":2,"title":"Streams(流)","slug":"streams-流","link":"#streams-流","children":[{"level":3,"title":"Filter(过滤)","slug":"filter-过滤","link":"#filter-过滤","children":[]},{"level":3,"title":"Sorted(排序)","slug":"sorted-排序","link":"#sorted-排序","children":[]},{"level":3,"title":"Map(映射)","slug":"map-映射","link":"#map-映射","children":[]},{"level":3,"title":"Match(匹配)","slug":"match-匹配","link":"#match-匹配","children":[]},{"level":3,"title":"Count(计数)","slug":"count-计数","link":"#count-计数","children":[]},{"level":3,"title":"Reduce(规约)","slug":"reduce-规约","link":"#reduce-规约","children":[]}]},{"level":2,"title":"Parallel Streams(并行流)","slug":"parallel-streams-并行流","link":"#parallel-streams-并行流","children":[{"level":3,"title":"Sequential Sort(串行排序)","slug":"sequential-sort-串行排序","link":"#sequential-sort-串行排序","children":[]},{"level":3,"title":"Parallel Sort(并行排序)","slug":"parallel-sort-并行排序","link":"#parallel-sort-并行排序","children":[]}]},{"level":2,"title":"Maps","slug":"maps","link":"#maps","children":[]},{"level":2,"title":"Date API(日期相关 API)","slug":"date-api-日期相关-api","link":"#date-api-日期相关-api","children":[{"level":3,"title":"Clock","slug":"clock","link":"#clock","children":[]},{"level":3,"title":"Timezones(时区)","slug":"timezones-时区","link":"#timezones-时区","children":[]},{"level":3,"title":"LocalTime(本地时间)","slug":"localtime-本地时间","link":"#localtime-本地时间","children":[]},{"level":3,"title":"LocalDate(本地日期)","slug":"localdate-本地日期","link":"#localdate-本地日期","children":[]},{"level":3,"title":"LocalDateTime(本地日期时间)","slug":"localdatetime-本地日期时间","link":"#localdatetime-本地日期时间","children":[]}]},{"level":2,"title":"Annotations(注解)","slug":"annotations-注解","link":"#annotations-注解","children":[]},{"level":2,"title":"Where to go from here?","slug":"where-to-go-from-here","link":"#where-to-go-from-here","children":[]}],"git":{"createdTime":1636463233000,"updatedTime":1691975159000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":4},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":4},{"name":"guide","email":"koushuangbwcx@163.com","commits":1},{"name":"paigeman","email":"53284808+paigeman@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":22.04,"words":6611},"filePathRelative":"java/new-features/java8-tutorial-translate.md","localizedDate":"2021年11月9日","excerpt":"<h1> 《Java8 指南》中文翻译</h1>\\n<p>随着 Java 8 的普及度越来越高，很多人都提到面试中关于 Java 8 也是非常常问的知识点。应各位要求和需要，我打算对这部分知识做一个总结。本来准备自己总结的，后面看到 GitHub 上有一个相关的仓库，地址：\\n<a href=\\"https://github.com/winterbe/java8-tutorial\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/winterbe/java8-tutorial</a>。这个仓库是英文的，我对其进行了翻译并添加和修改了部分内容，下面是正文。</p>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
