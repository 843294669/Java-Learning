const e=JSON.parse('{"key":"v-2eefec1a","path":"/cs-basics/data-structure/linear-data-structure.html","title":"线性数据结构","lang":"zh-CN","frontmatter":{"title":"线性数据结构","category":"计算机基础","tag":["数据结构"],"description":"1. 数组 数组（Array） 是一种很常见的数据结构。它由相同类型的元素（element）组成，并且是使用一块连续的内存来存储。 我们直接可以利用元素的索引（index）可以计算出该元素对应的存储地址。 数组的特点是：提供随机访问 并且容量有限。 假如数组的长度为 n。 访问：O（1）//访问特定位置的元素 插入：O（n ）//最坏的情况发生在插入发生在数组的首部并需要移动所有元素时 删除：O（n）//最坏的情况发生在删除数组的开头发生并需要移动第一元素后面所有的元素时","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/cs-basics/data-structure/linear-data-structure.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"线性数据结构"}],["meta",{"property":"og:description","content":"1. 数组 数组（Array） 是一种很常见的数据结构。它由相同类型的元素（element）组成，并且是使用一块连续的内存来存储。 我们直接可以利用元素的索引（index）可以计算出该元素对应的存储地址。 数组的特点是：提供随机访问 并且容量有限。 假如数组的长度为 n。 访问：O（1）//访问特定位置的元素 插入：O（n ）//最坏的情况发生在插入发生在数组的首部并需要移动所有元素时 删除：O（n）//最坏的情况发生在删除数组的开头发生并需要移动第一元素后面所有的元素时"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-28T07:49:18.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"数据结构"}],["meta",{"property":"article:modified_time","content":"2023-08-28T07:49:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"线性数据结构\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-28T07:49:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"1. 数组","slug":"_1-数组","link":"#_1-数组","children":[]},{"level":2,"title":"2. 链表","slug":"_2-链表","link":"#_2-链表","children":[{"level":3,"title":"2.1. 链表简介","slug":"_2-1-链表简介","link":"#_2-1-链表简介","children":[]},{"level":3,"title":"2.2. 链表分类","slug":"_2-2-链表分类","link":"#_2-2-链表分类","children":[]},{"level":3,"title":"2.3. 应用场景","slug":"_2-3-应用场景","link":"#_2-3-应用场景","children":[]},{"level":3,"title":"2.4. 数组 vs 链表","slug":"_2-4-数组-vs-链表","link":"#_2-4-数组-vs-链表","children":[]}]},{"level":2,"title":"3. 栈","slug":"_3-栈","link":"#_3-栈","children":[{"level":3,"title":"3.1. 栈简介","slug":"_3-1-栈简介","link":"#_3-1-栈简介","children":[]},{"level":3,"title":"3.2. 栈的常见应用常见应用场景","slug":"_3-2-栈的常见应用常见应用场景","link":"#_3-2-栈的常见应用常见应用场景","children":[]},{"level":3,"title":"3.3. 栈的实现","slug":"_3-3-栈的实现","link":"#_3-3-栈的实现","children":[]}]},{"level":2,"title":"4. 队列","slug":"_4-队列","link":"#_4-队列","children":[{"level":3,"title":"4.1. 队列简介","slug":"_4-1-队列简介","link":"#_4-1-队列简介","children":[]},{"level":3,"title":"4.2. 队列分类","slug":"_4-2-队列分类","link":"#_4-2-队列分类","children":[]},{"level":3,"title":"4.3. 常见应用场景","slug":"_4-3-常见应用场景","link":"#_4-3-常见应用场景","children":[]}]}],"git":{"createdTime":1646270096000,"updatedTime":1693208958000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2},{"name":"Smile slime 47","email":"Smile_slime_47@outlook.com","commits":1},{"name":"guide","email":"koushuangbwcx@163.com","commits":1},{"name":"paigeman","email":"53284808+paigeman@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":12.25,"words":3674},"filePathRelative":"cs-basics/data-structure/linear-data-structure.md","localizedDate":"2022年3月3日","excerpt":"<h2> 1. 数组</h2>\\n<p><strong>数组（Array）</strong> 是一种很常见的数据结构。它由相同类型的元素（element）组成，并且是使用一块连续的内存来存储。</p>\\n<p>我们直接可以利用元素的索引（index）可以计算出该元素对应的存储地址。</p>\\n<p>数组的特点是：<strong>提供随机访问</strong> 并且容量有限。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code>假如数组的长度为 n。\\n访问：<span class=\\"token class-name\\">O</span>（<span class=\\"token number\\">1</span>）<span class=\\"token comment\\">//访问特定位置的元素</span>\\n插入：<span class=\\"token class-name\\">O</span>（n ）<span class=\\"token comment\\">//最坏的情况发生在插入发生在数组的首部并需要移动所有元素时</span>\\n删除：<span class=\\"token class-name\\">O</span>（n）<span class=\\"token comment\\">//最坏的情况发生在删除数组的开头发生并需要移动第一元素后面所有的元素时</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};
