const e=JSON.parse('{"key":"v-1f1ddd3e","path":"/java/collection/copyonwritearraylist-source-code.html","title":"CopyOnWriteArrayList 源码分析","lang":"zh-CN","frontmatter":{"title":"CopyOnWriteArrayList 源码分析","category":"Java","tag":["Java集合"],"description":"CopyOnWriteArrayList 简介 在 JDK1.5 之前，如果想要使用并发安全的 List 只能选择 Vector。而 Vector 是一种老旧的集合，已经被淘汰。Vector 对于增删改查等方法基本都加了 synchronized，这种方式虽然能够保证同步，但这相当于对整个 Vector 加上了一把大锁，使得每个方法执行的时候都要去获得锁，导致性能非常低下。 JDK1.5 引入了 Java.util.concurrent（JUC）包，其中提供了很多线程安全且并发性能良好的容器，其中唯一的线程安全 List 实现就是 CopyOnWriteArrayList 。关于java.util.concurrent 包下常见并发容器的总结，可以看我写的这篇文章：Java 常见并发容器总结 。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/java/collection/copyonwritearraylist-source-code.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"CopyOnWriteArrayList 源码分析"}],["meta",{"property":"og:description","content":"CopyOnWriteArrayList 简介 在 JDK1.5 之前，如果想要使用并发安全的 List 只能选择 Vector。而 Vector 是一种老旧的集合，已经被淘汰。Vector 对于增删改查等方法基本都加了 synchronized，这种方式虽然能够保证同步，但这相当于对整个 Vector 加上了一把大锁，使得每个方法执行的时候都要去获得锁，导致性能非常低下。 JDK1.5 引入了 Java.util.concurrent（JUC）包，其中提供了很多线程安全且并发性能良好的容器，其中唯一的线程安全 List 实现就是 CopyOnWriteArrayList 。关于java.util.concurrent 包下常见并发容器的总结，可以看我写的这篇文章：Java 常见并发容器总结 。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-07T10:56:33.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"Java集合"}],["meta",{"property":"article:modified_time","content":"2023-08-07T10:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CopyOnWriteArrayList 源码分析\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-07T10:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"CopyOnWriteArrayList 简介","slug":"copyonwritearraylist-简介","link":"#copyonwritearraylist-简介","children":[{"level":3,"title":"CopyOnWriteArrayList 到底有什么厉害之处？","slug":"copyonwritearraylist-到底有什么厉害之处","link":"#copyonwritearraylist-到底有什么厉害之处","children":[]},{"level":3,"title":"Copy-On-Write 的思想是什么？","slug":"copy-on-write-的思想是什么","link":"#copy-on-write-的思想是什么","children":[]}]},{"level":2,"title":"CopyOnWriteArrayList 源码分析","slug":"copyonwritearraylist-源码分析","link":"#copyonwritearraylist-源码分析","children":[{"level":3,"title":"初始化","slug":"初始化","link":"#初始化","children":[]},{"level":3,"title":"插入元素","slug":"插入元素","link":"#插入元素","children":[]},{"level":3,"title":"读取元素","slug":"读取元素","link":"#读取元素","children":[]},{"level":3,"title":"获取列表中元素的个数","slug":"获取列表中元素的个数","link":"#获取列表中元素的个数","children":[]},{"level":3,"title":"删除元素","slug":"删除元素","link":"#删除元素","children":[]},{"level":3,"title":"判断元素是否存在","slug":"判断元素是否存在","link":"#判断元素是否存在","children":[]}]},{"level":2,"title":"CopyOnWriteArrayList 常用方法测试","slug":"copyonwritearraylist-常用方法测试","link":"#copyonwritearraylist-常用方法测试","children":[]}],"git":{"createdTime":1686227684000,"updatedTime":1691405793000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":3}]},"readingTime":{"minutes":10.99,"words":3298},"filePathRelative":"java/collection/copyonwritearraylist-source-code.md","localizedDate":"2023年6月8日","excerpt":"<h2> CopyOnWriteArrayList 简介</h2>\\n<p>在 JDK1.5 之前，如果想要使用并发安全的 <code>List</code> 只能选择 <code>Vector</code>。而 <code>Vector</code> 是一种老旧的集合，已经被淘汰。<code>Vector</code> 对于增删改查等方法基本都加了 <code>synchronized</code>，这种方式虽然能够保证同步，但这相当于对整个 <code>Vector</code> 加上了一把大锁，使得每个方法执行的时候都要去获得锁，导致性能非常低下。</p>\\n<p>JDK1.5 引入了 <code>Java.util.concurrent</code>（JUC）包，其中提供了很多线程安全且并发性能良好的容器，其中唯一的线程安全 <code>List</code> 实现就是 <code>CopyOnWriteArrayList</code> 。关于<code>java.util.concurrent</code> 包下常见并发容器的总结，可以看我写的这篇文章：<a href=\\"https://javaguide.cn/java/concurrent/java-concurrent-collections.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Java 常见并发容器总结</a> 。</p>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
