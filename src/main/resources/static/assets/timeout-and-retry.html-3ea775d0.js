import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as s,c as h,a as e,b as a,d as t,e as n}from"./app-62dd81fd.js";const d={},c=n('<p>由于网络问题、系统或者服务内部的 Bug、服务器宕机、操作系统崩溃等问题的不确定性，我们的系统或者服务永远不可能保证时刻都是可用的状态。</p><p>为了最大限度的减小系统或者服务出现故障之后带来的影响，我们需要用到的 <strong>超时（Timeout）</strong> 和 <strong>重试（Retry）</strong> 机制。</p><p>想要把超时和重试机制讲清楚其实很简单，因为它俩本身就不是什么高深的概念。</p><p>虽然超时和重试机制的思想很简单，但是它俩是真的非常实用。你平时接触到的绝大部分涉及到远程调用的系统或者服务都会应用超时和重试机制。尤其是对于微服务系统来说，正确设置超时和重试非常重要。单体服务通常只涉及数据库、缓存、第三方 API、中间件等的网络调用，而微服务系统内部各个服务之间还存在着网络调用。</p><h2 id="超时机制" tabindex="-1"><a class="header-anchor" href="#超时机制" aria-hidden="true">#</a> 超时机制</h2><h3 id="什么是超时机制" tabindex="-1"><a class="header-anchor" href="#什么是超时机制" aria-hidden="true">#</a> 什么是超时机制？</h3><p>超时机制说的是当一个请求超过指定的时间（比如 1s）还没有被处理的话，这个请求就会直接被取消并抛出指定的异常或者错误（比如 <code>504 Gateway Timeout</code>）。</p><p>我们平时接触到的超时可以简单分为下面 2 种：</p><ul><li><strong>连接超时（ConnectTimeout）</strong>：客户端与服务端建立连接的最长等待时间。</li><li><strong>读取超时（ReadTimeout）</strong>：客户端和服务端已经建立连接，客户端等待服务端处理完请求的最长时间。实际项目中，我们关注比较多的还是读取超时。</li></ul><p>一些连接池客户端框架中可能还会有获取连接超时和空闲连接清理超时。</p><p>如果没有设置超时的话，就可能会导致服务端连接数爆炸和大量请求堆积的问题。</p><p>这些堆积的连接和请求会消耗系统资源，影响新收到的请求的处理。严重的情况下，甚至会拖垮整个系统或者服务。</p><p>我之前在实际项目就遇到过类似的问题，整个网站无法正常处理请求，服务器负载直接快被拉满。后面发现原因是项目超时设置错误加上客户端请求处理异常，导致服务端连接数直接接近 40w+，这么多堆积的连接直接把系统干趴了。</p><h3 id="超时时间应该如何设置" tabindex="-1"><a class="header-anchor" href="#超时时间应该如何设置" aria-hidden="true">#</a> 超时时间应该如何设置？</h3><p>超时到底设置多长时间是一个难题！超时值设置太高或者太低都有风险。如果设置太高的话，会降低超时机制的有效性，比如你设置超时为 10s 的话，那设置超时就没啥意义了，系统依然可能会出现大量慢请求堆积的问题。如果设置太低的话，就可能会导致在系统或者服务在某些处理请求速度变慢的情况下（比如请求突然增多），大量请求重试（超时通常会结合重试）继续加重系统或者服务的压力，进而导致整个系统或者服务被拖垮的问题。</p><p>通常情况下，我们建议读取超时设置为 <strong>1500ms</strong> ,这是一个比较普适的值。如果你的系统或者服务对于延迟比较敏感的话，那读取超时值可以适当在 <strong>1500ms</strong> 的基础上进行缩短。反之，读取超时值也可以在 <strong>1500ms</strong> 的基础上进行加长，不过，尽量还是不要超过 <strong>1500ms</strong> 。连接超时可以适当设置长一些，建议在 <strong>1000ms ~ 5000ms</strong> 之内。</p><p>没有银弹！超时值具体该设置多大，还是要根据实际项目的需求和情况慢慢调整优化得到。</p>',17),p={href:"https://tech.meituan.com/2020/04/02/java-pooling-pratice-in-meituan.html",target:"_blank",rel:"noopener noreferrer"},l=n('<h2 id="重试机制" tabindex="-1"><a class="header-anchor" href="#重试机制" aria-hidden="true">#</a> 重试机制</h2><h3 id="什么是重试机制" tabindex="-1"><a class="header-anchor" href="#什么是重试机制" aria-hidden="true">#</a> 什么是重试机制？</h3><p>重试机制一般配合超时机制一起使用，指的是多次发送相同的请求来避免瞬态故障和偶然性故障。</p><p>瞬态故障可以简单理解为某一瞬间系统偶然出现的故障，并不会持久。偶然性故障可以理解为哪些在某些情况下偶尔出现的故障，频率通常较低。</p><p>重试的核心思想是通过消耗服务器的资源来尽可能获得请求更大概率被成功处理。由于瞬态故障和偶然性故障是很少发生的，因此，重试对于服务器的资源消耗几乎是可以被忽略的。</p><h3 id="重试的次数如何设置" tabindex="-1"><a class="header-anchor" href="#重试的次数如何设置" aria-hidden="true">#</a> 重试的次数如何设置？</h3><p>重试的次数不宜过多，否则依然会对系统负载造成比较大的压力。</p><p>重试的次数通常建议设为 3 次。并且，我们通常还会设置重试的间隔，比如说我们要重试 3 次的话，第 1 次请求失败后，等待 1 秒再进行重试，第 2 次请求失败后，等待 2 秒再进行重试，第 3 次请求失败后，等待 3 秒再进行重试。</p><h3 id="重试幂等" tabindex="-1"><a class="header-anchor" href="#重试幂等" aria-hidden="true">#</a> 重试幂等</h3><p>超时和重试机制在实际项目中使用的话，需要注意保证同一个请求没有被多次执行。</p><p>什么情况下会出现一个请求被多次执行呢？客户端等待服务端完成请求完成超时但此时服务端已经执行了请求，只是由于短暂的网络波动导致响应在发送给客户端的过程中延迟了。</p><p>举个例子：用户支付购买某个课程，结果用户支付的请求由于重试的问题导致用户购买同一门课程支付了两次。对于这种情况，我们在执行用户购买课程的请求的时候需要判断一下用户是否已经购买过。这样的话，就不会因为重试的问题导致重复购买了。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',13),u={href:"https://www.infoq.cn/article/eyrslar53l6hjm5yjgyx",target:"_blank",rel:"noopener noreferrer"},g={href:"https://aws.amazon.com/cn/builders-library/timeouts-retries-and-backoff-with-jitter/",target:"_blank",rel:"noopener noreferrer"},m=e("figure",null,[e("img",{src:"/github/javaguide/gongzhonghaoxuanchuan.png",alt:"JavaGuide 官方公众号",tabindex:"0"}),e("figcaption",null,"JavaGuide 官方公众号")],-1);function f(_,b){const r=i("ExternalLinkIcon");return s(),h("div",null,[c,e("p",null,[a("更上一层，参考"),e("a",p,[a("美团的 Java 线程池参数动态配置"),t(r)]),a("思想，我们也可以将超时弄成可配置化的参数而不是固定的，比较简单的一种办法就是将超时的值放在配置中心中。这样的话，我们就可以根据系统或者服务的状态动态调整超时值了。")]),l,e("ul",null,[e("li",null,[a("微服务之间调用超时的设置治理："),e("a",u,[a("https://www.infoq.cn/article/eyrslar53l6hjm5yjgyx"),t(r)])]),e("li",null,[a("超时、重试和抖动回退："),e("a",g,[a("https://aws.amazon.com/cn/builders-library/timeouts-retries-and-backoff-with-jitter/"),t(r)])])]),m])}const y=o(d,[["render",f],["__file","timeout-and-retry.html.vue"]]);export{y as default};
