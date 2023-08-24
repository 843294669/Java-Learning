import{_ as r}from"./nerwork-layer-protocol-90c6018d.js";import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as p,a as t,b as e,d as n,w as a,e as i}from"./app-7f13a6e3.js";const g={},h={class:"hint-container tip"},u=t("p",{class:"hint-container-title"},"这是一则或许对你有用的小广告",-1),T=t("strong",null,"面试专版",-1),f=t("strong",null,"知识星球",-1),P=i('<p>上篇主要是计算机网络基础和应用层相关的内容。</p><h2 id="计算机网络基础" tabindex="-1"><a class="header-anchor" href="#计算机网络基础" aria-hidden="true">#</a> 计算机网络基础</h2><h3 id="网络分层模型" tabindex="-1"><a class="header-anchor" href="#网络分层模型" aria-hidden="true">#</a> 网络分层模型</h3><h4 id="osi-七层模型是什么-每一层的作用是什么" tabindex="-1"><a class="header-anchor" href="#osi-七层模型是什么-每一层的作用是什么" aria-hidden="true">#</a> OSI 七层模型是什么？每一层的作用是什么？</h4><p><strong>OSI 七层模型</strong> 是国际标准化组织提出一个网络分层模型，其大体结构以及每一层提供的功能如下图所示：</p><figure><img src="/github/javaguide/cs-basics/network/osi-7-model.png" alt="OSI 七层模型" tabindex="0"><figcaption>OSI 七层模型</figcaption></figure><p>每一层都专注做一件事情，并且每一层都需要使用下一层提供的功能比如传输层需要使用网络层提供的路由和寻址功能，这样传输层才知道把数据传输到哪里去。</p><p><strong>OSI 的七层体系结构概念清楚，理论也很完整，但是它比较复杂而且不实用，而且有些功能在多个层中重复出现。</strong></p><p>上面这种图可能比较抽象，再来一个比较生动的图片。下面这个图片是我在国外的一个网站上看到的，非常赞！</p><figure><img src="/github/javaguide/osi七层模型2.png" alt="osi七层模型2" tabindex="0"><figcaption>osi七层模型2</figcaption></figure><h4 id="tcp-ip-四层模型是什么-每一层的作用是什么" tabindex="-1"><a class="header-anchor" href="#tcp-ip-四层模型是什么-每一层的作用是什么" aria-hidden="true">#</a> TCP/IP 四层模型是什么？每一层的作用是什么？</h4><p><strong>TCP/IP 四层模型</strong> 是目前被广泛采用的一种模型,我们可以将 TCP / IP 模型看作是 OSI 七层模型的精简版本，由以下 4 层组成：</p><ol><li>应用层</li><li>传输层</li><li>网络层</li><li>网络接口层</li></ol><p>需要注意的是，我们并不能将 TCP/IP 四层模型 和 OSI 七层模型完全精确地匹配起来，不过可以简单将两者对应起来，如下图所示：</p><figure><img src="/github/javaguide/cs-basics/network/tcp-ip-4-model.png" alt="TCP/IP 四层模型" tabindex="0"><figcaption>TCP/IP 四层模型</figcaption></figure>',15),x=i('<h4 id="为什么网络要分层" tabindex="-1"><a class="header-anchor" href="#为什么网络要分层" aria-hidden="true">#</a> 为什么网络要分层？</h4><p>说到分层，我们先从我们平时使用框架开发一个后台程序来说，我们往往会按照每一层做不同的事情的原则将系统分为三层（复杂的系统分层会更多）:</p><ol><li>Repository（数据库操作）</li><li>Service（业务操作）</li><li>Controller（前后端数据交互）</li></ol><p><strong>复杂的系统需要分层，因为每一层都需要专注于一类事情。网络分层的原因也是一样，每一层只专注于做一类事情。</strong></p><p>好了，再来说回：“为什么网络要分层？”。我觉得主要有 3 方面的原因：</p><ol><li><strong>各层之间相互独立</strong>：各层之间相互独立，各层之间不需要关心其他层是如何实现的，只需要知道自己如何调用下层提供好的功能就可以了（可以简单理解为接口调用）<strong>。这个和我们对开发时系统进行分层是一个道理。</strong></li><li><strong>提高了灵活性和可替换性</strong>：每一层都可以使用最适合的技术来实现，你只需要保证你提供的功能以及暴露的接口的规则没有改变就行了。并且，每一层都可以根据需要进行修改或替换，而不会影响到整个网络的结构。<strong>这个和我们平时开发系统的时候要求的高内聚、低耦合的原则也是可以对应上的。</strong></li><li><strong>大问题化小</strong>：分层可以将复杂的网络问题分解为许多比较小的、界线比较清晰简单的小问题来处理和解决。这样使得复杂的计算机网络系统变得易于设计，实现和标准化。 <strong>这个和我们平时开发的时候，一般会将系统功能分解，然后将复杂的问题分解为容易理解的更小的问题是相对应的，这些较小的问题具有更好的边界（目标和接口）定义。</strong></li></ol><p>我想到了计算机世界非常非常有名的一句话，这里分享一下：</p><blockquote><p>计算机科学领域的任何问题都可以通过增加一个间接的中间层来解决，计算机整个体系从上到下都是按照严格的层次结构设计的。</p></blockquote><h3 id="常见网络协议" tabindex="-1"><a class="header-anchor" href="#常见网络协议" aria-hidden="true">#</a> 常见网络协议</h3><h4 id="应用层有哪些常见的协议" tabindex="-1"><a class="header-anchor" href="#应用层有哪些常见的协议" aria-hidden="true">#</a> 应用层有哪些常见的协议？</h4><figure><img src="/github/javaguide/cs-basics/network/application-layer-protocol.png" alt="应用层常见协议" tabindex="0"><figcaption>应用层常见协议</figcaption></figure><ul><li><strong>HTTP（Hypertext Transfer Protocol，超文本传输协议）</strong>：基于 TCP 协议，是一种用于传输超文本和多媒体内容的协议，主要是为 Web 浏览器与 Web 服务器之间的通信而设计的。当我们使用浏览器浏览网页的时候，我们网页就是通过 HTTP 请求进行加载的。</li><li><strong>SMTP（Simple Mail Transfer Protocol，简单邮件发送协议）</strong>：基于 TCP 协议，是一种用于发送电子邮件的协议。注意 ⚠️：SMTP 协议只负责邮件的发送，而不是接收。要从邮件服务器接收邮件，需要使用 POP3 或 IMAP 协议。</li><li><strong>POP3/IMAP（邮件接收协议）</strong>：基于 TCP 协议，两者都是负责邮件接收的协议。IMAP 协议是比 POP3 更新的协议，它在功能和性能上都更加强大。IMAP 支持邮件搜索、标记、分类、归档等高级功能，而且可以在多个设备之间同步邮件状态。几乎所有现代电子邮件客户端和服务器都支持 IMAP。</li><li><strong>FTP（File Transfer Protocol，文件传输协议）</strong> : 基于 TCP 协议，是一种用于在计算机之间传输文件的协议，可以屏蔽操作系统和文件存储方式。注意 ⚠️：FTP 是一种不安全的协议，因为它在传输过程中不会对数据进行加密。建议在传输敏感数据时使用更安全的协议，如 SFTP。</li><li><strong>Telnet（远程登陆协议）</strong>：基于 TCP 协议，用于通过一个终端登陆到其他服务器。Telnet 协议的最大缺点之一是所有数据（包括用户名和密码）均以明文形式发送，这有潜在的安全风险。这就是为什么如今很少使用 Telnet，而是使用一种称为 SSH 的非常安全的网络传输协议的主要原因。</li><li><strong>SSH（Secure Shell Protocol，安全的网络传输协议）</strong>：基于 TCP 协议，通过加密和认证机制实现安全的访问和文件传输等业务</li><li><strong>RTP（Real-time Transport Protocol，实时传输协议）</strong>：通常基于 UDP 协议，但也支持 TCP 协议。它提供了端到端的实时传输数据的功能，但不包含资源预留存、不保证实时传输质量，这些功能由 WebRTC 实现。</li><li><strong>DNS（Domain Name System，域名管理系统）</strong>: 基于 UDP 协议，用于解决域名和 IP 地址的映射问题。</li></ul>',12),_=i('<h4 id="传输层有哪些常见的协议" tabindex="-1"><a class="header-anchor" href="#传输层有哪些常见的协议" aria-hidden="true">#</a> 传输层有哪些常见的协议？</h4><figure><img src="/github/javaguide/cs-basics/network/transport-layer-protocol.png" alt="传输层常见协议" tabindex="0"><figcaption>传输层常见协议</figcaption></figure><ul><li><strong>TCP（Transmission Control Protocol，传输控制协议 ）</strong>：提供 <strong>面向连接</strong> 的，<strong>可靠</strong> 的数据传输服务。</li><li><strong>UDP（User Datagram Protocol，用户数据协议）</strong>：提供 <strong>无连接</strong> 的，<strong>尽最大努力</strong> 的数据传输服务（不保证数据传输的可靠性），简单高效。</li></ul><h4 id="网络层有哪些常见的协议" tabindex="-1"><a class="header-anchor" href="#网络层有哪些常见的协议" aria-hidden="true">#</a> 网络层有哪些常见的协议？</h4><figure><img src="'+r+'" alt="网络层常见协议" tabindex="0"><figcaption>网络层常见协议</figcaption></figure><ul><li><strong>IP（Internet Protocol，网际协议）</strong>：TCP/IP 协议中最重要的协议之一，属于网络层的协议，主要作用是定义数据包的格式、对数据包进行路由和寻址，以便它们可以跨网络传播并到达正确的目的地。目前 IP 协议主要分为两种，一种是过去的 IPv4，另一种是较新的 IPv6，目前这两种协议都在使用，但后者已经被提议来取代前者。</li><li><strong>ARP（Address Resolution Protocol，地址解析协议）</strong>：ARP 协议解决的是网络层地址和链路层地址之间的转换问题。因为一个 IP 数据报在物理上传输的过程中，总是需要知道下一跳（物理上的下一个目的地）该去往何处，但 IP 地址属于逻辑地址，而 MAC 地址才是物理地址，ARP 协议解决了 IP 地址转 MAC 地址的一些问题。</li><li><strong>ICMP（Internet Control Message Protocol，互联网控制报文协议）</strong>：一种用于传输网络状态和错误消息的协议，常用于网络诊断和故障排除。例如，Ping 工具就使用了 ICMP 协议来测试网络连通性。</li><li><strong>NAT（Network Address Translation，网络地址转换协议）</strong>：NAT 协议的应用场景如同它的名称——网络地址转换，应用于内部网到外部网的地址转换过程中。具体地说，在一个小的子网（局域网，LAN）内，各主机使用的是同一个 LAN 下的 IP 地址，但在该 LAN 以外，在广域网（WAN）中，需要一个统一的 IP 地址来标识该 LAN 在整个 Internet 上的位置。</li><li><strong>OSPF（Open Shortest Path First，开放式最短路径优先）</strong> ）：一种内部网关协议（Interior Gateway Protocol，IGP），也是广泛使用的一种动态路由协议，基于链路状态算法，考虑了链路的带宽、延迟等因素来选择最佳路径。</li><li><strong>RIP(Routing Information Protocol，路由信息协议）</strong>：一种内部网关协议（Interior Gateway Protocol，IGP），也是一种动态路由协议，基于距离向量算法，使用固定的跳数作为度量标准，选择跳数最少的路径作为最佳路径。</li><li><strong>BGP（Border Gateway Protocol，边界网关协议）</strong>：一种用来在路由选择域之间交换网络层可达性信息（Network Layer Reachability Information，NLRI）的路由选择协议，具有高度的灵活性和可扩展性。</li></ul><h2 id="http" tabindex="-1"><a class="header-anchor" href="#http" aria-hidden="true">#</a> HTTP</h2><h3 id="从输入-url-到页面展示到底发生了什么-非常重要" tabindex="-1"><a class="header-anchor" href="#从输入-url-到页面展示到底发生了什么-非常重要" aria-hidden="true">#</a> 从输入 URL 到页面展示到底发生了什么？（非常重要）</h3><blockquote><p>类似的问题：打开一个网页，整个过程会使用哪些协议？</p></blockquote><p>图解（图片来源：《图解 HTTP》）：</p><img src="/github/javaguide/url输入到展示出来的过程.jpg" style="zoom:50%;"><blockquote><p>上图有一个错误，请注意，是 OSPF 不是 OPSF。 OSPF（Open Shortest Path First，ospf）开放最短路径优先协议, 是由 Internet 工程任务组开发的路由选择协议</p></blockquote><p>总体来说分为以下几个过程:</p><ol><li>DNS 解析</li><li>TCP 连接</li><li>发送 HTTP 请求</li><li>服务器处理请求并返回 HTTP 报文</li><li>浏览器解析渲染页面</li><li>连接结束</li></ol><p>具体可以参考下面这两篇文章：</p>',15),b={href:"https://segmentfault.com/a/1190000006879700",target:"_blank",rel:"noopener noreferrer"},m={href:"https://cloud.tencent.com/developer/article/1879758",target:"_blank",rel:"noopener noreferrer"},y=t("h3",{id:"http-状态码有哪些",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#http-状态码有哪些","aria-hidden":"true"},"#"),e(" HTTP 状态码有哪些？")],-1),H=t("p",null,"HTTP 状态码用于描述 HTTP 请求的结果，比如 2xx 就代表请求被成功处理。",-1),k=t("figure",null,[t("img",{src:"/github/javaguide/cs-basics/network/http-status-code.png",alt:"常见 HTTP 状态码",tabindex:"0"}),t("figcaption",null,"常见 HTTP 状态码")],-1),I=t("h3",{id:"http-header-中常见的字段有哪些",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#http-header-中常见的字段有哪些","aria-hidden":"true"},"#"),e(" HTTP Header 中常见的字段有哪些？")],-1),S=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"请求头字段名"),t("th",{style:{"text-align":"left"}},"说明"),t("th",{style:{"text-align":"left"}},"示例")])],-1),v=t("tr",null,[t("td",{style:{"text-align":"left"}},"Accept"),t("td",{style:{"text-align":"left"}},"能够接受的回应内容类型（Content-Types）。"),t("td",{style:{"text-align":"left"}},"Accept: text/plain")],-1),C=t("tr",null,[t("td",{style:{"text-align":"left"}},"Accept-Charset"),t("td",{style:{"text-align":"left"}},"能够接受的字符集"),t("td",{style:{"text-align":"left"}},"Accept-Charset: utf-8")],-1),w=t("tr",null,[t("td",{style:{"text-align":"left"}},"Accept-Datetime"),t("td",{style:{"text-align":"left"}},"能够接受的按照时间来表示的版本"),t("td",{style:{"text-align":"left"}},"Accept-Datetime: Thu, 31 May 2007 20:35:00 GMT")],-1),N=t("tr",null,[t("td",{style:{"text-align":"left"}},"Accept-Encoding"),t("td",{style:{"text-align":"left"}},"能够接受的编码方式列表。参考 HTTP 压缩。"),t("td",{style:{"text-align":"left"}},"Accept-Encoding: gzip, deflate")],-1),R=t("tr",null,[t("td",{style:{"text-align":"left"}},"Accept-Language"),t("td",{style:{"text-align":"left"}},"能够接受的回应内容的自然语言列表。"),t("td",{style:{"text-align":"left"}},"Accept-Language: en-US")],-1),M=t("tr",null,[t("td",{style:{"text-align":"left"}},"Authorization"),t("td",{style:{"text-align":"left"}},"用于超文本传输协议的认证的认证信息"),t("td",{style:{"text-align":"left"}},"Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==")],-1),D=t("tr",null,[t("td",{style:{"text-align":"left"}},"Cache-Control"),t("td",{style:{"text-align":"left"}},"用来指定在这次的请求/响应链中的所有缓存机制 都必须 遵守的指令"),t("td",{style:{"text-align":"left"}},"Cache-Control: no-cache")],-1),L=t("tr",null,[t("td",{style:{"text-align":"left"}},"Connection"),t("td",{style:{"text-align":"left"}},"该浏览器想要优先使用的连接类型"),t("td",{style:{"text-align":"left"}},"Connection: keep-alive Connection: Upgrade")],-1),U=t("tr",null,[t("td",{style:{"text-align":"left"}},"Content-Length"),t("td",{style:{"text-align":"left"}},"以 八位字节数组 （8 位的字节）表示的请求体的长度"),t("td",{style:{"text-align":"left"}},"Content-Length: 348")],-1),j=t("tr",null,[t("td",{style:{"text-align":"left"}},"Content-MD5"),t("td",{style:{"text-align":"left"}},"请求体的内容的二进制 MD5 散列值，以 Base64 编码的结果"),t("td",{style:{"text-align":"left"}},"Content-MD5: Q2hlY2sgSW50ZWdyaXR5IQ==")],-1),A=t("tr",null,[t("td",{style:{"text-align":"left"}},"Content-Type"),t("td",{style:{"text-align":"left"}},"请求体的 多媒体类型 （用于 POST 和 PUT 请求中）"),t("td",{style:{"text-align":"left"}},"Content-Type: application/x-www-form-urlencoded")],-1),G=t("tr",null,[t("td",{style:{"text-align":"left"}},"Cookie"),t("td",{style:{"text-align":"left"}},"之前由服务器通过 Set- Cookie （下文详述）发送的一个 超文本传输协议 Cookie"),t("td",{style:{"text-align":"left"}},"Cookie: $Version=1; Skin=new;")],-1),O=t("tr",null,[t("td",{style:{"text-align":"left"}},"Date"),t("td",{style:{"text-align":"left"}},'发送该消息的日期和时间(按照 RFC 7231 中定义的"超文本传输协议日期"格式来发送)'),t("td",{style:{"text-align":"left"}},"Date: Tue, 15 Nov 1994 08:12:31 GMT")],-1),q=t("tr",null,[t("td",{style:{"text-align":"left"}},"Expect"),t("td",{style:{"text-align":"left"}},"表明客户端要求服务器做出特定的行为"),t("td",{style:{"text-align":"left"}},"Expect: 100-continue")],-1),E=t("tr",null,[t("td",{style:{"text-align":"left"}},"From"),t("td",{style:{"text-align":"left"}},"发起此请求的用户的邮件地址"),t("td",{style:{"text-align":"left"}},[e("From: "),t("a",{href:"mailto:user@example.com"},"user@example.com")])],-1),F=t("tr",null,[t("td",{style:{"text-align":"left"}},"Host"),t("td",{style:{"text-align":"left"}},"服务器的域名(用于虚拟主机 )，以及服务器所监听的传输控制协议端口号。如果所请求的端口是对应的服务的标准端口，则端口号可被省略。"),t("td",{style:{"text-align":"left"}},"Host: en.wikipedia.org:80")],-1),Q=t("tr",null,[t("td",{style:{"text-align":"left"}},"If-Match"),t("td",{style:{"text-align":"left"}},"仅当客户端提供的实体与服务器上对应的实体相匹配时，才进行对应的操作。主要作用时，用作像 PUT 这样的方法中，仅当从用户上次更新某个资源以来，该资源未被修改的情况下，才更新该资源。"),t("td",{style:{"text-align":"left"}},"If-Match: “737060cd8c284d8af7ad3082f209582d”")],-1),z=t("tr",null,[t("td",{style:{"text-align":"left"}},"If-Modified-Since"),t("td",{style:{"text-align":"left"}},"允许在对应的内容未被修改的情况下返回 304 未修改（ 304 Not Modified ）"),t("td",{style:{"text-align":"left"}},"If-Modified-Since: Sat, 29 Oct 1994 19:43:31 GMT")],-1),B=t("tr",null,[t("td",{style:{"text-align":"left"}},"If-None-Match"),t("td",{style:{"text-align":"left"}},"允许在对应的内容未被修改的情况下返回 304 未修改（ 304 Not Modified ）"),t("td",{style:{"text-align":"left"}},"If-None-Match: “737060cd8c284d8af7ad3082f209582d”")],-1),W=t("tr",null,[t("td",{style:{"text-align":"left"}},"If-Range"),t("td",{style:{"text-align":"left"}},"如果该实体未被修改过，则向我发送我所缺少的那一个或多个部分；否则，发送整个新的实体"),t("td",{style:{"text-align":"left"}},"If-Range: “737060cd8c284d8af7ad3082f209582d”")],-1),V=t("tr",null,[t("td",{style:{"text-align":"left"}},"If-Unmodified-Since"),t("td",{style:{"text-align":"left"}},"仅当该实体自某个特定时间已来未被修改的情况下，才发送回应。"),t("td",{style:{"text-align":"left"}},"If-Unmodified-Since: Sat, 29 Oct 1994 19:43:31 GMT")],-1),J=t("tr",null,[t("td",{style:{"text-align":"left"}},"Max-Forwards"),t("td",{style:{"text-align":"left"}},"限制该消息可被代理及网关转发的次数。"),t("td",{style:{"text-align":"left"}},"Max-Forwards: 10")],-1),Z=t("td",{style:{"text-align":"left"}},"Origin",-1),X=t("td",{style:{"text-align":"left"}},"发起一个针对 跨来源资源共享 的请求。",-1),Y={style:{"text-align":"left"}},$={href:"http://www.example-social-network.com/",target:"_blank",rel:"noopener noreferrer"},K=t("tr",null,[t("td",{style:{"text-align":"left"}},"Pragma"),t("td",{style:{"text-align":"left"}},"与具体的实现相关，这些字段可能在请求/回应链中的任何时候产生多种效果。"),t("td",{style:{"text-align":"left"}},"Pragma: no-cache")],-1),tt=t("tr",null,[t("td",{style:{"text-align":"left"}},"Proxy-Authorization"),t("td",{style:{"text-align":"left"}},"用来向代理进行认证的认证信息。"),t("td",{style:{"text-align":"left"}},"Proxy-Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==")],-1),et=t("tr",null,[t("td",{style:{"text-align":"left"}},"Range"),t("td",{style:{"text-align":"left"}},"仅请求某个实体的一部分。字节偏移以 0 开始。参见字节服务。"),t("td",{style:{"text-align":"left"}},"Range: bytes=500-999")],-1),nt=t("td",{style:{"text-align":"left"}},"Referer",-1),st=t("td",{style:{"text-align":"left"}},"表示浏览器所访问的前一个页面，正是那个页面上的某个链接将浏览器带到了当前所请求的这个页面。",-1),at={style:{"text-align":"left"}},lt={href:"https://en.wikipedia.org/wiki/Main_Page",target:"_blank",rel:"noopener noreferrer"},it=t("tr",null,[t("td",{style:{"text-align":"left"}},"TE"),t("td",{style:{"text-align":"left"}},"浏览器预期接受的传输编码方式：可使用回应协议头 Transfer-Encoding 字段中的值；"),t("td",{style:{"text-align":"left"}},"TE: trailers, deflate")],-1),ot=t("tr",null,[t("td",{style:{"text-align":"left"}},"Upgrade"),t("td",{style:{"text-align":"left"}},"要求服务器升级到另一个协议。"),t("td",{style:{"text-align":"left"}},"Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11")],-1),rt=t("tr",null,[t("td",{style:{"text-align":"left"}},"User-Agent"),t("td",{style:{"text-align":"left"}},"浏览器的浏览器身份标识字符串"),t("td",{style:{"text-align":"left"}},"User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:12.0) Gecko/20100101 Firefox/21.0")],-1),dt=t("tr",null,[t("td",{style:{"text-align":"left"}},"Via"),t("td",{style:{"text-align":"left"}},"向服务器告知，这个请求是由哪些代理发出的。"),t("td",{style:{"text-align":"left"}},"Via: 1.0 fred, 1.1 example.com (Apache/1.1)")],-1),ct=t("tr",null,[t("td",{style:{"text-align":"left"}},"Warning"),t("td",{style:{"text-align":"left"}},"一个一般性的警告，告知，在实体内容体中可能存在错误。"),t("td",{style:{"text-align":"left"}},"Warning: 199 Miscellaneous warning")],-1),pt=i('<h3 id="http-和-https-有什么区别-重要" tabindex="-1"><a class="header-anchor" href="#http-和-https-有什么区别-重要" aria-hidden="true">#</a> HTTP 和 HTTPS 有什么区别？（重要）</h3><figure><img src="/github/javaguide/cs-basics/network/http1.0-vs-http1.1.png" alt="HTTP 和 HTTPS 对比" tabindex="0"><figcaption>HTTP 和 HTTPS 对比</figcaption></figure><ul><li><strong>端口号</strong>：HTTP 默认是 80，HTTPS 默认是 443。</li><li><strong>URL 前缀</strong>：HTTP 的 URL 前缀是 <code>http://</code>，HTTPS 的 URL 前缀是 <code>https://</code>。</li><li><strong>安全性和资源消耗</strong>：HTTP 协议运行在 TCP 之上，所有传输的内容都是明文，客户端和服务器端都无法验证对方的身份。HTTPS 是运行在 SSL/TLS 之上的 HTTP 协议，SSL/TLS 运行在 TCP 之上。所有传输的内容都经过加密，加密采用对称加密，但对称加密的密钥用服务器方的证书进行了非对称加密。所以说，HTTP 安全性没有 HTTPS 高，但是 HTTPS 比 HTTP 耗费更多服务器资源。</li><li><strong>SEO（搜索引擎优化）</strong>：搜索引擎通常会更青睐使用 HTTPS 协议的网站，因为 HTTPS 能够提供更高的安全性和用户隐私保护。使用 HTTPS 协议的网站在搜索结果中可能会被优先显示，从而对 SEO 产生影响。</li></ul>',3),gt=i('<h3 id="http-1-0-和-http-1-1-有什么区别" tabindex="-1"><a class="header-anchor" href="#http-1-0-和-http-1-1-有什么区别" aria-hidden="true">#</a> HTTP/1.0 和 HTTP/1.1 有什么区别？</h3><figure><img src="/github/javaguide/cs-basics/network/http1.0-vs-http1.1.png" alt="HTTP/1.0 和 HTTP/1.1 对比" tabindex="0"><figcaption>HTTP/1.0 和 HTTP/1.1 对比</figcaption></figure><ul><li><strong>连接方式</strong> : HTTP/1.0 为短连接，HTTP/1.1 支持长连接。</li><li><strong>状态响应码</strong> : HTTP/1.1 中新加入了大量的状态码，光是错误响应状态码就新增了 24 种。比如说，<code>100 (Continue)</code>——在请求大资源前的预热请求，<code>206 (Partial Content)</code>——范围请求的标识码，<code>409 (Conflict)</code>——请求与当前资源的规定冲突，<code>410 (Gone)</code>——资源已被永久转移，而且没有任何已知的转发地址。</li><li><strong>缓存机制</strong> : 在 HTTP/1.0 中主要使用 Header 里的 If-Modified-Since,Expires 来做为缓存判断的标准，HTTP/1.1 则引入了更多的缓存控制策略例如 Entity tag，If-Unmodified-Since, If-Match, If-None-Match 等更多可供选择的缓存头来控制缓存策略。</li><li><strong>带宽</strong>：HTTP/1.0 中，存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能，HTTP/1.1 则在请求头引入了 range 头域，它允许只请求资源的某个部分，即返回码是 206（Partial Content），这样就方便了开发者自由的选择以便于充分利用带宽和连接。</li><li><strong>Host 头（Host Header）处理</strong> :HTTP/1.1 引入了 Host 头字段，允许在同一 IP 地址上托管多个域名，从而支持虚拟主机的功能。而 HTTP/1.0 没有 Host 头字段，无法实现虚拟主机。</li></ul>',3),ht=i('<h3 id="http-1-1-和-http-2-0-有什么区别" tabindex="-1"><a class="header-anchor" href="#http-1-1-和-http-2-0-有什么区别" aria-hidden="true">#</a> HTTP/1.1 和 HTTP/2.0 有什么区别？</h3><figure><img src="/github/javaguide/cs-basics/network/http1.1-vs-http2.0.png" alt="HTTP/1.0 和 HTTP/1.1 对比" tabindex="0"><figcaption>HTTP/1.0 和 HTTP/1.1 对比</figcaption></figure><ul><li><strong>IO 多路复用（Multiplexing）</strong>：HTTP/2.0 在同一连接上可以同时传输多个请求和响应（可以看作是 HTTP/1.1 中长链接的升级版本）。HTTP/1.1 则使用串行方式，每个请求和响应都需要独立的连接。这使得 HTTP/2.0 在处理多个请求时更加高效，减少了网络延迟和提高了性能。</li><li><strong>二进制帧（Binary Frames）</strong>：HTTP/2.0 使用二进制帧进行数据传输，而 HTTP/1.1 则使用文本格式的报文。二进制帧更加紧凑和高效，减少了传输的数据量和带宽消耗。</li><li><strong>头部压缩（Header Compression）</strong>：HTTP/1.1 支持<code>Body</code>压缩，<code>Header</code>不支持压缩。HTTP/2.0 支持对<code>Header</code>压缩，减少了网络开销。</li><li><strong>服务器推送（Server Push）</strong>：HTTP/2.0 支持服务器推送，可以在客户端请求一个资源时，将其他相关资源一并推送给客户端，从而减少了客户端的请求次数和延迟。而 HTTP/1.1 需要客户端自己发送请求来获取相关资源。</li></ul><h3 id="http-2-0-和-http-3-0-有什么区别" tabindex="-1"><a class="header-anchor" href="#http-2-0-和-http-3-0-有什么区别" aria-hidden="true">#</a> HTTP/2.0 和 HTTP/3.0 有什么区别？</h3><figure><img src="/github/javaguide/cs-basics/network/http2.0-vs-http3.0.png" alt="HTTP/2.0 和 HTTP/3.0 对比" tabindex="0"><figcaption>HTTP/2.0 和 HTTP/3.0 对比</figcaption></figure><ul><li><strong>传输协议</strong>：HTTP/2.0 是基于 TCP 协议实现的，HTTP/3.0 新增了 QUIC（Quick UDP Internet Connections） 协议来实现可靠的传输，提供与 TLS/SSL 相当的安全性，具有较低的连接和传输延迟。你可以将 QUIC 看作是 UDP 的升级版本，在其基础上新增了很多功能比如加密、重传等等。HTTP/3.0 之前名为 HTTP-over-QUIC，从这个名字中我们也可以发现，HTTP/3 最大的改造就是使用了 QUIC。</li><li><strong>连接建立</strong>：HTTP/2.0 需要经过经典的 TCP 三次握手过程（由于安全的 HTTPS 连接建立还需要 TLS 握手，共需要大约 3 个 RTT）。由于 QUIC 协议的特性（TLS 1.3，TLS 1.3 除了支持 1 个 RTT 的握手，还支持 0 个 RTT 的握手）连接建立仅需 0-RTT 或者 1-RTT。这意味着 QUIC 在最佳情况下不需要任何的额外往返时间就可以建立新连接。</li><li><strong>队头阻塞</strong>：HTTP/2.0 多请求复用一个 TCP 连接，一旦发生丢包，就会阻塞住所有的 HTTP 请求。由于 QUIC 协议的特性，HTTP/3.0 在一定程度上解决了队头阻塞（Head-of-Line blocking, 简写：HOL blocking）问题，一个连接建立多个不同的数据流，这些数据流之间独立互不影响，某个数据流发生丢包了，其数据流不受影响（本质上是多路复用+轮询）。</li><li><strong>错误恢复</strong>：HTTP/3.0 具有更好的错误恢复机制，当出现丢包、延迟等网络问题时，可以更快地进行恢复和重传。而 HTTP/2.0 则需要依赖于 TCP 的错误恢复机制。</li><li><strong>安全性</strong>：HTTP/2.0 和 HTTP/3.0 在安全性上都有较高的要求，支持加密通信，但在实现上有所不同。HTTP/2.0 使用 TLS 协议进行加密，而 HTTP/3.0 基于 QUIC 协议，包含了内置的加密和身份验证机制，可以提供更强的安全性。</li></ul><h3 id="http-是不保存状态的协议-如何保存用户状态" tabindex="-1"><a class="header-anchor" href="#http-是不保存状态的协议-如何保存用户状态" aria-hidden="true">#</a> HTTP 是不保存状态的协议, 如何保存用户状态?</h3><p>HTTP 是一种不保存状态，即无状态（stateless）协议。也就是说 HTTP 协议自身不对请求和响应之间的通信状态进行保存。那么我们如何保存用户状态呢？Session 机制的存在就是为了解决这个问题，Session 的主要作用就是通过服务端记录用户的状态。典型的场景是购物车，当你要添加商品到购物车的时候，系统不知道是哪个用户操作的，因为 HTTP 协议是无状态的。服务端给特定的用户创建特定的 Session 之后就可以标识这个用户并且跟踪这个用户了（一般情况下，服务器会在一定时间内保存这个 Session，过了时间限制，就会销毁这个 Session）。</p><p>在服务端保存 Session 的方法很多，最常用的就是内存和数据库(比如是使用内存数据库 redis 保存)。既然 Session 存放在服务器端，那么我们如何实现 Session 跟踪呢？大部分情况下，我们都是通过在 Cookie 中附加一个 Session ID 来方式来跟踪。</p><p><strong>Cookie 被禁用怎么办?</strong></p><p>最常用的就是利用 URL 重写把 Session ID 直接附加在 URL 路径的后面。</p><h3 id="uri-和-url-的区别是什么" tabindex="-1"><a class="header-anchor" href="#uri-和-url-的区别是什么" aria-hidden="true">#</a> URI 和 URL 的区别是什么?</h3><ul><li>URI(Uniform Resource Identifier) 是统一资源标志符，可以唯一标识一个资源。</li><li>URL(Uniform Resource Locator) 是统一资源定位符，可以提供该资源的路径。它是一种具体的 URI，即 URL 可以用来标识一个资源，而且还指明了如何 locate 这个资源。</li></ul><p>URI 的作用像身份证号一样，URL 的作用更像家庭住址一样。URL 是一种具体的 URI，它不仅唯一标识资源，而且还提供了定位该资源的信息。</p><h3 id="cookie-和-session-有什么区别" tabindex="-1"><a class="header-anchor" href="#cookie-和-session-有什么区别" aria-hidden="true">#</a> Cookie 和 Session 有什么区别？</h3>',15),ut=i(`<h2 id="ping" tabindex="-1"><a class="header-anchor" href="#ping" aria-hidden="true">#</a> PING</h2><h3 id="ping-命令的作用是什么" tabindex="-1"><a class="header-anchor" href="#ping-命令的作用是什么" aria-hidden="true">#</a> PING 命令的作用是什么？</h3><p>PING 命令是一种常用的网络诊断工具，经常用来测试网络中主机之间的连通性和网络延迟。</p><p>这里简单举一个例子，我们来 PING 一下百度。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 发送4个PING请求数据包到 www.baidu.com</span>
❯ <span class="token function">ping</span> <span class="token parameter variable">-c</span> <span class="token number">4</span> www.baidu.com

PING www.a.shifen.com <span class="token punctuation">(</span><span class="token number">14.119</span>.104.189<span class="token punctuation">)</span>: <span class="token number">56</span> data bytes
<span class="token number">64</span> bytes from <span class="token number">14.119</span>.104.189: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">54</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">27.867</span> ms
<span class="token number">64</span> bytes from <span class="token number">14.119</span>.104.189: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">54</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">28.732</span> ms
<span class="token number">64</span> bytes from <span class="token number">14.119</span>.104.189: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">54</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">27.571</span> ms
<span class="token number">64</span> bytes from <span class="token number">14.119</span>.104.189: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">54</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">27.581</span> ms

--- www.a.shifen.com <span class="token function">ping</span> statistics ---
<span class="token number">4</span> packets transmitted, <span class="token number">4</span> packets received, <span class="token number">0.0</span>% packet loss
round-trip min/avg/max/stddev <span class="token operator">=</span> <span class="token number">27.571</span>/27.938/28.732/0.474 ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PING 命令的输出结果通常包括以下几部分信息：</p><ol><li><strong>ICMP Echo Request（请求报文）信息</strong>：序列号、TTL（Time to Live）值。</li><li><strong>目标主机的域名或 IP 地址</strong>：输出结果的第一行。</li><li><strong>往返时间（RTT，Round-Trip Time）</strong>：从发送 ICMP Echo Request（请求报文）到接收到 ICMP Echo Reply（响应报文）的总时间，用来衡量网络连接的延迟。</li><li><strong>统计结果（Statistics）</strong>：包括发送的 ICMP 请求数据包数量、接收到的 ICMP 响应数据包数量、丢包率、往返时间（RTT）的最小、平均、最大和标准偏差值。</li></ol><p>如果 PING 对应的目标主机无法得到正确的响应，则表明这两个主机之间的连通性存在问题（有些主机或网络管理员可能禁用了对ICMP请求的回复，这样也会导致无法得到正确的响应）。如果往返时间（RTT）过高，则表明网络延迟过高。</p><h3 id="ping-命令的工作原理是什么" tabindex="-1"><a class="header-anchor" href="#ping-命令的工作原理是什么" aria-hidden="true">#</a> PING 命令的工作原理是什么？</h3><p>PING 基于网络层的 <strong>ICMP（Internet Control Message Protocol，互联网控制报文协议）</strong>，其主要原理就是通过在网络上发送和接收 ICMP 报文实现的。</p><p>ICMP 报文中包含了类型字段，用于标识 ICMP 报文类型。ICMP 报文的类型有很多种，但大致可以分为两类：</p><ul><li><strong>查询报文类型</strong>：向目标主机发送请求并期望得到响应。</li><li><strong>差错报文类型</strong>：向源主机发送错误信息，用于报告网络中的错误情况。</li></ul><p>PING 用到的 ICMP Echo Request（类型为 8 ） 和 ICMP Echo Reply（类型为 0） 属于查询报文类型 。</p><ul><li>PING 命令会向目标主机发送 ICMP Echo Request。</li><li>如果两个主机的连通性正常，目标主机会返回一个对应的 ICMP Echo Reply。</li></ul><h2 id="dns" tabindex="-1"><a class="header-anchor" href="#dns" aria-hidden="true">#</a> DNS</h2><h3 id="dns-的作用是什么" tabindex="-1"><a class="header-anchor" href="#dns-的作用是什么" aria-hidden="true">#</a> DNS 的作用是什么？</h3><p>DNS（Domain Name System）域名管理系统，是当用户使用浏览器访问网址之后，使用的第一个重要协议。DNS 要解决的是<strong>域名和 IP 地址的映射问题</strong>。</p><figure><img src="/github/javaguide/cs-basics/network/dns-overview.png" alt="DNS:域名系统" tabindex="0"><figcaption>DNS:域名系统</figcaption></figure><p>在一台电脑上，可能存在浏览器 DNS 缓存，操作系统 DNS 缓存，路由器 DNS 缓存。如果以上缓存都查询不到，那么 DNS 就闪亮登场了。</p><p>目前 DNS 的设计采用的是分布式、层次数据库结构，<strong>DNS 是应用层协议，它可以在UDP或TCP协议之上运行，端口为 53</strong> 。</p><h3 id="dns-服务器有哪些" tabindex="-1"><a class="header-anchor" href="#dns-服务器有哪些" aria-hidden="true">#</a> DNS 服务器有哪些？</h3><p>DNS 服务器自底向上可以依次分为以下几个层级(所有 DNS 服务器都属于以下四个类别之一):</p><ul><li>根 DNS 服务器。根 DNS 服务器提供 TLD 服务器的 IP 地址。目前世界上只有 13 组根服务器，我国境内目前仍没有根服务器。</li><li>顶级域 DNS 服务器（TLD 服务器）。顶级域是指域名的后缀，如<code>com</code>、<code>org</code>、<code>net</code>和<code>edu</code>等。国家也有自己的顶级域，如<code>uk</code>、<code>fr</code>和<code>ca</code>。TLD 服务器提供了权威 DNS 服务器的 IP 地址。</li><li>权威 DNS 服务器。在因特网上具有公共可访问主机的每个组织机构必须提供公共可访问的 DNS 记录，这些记录将这些主机的名字映射为 IP 地址。</li><li>本地 DNS 服务器。每个 ISP（互联网服务提供商）都有一个自己的本地 DNS 服务器。当主机发出 DNS 请求时，该请求被发往本地 DNS 服务器，它起着代理的作用，并将该请求转发到 DNS 层次结构中。严格说来，不属于 DNS 层级结构</li></ul><h3 id="dns-解析的过程是什么样的" tabindex="-1"><a class="header-anchor" href="#dns-解析的过程是什么样的" aria-hidden="true">#</a> DNS 解析的过程是什么样的？</h3>`,24),Tt=t("h2",{id:"参考",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),e(" 参考")],-1),ft=t("li",null,"《图解 HTTP》",-1),Pt=t("li",null,"《计算机网络自顶向下方法》（第七版）",-1),xt={href:"https://juejin.cn/post/7034668672262242318",target:"_blank",rel:"noopener noreferrer"},_t={href:"https://www.flysnow.org/tools/table/http-request-headers/",target:"_blank",rel:"noopener noreferrer"},bt={href:"https://juejin.cn/post/6855470356657307662",target:"_blank",rel:"noopener noreferrer"},mt={href:"https://www.zhihu.com/question/302412059/answer/533223530",target:"_blank",rel:"noopener noreferrer"},yt=t("figure",null,[t("img",{src:"/github/javaguide/gongzhonghaoxuanchuan.png",alt:"JavaGuide 官方公众号",tabindex:"0"}),t("figcaption",null,"JavaGuide 官方公众号")],-1);function Ht(kt,It){const s=o("RouterLink"),l=o("ExternalLinkIcon");return c(),p("div",null,[t("div",h,[u,t("ul",null,[t("li",null,[T,e("：准备 Java 面试的小伙伴可以考虑面试专版："),t("strong",null,[n(s,{to:"/zhuanlan/java-mian-shi-zhi-bei.html"},{default:a(()=>[e("《Java 面试指北 》")]),_:1})]),e(" (质量非常高，专为面试打造，配合 JavaGuide 食用效果最佳)。")]),t("li",null,[f,e("：技术专栏/一对一提问/简历修改/求职指南/面试打卡/不定时福利，欢迎加入 "),t("strong",null,[n(s,{to:"/about-the-author/zhishixingqiu-two-years.html"},{default:a(()=>[e("JavaGuide 官方知识星球")]),_:1})]),e("。")])])]),P,t("p",null,[e("关于每一层作用的详细介绍，请看 "),n(s,{to:"/cs-basics/network/osi-and-tcp-ip-model.html"},{default:a(()=>[e("OSI 和 TCP/IP 网络分层模型详解（基础）")]),_:1}),e(" 这篇文章。")]),x,t("p",null,[e("关于这些协议的详细介绍请看 "),n(s,{to:"/cs-basics/network/application-layer-protocol.html"},{default:a(()=>[e("应用层常见协议总结（应用层）")]),_:1}),e(" 这篇文章。")]),_,t("ul",null,[t("li",null,[t("a",b,[e("从输入 URL 到页面加载发生了什么？"),n(l)])]),t("li",null,[t("a",m,[e("浏览器从输入网址到页面展示的过程"),n(l)])])]),y,H,k,t("p",null,[e("关于 HTTP 状态码更详细的总结，可以看我写的这篇文章："),n(s,{to:"/cs-basics/network/http-status-codes.html"},{default:a(()=>[e("HTTP 常见状态码总结（应用层）")]),_:1}),e("。")]),I,t("table",null,[S,t("tbody",null,[v,C,w,N,R,M,D,L,U,j,A,G,O,q,E,F,Q,z,B,W,V,J,t("tr",null,[Z,X,t("td",Y,[e("Origin: "),t("a",$,[e("http://www.example-social-network.com"),n(l)])])]),K,tt,et,t("tr",null,[nt,st,t("td",at,[e("Referer: "),t("a",lt,[e("http://en.wikipedia.org/wiki/Main_Page"),n(l)])])]),it,ot,rt,dt,ct])]),pt,t("p",null,[e("关于 HTTP 和 HTTPS 更详细的对比总结，可以看我写的这篇文章："),n(s,{to:"/cs-basics/network/http-vs-https.html"},{default:a(()=>[e("HTTP vs HTTPS（应用层）")]),_:1}),e(" 。")]),gt,t("p",null,[e("关于 HTTP/1.0 和 HTTP/1.1 更详细的对比总结，可以看我写的这篇文章："),n(s,{to:"/cs-basics/network/http1.0-vs-http1.1.html"},{default:a(()=>[e("HTTP/1.0 vs HTTP/1.1（应用层）")]),_:1}),e(" 。")]),ht,t("p",null,[e("准确点来说，这个问题属于认证授权的范畴，你可以在 "),n(s,{to:"/system-design/security/basis-of-authority-certification.html"},{default:a(()=>[e("认证授权基础概念详解")]),_:1}),e(" 这篇文章中找到详细的答案。")]),ut,t("p",null,[e("整个过程的步骤比较多，我单独写了一篇文章详细介绍："),n(s,{to:"/cs-basics/network/dns.html"},{default:a(()=>[e("DNS 域名系统详解（应用层）")]),_:1}),e(" 。")]),Tt,t("ul",null,[ft,Pt,t("li",null,[e("详解 HTTP/2.0 及 HTTPS 协议："),t("a",xt,[e("https://juejin.cn/post/7034668672262242318"),n(l)])]),t("li",null,[e("HTTP 请求头字段大全| HTTP Request Headers："),t("a",_t,[e("https://www.flysnow.org/tools/table/http-request-headers/"),n(l)])]),t("li",null,[e("HTTP1、HTTP2、HTTP3："),t("a",bt,[e("https://juejin.cn/post/6855470356657307662"),n(l)])]),t("li",null,[e("如何看待 HTTP/3 ？ - 车小胖的回答 - 知乎: "),t("a",mt,[e("https://www.zhihu.com/question/302412059/answer/533223530"),n(l)])])]),yt])}const wt=d(g,[["render",Ht],["__file","other-network-questions.html.vue"]]);export{wt as default};
