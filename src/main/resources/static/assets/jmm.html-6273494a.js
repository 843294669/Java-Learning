const e=JSON.parse('{"key":"v-12cebd73","path":"/java/concurrent/jmm.html","title":"JMM（Java 内存模型）详解","lang":"zh-CN","frontmatter":{"title":"JMM（Java 内存模型）详解","category":"Java","tag":["Java并发"],"head":[["meta",{"name":"keywords","content":"CPU 缓存模型,指令重排序,Java 内存模型（JMM）,happens-before"}],["meta",{"name":"description","content":"对于 Java 来说，你可以把 JMM 看作是 Java 定义的并发编程相关的一组规范，除了抽象了线程和主内存之间的关系之外，其还规定了从 Java 源代码到 CPU 可执行指令的这个转化过程要遵守哪些和并发相关的原则和规范，其主要目的是为了简化多线程编程，增强程序可移植性的。"}],["meta",{"property":"og:url","content":"https://javaguide.cn/java/concurrent/jmm.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"JMM（Java 内存模型）详解"}],["meta",{"property":"og:description","content":"JMM(Java 内存模型)主要定义了对于一个共享变量，当另一个线程对这个共享变量执行写操作后，这个线程对这个共享变量的可见性。 要想理解透彻 JMM（Java 内存模型），我们先要从 CPU 缓存模型和指令重排序 说起！ 从 CPU 缓存模型说起 为什么要弄一个 CPU 高速缓存呢？ 类比我们开发网站后台系统使用的缓存（比如 Redis）是为了解决程序处理速度和访问常规关系型数据库速度不对等的问题。 CPU 缓存则是为了解决 CPU 处理速度和内存处理速度不对等的问题。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-07T10:56:33.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"Java并发"}],["meta",{"property":"article:modified_time","content":"2023-08-07T10:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JMM（Java 内存模型）详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-07T10:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]],"description":"JMM(Java 内存模型)主要定义了对于一个共享变量，当另一个线程对这个共享变量执行写操作后，这个线程对这个共享变量的可见性。 要想理解透彻 JMM（Java 内存模型），我们先要从 CPU 缓存模型和指令重排序 说起！ 从 CPU 缓存模型说起 为什么要弄一个 CPU 高速缓存呢？ 类比我们开发网站后台系统使用的缓存（比如 Redis）是为了解决程序处理速度和访问常规关系型数据库速度不对等的问题。 CPU 缓存则是为了解决 CPU 处理速度和内存处理速度不对等的问题。"},"headers":[{"level":2,"title":"从 CPU 缓存模型说起","slug":"从-cpu-缓存模型说起","link":"#从-cpu-缓存模型说起","children":[]},{"level":2,"title":"指令重排序","slug":"指令重排序","link":"#指令重排序","children":[]},{"level":2,"title":"JMM(Java Memory Model)","slug":"jmm-java-memory-model","link":"#jmm-java-memory-model","children":[{"level":3,"title":"什么是 JMM？为什么需要 JMM？","slug":"什么是-jmm-为什么需要-jmm","link":"#什么是-jmm-为什么需要-jmm","children":[]},{"level":3,"title":"JMM 是如何抽象线程和主内存之间的关系？","slug":"jmm-是如何抽象线程和主内存之间的关系","link":"#jmm-是如何抽象线程和主内存之间的关系","children":[]},{"level":3,"title":"Java 内存区域和 JMM 有何区别？","slug":"java-内存区域和-jmm-有何区别","link":"#java-内存区域和-jmm-有何区别","children":[]},{"level":3,"title":"happens-before 原则是什么？","slug":"happens-before-原则是什么","link":"#happens-before-原则是什么","children":[]},{"level":3,"title":"happens-before 常见规则有哪些？谈谈你的理解？","slug":"happens-before-常见规则有哪些-谈谈你的理解","link":"#happens-before-常见规则有哪些-谈谈你的理解","children":[]},{"level":3,"title":"happens-before 和 JMM 什么关系？","slug":"happens-before-和-jmm-什么关系","link":"#happens-before-和-jmm-什么关系","children":[]}]},{"level":2,"title":"再看并发编程三个重要特性","slug":"再看并发编程三个重要特性","link":"#再看并发编程三个重要特性","children":[{"level":3,"title":"原子性","slug":"原子性","link":"#原子性","children":[]},{"level":3,"title":"可见性","slug":"可见性","link":"#可见性","children":[]},{"level":3,"title":"有序性","slug":"有序性","link":"#有序性","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1659618003000,"updatedTime":1691405793000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":6},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3},{"name":"Guide","email":"koushuangbwcx@163.com","commits":2},{"name":"Simon Ace","email":"33784246+Simon-Ace@users.noreply.github.com","commits":1},{"name":"Amos Chu","email":"hongweichu.ouc@gmail.com","commits":1},{"name":"纪卓志","email":"jizhuozhi.george@gmail.com","commits":1},{"name":"Hexrt","email":"github@yoosec.com","commits":1},{"name":"LaoCat","email":"984593420@qq.com","commits":1}]},"readingTime":{"minutes":18.94,"words":5682},"filePathRelative":"java/concurrent/jmm.md","localizedDate":"2022年8月4日","excerpt":"<p>JMM(Java 内存模型)主要定义了对于一个共享变量，当另一个线程对这个共享变量执行写操作后，这个线程对这个共享变量的可见性。</p>\\n<p>要想理解透彻 JMM（Java 内存模型），我们先要从 <strong>CPU 缓存模型和指令重排序</strong> 说起！</p>\\n<h2> 从 CPU 缓存模型说起</h2>\\n<p><strong>为什么要弄一个 CPU 高速缓存呢？</strong> 类比我们开发网站后台系统使用的缓存（比如 Redis）是为了解决程序处理速度和访问常规关系型数据库速度不对等的问题。 <strong>CPU 缓存则是为了解决 CPU 处理速度和内存处理速度不对等的问题。</strong></p>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};