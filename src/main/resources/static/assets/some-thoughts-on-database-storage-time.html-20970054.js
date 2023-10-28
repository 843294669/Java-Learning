const e=JSON.parse('{"key":"v-fce59758","path":"/database/mysql/some-thoughts-on-database-storage-time.html","title":"MySQL日期类型选择建议","lang":"zh-CN","frontmatter":{"title":"MySQL日期类型选择建议","category":"数据库","tag":["MySQL"],"description":"我们平时开发中不可避免的就是要存储时间，比如我们要记录操作表中这条记录的时间、记录转账的交易时间、记录出发时间、用户下单时间等等。你会发现时间这个东西与我们开发的联系还是非常紧密的，用的好与不好会给我们的业务甚至功能带来很大的影响。所以，我们有必要重新出发，好好认识一下这个东西。 不要用字符串存储日期 和绝大部分对数据库不太了解的新手一样，我在大学的时候就这样干过，甚至认为这样是一个不错的表示日期的方法。毕竟简单直白，容易上手。 但是，这是不正确的做法，主要会有下面两个问题： 字符串占用的空间更大！ 字符串存储的日期效率比较低（逐个字符进行比对），无法用日期相关的 API 进行计算和比较。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/database/mysql/some-thoughts-on-database-storage-time.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"MySQL日期类型选择建议"}],["meta",{"property":"og:description","content":"我们平时开发中不可避免的就是要存储时间，比如我们要记录操作表中这条记录的时间、记录转账的交易时间、记录出发时间、用户下单时间等等。你会发现时间这个东西与我们开发的联系还是非常紧密的，用的好与不好会给我们的业务甚至功能带来很大的影响。所以，我们有必要重新出发，好好认识一下这个东西。 不要用字符串存储日期 和绝大部分对数据库不太了解的新手一样，我在大学的时候就这样干过，甚至认为这样是一个不错的表示日期的方法。毕竟简单直白，容易上手。 但是，这是不正确的做法，主要会有下面两个问题： 字符串占用的空间更大！ 字符串存储的日期效率比较低（逐个字符进行比对），无法用日期相关的 API 进行计算和比较。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-14T06:21:10.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:modified_time","content":"2023-08-14T06:21:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL日期类型选择建议\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-14T06:21:10.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"不要用字符串存储日期","slug":"不要用字符串存储日期","link":"#不要用字符串存储日期","children":[]},{"level":2,"title":"Datetime 和 Timestamp 之间的抉择","slug":"datetime-和-timestamp-之间的抉择","link":"#datetime-和-timestamp-之间的抉择","children":[{"level":3,"title":"时区信息","slug":"时区信息","link":"#时区信息","children":[]},{"level":3,"title":"占用空间","slug":"占用空间","link":"#占用空间","children":[]},{"level":3,"title":"表示范围","slug":"表示范围","link":"#表示范围","children":[]},{"level":3,"title":"性能","slug":"性能","link":"#性能","children":[]}]},{"level":2,"title":"数值时间戳是更好的选择吗？","slug":"数值时间戳是更好的选择吗","link":"#数值时间戳是更好的选择吗","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1636197814000,"updatedTime":1691994070000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":5},{"name":"guide","email":"koushuangbwcx@163.com","commits":5},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3}]},"readingTime":{"minutes":5.71,"words":1712},"filePathRelative":"database/mysql/some-thoughts-on-database-storage-time.md","localizedDate":"2021年11月6日","excerpt":"<p>我们平时开发中不可避免的就是要存储时间，比如我们要记录操作表中这条记录的时间、记录转账的交易时间、记录出发时间、用户下单时间等等。你会发现时间这个东西与我们开发的联系还是非常紧密的，用的好与不好会给我们的业务甚至功能带来很大的影响。所以，我们有必要重新出发，好好认识一下这个东西。</p>\\n<h2> 不要用字符串存储日期</h2>\\n<p>和绝大部分对数据库不太了解的新手一样，我在大学的时候就这样干过，甚至认为这样是一个不错的表示日期的方法。毕竟简单直白，容易上手。</p>\\n<p>但是，这是不正确的做法，主要会有下面两个问题：</p>\\n<ol>\\n<li>字符串占用的空间更大！</li>\\n<li>字符串存储的日期效率比较低（逐个字符进行比对），无法用日期相关的 API 进行计算和比较。</li>\\n</ol>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};