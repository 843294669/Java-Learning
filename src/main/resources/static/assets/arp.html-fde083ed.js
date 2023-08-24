const t=JSON.parse('{"key":"v-2b9f527e","path":"/cs-basics/network/arp.html","title":"ARP 协议详解(网络层)","lang":"zh-CN","frontmatter":{"title":"ARP 协议详解(网络层)","category":"计算机基础","tag":["计算机网络"],"description":"每当我们学习一个新的网络协议的时候，都要把他结合到 OSI 七层模型中，或者是 TCP/IP 协议栈中来学习，一是要学习该协议在整个网络协议栈中的位置，二是要学习该协议解决了什么问题，地位如何？三是要学习该协议的工作原理，以及一些更深入的细节。 ARP 协议，可以说是在协议栈中属于一个偏底层的、非常重要的、又非常简单的通信协议。 开始阅读这篇文章之前，你可以先看看下面几个问题： ARP 协议在协议栈中的位置？ ARP 协议在协议栈中的位置非常重要，在理解了它的工作原理之后，也很难说它到底是网络层协议，还是链路层协议，因为它恰恰串联起了网络层和链路层。国外的大部分教程通常将 ARP 协议放在网络层。 ARP 协议解决了什么问题，地位如何？ ARP 协议，全称 地址解析协议（Address Resolution Protocol），它解决的是网络层地址和链路层地址之间的转换问题。因为一个 IP 数据报在物理上传输的过程中，总是需要知道下一跳（物理上的下一个目的地）该去往何处，但 IP 地址属于逻辑地址，而 MAC 地址才是物理地址，ARP 协议解决了 IP 地址转 MAC 地址的一些问题。 ARP 工作原理？ 只希望大家记住几个关键词：ARP 表、广播问询、单播响应。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/cs-basics/network/arp.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"ARP 协议详解(网络层)"}],["meta",{"property":"og:description","content":"每当我们学习一个新的网络协议的时候，都要把他结合到 OSI 七层模型中，或者是 TCP/IP 协议栈中来学习，一是要学习该协议在整个网络协议栈中的位置，二是要学习该协议解决了什么问题，地位如何？三是要学习该协议的工作原理，以及一些更深入的细节。 ARP 协议，可以说是在协议栈中属于一个偏底层的、非常重要的、又非常简单的通信协议。 开始阅读这篇文章之前，你可以先看看下面几个问题： ARP 协议在协议栈中的位置？ ARP 协议在协议栈中的位置非常重要，在理解了它的工作原理之后，也很难说它到底是网络层协议，还是链路层协议，因为它恰恰串联起了网络层和链路层。国外的大部分教程通常将 ARP 协议放在网络层。 ARP 协议解决了什么问题，地位如何？ ARP 协议，全称 地址解析协议（Address Resolution Protocol），它解决的是网络层地址和链路层地址之间的转换问题。因为一个 IP 数据报在物理上传输的过程中，总是需要知道下一跳（物理上的下一个目的地）该去往何处，但 IP 地址属于逻辑地址，而 MAC 地址才是物理地址，ARP 协议解决了 IP 地址转 MAC 地址的一些问题。 ARP 工作原理？ 只希望大家记住几个关键词：ARP 表、广播问询、单播响应。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://javaguide.cn/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-07T10:56:33.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"ARP 协议详解(网络层)"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"计算机网络"}],["meta",{"property":"article:modified_time","content":"2023-08-07T10:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ARP 协议详解(网络层)\\",\\"image\\":[\\"https://javaguide.cn/\\"],\\"dateModified\\":\\"2023-08-07T10:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"MAC 地址","slug":"mac-地址","link":"#mac-地址","children":[]},{"level":2,"title":"ARP 协议工作原理","slug":"arp-协议工作原理","link":"#arp-协议工作原理","children":[{"level":3,"title":"同一局域网内的 MAC 寻址","slug":"同一局域网内的-mac-寻址","link":"#同一局域网内的-mac-寻址","children":[]},{"level":3,"title":"不同局域网内的 MAC 寻址","slug":"不同局域网内的-mac-寻址","link":"#不同局域网内的-mac-寻址","children":[]}]}],"git":{"createdTime":1661671129000,"updatedTime":1691405793000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":1},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"chanper","email":"qianchaosolo@gmail.com","commits":1},{"name":"guide","email":"koushuangbwcx@163.com","commits":1},{"name":"snowball","email":"50959795+MeLikeJava@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":9.76,"words":2928},"filePathRelative":"cs-basics/network/arp.md","localizedDate":"2022年8月28日","excerpt":"<p>每当我们学习一个新的网络协议的时候，都要把他结合到 OSI 七层模型中，或者是 TCP/IP 协议栈中来学习，一是要学习该协议在整个网络协议栈中的位置，二是要学习该协议解决了什么问题，地位如何？三是要学习该协议的工作原理，以及一些更深入的细节。</p>\\n<p><strong>ARP 协议</strong>，可以说是在协议栈中属于一个<strong>偏底层的、非常重要的、又非常简单的</strong>通信协议。</p>\\n<p>开始阅读这篇文章之前，你可以先看看下面几个问题：</p>\\n<ol>\\n<li><strong>ARP 协议在协议栈中的位置？</strong> ARP 协议在协议栈中的位置非常重要，在理解了它的工作原理之后，也很难说它到底是网络层协议，还是链路层协议，因为它恰恰串联起了网络层和链路层。国外的大部分教程通常将 ARP 协议放在网络层。</li>\\n<li><strong>ARP 协议解决了什么问题，地位如何？</strong> ARP 协议，全称 <strong>地址解析协议（Address Resolution Protocol）</strong>，它解决的是网络层地址和链路层地址之间的转换问题。因为一个 IP 数据报在物理上传输的过程中，总是需要知道下一跳（物理上的下一个目的地）该去往何处，但 IP 地址属于逻辑地址，而 MAC 地址才是物理地址，ARP 协议解决了 IP 地址转 MAC 地址的一些问题。</li>\\n<li><strong>ARP 工作原理？</strong> 只希望大家记住几个关键词：<strong>ARP 表、广播问询、单播响应</strong>。</li>\\n</ol>","copyright":{"author":"Guide"},"autoDesc":true}');export{t as data};
