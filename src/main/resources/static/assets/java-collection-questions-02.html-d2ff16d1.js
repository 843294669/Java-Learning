const a=JSON.parse('{"key":"v-66cf87b6","path":"/java/collection/java-collection-questions-02.html","title":"Java集合常见面试题总结(下)","lang":"zh-CN","frontmatter":{"title":"Java集合常见面试题总结(下)","category":"Java","tag":["Java集合"],"head":[["meta",{"name":"keywords","content":"HashMap,ConcurrentHashMap,Hashtable,List,Set"}],["meta",{"name":"description","content":"Java集合常见知识点和面试题总结，希望对你有帮助！"}],["meta",{"property":"og:url","content":"https://javaguide.cn/java/collection/java-collection-questions-02.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"Java集合常见面试题总结(下)"}],["meta",{"property":"og:description","content":"JavaGuide官方知识星球 Map（重要） HashMap 和 Hashtable 的区别 线程是否安全： HashMap 是非线程安全的，Hashtable 是线程安全的,因为 Hashtable 内部的方法基本都经过synchronized 修饰。（如果你要保证线程安全的话就使用 ConcurrentHashMap 吧！）； 效率： 因为线程安全的问题，HashMap 要比 Hashtable 效率高一点。另外，Hashtable 基本被淘汰，不要在代码中使用它； 对 Null key 和 Null value 的支持： HashMap 可以存储 null 的 key 和 value，但 null 作为键只能有一个，null 作为值可以有多个；Hashtable 不允许有 null 键和 null 值，否则会抛出 NullPointerException。 初始容量大小和每次扩充容量大小的不同： ① 创建时如果不指定容量初始值，Hashtable 默认的初始大小为 11，之后每次扩充，容量变为原来的 2n+1。HashMap 默认的初始化大小为 16。之后每次扩充，容量变为原来的 2 倍。② 创建时如果给定了容量初始值，那么 Hashtable 会直接使用你给定的大小，而 HashMap 会将其扩充为 2 的幂次方大小（HashMap 中的tableSizeFor()方法保证，下面给出了源代码）。也就是说 HashMap 总是使用 2 的幂作为哈希表的大小,后面会介绍到为什么是 2 的幂次方。 底层数据结构： JDK1.8 以后的 HashMap 在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）时，将链表转化为红黑树（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树），以减少搜索时间（后文中我会结合源码对这一过程进行分析）。Hashtable 没有这样的机制。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-28T07:49:18.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"Java集合"}],["meta",{"property":"article:modified_time","content":"2023-08-28T07:49:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java集合常见面试题总结(下)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-28T07:49:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]],"description":"JavaGuide官方知识星球 Map（重要） HashMap 和 Hashtable 的区别 线程是否安全： HashMap 是非线程安全的，Hashtable 是线程安全的,因为 Hashtable 内部的方法基本都经过synchronized 修饰。（如果你要保证线程安全的话就使用 ConcurrentHashMap 吧！）； 效率： 因为线程安全的问题，HashMap 要比 Hashtable 效率高一点。另外，Hashtable 基本被淘汰，不要在代码中使用它； 对 Null key 和 Null value 的支持： HashMap 可以存储 null 的 key 和 value，但 null 作为键只能有一个，null 作为值可以有多个；Hashtable 不允许有 null 键和 null 值，否则会抛出 NullPointerException。 初始容量大小和每次扩充容量大小的不同： ① 创建时如果不指定容量初始值，Hashtable 默认的初始大小为 11，之后每次扩充，容量变为原来的 2n+1。HashMap 默认的初始化大小为 16。之后每次扩充，容量变为原来的 2 倍。② 创建时如果给定了容量初始值，那么 Hashtable 会直接使用你给定的大小，而 HashMap 会将其扩充为 2 的幂次方大小（HashMap 中的tableSizeFor()方法保证，下面给出了源代码）。也就是说 HashMap 总是使用 2 的幂作为哈希表的大小,后面会介绍到为什么是 2 的幂次方。 底层数据结构： JDK1.8 以后的 HashMap 在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）时，将链表转化为红黑树（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树），以减少搜索时间（后文中我会结合源码对这一过程进行分析）。Hashtable 没有这样的机制。"},"headers":[{"level":2,"title":"Map（重要）","slug":"map-重要","link":"#map-重要","children":[{"level":3,"title":"HashMap 和 Hashtable 的区别","slug":"hashmap-和-hashtable-的区别","link":"#hashmap-和-hashtable-的区别","children":[]},{"level":3,"title":"HashMap 和 HashSet 区别","slug":"hashmap-和-hashset-区别","link":"#hashmap-和-hashset-区别","children":[]},{"level":3,"title":"HashMap 和 TreeMap 区别","slug":"hashmap-和-treemap-区别","link":"#hashmap-和-treemap-区别","children":[]},{"level":3,"title":"HashSet 如何检查重复?","slug":"hashset-如何检查重复","link":"#hashset-如何检查重复","children":[]},{"level":3,"title":"HashMap 的底层实现","slug":"hashmap-的底层实现","link":"#hashmap-的底层实现","children":[]},{"level":3,"title":"HashMap 的长度为什么是 2 的幂次方","slug":"hashmap-的长度为什么是-2-的幂次方","link":"#hashmap-的长度为什么是-2-的幂次方","children":[]},{"level":3,"title":"HashMap 多线程操作导致死循环问题","slug":"hashmap-多线程操作导致死循环问题","link":"#hashmap-多线程操作导致死循环问题","children":[]},{"level":3,"title":"HashMap 为什么线程不安全？","slug":"hashmap-为什么线程不安全","link":"#hashmap-为什么线程不安全","children":[]},{"level":3,"title":"HashMap 常见的遍历方式?","slug":"hashmap-常见的遍历方式","link":"#hashmap-常见的遍历方式","children":[]},{"level":3,"title":"ConcurrentHashMap 和 Hashtable 的区别","slug":"concurrenthashmap-和-hashtable-的区别","link":"#concurrenthashmap-和-hashtable-的区别","children":[]},{"level":3,"title":"ConcurrentHashMap 线程安全的具体实现方式/底层具体实现","slug":"concurrenthashmap-线程安全的具体实现方式-底层具体实现","link":"#concurrenthashmap-线程安全的具体实现方式-底层具体实现","children":[]},{"level":3,"title":"JDK 1.7 和 JDK 1.8 的 ConcurrentHashMap 实现有什么不同？","slug":"jdk-1-7-和-jdk-1-8-的-concurrenthashmap-实现有什么不同","link":"#jdk-1-7-和-jdk-1-8-的-concurrenthashmap-实现有什么不同","children":[]},{"level":3,"title":"ConcurrentHashMap 为什么 key 和 value 不能为 null？","slug":"concurrenthashmap-为什么-key-和-value-不能为-null","link":"#concurrenthashmap-为什么-key-和-value-不能为-null","children":[]},{"level":3,"title":"ConcurrentHashMap 能保证复合操作的原子性吗？","slug":"concurrenthashmap-能保证复合操作的原子性吗","link":"#concurrenthashmap-能保证复合操作的原子性吗","children":[]}]},{"level":2,"title":"Collections 工具类（不重要）","slug":"collections-工具类-不重要","link":"#collections-工具类-不重要","children":[{"level":3,"title":"排序操作","slug":"排序操作","link":"#排序操作","children":[]},{"level":3,"title":"查找,替换操作","slug":"查找-替换操作","link":"#查找-替换操作","children":[]},{"level":3,"title":"同步控制","slug":"同步控制","link":"#同步控制","children":[]}]}],"git":{"createdTime":1643707227000,"updatedTime":1693208958000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":9},{"name":"Guide","email":"koushuangbwcx@163.com","commits":8},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":4},{"name":"劼哥stone","email":"stone0090@126.com","commits":1}]},"readingTime":{"minutes":23.75,"words":7126},"filePathRelative":"java/collection/java-collection-questions-02.md","localizedDate":"2022年2月1日","excerpt":"<figure><a href=\\"/about-the-author/zhishixingqiu-two-years.html\\" target=\\"blank\\"><img src=\\"/xingqiu/xingqiu.png\\" alt=\\"JavaGuide官方知识星球\\" tabindex=\\"0\\"></a><figcaption>JavaGuide官方知识星球</figcaption></figure>\\n<h2> Map（重要）</h2>\\n<h3> HashMap 和 Hashtable 的区别</h3>\\n<ul>\\n<li><strong>线程是否安全：</strong> <code>HashMap</code> 是非线程安全的，<code>Hashtable</code> 是线程安全的,因为 <code>Hashtable</code> 内部的方法基本都经过<code>synchronized</code> 修饰。（如果你要保证线程安全的话就使用 <code>ConcurrentHashMap</code> 吧！）；</li>\\n<li><strong>效率：</strong> 因为线程安全的问题，<code>HashMap</code> 要比 <code>Hashtable</code> 效率高一点。另外，<code>Hashtable</code> 基本被淘汰，不要在代码中使用它；</li>\\n<li><strong>对 Null key 和 Null value 的支持：</strong> <code>HashMap</code> 可以存储 null 的 key 和 value，但 null 作为键只能有一个，null 作为值可以有多个；Hashtable 不允许有 null 键和 null 值，否则会抛出 <code>NullPointerException</code>。</li>\\n<li><strong>初始容量大小和每次扩充容量大小的不同：</strong> ① 创建时如果不指定容量初始值，<code>Hashtable</code> 默认的初始大小为 11，之后每次扩充，容量变为原来的 2n+1。<code>HashMap</code> 默认的初始化大小为 16。之后每次扩充，容量变为原来的 2 倍。② 创建时如果给定了容量初始值，那么 <code>Hashtable</code> 会直接使用你给定的大小，而 <code>HashMap</code> 会将其扩充为 2 的幂次方大小（<code>HashMap</code> 中的<code>tableSizeFor()</code>方法保证，下面给出了源代码）。也就是说 <code>HashMap</code> 总是使用 2 的幂作为哈希表的大小,后面会介绍到为什么是 2 的幂次方。</li>\\n<li><strong>底层数据结构：</strong> JDK1.8 以后的 <code>HashMap</code> 在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）时，将链表转化为红黑树（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树），以减少搜索时间（后文中我会结合源码对这一过程进行分析）。<code>Hashtable</code> 没有这样的机制。</li>\\n</ul>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{a as data};
