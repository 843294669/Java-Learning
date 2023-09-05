import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as c,c as p,a as s,b as a,d as e,e as t}from"./app-62dd81fd.js";const l={},d=t(`<h2 id="什么是内存碎片" tabindex="-1"><a class="header-anchor" href="#什么是内存碎片" aria-hidden="true">#</a> 什么是内存碎片?</h2><p>你可以将内存碎片简单地理解为那些不可用的空闲内存。</p><p>举个例子：操作系统为你分配了 32 字节的连续内存空间，而你存储数据实际只需要使用 24 字节内存空间，那这多余出来的 8 字节内存空间如果后续没办法再被分配存储其他数据的话，就可以被称为内存碎片。</p><figure><img src="/github/javaguide/memory-fragmentation.png" alt="内存碎片" tabindex="0"><figcaption>内存碎片</figcaption></figure><p>Redis 内存碎片虽然不会影响 Redis 性能，但是会增加内存消耗。</p><h2 id="为什么会有-redis-内存碎片" tabindex="-1"><a class="header-anchor" href="#为什么会有-redis-内存碎片" aria-hidden="true">#</a> 为什么会有 Redis 内存碎片?</h2><p>Redis 内存碎片产生比较常见的 2 个原因：</p><p><strong>1、Redis 存储存储数据的时候向操作系统申请的内存空间可能会大于数据实际需要的存储空间。</strong></p><p>以下是这段 Redis 官方的原话：</p><blockquote><p>To store user keys, Redis allocates at most as much memory as the <code>maxmemory</code> setting enables (however there are small extra allocations possible).</p></blockquote><p>Redis 使用 <code>zmalloc</code> 方法(Redis 自己实现的内存分配方法)进行内存分配的时候，除了要分配 <code>size</code> 大小的内存之外，还会多分配 <code>PREFIX_SIZE</code> 大小的内存。</p><p><code>zmalloc</code> 方法源码如下（源码地址：https://github.com/antirez/redis-tools/blob/master/zmalloc.c）：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">void</span> <span class="token operator">*</span><span class="token function">zmalloc</span><span class="token punctuation">(</span>size_t size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 分配指定大小的内存</span>
   <span class="token keyword">void</span> <span class="token operator">*</span>ptr <span class="token operator">=</span> <span class="token function">malloc</span><span class="token punctuation">(</span>size<span class="token operator">+</span><span class="token constant">PREFIX_SIZE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ptr<span class="token punctuation">)</span> <span class="token function">zmalloc_oom_handler</span><span class="token punctuation">(</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>
#ifdef <span class="token class-name">HAVE_MALLOC_SIZE</span>
   <span class="token function">update_zmalloc_stat_alloc</span><span class="token punctuation">(</span><span class="token function">zmalloc_size</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> ptr<span class="token punctuation">;</span>
#<span class="token keyword">else</span>
   <span class="token operator">*</span><span class="token punctuation">(</span><span class="token punctuation">(</span>size_t<span class="token operator">*</span><span class="token punctuation">)</span>ptr<span class="token punctuation">)</span> <span class="token operator">=</span> size<span class="token punctuation">;</span>
   <span class="token function">update_zmalloc_stat_alloc</span><span class="token punctuation">(</span>size<span class="token operator">+</span><span class="token constant">PREFIX_SIZE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span>ptr<span class="token operator">+</span><span class="token constant">PREFIX_SIZE</span><span class="token punctuation">;</span>
#endif
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),r={href:"https://github.com/jemalloc/jemalloc",target:"_blank",rel:"noopener noreferrer"},u=t(`<figure><img src="/github/javaguide/database/redis/6803d3929e3e46c1b1c9d0bb9ee8e717.png" alt="jemalloc 内存单元示意图" tabindex="0"><figcaption>jemalloc 内存单元示意图</figcaption></figure><p>当程序申请的内存最接近某个固定值时，jemalloc 会给它分配相应大小的空间，就比如说程序需要申请 17 字节的内存，jemalloc 会直接给它分配 32 字节的内存，这样会导致有 15 字节内存的浪费。不过，jemalloc 专门针对内存碎片问题做了优化，一般不会存在过度碎片化的问题。</p><p><strong>2、频繁修改 Redis 中的数据也会产生内存碎片。</strong></p><p>当 Redis 中的某个数据删除时，Redis 通常不会轻易释放内存给操作系统。</p><p>这个在 Redis 官方文档中也有对应的原话:</p><figure><img src="/github/javaguide/redis-docs-memory-optimization.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>文档地址：https://redis.io/topics/memory-optimization 。</p><h2 id="如何查看-redis-内存碎片的信息" tabindex="-1"><a class="header-anchor" href="#如何查看-redis-内存碎片的信息" aria-hidden="true">#</a> 如何查看 Redis 内存碎片的信息？</h2><p>使用 <code>info memory</code> 命令即可查看 Redis 内存相关的信息。下图中每个参数具体的含义，Redis 官方文档有详细的介绍：https://redis.io/commands/INFO 。</p><figure><img src="/github/javaguide/redis-info-memory.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>Redis 内存碎片率的计算公式：<code>mem_fragmentation_ratio</code> （内存碎片率）= <code>used_memory_rss</code> (操作系统实际分配给 Redis 的物理内存空间大小)/ <code>used_memory</code>(Redis 内存分配器为了存储数据实际申请使用的内存空间大小)</p><p>也就是说，<code>mem_fragmentation_ratio</code> （内存碎片率）的值越大代表内存碎片率越严重。</p><p>一定不要误认为<code>used_memory_rss</code> 减去 <code>used_memory</code>值就是内存碎片的大小！！！这不仅包括内存碎片，还包括其他进程开销，以及共享库、堆栈等的开销。</p><p>很多小伙伴可能要问了：“多大的内存碎片率才是需要清理呢？”。</p><p>通常情况下，我们认为 <code>mem_fragmentation_ratio &gt; 1.5</code> 的话才需要清理内存碎片。 <code>mem_fragmentation_ratio &gt; 1.5</code> 意味着你使用 Redis 存储实际大小 2G 的数据需要使用大于 3G 的内存。</p><p>如果想要快速查看内存碎片率的话，你还可以通过下面这个命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> redis-cli <span class="token parameter variable">-p</span> <span class="token number">6379</span> info <span class="token operator">|</span> <span class="token function">grep</span> mem_fragmentation_ratio
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17),m={href:"https://mp.weixin.qq.com/s/drlDvp7bfq5jt2M5pTqJCw",target:"_blank",rel:"noopener noreferrer"},g=t(`<h2 id="如何清理-redis-内存碎片" tabindex="-1"><a class="header-anchor" href="#如何清理-redis-内存碎片" aria-hidden="true">#</a> 如何清理 Redis 内存碎片？</h2><p>Redis4.0-RC3 版本以后自带了内存整理，可以避免内存碎片率过大的问题。</p><p>直接通过 <code>config set</code> 命令将 <code>activedefrag</code> 配置项设置为 <code>yes</code> 即可。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>config <span class="token builtin class-name">set</span> activedefrag <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>具体什么时候清理需要通过下面两个参数控制：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 内存碎片占用空间达到 500mb 的时候开始清理</span>
config <span class="token builtin class-name">set</span> active-defrag-ignore-bytes 500mb
<span class="token comment"># 内存碎片率大于 1.5 的时候开始清理</span>
config <span class="token builtin class-name">set</span> active-defrag-threshold-lower <span class="token number">50</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 Redis 自动内存碎片清理机制可能会对 Redis 的性能产生影响，我们可以通过下面两个参数来减少对 Redis 性能的影响：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 内存碎片清理所占用 CPU 时间的比例不低于 20%</span>
config <span class="token builtin class-name">set</span> active-defrag-cycle-min <span class="token number">20</span>
<span class="token comment"># 内存碎片清理所占用 CPU 时间的比例不高于 50%</span>
config <span class="token builtin class-name">set</span> active-defrag-cycle-max <span class="token number">50</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，重启节点可以做到内存碎片重新整理。如果你采用的是高可用架构的 Redis 集群的话，你可以将碎片率过高的主节点转换为从节点，以便进行安全重启。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,10),h=s("li",null,"Redis 官方文档：https://redis.io/topics/memory-optimization",-1),v=s("li",null,"Redis 核心技术与实战 - 极客时间 - 删除数据后，为什么内存占用率还是很高？：https://time.geekbang.org/column/article/289140",-1),k={href:"https://shinerio.cc/2020/05/17/redis/Redis%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90%E2%80%94%E2%80%94%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86",target:"_blank",rel:"noopener noreferrer"},b=s("figure",null,[s("img",{src:"/github/javaguide/gongzhonghaoxuanchuan.png",alt:"JavaGuide 官方公众号",tabindex:"0"}),s("figcaption",null,"JavaGuide 官方公众号")],-1);function f(_,R){const n=i("ExternalLinkIcon");return c(),p("div",null,[d,s("p",null,[a("另外，Redis 可以使用多种内存分配器来分配内存（ libc、jemalloc、tcmalloc），默认使用 "),s("a",r,[a("jemalloc"),e(n)]),a("，而 jemalloc 按照一系列固定的大小（8 字节、16 字节、32 字节......）来分配内存的。jemalloc 划分的内存单元如下图所示：")]),u,s("p",null,[a("另外，内存碎片率可能存在小于 1 的情况。这种情况我在日常使用中还没有遇到过，感兴趣的小伙伴可以看看这篇文章 "),s("a",m,[a("故障分析 | Redis 内存碎片率太低该怎么办？- 爱可生开源社区"),e(n)]),a(" 。")]),g,s("ul",null,[h,v,s("li",null,[a("Redis 源码解析——内存分配："),s("a",k,[a("https://shinerio.cc/2020/05/17/redis/Redis源码解析——内存管理"),e(n)])])]),b])}const j=o(l,[["render",f],["__file","redis-memory-fragmentation.html.vue"]]);export{j as default};
