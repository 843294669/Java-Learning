const e=JSON.parse('{"key":"v-4f32be1c","path":"/distributed-system/rpc/rpc-intro.html","title":"RPC基础知识总结","lang":"zh-CN","frontmatter":{"title":"RPC基础知识总结","category":"分布式","tag":["rpc"],"description":"这篇文章会简单介绍一下 RPC 相关的基础概念。 RPC 是什么? RPC（Remote Procedure Call） 即远程过程调用，通过名字我们就能看出 RPC 关注的是远程调用而非本地调用。 为什么要 RPC ？ 因为，两个不同的服务器上的服务提供的方法不在一个内存空间，所以，需要通过网络编程才能传递方法调用所需要的参数。并且，方法调用的结果也需要通过网络编程来接收。但是，如果我们自己手动网络编程来实现这个调用过程的话工作量是非常大的，因为，我们需要考虑底层传输方式（TCP 还是 UDP）、序列化方式等等方面。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/distributed-system/rpc/rpc-intro.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"RPC基础知识总结"}],["meta",{"property":"og:description","content":"这篇文章会简单介绍一下 RPC 相关的基础概念。 RPC 是什么? RPC（Remote Procedure Call） 即远程过程调用，通过名字我们就能看出 RPC 关注的是远程调用而非本地调用。 为什么要 RPC ？ 因为，两个不同的服务器上的服务提供的方法不在一个内存空间，所以，需要通过网络编程才能传递方法调用所需要的参数。并且，方法调用的结果也需要通过网络编程来接收。但是，如果我们自己手动网络编程来实现这个调用过程的话工作量是非常大的，因为，我们需要考虑底层传输方式（TCP 还是 UDP）、序列化方式等等方面。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-07T10:56:33.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"rpc"}],["meta",{"property":"article:modified_time","content":"2023-08-07T10:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RPC基础知识总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-07T10:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"RPC 是什么?","slug":"rpc-是什么","link":"#rpc-是什么","children":[]},{"level":2,"title":"RPC 的原理是什么?","slug":"rpc-的原理是什么","link":"#rpc-的原理是什么","children":[]},{"level":2,"title":"有哪些常见的 RPC 框架？","slug":"有哪些常见的-rpc-框架","link":"#有哪些常见的-rpc-框架","children":[{"level":3,"title":"Dubbo","slug":"dubbo","link":"#dubbo","children":[]},{"level":3,"title":"Motan","slug":"motan","link":"#motan","children":[]},{"level":3,"title":"gRPC","slug":"grpc","link":"#grpc","children":[]},{"level":3,"title":"Thrift","slug":"thrift","link":"#thrift","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]},{"level":2,"title":"如何设计并实现一个 RPC 框架？","slug":"如何设计并实现一个-rpc-框架","link":"#如何设计并实现一个-rpc-框架","children":[]},{"level":2,"title":"既然有了 HTTP 协议，为什么还要有 RPC ？","slug":"既然有了-http-协议-为什么还要有-rpc","link":"#既然有了-http-协议-为什么还要有-rpc","children":[]}],"git":{"createdTime":1657942989000,"updatedTime":1691405793000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":6},{"name":"Guide","email":"koushuangbwcx@163.com","commits":5},{"name":"guide","email":"koushuangbwcx@163.com","commits":4},{"name":"15168387900","email":"65106285+15168387900@users.noreply.github.com","commits":1},{"name":"callmePicacho","email":"38685653+callmePicacho@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":8.39,"words":2518},"filePathRelative":"distributed-system/rpc/rpc-intro.md","localizedDate":"2022年7月16日","excerpt":"<p>这篇文章会简单介绍一下 RPC 相关的基础概念。</p>\\n<h2> RPC 是什么?</h2>\\n<p><strong>RPC（Remote Procedure Call）</strong> 即远程过程调用，通过名字我们就能看出 RPC 关注的是远程调用而非本地调用。</p>\\n<p><strong>为什么要 RPC ？</strong> 因为，两个不同的服务器上的服务提供的方法不在一个内存空间，所以，需要通过网络编程才能传递方法调用所需要的参数。并且，方法调用的结果也需要通过网络编程来接收。但是，如果我们自己手动网络编程来实现这个调用过程的话工作量是非常大的，因为，我们需要考虑底层传输方式（TCP 还是 UDP）、序列化方式等等方面。</p>","copyright":{"author":"Guide"},"autoDesc":true}');export{e as data};
