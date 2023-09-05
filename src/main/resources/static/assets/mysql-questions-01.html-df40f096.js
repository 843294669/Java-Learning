const l=JSON.parse(`{"key":"v-ceed3276","path":"/database/mysql/mysql-questions-01.html","title":"MySQL常见面试题总结","lang":"zh-CN","frontmatter":{"title":"MySQL常见面试题总结","category":"数据库","tag":["MySQL","大厂面试"],"head":[["meta",{"name":"keywords","content":"MySQL基础,MySQL基础架构,MySQL存储引擎,MySQL查询缓存,MySQL事务,MySQL锁等内容。"}],["meta",{"name":"description","content":"一篇文章总结MySQL常见的知识点和面试题，涵盖MySQL基础、MySQL基础架构、MySQL存储引擎、MySQL查询缓存、MySQL事务、MySQL锁等内容。"}],["meta",{"property":"og:url","content":"https://javaguide.cn/database/mysql/mysql-questions-01.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"MySQL常见面试题总结"}],["meta",{"property":"og:description","content":"这是一则或许对你有用的小广告 面试专版：准备 Java 面试的小伙伴可以考虑面试专版：《Java 面试指北 》 (质量非常高，专为面试打造，配合 JavaGuide 食用效果最佳)。 知识星球：技术专栏/一对一提问/简历修改/求职指南/面试打卡/不定时福利，欢迎加入 JavaGuide 官方知识星球。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-24T02:20:58.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:tag","content":"大厂面试"}],["meta",{"property":"article:modified_time","content":"2023-08-24T02:20:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL常见面试题总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-24T02:20:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]],"description":"这是一则或许对你有用的小广告 面试专版：准备 Java 面试的小伙伴可以考虑面试专版：《Java 面试指北 》 (质量非常高，专为面试打造，配合 JavaGuide 食用效果最佳)。 知识星球：技术专栏/一对一提问/简历修改/求职指南/面试打卡/不定时福利，欢迎加入 JavaGuide 官方知识星球。"},"headers":[{"level":2,"title":"MySQL 基础","slug":"mysql-基础","link":"#mysql-基础","children":[{"level":3,"title":"什么是关系型数据库？","slug":"什么是关系型数据库","link":"#什么是关系型数据库","children":[]},{"level":3,"title":"什么是 SQL？","slug":"什么是-sql","link":"#什么是-sql","children":[]},{"level":3,"title":"什么是 MySQL？","slug":"什么是-mysql","link":"#什么是-mysql","children":[]},{"level":3,"title":"MySQL 有什么优点？","slug":"mysql-有什么优点","link":"#mysql-有什么优点","children":[]}]},{"level":2,"title":"MySQL 字段类型","slug":"mysql-字段类型","link":"#mysql-字段类型","children":[{"level":3,"title":"整数类型的 UNSIGNED 属性有什么用？","slug":"整数类型的-unsigned-属性有什么用","link":"#整数类型的-unsigned-属性有什么用","children":[]},{"level":3,"title":"CHAR 和 VARCHAR 的区别是什么？","slug":"char-和-varchar-的区别是什么","link":"#char-和-varchar-的区别是什么","children":[]},{"level":3,"title":"VARCHAR(100)和 VARCHAR(10)的区别是什么？","slug":"varchar-100-和-varchar-10-的区别是什么","link":"#varchar-100-和-varchar-10-的区别是什么","children":[]},{"level":3,"title":"DECIMAL 和 FLOAT/DOUBLE 的区别是什么？","slug":"decimal-和-float-double-的区别是什么","link":"#decimal-和-float-double-的区别是什么","children":[]},{"level":3,"title":"为什么不推荐使用 TEXT 和 BLOB？","slug":"为什么不推荐使用-text-和-blob","link":"#为什么不推荐使用-text-和-blob","children":[]},{"level":3,"title":"DATETIME 和 TIMESTAMP 的区别是什么？","slug":"datetime-和-timestamp-的区别是什么","link":"#datetime-和-timestamp-的区别是什么","children":[]},{"level":3,"title":"NULL 和 '' 的区别是什么？","slug":"null-和-的区别是什么","link":"#null-和-的区别是什么","children":[]},{"level":3,"title":"Boolean 类型如何表示？","slug":"boolean-类型如何表示","link":"#boolean-类型如何表示","children":[]}]},{"level":2,"title":"MySQL 基础架构","slug":"mysql-基础架构","link":"#mysql-基础架构","children":[]},{"level":2,"title":"MySQL 存储引擎","slug":"mysql-存储引擎","link":"#mysql-存储引擎","children":[{"level":3,"title":"MySQL 支持哪些存储引擎？默认使用哪个？","slug":"mysql-支持哪些存储引擎-默认使用哪个","link":"#mysql-支持哪些存储引擎-默认使用哪个","children":[]},{"level":3,"title":"MySQL 存储引擎架构了解吗？","slug":"mysql-存储引擎架构了解吗","link":"#mysql-存储引擎架构了解吗","children":[]},{"level":3,"title":"MyISAM 和 InnoDB 有什么区别？","slug":"myisam-和-innodb-有什么区别","link":"#myisam-和-innodb-有什么区别","children":[]},{"level":3,"title":"MyISAM 和 InnoDB 如何选择？","slug":"myisam-和-innodb-如何选择","link":"#myisam-和-innodb-如何选择","children":[]}]},{"level":2,"title":"MySQL 索引","slug":"mysql-索引","link":"#mysql-索引","children":[]},{"level":2,"title":"MySQL 查询缓存","slug":"mysql-查询缓存","link":"#mysql-查询缓存","children":[]},{"level":2,"title":"MySQL 日志","slug":"mysql-日志","link":"#mysql-日志","children":[]},{"level":2,"title":"MySQL 事务","slug":"mysql-事务","link":"#mysql-事务","children":[{"level":3,"title":"何谓事务？","slug":"何谓事务","link":"#何谓事务","children":[]},{"level":3,"title":"何谓数据库事务？","slug":"何谓数据库事务","link":"#何谓数据库事务","children":[]},{"level":3,"title":"并发事务带来了哪些问题?","slug":"并发事务带来了哪些问题","link":"#并发事务带来了哪些问题","children":[]},{"level":3,"title":"不可重复读和幻读有什么区别？","slug":"不可重复读和幻读有什么区别","link":"#不可重复读和幻读有什么区别","children":[]},{"level":3,"title":"并发事务的控制方式有哪些？","slug":"并发事务的控制方式有哪些","link":"#并发事务的控制方式有哪些","children":[]},{"level":3,"title":"SQL 标准定义了哪些事务隔离级别?","slug":"sql-标准定义了哪些事务隔离级别","link":"#sql-标准定义了哪些事务隔离级别","children":[]},{"level":3,"title":"MySQL 的隔离级别是基于锁实现的吗？","slug":"mysql-的隔离级别是基于锁实现的吗","link":"#mysql-的隔离级别是基于锁实现的吗","children":[]},{"level":3,"title":"MySQL 的默认隔离级别是什么?","slug":"mysql-的默认隔离级别是什么","link":"#mysql-的默认隔离级别是什么","children":[]}]},{"level":2,"title":"MySQL 锁","slug":"mysql-锁","link":"#mysql-锁","children":[{"level":3,"title":"表级锁和行级锁了解吗？有什么区别？","slug":"表级锁和行级锁了解吗-有什么区别","link":"#表级锁和行级锁了解吗-有什么区别","children":[]},{"level":3,"title":"行级锁的使用有什么注意事项？","slug":"行级锁的使用有什么注意事项","link":"#行级锁的使用有什么注意事项","children":[]},{"level":3,"title":"InnoDB 有哪几类行锁？","slug":"innodb-有哪几类行锁","link":"#innodb-有哪几类行锁","children":[]},{"level":3,"title":"共享锁和排他锁呢？","slug":"共享锁和排他锁呢","link":"#共享锁和排他锁呢","children":[]},{"level":3,"title":"意向锁有什么作用？","slug":"意向锁有什么作用","link":"#意向锁有什么作用","children":[]},{"level":3,"title":"当前读和快照读有什么区别？","slug":"当前读和快照读有什么区别","link":"#当前读和快照读有什么区别","children":[]},{"level":3,"title":"自增锁有了解吗？","slug":"自增锁有了解吗","link":"#自增锁有了解吗","children":[]}]},{"level":2,"title":"MySQL 性能优化","slug":"mysql-性能优化","link":"#mysql-性能优化","children":[{"level":3,"title":"能用 MySQL 直接存储文件（比如图片）吗？","slug":"能用-mysql-直接存储文件-比如图片-吗","link":"#能用-mysql-直接存储文件-比如图片-吗","children":[]},{"level":3,"title":"MySQL 如何存储 IP 地址？","slug":"mysql-如何存储-ip-地址","link":"#mysql-如何存储-ip-地址","children":[]},{"level":3,"title":"有哪些常见的 SQL 优化手段？","slug":"有哪些常见的-sql-优化手段","link":"#有哪些常见的-sql-优化手段","children":[]},{"level":3,"title":"如何分析 SQL 的性能？","slug":"如何分析-sql-的性能","link":"#如何分析-sql-的性能","children":[]},{"level":3,"title":"读写分离和分库分表了解吗？","slug":"读写分离和分库分表了解吗","link":"#读写分离和分库分表了解吗","children":[]}]},{"level":2,"title":"MySQL 学习资料推荐","slug":"mysql-学习资料推荐","link":"#mysql-学习资料推荐","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1646270096000,"updatedTime":1692843658000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":23},{"name":"guide","email":"koushuangbwcx@163.com","commits":19},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":6},{"name":"paigeman","email":"53284808+paigeman@users.noreply.github.com","commits":2},{"name":"kuluqi163","email":"94770628+kuluqi163@users.noreply.github.com","commits":1},{"name":"lalalaxjy","email":"55581161+lalalaxjy@users.noreply.github.com","commits":1},{"name":"liubobo","email":"284115962@qq.com","commits":1},{"name":"yueyang","email":"yy1023178796@gmail.com","commits":1},{"name":"郭付一男","email":"guofuyinan@gmail.com","commits":1},{"name":"HEROGUO666","email":"32791938+HEROGUO666@users.noreply.github.com","commits":1},{"name":"HasanSANG","email":"55458257+HasanSANG@users.noreply.github.com","commits":1},{"name":"ImCaO","email":"imcao@imcao.cn","commits":1}]},"readingTime":{"minutes":41.05,"words":12316},"filePathRelative":"database/mysql/mysql-questions-01.md","localizedDate":"2022年3月3日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">这是一则或许对你有用的小广告</p>\\n<ul>\\n<li><strong>面试专版</strong>：准备 Java 面试的小伙伴可以考虑面试专版：<strong><a href=\\"/zhuanlan/java-mian-shi-zhi-bei.html\\" target=\\"blank\\">《Java 面试指北 》</a></strong> (质量非常高，专为面试打造，配合 JavaGuide 食用效果最佳)。</li>\\n<li><strong>知识星球</strong>：技术专栏/一对一提问/简历修改/求职指南/面试打卡/不定时福利，欢迎加入 <strong><a href=\\"/about-the-author/zhishixingqiu-two-years.html\\" target=\\"blank\\">JavaGuide 官方知识星球</a></strong>。</li>\\n</ul>\\n</div>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}`);export{l as data};
