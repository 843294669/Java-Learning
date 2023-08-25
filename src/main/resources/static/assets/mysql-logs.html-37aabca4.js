const e=JSON.parse('{"key":"v-59ddd957","path":"/database/mysql/mysql-logs.html","title":"MySQL三大日志(binlog、redo log和undo log)详解","lang":"zh-CN","frontmatter":{"title":"MySQL三大日志(binlog、redo log和undo log)详解","category":"数据库","tag":["MySQL"],"description":"本文来自公号程序猿阿星投稿，JavaGuide 对其做了补充完善。 前言 MySQL 日志 主要包括错误日志、查询日志、慢查询日志、事务日志、二进制日志几大类。其中，比较重要的还要属二进制日志 binlog（归档日志）和事务日志 redo log（重做日志）和 undo log（回滚日志）。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/database/mysql/mysql-logs.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"MySQL三大日志(binlog、redo log和undo log)详解"}],["meta",{"property":"og:description","content":"本文来自公号程序猿阿星投稿，JavaGuide 对其做了补充完善。 前言 MySQL 日志 主要包括错误日志、查询日志、慢查询日志、事务日志、二进制日志几大类。其中，比较重要的还要属二进制日志 binlog（归档日志）和事务日志 redo log（重做日志）和 undo log（回滚日志）。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-07T10:56:33.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:modified_time","content":"2023-08-07T10:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL三大日志(binlog、redo log和undo log)详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-07T10:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"redo log","slug":"redo-log","link":"#redo-log","children":[{"level":3,"title":"刷盘时机","slug":"刷盘时机","link":"#刷盘时机","children":[]},{"level":3,"title":"日志文件组","slug":"日志文件组","link":"#日志文件组","children":[]},{"level":3,"title":"redo log 小结","slug":"redo-log-小结","link":"#redo-log-小结","children":[]}]},{"level":2,"title":"binlog","slug":"binlog","link":"#binlog","children":[{"level":3,"title":"记录格式","slug":"记录格式","link":"#记录格式","children":[]},{"level":3,"title":"写入机制","slug":"写入机制","link":"#写入机制","children":[]}]},{"level":2,"title":"两阶段提交","slug":"两阶段提交","link":"#两阶段提交","children":[]},{"level":2,"title":"undo log","slug":"undo-log","link":"#undo-log","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"站在巨人的肩膀上","slug":"站在巨人的肩膀上","link":"#站在巨人的肩膀上","children":[]},{"level":2,"title":"MySQL 好文推荐","slug":"mysql-好文推荐","link":"#mysql-好文推荐","children":[]}],"git":{"createdTime":1636197814000,"updatedTime":1691405793000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":4},{"name":"paigeman","email":"53284808+paigeman@users.noreply.github.com","commits":3},{"name":"Guide","email":"koushuangbwcx@163.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2},{"name":"hedonihilist","email":"zenghao_mail@163.com","commits":1},{"name":"sam","email":"sam2008ext@gmail.com","commits":1}]},"readingTime":{"minutes":13.68,"words":4103},"filePathRelative":"database/mysql/mysql-logs.md","localizedDate":"2021年11月6日","excerpt":"<blockquote>\\n<p>本文来自公号程序猿阿星投稿，JavaGuide 对其做了补充完善。</p>\\n</blockquote>\\n<h2> 前言</h2>\\n<p><code>MySQL</code> 日志 主要包括错误日志、查询日志、慢查询日志、事务日志、二进制日志几大类。其中，比较重要的还要属二进制日志 <code>binlog</code>（归档日志）和事务日志 <code>redo log</code>（重做日志）和 <code>undo log</code>（回滚日志）。</p>\\n<figure><img src=\\"/github/javaguide/01.png\\" alt=\\"\\" tabindex=\\"0\\"><figcaption></figcaption></figure>","copyright":{"author":"Guide"},"autoDesc":true}');export{e as data};