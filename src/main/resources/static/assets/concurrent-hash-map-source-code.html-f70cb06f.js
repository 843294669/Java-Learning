const e=JSON.parse('{"key":"v-3891c35e","path":"/java/collection/concurrent-hash-map-source-code.html","title":"ConcurrentHashMap 源码分析","lang":"zh-CN","frontmatter":{"title":"ConcurrentHashMap 源码分析","category":"Java","tag":["Java集合"],"description":"本文来自公众号：末读代码的投稿，原文地址：https://mp.weixin.qq.com/s/AHWzboztt53ZfFZmsSnMSw 。 上一篇文章介绍了 HashMap 源码，反响不错，也有很多同学发表了自己的观点，这次又来了，这次是 ConcurrentHashMap 了，作为线程安全的 HashMap ，它的使用频率也是很高。那么它的存储结构和实现原理是怎么样的呢？ 1. ConcurrentHashMap 1.7 1. 存储结构","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/java/collection/concurrent-hash-map-source-code.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"ConcurrentHashMap 源码分析"}],["meta",{"property":"og:description","content":"本文来自公众号：末读代码的投稿，原文地址：https://mp.weixin.qq.com/s/AHWzboztt53ZfFZmsSnMSw 。 上一篇文章介绍了 HashMap 源码，反响不错，也有很多同学发表了自己的观点，这次又来了，这次是 ConcurrentHashMap 了，作为线程安全的 HashMap ，它的使用频率也是很高。那么它的存储结构和实现原理是怎么样的呢？ 1. ConcurrentHashMap 1.7 1. 存储结构"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-07T10:56:33.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"Java集合"}],["meta",{"property":"article:modified_time","content":"2023-08-07T10:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ConcurrentHashMap 源码分析\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-07T10:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"1. ConcurrentHashMap 1.7","slug":"_1-concurrenthashmap-1-7","link":"#_1-concurrenthashmap-1-7","children":[{"level":3,"title":"1. 存储结构","slug":"_1-存储结构","link":"#_1-存储结构","children":[]},{"level":3,"title":"2. 初始化","slug":"_2-初始化","link":"#_2-初始化","children":[]},{"level":3,"title":"3. put","slug":"_3-put","link":"#_3-put","children":[]},{"level":3,"title":"4. 扩容 rehash","slug":"_4-扩容-rehash","link":"#_4-扩容-rehash","children":[]},{"level":3,"title":"5. get","slug":"_5-get","link":"#_5-get","children":[]}]},{"level":2,"title":"2. ConcurrentHashMap 1.8","slug":"_2-concurrenthashmap-1-8","link":"#_2-concurrenthashmap-1-8","children":[{"level":3,"title":"1. 存储结构","slug":"_1-存储结构-1","link":"#_1-存储结构-1","children":[]},{"level":3,"title":"2. 初始化 initTable","slug":"_2-初始化-inittable","link":"#_2-初始化-inittable","children":[]},{"level":3,"title":"3. put","slug":"_3-put-1","link":"#_3-put-1","children":[]},{"level":3,"title":"4. get","slug":"_4-get","link":"#_4-get","children":[]}]},{"level":2,"title":"3. 总结","slug":"_3-总结","link":"#_3-总结","children":[]}],"git":{"createdTime":1636214511000,"updatedTime":1691405793000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":5},{"name":"Guide","email":"koushuangbwcx@163.com","commits":3},{"name":"ReedZheng","email":"fh75104423@163.com","commits":1},{"name":"Sr","email":"39112652+Itswag@users.noreply.github.com","commits":1},{"name":"nicollcheng","email":"64319004+nicollcheng@users.noreply.github.com","commits":1},{"name":"Erzbir","email":"2978086497@qq.com","commits":1},{"name":"tylerren","email":"75669365+rentianle2022@users.noreply.github.com","commits":1},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":14.23,"words":4268},"filePathRelative":"java/collection/concurrent-hash-map-source-code.md","localizedDate":"2021年11月7日","excerpt":"<blockquote>\\n<p>本文来自公众号：末读代码的投稿，原文地址：https://mp.weixin.qq.com/s/AHWzboztt53ZfFZmsSnMSw 。</p>\\n</blockquote>\\n<p>上一篇文章介绍了 HashMap 源码，反响不错，也有很多同学发表了自己的观点，这次又来了，这次是 <code>ConcurrentHashMap </code> 了，作为线程安全的 HashMap ，它的使用频率也是很高。那么它的存储结构和实现原理是怎么样的呢？</p>\\n<h2> 1. ConcurrentHashMap 1.7</h2>\\n<h3> 1. 存储结构</h3>\\n","copyright":{"author":"Guide"},"autoDesc":true}');export{e as data};
