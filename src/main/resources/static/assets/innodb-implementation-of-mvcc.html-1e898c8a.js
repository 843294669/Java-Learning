const e=JSON.parse('{"key":"v-e6d5f0d8","path":"/database/mysql/innodb-implementation-of-mvcc.html","title":"InnoDB存储引擎对MVCC的实现","lang":"zh-CN","frontmatter":{"title":"InnoDB存储引擎对MVCC的实现","category":"数据库","tag":["MySQL"],"description":"多版本并发控制 (Multi-Version Concurrency Control) MVCC 是一种并发控制机制，用于在多个并发事务同时读写数据库时保持数据的一致性和隔离性。它是通过在每个数据行上维护多个版本的数据来实现的。当一个事务要对数据库中的数据进行修改时，MVCC 会为该事务创建一个数据快照，而不是直接修改实际的数据行。 1、读操作（SELECT）： 当一个事务执行读操作时，它会使用快照读取。快照读取是基于事务开始时数据库中的状态创建的，因此事务不会读取其他事务尚未提交的修改。具体工作情况如下： 对于读取操作，事务会查找符合条件的数据行，并选择符合其事务开始时间的数据版本进行读取。 如果某个数据行有多个版本，事务会选择不晚于其开始时间的最新版本，确保事务只读取在它开始之前已经存在的数据。 事务读取的是快照数据，因此其他并发事务对数据行的修改不会影响当前事务的读取操作。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/database/mysql/innodb-implementation-of-mvcc.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"InnoDB存储引擎对MVCC的实现"}],["meta",{"property":"og:description","content":"多版本并发控制 (Multi-Version Concurrency Control) MVCC 是一种并发控制机制，用于在多个并发事务同时读写数据库时保持数据的一致性和隔离性。它是通过在每个数据行上维护多个版本的数据来实现的。当一个事务要对数据库中的数据进行修改时，MVCC 会为该事务创建一个数据快照，而不是直接修改实际的数据行。 1、读操作（SELECT）： 当一个事务执行读操作时，它会使用快照读取。快照读取是基于事务开始时数据库中的状态创建的，因此事务不会读取其他事务尚未提交的修改。具体工作情况如下： 对于读取操作，事务会查找符合条件的数据行，并选择符合其事务开始时间的数据版本进行读取。 如果某个数据行有多个版本，事务会选择不晚于其开始时间的最新版本，确保事务只读取在它开始之前已经存在的数据。 事务读取的是快照数据，因此其他并发事务对数据行的修改不会影响当前事务的读取操作。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://javaguide.cn/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-07T10:56:33.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"InnoDB存储引擎对MVCC的实现"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:modified_time","content":"2023-08-07T10:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"InnoDB存储引擎对MVCC的实现\\",\\"image\\":[\\"https://javaguide.cn/\\"],\\"dateModified\\":\\"2023-08-07T10:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"多版本并发控制 (Multi-Version Concurrency Control)","slug":"多版本并发控制-multi-version-concurrency-control","link":"#多版本并发控制-multi-version-concurrency-control","children":[]},{"level":2,"title":"一致性非锁定读和锁定读","slug":"一致性非锁定读和锁定读","link":"#一致性非锁定读和锁定读","children":[{"level":3,"title":"一致性非锁定读","slug":"一致性非锁定读","link":"#一致性非锁定读","children":[]},{"level":3,"title":"锁定读","slug":"锁定读","link":"#锁定读","children":[]}]},{"level":2,"title":"InnoDB 对 MVCC 的实现","slug":"innodb-对-mvcc-的实现","link":"#innodb-对-mvcc-的实现","children":[{"level":3,"title":"隐藏字段","slug":"隐藏字段","link":"#隐藏字段","children":[]},{"level":3,"title":"ReadView","slug":"readview","link":"#readview","children":[]},{"level":3,"title":"undo-log","slug":"undo-log","link":"#undo-log","children":[]},{"level":3,"title":"数据可见性算法","slug":"数据可见性算法","link":"#数据可见性算法","children":[]}]},{"level":2,"title":"RC 和 RR 隔离级别下 MVCC 的差异","slug":"rc-和-rr-隔离级别下-mvcc-的差异","link":"#rc-和-rr-隔离级别下-mvcc-的差异","children":[]},{"level":2,"title":"MVCC 解决不可重复读问题","slug":"mvcc-解决不可重复读问题","link":"#mvcc-解决不可重复读问题","children":[{"level":3,"title":"在 RC 下 ReadView 生成情况","slug":"在-rc-下-readview-生成情况","link":"#在-rc-下-readview-生成情况","children":[]},{"level":3,"title":"在 RR 下 ReadView 生成情况","slug":"在-rr-下-readview-生成情况","link":"#在-rr-下-readview-生成情况","children":[]}]},{"level":2,"title":"MVCC➕Next-key-Lock 防止幻读","slug":"mvcc➕next-key-lock-防止幻读","link":"#mvcc➕next-key-lock-防止幻读","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1636197814000,"updatedTime":1691405793000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3},{"name":"guide","email":"koushuangbwcx@163.com","commits":3},{"name":"Guide","email":"koushuangbwcx@163.com","commits":2},{"name":"jun","email":"2395306536@qq.com","commits":1}]},"readingTime":{"minutes":14.68,"words":4404},"filePathRelative":"database/mysql/innodb-implementation-of-mvcc.md","localizedDate":"2021年11月6日","excerpt":"<h2> 多版本并发控制 (Multi-Version Concurrency Control)</h2>\\n<p>MVCC 是一种并发控制机制，用于在多个并发事务同时读写数据库时保持数据的一致性和隔离性。它是通过在每个数据行上维护多个版本的数据来实现的。当一个事务要对数据库中的数据进行修改时，MVCC 会为该事务创建一个数据快照，而不是直接修改实际的数据行。</p>\\n<p>1、读操作（SELECT）：</p>\\n<p>当一个事务执行读操作时，它会使用快照读取。快照读取是基于事务开始时数据库中的状态创建的，因此事务不会读取其他事务尚未提交的修改。具体工作情况如下：</p>\\n<ul>\\n<li>对于读取操作，事务会查找符合条件的数据行，并选择符合其事务开始时间的数据版本进行读取。</li>\\n<li>如果某个数据行有多个版本，事务会选择不晚于其开始时间的最新版本，确保事务只读取在它开始之前已经存在的数据。</li>\\n<li>事务读取的是快照数据，因此其他并发事务对数据行的修改不会影响当前事务的读取操作。</li>\\n</ul>","copyright":{"author":"Guide"},"autoDesc":true}');export{e as data};