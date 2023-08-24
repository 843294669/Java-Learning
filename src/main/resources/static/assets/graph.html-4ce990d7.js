const e=JSON.parse('{"key":"v-75692d44","path":"/cs-basics/data-structure/graph.html","title":"图","lang":"zh-CN","frontmatter":{"title":"图","category":"计算机基础","tag":["数据结构"],"description":"图是一种较为复杂的非线性结构。 为啥说其较为复杂呢？ 根据前面的内容，我们知道： 线性数据结构的元素满足唯一的线性关系，每个元素(除第一个和最后一个外)只有一个直接前趋和一个直接后继。 树形数据结构的元素之间有着明显的层次关系。 但是，图形结构的元素之间的关系是任意的。 何为图呢？ 简单来说，图就是由顶点的有穷非空集合和顶点之间的边组成的集合。通常表示为：G(V,E)，其中，G 表示一个图，V 表示顶点的集合，E 表示边的集合。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/cs-basics/data-structure/graph.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"图"}],["meta",{"property":"og:description","content":"图是一种较为复杂的非线性结构。 为啥说其较为复杂呢？ 根据前面的内容，我们知道： 线性数据结构的元素满足唯一的线性关系，每个元素(除第一个和最后一个外)只有一个直接前趋和一个直接后继。 树形数据结构的元素之间有着明显的层次关系。 但是，图形结构的元素之间的关系是任意的。 何为图呢？ 简单来说，图就是由顶点的有穷非空集合和顶点之间的边组成的集合。通常表示为：G(V,E)，其中，G 表示一个图，V 表示顶点的集合，E 表示边的集合。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-07T10:56:33.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"数据结构"}],["meta",{"property":"article:modified_time","content":"2023-08-07T10:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"图\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-07T10:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"图的基本概念","slug":"图的基本概念","link":"#图的基本概念","children":[{"level":3,"title":"顶点","slug":"顶点","link":"#顶点","children":[]},{"level":3,"title":"边","slug":"边","link":"#边","children":[]},{"level":3,"title":"度","slug":"度","link":"#度","children":[]},{"level":3,"title":"无向图和有向图","slug":"无向图和有向图","link":"#无向图和有向图","children":[]},{"level":3,"title":"无权图和带权图","slug":"无权图和带权图","link":"#无权图和带权图","children":[]}]},{"level":2,"title":"图的存储","slug":"图的存储","link":"#图的存储","children":[{"level":3,"title":"邻接矩阵存储","slug":"邻接矩阵存储","link":"#邻接矩阵存储","children":[]},{"level":3,"title":"邻接表存储","slug":"邻接表存储","link":"#邻接表存储","children":[]}]},{"level":2,"title":"图的搜索","slug":"图的搜索","link":"#图的搜索","children":[{"level":3,"title":"广度优先搜索","slug":"广度优先搜索","link":"#广度优先搜索","children":[]},{"level":3,"title":"深度优先搜索","slug":"深度优先搜索","link":"#深度优先搜索","children":[]}]}],"git":{"createdTime":1646270096000,"updatedTime":1691405793000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"guide","email":"koushuangbwcx@163.com","commits":1}]},"readingTime":{"minutes":5.79,"words":1737},"filePathRelative":"cs-basics/data-structure/graph.md","localizedDate":"2022年3月3日","excerpt":"<p>图是一种较为复杂的非线性结构。 <strong>为啥说其较为复杂呢？</strong></p>\\n<p>根据前面的内容，我们知道：</p>\\n<ul>\\n<li>线性数据结构的元素满足唯一的线性关系，每个元素(除第一个和最后一个外)只有一个直接前趋和一个直接后继。</li>\\n<li>树形数据结构的元素之间有着明显的层次关系。</li>\\n</ul>\\n<p>但是，图形结构的元素之间的关系是任意的。</p>\\n<p><strong>何为图呢？</strong> 简单来说，图就是由顶点的有穷非空集合和顶点之间的边组成的集合。通常表示为：<strong>G(V,E)</strong>，其中，G 表示一个图，V 表示顶点的集合，E 表示边的集合。</p>","copyright":{"author":"Guide"},"autoDesc":true}');export{e as data};
