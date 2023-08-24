const t=JSON.parse('{"key":"v-38434128","path":"/distributed-system/protocol/gossip-protocl.html","title":"Gossip 协议详解","lang":"zh-CN","frontmatter":{"title":"Gossip 协议详解","category":"分布式","tag":["分布式协议&算法","共识算法"],"description":"背景 在分布式系统中，不同的节点进行数据/信息共享是一个基本的需求。 一种比较简单粗暴的方法就是 集中式发散消息，简单来说就是一个主节点同时共享最新信息给其他所有节点，比较适合中心化系统。这种方法的缺陷也很明显，节点多的时候不光同步消息的效率低，还太依赖与中心节点，存在单点风险问题。 于是，分散式发散消息 的 Gossip 协议 就诞生了。 Gossip 协议介绍 Gossip 直译过来就是闲话、流言蜚语的意思。流言蜚语有什么特点呢？容易被传播且传播速度还快，你传我我传他，然后大家都知道了。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/distributed-system/protocol/gossip-protocl.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"Gossip 协议详解"}],["meta",{"property":"og:description","content":"背景 在分布式系统中，不同的节点进行数据/信息共享是一个基本的需求。 一种比较简单粗暴的方法就是 集中式发散消息，简单来说就是一个主节点同时共享最新信息给其他所有节点，比较适合中心化系统。这种方法的缺陷也很明显，节点多的时候不光同步消息的效率低，还太依赖与中心节点，存在单点风险问题。 于是，分散式发散消息 的 Gossip 协议 就诞生了。 Gossip 协议介绍 Gossip 直译过来就是闲话、流言蜚语的意思。流言蜚语有什么特点呢？容易被传播且传播速度还快，你传我我传他，然后大家都知道了。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://javaguide.cn/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-07T10:56:33.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Gossip 协议详解"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"分布式协议&算法"}],["meta",{"property":"article:tag","content":"共识算法"}],["meta",{"property":"article:modified_time","content":"2023-08-07T10:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Gossip 协议详解\\",\\"image\\":[\\"https://javaguide.cn/\\"],\\"dateModified\\":\\"2023-08-07T10:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"Gossip 协议介绍","slug":"gossip-协议介绍","link":"#gossip-协议介绍","children":[]},{"level":2,"title":"Gossip 协议应用","slug":"gossip-协议应用","link":"#gossip-协议应用","children":[]},{"level":2,"title":"Gossip 协议消息传播模式","slug":"gossip-协议消息传播模式","link":"#gossip-协议消息传播模式","children":[{"level":3,"title":"反熵(Anti-entropy)","slug":"反熵-anti-entropy","link":"#反熵-anti-entropy","children":[]},{"level":3,"title":"谣言传播(Rumor mongering)","slug":"谣言传播-rumor-mongering","link":"#谣言传播-rumor-mongering","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]},{"level":2,"title":"Gossip 协议优势和缺陷","slug":"gossip-协议优势和缺陷","link":"#gossip-协议优势和缺陷","children":[]},{"level":2,"title":"总结","slug":"总结-1","link":"#总结-1","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1682673347000,"updatedTime":1691405793000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":3},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3}]},"readingTime":{"minutes":8.12,"words":2435},"filePathRelative":"distributed-system/protocol/gossip-protocl.md","localizedDate":"2023年4月28日","excerpt":"<h2> 背景</h2>\\n<p>在分布式系统中，不同的节点进行数据/信息共享是一个基本的需求。</p>\\n<p>一种比较简单粗暴的方法就是 <strong>集中式发散消息</strong>，简单来说就是一个主节点同时共享最新信息给其他所有节点，比较适合中心化系统。这种方法的缺陷也很明显，节点多的时候不光同步消息的效率低，还太依赖与中心节点，存在单点风险问题。</p>\\n<p>于是，<strong>分散式发散消息</strong> 的 <strong>Gossip 协议</strong> 就诞生了。</p>\\n<h2> Gossip 协议介绍</h2>\\n<p>Gossip 直译过来就是闲话、流言蜚语的意思。流言蜚语有什么特点呢？容易被传播且传播速度还快，你传我我传他，然后大家都知道了。</p>","copyright":{"author":"Guide"},"autoDesc":true}');export{t as data};
