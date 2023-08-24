const e=JSON.parse('{"key":"v-4d5bb289","path":"/java/jvm/jvm-in-action.html","title":"JVM线上问题排查和性能调优案例","lang":"zh-CN","frontmatter":{"title":"JVM线上问题排查和性能调优案例","category":"Java","tag":["JVM"],"description":"JVM 线上问题排查和性能调优也是面试常问的一个问题，尤其是社招中大厂的面试。 这篇文章，我会分享一些我看到的相关的案例。 下面是正文。 一次线上 OOM 问题分析 - 艾小仙 - 2023 现象：线上某个服务有接口非常慢，通过监控链路查看发现，中间的 GAP 时间非常大，实际接口并没有消耗很多时间，并且在那段时间里有很多这样的请求。 分析：使用 JDK 自带的jvisualvm分析 dump 文件(MAT 也能分析)。 建议：对于 SQL 语句，如果监测到没有where条件的全表查询应该默认增加一个合适的limit作为限制，防止这种问题拖垮整个系统 资料：实战案例：记一次 dump 文件分析历程转载 - HeapDump - 2022。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/java/jvm/jvm-in-action.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"JVM线上问题排查和性能调优案例"}],["meta",{"property":"og:description","content":"JVM 线上问题排查和性能调优也是面试常问的一个问题，尤其是社招中大厂的面试。 这篇文章，我会分享一些我看到的相关的案例。 下面是正文。 一次线上 OOM 问题分析 - 艾小仙 - 2023 现象：线上某个服务有接口非常慢，通过监控链路查看发现，中间的 GAP 时间非常大，实际接口并没有消耗很多时间，并且在那段时间里有很多这样的请求。 分析：使用 JDK 自带的jvisualvm分析 dump 文件(MAT 也能分析)。 建议：对于 SQL 语句，如果监测到没有where条件的全表查询应该默认增加一个合适的limit作为限制，防止这种问题拖垮整个系统 资料：实战案例：记一次 dump 文件分析历程转载 - HeapDump - 2022。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-07T10:56:33.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:modified_time","content":"2023-08-07T10:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM线上问题排查和性能调优案例\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-07T10:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[],"git":{"createdTime":1683707794000,"updatedTime":1691405793000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":3,"words":899},"filePathRelative":"java/jvm/jvm-in-action.md","localizedDate":"2023年5月10日","excerpt":"<p>JVM 线上问题排查和性能调优也是面试常问的一个问题，尤其是社招中大厂的面试。</p>\\n<p>这篇文章，我会分享一些我看到的相关的案例。</p>\\n<p>下面是正文。</p>\\n<p><a href=\\"https://juejin.cn/post/7205141492264976445\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">一次线上 OOM 问题分析 - 艾小仙 - 2023</a></p>\\n<ul>\\n<li><strong>现象</strong>：线上某个服务有接口非常慢，通过监控链路查看发现，中间的 GAP 时间非常大，实际接口并没有消耗很多时间，并且在那段时间里有很多这样的请求。</li>\\n<li><strong>分析</strong>：使用 JDK 自带的<code>jvisualvm</code>分析 dump 文件(MAT 也能分析)。</li>\\n<li><strong>建议</strong>：对于 SQL 语句，如果监测到没有<code>where</code>条件的全表查询应该默认增加一个合适的<code>limit</code>作为限制，防止这种问题拖垮整个系统</li>\\n<li><strong>资料</strong>：<a href=\\"https://heapdump.cn/article/3489050\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">实战案例：记一次 dump 文件分析历程转载 - HeapDump - 2022</a>。</li>\\n</ul>","copyright":{"author":"Guide"},"autoDesc":true}');export{e as data};
