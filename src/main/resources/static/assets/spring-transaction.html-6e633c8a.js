const e=JSON.parse('{"key":"v-235a8714","path":"/system-design/framework/spring/spring-transaction.html","title":"Spring 事务详解","lang":"zh-CN","frontmatter":{"title":"Spring 事务详解","category":"框架","tag":["Spring"],"description":"前段时间答应读者的 Spring 事务 分析总结终于来了。这部分内容比较重要，不论是对于工作还是面试，但是网上比较好的参考资料比较少。 什么是事务？ 事务是逻辑上的一组操作，要么都执行，要么都不执行。 相信大家应该都能背上面这句话了，下面我结合我们日常的真实开发来谈一谈。 我们系统的每个业务方法可能包括了多个原子性的数据库操作，比如下面的 savePerson() 方法中就有两个原子性的数据库操作。这些原子性的数据库操作是有依赖的，它们要么都执行，要不就都不执行。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/system-design/framework/spring/spring-transaction.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"Spring 事务详解"}],["meta",{"property":"og:description","content":"前段时间答应读者的 Spring 事务 分析总结终于来了。这部分内容比较重要，不论是对于工作还是面试，但是网上比较好的参考资料比较少。 什么是事务？ 事务是逻辑上的一组操作，要么都执行，要么都不执行。 相信大家应该都能背上面这句话了，下面我结合我们日常的真实开发来谈一谈。 我们系统的每个业务方法可能包括了多个原子性的数据库操作，比如下面的 savePerson() 方法中就有两个原子性的数据库操作。这些原子性的数据库操作是有依赖的，它们要么都执行，要不就都不执行。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-07T10:56:33.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"Spring"}],["meta",{"property":"article:modified_time","content":"2023-08-07T10:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring 事务详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-07T10:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"什么是事务？","slug":"什么是事务","link":"#什么是事务","children":[]},{"level":2,"title":"事务的特性（ACID）了解么?","slug":"事务的特性-acid-了解么","link":"#事务的特性-acid-了解么","children":[]},{"level":2,"title":"详谈 Spring 对事务的支持","slug":"详谈-spring-对事务的支持","link":"#详谈-spring-对事务的支持","children":[{"level":3,"title":"Spring 支持两种方式的事务管理","slug":"spring-支持两种方式的事务管理","link":"#spring-支持两种方式的事务管理","children":[]},{"level":3,"title":"Spring 事务管理接口介绍","slug":"spring-事务管理接口介绍","link":"#spring-事务管理接口介绍","children":[]},{"level":3,"title":"事务属性详解","slug":"事务属性详解","link":"#事务属性详解","children":[]},{"level":3,"title":"@Transactional 注解使用详解","slug":"transactional-注解使用详解","link":"#transactional-注解使用详解","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1587904879000,"updatedTime":1691405793000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":11},{"name":"Guide","email":"koushuangbwcx@163.com","commits":7},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":5},{"name":"shuang.kou","email":"koushuangbwcx@163.com","commits":4},{"name":"wangtong","email":"wangtong_b@aspirecn.com","commits":3},{"name":"liwenguang","email":"liwenguang_dev@163.com","commits":2},{"name":"Mingron","email":"41795715+1autodidact@users.noreply.github.com","commits":2},{"name":"weijie321","email":"114684621+weijie321@users.noreply.github.com","commits":1},{"name":"yueyang","email":"yy1023178796@gmail.com","commits":1},{"name":"Freeze","email":"42697182+zbzbzzz@users.noreply.github.com","commits":1},{"name":"哇塞大嘴好帥","email":"66861267+DaZuiZui@users.noreply.github.com","commits":1},{"name":"SnailClimb","email":"koushuangbwcx@163.com","commits":1},{"name":"Terry","email":"zhangwenlp@vip.qq.com","commits":1},{"name":"fjut_shark","email":"1946955309@qq.com","commits":1},{"name":"guxiaoyue","email":"cheng_zhuangjian@163.com","commits":1},{"name":"ipofss","email":"274694451@qq.com","commits":1},{"name":"lcan520","email":"zhilong.li@cisdi.com.cn","commits":1}]},"readingTime":{"minutes":22.17,"words":6651},"filePathRelative":"system-design/framework/spring/spring-transaction.md","localizedDate":"2020年4月26日","excerpt":"<p>前段时间答应读者的 <strong>Spring 事务</strong> 分析总结终于来了。这部分内容比较重要，不论是对于工作还是面试，但是网上比较好的参考资料比较少。</p>\\n<h2> 什么是事务？</h2>\\n<p><strong>事务是逻辑上的一组操作，要么都执行，要么都不执行。</strong></p>\\n<p>相信大家应该都能背上面这句话了，下面我结合我们日常的真实开发来谈一谈。</p>\\n<p>我们系统的每个业务方法可能包括了多个原子性的数据库操作，比如下面的 <code>savePerson()</code> 方法中就有两个原子性的数据库操作。这些原子性的数据库操作是有依赖的，它们要么都执行，要不就都不执行。</p>","copyright":{"author":"Guide"},"autoDesc":true}');export{e as data};