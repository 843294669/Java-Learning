const e=JSON.parse('{"key":"v-f1592240","path":"/distributed-system/distributed-process-coordination/zookeeper/zookeeper-intro.html","title":"ZooKeeper相关概念总结(入门)","lang":"zh-CN","frontmatter":{"title":"ZooKeeper相关概念总结(入门)","category":"分布式","tag":["ZooKeeper"],"description":"相信大家对 ZooKeeper 应该不算陌生。但是你真的了解 ZooKeeper 到底有啥用不？如果别人/面试官让你给他讲讲对于 ZooKeeper 的认识，你能回答到什么地步呢？ 拿我自己来说吧！我本人在大学曾经使用 Dubbo 来做分布式项目的时候，使用了 ZooKeeper 作为注册中心。为了保证分布式系统能够同步访问某个资源，我还使用 ZooKeeper 做过分布式锁。另外，我在学习 Kafka 的时候，知道 Kafka 很多功能的实现依赖了 ZooKeeper。 前几天，总结项目经验的时候，我突然问自己 ZooKeeper 到底是个什么东西？想了半天，脑海中只是简单的能浮现出几句话：","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/distributed-system/distributed-process-coordination/zookeeper/zookeeper-intro.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"ZooKeeper相关概念总结(入门)"}],["meta",{"property":"og:description","content":"相信大家对 ZooKeeper 应该不算陌生。但是你真的了解 ZooKeeper 到底有啥用不？如果别人/面试官让你给他讲讲对于 ZooKeeper 的认识，你能回答到什么地步呢？ 拿我自己来说吧！我本人在大学曾经使用 Dubbo 来做分布式项目的时候，使用了 ZooKeeper 作为注册中心。为了保证分布式系统能够同步访问某个资源，我还使用 ZooKeeper 做过分布式锁。另外，我在学习 Kafka 的时候，知道 Kafka 很多功能的实现依赖了 ZooKeeper。 前几天，总结项目经验的时候，我突然问自己 ZooKeeper 到底是个什么东西？想了半天，脑海中只是简单的能浮现出几句话："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-07T10:56:33.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"ZooKeeper"}],["meta",{"property":"article:modified_time","content":"2023-08-07T10:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ZooKeeper相关概念总结(入门)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-07T10:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"ZooKeeper 介绍","slug":"zookeeper-介绍","link":"#zookeeper-介绍","children":[{"level":3,"title":"ZooKeeper 由来","slug":"zookeeper-由来","link":"#zookeeper-由来","children":[]},{"level":3,"title":"ZooKeeper 概览","slug":"zookeeper-概览","link":"#zookeeper-概览","children":[]},{"level":3,"title":"ZooKeeper 特点","slug":"zookeeper-特点","link":"#zookeeper-特点","children":[]},{"level":3,"title":"ZooKeeper 应用场景","slug":"zookeeper-应用场景","link":"#zookeeper-应用场景","children":[]}]},{"level":2,"title":"ZooKeeper 重要概念","slug":"zookeeper-重要概念","link":"#zookeeper-重要概念","children":[{"level":3,"title":"Data model（数据模型）","slug":"data-model-数据模型","link":"#data-model-数据模型","children":[]},{"level":3,"title":"znode（数据节点）","slug":"znode-数据节点","link":"#znode-数据节点","children":[]},{"level":3,"title":"版本（version）","slug":"版本-version","link":"#版本-version","children":[]},{"level":3,"title":"ACL（权限控制）","slug":"acl-权限控制","link":"#acl-权限控制","children":[]},{"level":3,"title":"Watcher（事件监听器）","slug":"watcher-事件监听器","link":"#watcher-事件监听器","children":[]},{"level":3,"title":"会话（Session）","slug":"会话-session","link":"#会话-session","children":[]}]},{"level":2,"title":"ZooKeeper 集群","slug":"zookeeper-集群","link":"#zookeeper-集群","children":[{"level":3,"title":"ZooKeeper 集群角色","slug":"zookeeper-集群角色","link":"#zookeeper-集群角色","children":[]},{"level":3,"title":"ZooKeeper 集群 Leader 选举过程","slug":"zookeeper-集群-leader-选举过程","link":"#zookeeper-集群-leader-选举过程","children":[]},{"level":3,"title":"ZooKeeper 集群为啥最好奇数台？","slug":"zookeeper-集群为啥最好奇数台","link":"#zookeeper-集群为啥最好奇数台","children":[]},{"level":3,"title":"ZooKeeper 选举的过半机制防止脑裂","slug":"zookeeper-选举的过半机制防止脑裂","link":"#zookeeper-选举的过半机制防止脑裂","children":[]}]},{"level":2,"title":"ZAB 协议和 Paxos 算法","slug":"zab-协议和-paxos-算法","link":"#zab-协议和-paxos-算法","children":[{"level":3,"title":"ZAB 协议介绍","slug":"zab-协议介绍","link":"#zab-协议介绍","children":[]},{"level":3,"title":"ZAB 协议两种基本的模式：崩溃恢复和消息广播","slug":"zab-协议两种基本的模式-崩溃恢复和消息广播","link":"#zab-协议两种基本的模式-崩溃恢复和消息广播","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1639833811000,"updatedTime":1691405793000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":6},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":4},{"name":"guide","email":"koushuangbwcx@163.com","commits":2},{"name":"yueyang","email":"yy1023178796@gmail.com","commits":1}]},"readingTime":{"minutes":20.08,"words":6023},"filePathRelative":"distributed-system/distributed-process-coordination/zookeeper/zookeeper-intro.md","localizedDate":"2021年12月18日","excerpt":"<p>相信大家对 ZooKeeper 应该不算陌生。但是你真的了解 ZooKeeper 到底有啥用不？如果别人/面试官让你给他讲讲对于 ZooKeeper 的认识，你能回答到什么地步呢？</p>\\n<p>拿我自己来说吧！我本人在大学曾经使用 Dubbo 来做分布式项目的时候，使用了 ZooKeeper 作为注册中心。为了保证分布式系统能够同步访问某个资源，我还使用 ZooKeeper 做过分布式锁。另外，我在学习 Kafka 的时候，知道 Kafka 很多功能的实现依赖了 ZooKeeper。</p>\\n<p>前几天，总结项目经验的时候，我突然问自己 ZooKeeper 到底是个什么东西？想了半天，脑海中只是简单的能浮现出几句话：</p>","copyright":{"author":"JavaGuide(javaguide.cn)","license":"MIT"},"autoDesc":true}');export{e as data};