const e=JSON.parse('{"key":"v-6d8dc9b5","path":"/database/redis/redis-common-blocking-problems-summary.html","title":"Redis常见阻塞原因总结","lang":"zh-CN","frontmatter":{"title":"Redis常见阻塞原因总结","category":"数据库","tag":["Redis"],"description":"本文整理完善自：https://mp.weixin.qq.com/s/0Nqfq_eQrUb12QH6eBbHXA ，作者：阿 Q 说代码 这篇文章会详细总结一下可能导致 Redis 阻塞的情况，这些情况也是影响 Redis 性能的关键因素，使用 Redis 的时候应该格外注意！ O(n) 命令 Redis 中的大部分命令都是 O(1)时间复杂度，但也有少部分 O(n) 时间复杂度的命令，例如： KEYS *：会返回所有符合规则的 key。 HGETALL：会返回一个 Hash 中所有的键值对。 LRANGE：会返回 List 中指定范围内的元素。 SMEMBERS：返回 Set 中的所有元素。 SINTER/SUNION/SDIFF：计算多个 Set 的交集/并集/差集。 ......","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/database/redis/redis-common-blocking-problems-summary.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"Redis常见阻塞原因总结"}],["meta",{"property":"og:description","content":"本文整理完善自：https://mp.weixin.qq.com/s/0Nqfq_eQrUb12QH6eBbHXA ，作者：阿 Q 说代码 这篇文章会详细总结一下可能导致 Redis 阻塞的情况，这些情况也是影响 Redis 性能的关键因素，使用 Redis 的时候应该格外注意！ O(n) 命令 Redis 中的大部分命令都是 O(1)时间复杂度，但也有少部分 O(n) 时间复杂度的命令，例如： KEYS *：会返回所有符合规则的 key。 HGETALL：会返回一个 Hash 中所有的键值对。 LRANGE：会返回 List 中指定范围内的元素。 SMEMBERS：返回 Set 中的所有元素。 SINTER/SUNION/SDIFF：计算多个 Set 的交集/并集/差集。 ......"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-09T04:08:20.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"Redis"}],["meta",{"property":"article:modified_time","content":"2023-08-09T04:08:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Redis常见阻塞原因总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-09T04:08:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"O(n) 命令","slug":"o-n-命令","link":"#o-n-命令","children":[]},{"level":2,"title":"SAVE 创建 RDB 快照","slug":"save-创建-rdb-快照","link":"#save-创建-rdb-快照","children":[]},{"level":2,"title":"AOF","slug":"aof","link":"#aof","children":[{"level":3,"title":"AOF 日志记录阻塞","slug":"aof-日志记录阻塞","link":"#aof-日志记录阻塞","children":[]},{"level":3,"title":"AOF 刷盘阻塞","slug":"aof-刷盘阻塞","link":"#aof-刷盘阻塞","children":[]},{"level":3,"title":"AOF 重写阻塞","slug":"aof-重写阻塞","link":"#aof-重写阻塞","children":[]}]},{"level":2,"title":"大 Key","slug":"大-key","link":"#大-key","children":[{"level":3,"title":"查找大 key","slug":"查找大-key","link":"#查找大-key","children":[]},{"level":3,"title":"删除大 key","slug":"删除大-key","link":"#删除大-key","children":[]}]},{"level":2,"title":"清空数据库","slug":"清空数据库","link":"#清空数据库","children":[]},{"level":2,"title":"集群扩容","slug":"集群扩容","link":"#集群扩容","children":[]},{"level":2,"title":"Swap（内存交换）","slug":"swap-内存交换","link":"#swap-内存交换","children":[]},{"level":2,"title":"CPU 竞争","slug":"cpu-竞争","link":"#cpu-竞争","children":[]},{"level":2,"title":"网络问题","slug":"网络问题","link":"#网络问题","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1679567139000,"updatedTime":1691554100000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":7},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3}]},"readingTime":{"minutes":9.32,"words":2796},"filePathRelative":"database/redis/redis-common-blocking-problems-summary.md","localizedDate":"2023年3月23日","excerpt":"<blockquote>\\n<p>本文整理完善自：https://mp.weixin.qq.com/s/0Nqfq_eQrUb12QH6eBbHXA ，作者：阿 Q 说代码</p>\\n</blockquote>\\n<p>这篇文章会详细总结一下可能导致 Redis 阻塞的情况，这些情况也是影响 Redis 性能的关键因素，使用 Redis 的时候应该格外注意！</p>\\n<h2> O(n) 命令</h2>\\n<p>Redis 中的大部分命令都是 O(1)时间复杂度，但也有少部分 O(n) 时间复杂度的命令，例如：</p>\\n<ul>\\n<li><code>KEYS *</code>：会返回所有符合规则的 key。</li>\\n<li><code>HGETALL</code>：会返回一个 Hash 中所有的键值对。</li>\\n<li><code>LRANGE</code>：会返回 List 中指定范围内的元素。</li>\\n<li><code>SMEMBERS</code>：返回 Set 中的所有元素。</li>\\n<li><code>SINTER</code>/<code>SUNION</code>/<code>SDIFF</code>：计算多个 Set 的交集/并集/差集。</li>\\n<li>......</li>\\n</ul>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
