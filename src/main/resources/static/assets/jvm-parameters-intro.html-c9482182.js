import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c as l,a as e,b as a,d as s,e as t}from"./app-7f13a6e3.js";const c="/assets/内存区域常见配置参数-53ddeca6.png",p={},d={href:"https://www.baeldung.com/jvm-parameters",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,"JDK 版本：1.8",-1),m=t('<h2 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1.概述</h2><p>在本篇文章中，你将掌握最常用的 JVM 参数配置。</p><h2 id="_2-堆内存相关" tabindex="-1"><a class="header-anchor" href="#_2-堆内存相关" aria-hidden="true">#</a> 2.堆内存相关</h2><blockquote><p>Java 虚拟机所管理的内存中最大的一块，Java 堆是所有线程共享的一块内存区域，在虚拟机启动时创建。<strong>此内存区域的唯一目的就是存放对象实例，几乎所有的对象实例以及数组都在这里分配内存。</strong></p></blockquote><figure><img src="'+c+`" alt="内存区域常见配置参数" tabindex="0"><figcaption>内存区域常见配置参数</figcaption></figure><h3 id="_2-1-显式指定堆内存–xms和-xmx" tabindex="-1"><a class="header-anchor" href="#_2-1-显式指定堆内存–xms和-xmx" aria-hidden="true">#</a> 2.1.显式指定堆内存<code>–Xms</code>和<code>-Xmx</code></h3><p>与性能有关的最常见实践之一是根据应用程序要求初始化堆内存。如果我们需要指定最小和最大堆大小（推荐显示指定大小），以下参数可以帮助你实现：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-Xms<span class="token operator">&lt;</span>heap size<span class="token operator">&gt;</span><span class="token punctuation">[</span>unit<span class="token punctuation">]</span>
-Xmx<span class="token operator">&lt;</span>heap size<span class="token operator">&gt;</span><span class="token punctuation">[</span>unit<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>heap size</strong> 表示要初始化内存的具体大小。</li><li><strong>unit</strong> 表示要初始化内存的单位。单位为 <strong><em>“ g”</em></strong> (GB)、<strong><em>“ m”</em></strong>（MB）、<strong><em>“ k”</em></strong>（KB）。</li></ul><p>举个栗子 🌰，如果我们要为 JVM 分配最小 2 GB 和最大 5 GB 的堆内存大小，我们的参数应该这样来写：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-Xms2G</span> <span class="token parameter variable">-Xmx5G</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-显式新生代内存-young-generation" tabindex="-1"><a class="header-anchor" href="#_2-2-显式新生代内存-young-generation" aria-hidden="true">#</a> 2.2.显式新生代内存(Young Generation)</h3>`,12),v={href:"https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/sizing.html",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"Young Generation",-1),b=e("em",null,"MB",-1),g=e("em",null,"无限制",-1),_=t(`<p>一共有两种指定 新生代内存(Young Generation)大小的方法：</p><p><strong>1.通过<code>-XX:NewSize</code>和<code>-XX:MaxNewSize</code>指定</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-XX:NewSize</span><span class="token operator">=</span><span class="token operator">&lt;</span>young size<span class="token operator">&gt;</span><span class="token punctuation">[</span>unit<span class="token punctuation">]</span>
<span class="token parameter variable">-XX:MaxNewSize</span><span class="token operator">=</span><span class="token operator">&lt;</span>young size<span class="token operator">&gt;</span><span class="token punctuation">[</span>unit<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>举个栗子 🌰，如果我们要为 新生代分配 最小 256m 的内存，最大 1024m 的内存我们的参数应该这样来写：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-XX:NewSize</span><span class="token operator">=</span>256m
<span class="token parameter variable">-XX:MaxNewSize</span><span class="token operator">=</span>1024m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.通过<code>-Xmn&lt;young size&gt;[unit]</code>指定</strong></p><p>举个栗子 🌰，如果我们要为 新生代分配 256m 的内存（NewSize 与 MaxNewSize 设为一致），我们的参数应该这样来写：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-Xmn256m</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>GC 调优策略中很重要的一条经验总结是这样说的：</p><blockquote><p>将新对象预留在新生代，由于 Full GC 的成本远高于 Minor GC，因此尽可能将对象分配在新生代是明智的做法，实际项目中根据 GC 日志分析新生代空间大小分配是否合理，适当通过“-Xmn”命令调节新生代大小，最大限度降低新对象直接进入老年代的情况。</p></blockquote><p>另外，你还可以通过 <strong><code>-XX:NewRatio=&lt;int&gt;</code></strong> 来设置老年代与新生代内存的比值。</p><p>比如下面的参数就是设置老年代与新生代内存的比值为 1。也就是说老年代和新生代所占比值为 1：1，新生代占整个堆栈的 1/2。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-XX:NewRatio=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-3-显式指定永久代-元空间的大小" tabindex="-1"><a class="header-anchor" href="#_2-3-显式指定永久代-元空间的大小" aria-hidden="true">#</a> 2.3.显式指定永久代/元空间的大小</h3><p><strong>从 Java 8 开始，如果我们没有指定 Metaspace 的大小，随着更多类的创建，虚拟机会耗尽所有可用的系统内存（永久代并不会出现这种情况）。</strong></p><p>JDK 1.8 之前永久代还没被彻底移除的时候通常通过下面这些参数来调节方法区大小</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-XX:PermSize</span><span class="token operator">=</span>N <span class="token comment">#方法区 (永久代) 初始大小</span>
<span class="token parameter variable">-XX:MaxPermSize</span><span class="token operator">=</span>N <span class="token comment">#方法区 (永久代) 最大大小,超过这个值将会抛出 OutOfMemoryError 异常:java.lang.OutOfMemoryError: PermGen</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>相对而言，垃圾收集行为在这个区域是比较少出现的，但并非数据进入方法区后就“永久存在”了。</p><p><strong>JDK 1.8 的时候，方法区（HotSpot 的永久代）被彻底移除了（JDK1.7 就已经开始了），取而代之是元空间，元空间使用的是本地内存。</strong></p><p>下面是一些常用参数：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-XX:MetaspaceSize</span><span class="token operator">=</span>N <span class="token comment">#设置 Metaspace 的初始大小（是一个常见的误区，后面会解释）</span>
<span class="token parameter variable">-XX:MaxMetaspaceSize</span><span class="token operator">=</span>N <span class="token comment">#设置 Metaspace 的最大大小</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,21),k={href:"https://github.com/Snailclimb/JavaGuide/issues/1947",target:"_blank",rel:"noopener noreferrer"},X=e("p",null,[a("1、Metaspace 的初始容量并不是 "),e("code",null,"-XX:MetaspaceSize"),a(" 设置，无论 "),e("code",null,"-XX:MetaspaceSize"),a(" 配置什么值，对于 64 位 JVM 来说，Metaspace 的初始容量都是 21807104（约 20.8m）。")],-1),f={href:"https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/considerations.html",target:"_blank",rel:"noopener noreferrer"},M=e("blockquote",null,[e("p",null,"Specify a higher value for the option MetaspaceSize to avoid early garbage collections induced for class metadata. The amount of class metadata allocated for an application is application-dependent and general guidelines do not exist for the selection of MetaspaceSize. The default size of MetaspaceSize is platform-dependent and ranges from 12 MB to about 20 MB."),e("p",null,"MetaspaceSize 的默认大小取决于平台，范围从 12 MB 到大约 20 MB。")],-1),x={href:"https://mp.weixin.qq.com/s/jqfppqqd98DfAJHZhFbmxA",target:"_blank",rel:"noopener noreferrer"},G=t(`<p>2、Metaspace 由于使用不断扩容到<code>-XX:MetaspaceSize</code>参数指定的量，就会发生 FGC，且之后每次 Metaspace 扩容都会发生 Full GC。</p><p>也就是说，MetaspaceSize 表示 Metaspace 使用过程中触发 Full GC 的阈值，只对触发起作用。</p><p>垃圾搜集器内部是根据变量 <code>_capacity_until_GC</code>来判断 Metaspace 区域是否达到阈值的，初始化代码如下所示：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> MetaspaceGC<span class="token operator">::</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Set the high-water mark to MaxMetapaceSize during VM initializaton since</span>
  <span class="token comment">// we can&#39;t do a GC during initialization.</span>
  _capacity_until_GC <span class="token operator">=</span> MaxMetaspaceSize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),S={href:"https://github.com/Snailclimb/JavaGuide/issues/1204",target:"_blank",rel:"noopener noreferrer"},C=e("h2",{id:"_3-垃圾收集相关",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-垃圾收集相关","aria-hidden":"true"},"#"),a(" 3.垃圾收集相关")],-1),z=e("h3",{id:"_3-1-垃圾回收器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-1-垃圾回收器","aria-hidden":"true"},"#"),a(" 3.1.垃圾回收器")],-1),J={href:"http://www.oracle.com/webfolder/technetwork/tutorials/obe/java/gc01/index.html",target:"_blank",rel:"noopener noreferrer"},O=t(`<p>JVM 具有四种类型的 GC 实现：</p><ul><li>串行垃圾收集器</li><li>并行垃圾收集器</li><li>CMS 垃圾收集器</li><li>G1 垃圾收集器</li></ul><p>可以使用以下参数声明这些实现：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-XX:+UseSerialGC</span>
<span class="token parameter variable">-XX:+UseParallelGC</span>
<span class="token parameter variable">-XX:+UseParNewGC</span>
<span class="token parameter variable">-XX:+UseG1GC</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),w=e("em",null,"垃圾回收",-1),y={href:"https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/jvm/JVM%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6.md",target:"_blank",rel:"noopener noreferrer"},V=t(`<h3 id="_3-2-gc-日志记录" tabindex="-1"><a class="header-anchor" href="#_3-2-gc-日志记录" aria-hidden="true">#</a> 3.2.GC 日志记录</h3><p>生产环境上，或者其他要测试 GC 问题的环境上，一定会配置上打印 GC 日志的参数，便于分析 GC 相关的问题。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 必选</span>
<span class="token comment"># 打印基本 GC 信息</span>
<span class="token parameter variable">-XX:+PrintGCDetails</span>
<span class="token parameter variable">-XX:+PrintGCDateStamps</span>
<span class="token comment"># 打印对象分布</span>
<span class="token parameter variable">-XX:+PrintTenuringDistribution</span>
<span class="token comment"># 打印堆数据</span>
<span class="token parameter variable">-XX:+PrintHeapAtGC</span>
<span class="token comment"># 打印Reference处理信息</span>
<span class="token comment"># 强引用/弱引用/软引用/虚引用/finalize 相关的方法</span>
<span class="token parameter variable">-XX:+PrintReferenceGC</span>
<span class="token comment"># 打印STW时间</span>
<span class="token parameter variable">-XX:+PrintGCApplicationStoppedTime</span>

<span class="token comment"># 可选</span>
<span class="token comment"># 打印safepoint信息，进入 STW 阶段之前，需要要找到一个合适的 safepoint</span>
<span class="token parameter variable">-XX:+PrintSafepointStatistics</span>
<span class="token parameter variable">-XX:PrintSafepointStatisticsCount</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token comment"># GC日志输出的文件路径</span>
-Xloggc:/path/to/gc-%t.log
<span class="token comment"># 开启日志文件分割</span>
<span class="token parameter variable">-XX:+UseGCLogFileRotation</span>
<span class="token comment"># 最多分割几个文件，超过之后从头文件开始写</span>
<span class="token parameter variable">-XX:NumberOfGCLogFiles</span><span class="token operator">=</span><span class="token number">14</span>
<span class="token comment"># 每个文件上限大小，超过就触发分割</span>
<span class="token parameter variable">-XX:GCLogFileSize</span><span class="token operator">=</span>50M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-处理-oom" tabindex="-1"><a class="header-anchor" href="#_4-处理-oom" aria-hidden="true">#</a> 4.处理 OOM</h2><p>对于大型应用程序来说，面对内存不足错误是非常常见的，这反过来会导致应用程序崩溃。这是一个非常关键的场景，很难通过复制来解决这个问题。</p><p>这就是为什么 JVM 提供了一些参数，这些参数将堆内存转储到一个物理文件中，以后可以用来查找泄漏:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-XX:+HeapDumpOnOutOfMemoryError</span>
<span class="token parameter variable">-XX:HeapDumpPath</span><span class="token operator">=</span>./java_pid<span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span>.hprof
<span class="token parameter variable">-XX:OnOutOfMemoryError</span><span class="token operator">=</span><span class="token string">&quot;&lt; cmd args &gt;;&lt; cmd args &gt;&quot;</span>
<span class="token parameter variable">-XX:+UseGCOverheadLimit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里有几点需要注意:</p><ul><li><strong>HeapDumpOnOutOfMemoryError</strong> 指示 JVM 在遇到 <strong>OutOfMemoryError</strong> 错误时将 heap 转储到物理文件中。</li><li><strong>HeapDumpPath</strong> 表示要写入文件的路径; 可以给出任何文件名; 但是，如果 JVM 在名称中找到一个 <code>&lt;pid&gt;</code> 标记，则当前进程的进程 id 将附加到文件名中，并使用<code>.hprof</code>格式</li><li><strong>OnOutOfMemoryError</strong> 用于发出紧急命令，以便在内存不足的情况下执行; 应该在 <code>cmd args</code> 空间中使用适当的命令。例如，如果我们想在内存不足时重启服务器，我们可以设置参数: <code>-XX:OnOutOfMemoryError=&quot;shutdown -r&quot;</code> 。</li><li><strong>UseGCOverheadLimit</strong> 是一种策略，它限制在抛出 OutOfMemory 错误之前在 GC 中花费的 VM 时间的比例</li></ul><h2 id="_5-其他" tabindex="-1"><a class="header-anchor" href="#_5-其他" aria-hidden="true">#</a> 5.其他</h2><ul><li><code>-server</code> : 启用“ Server Hotspot VM”; 此参数默认用于 64 位 JVM</li><li><code>-XX:+UseStringDeduplication</code> : <em>Java 8u20</em> 引入了这个 JVM 参数，通过创建太多相同 String 的实例来减少不必要的内存使用; 这通过将重复 String 值减少为单个全局 <code>char []</code> 数组来优化堆内存。</li><li><code>-XX:+UseLWPSynchronization</code>: 设置基于 LWP (轻量级进程)的同步策略，而不是基于线程的同步。</li><li><code>-XX:LargePageSizeInBytes</code>: 设置用于 Java 堆的较大页面大小; 它采用 GB/MB/KB 的参数; 页面大小越大，我们可以更好地利用虚拟内存硬件资源; 然而，这可能会导致 PermGen 的空间大小更大，这反过来又会迫使 Java 堆空间的大小减小。</li><li><code>-XX:MaxHeapFreeRatio</code> : 设置 GC 后, 堆空闲的最大百分比，以避免收缩。</li><li><code>-XX:SurvivorRatio</code> : eden/survivor 空间的比例, 例如<code>-XX:SurvivorRatio=6</code> 设置每个 survivor 和 eden 之间的比例为 1:6。</li><li><code>-XX:+UseLargePages</code> : 如果系统支持，则使用大页面内存; 请注意，如果使用这个 JVM 参数，OpenJDK 7 可能会崩溃。</li><li><code>-XX:+UseStringCache</code> : 启用 String 池中可用的常用分配字符串的缓存。</li><li><code>-XX:+UseCompressedStrings</code> : 对 String 对象使用 <code>byte []</code> 类型，该类型可以用纯 ASCII 格式表示。</li><li><code>-XX:+OptimizeStringConcat</code> : 它尽可能优化字符串串联操作。</li></ul><h2 id="文章推荐" tabindex="-1"><a class="header-anchor" href="#文章推荐" aria-hidden="true">#</a> 文章推荐</h2><p>这里推荐了非常多优质的 JVM 实践相关的文章，推荐阅读，尤其是 JVM 性能优化和问题排查相关的文章。</p>`,13),N={href:"https://help.aliyun.com/document_detail/148851.html",target:"_blank",rel:"noopener noreferrer"},P={href:"https://help.aliyun.com/document_detail/383255.html",target:"_blank",rel:"noopener noreferrer"},B={href:"https://segmentfault.com/a/1190000039806436",target:"_blank",rel:"noopener noreferrer"},j={href:"https://juejin.cn/post/7078624931826794503",target:"_blank",rel:"noopener noreferrer"},E={href:"https://heapdump.cn/article/1859160",target:"_blank",rel:"noopener noreferrer"},q={href:"https://shuyi.tech/archives/have-a-try-in-jvm-combat",target:"_blank",rel:"noopener noreferrer"},D={href:"https://mp.weixin.qq.com/s/df1uxHWUXzhErxW1sZ6OvQ",target:"_blank",rel:"noopener noreferrer"},U={href:"https://tech.meituan.com/2020/11/12/java-9-cms-gc.html",target:"_blank",rel:"noopener noreferrer"},H={href:"https://tech.meituan.com/2017/12/29/jvm-optimize.html",target:"_blank",rel:"noopener noreferrer"},L=e("figure",null,[e("img",{src:"/github/javaguide/gongzhonghaoxuanchuan.png",alt:"JavaGuide 官方公众号",tabindex:"0"}),e("figcaption",null,"JavaGuide 官方公众号")],-1);function F(R,K){const n=i("ExternalLinkIcon");return o(),l("div",null,[e("blockquote",null,[e("p",null,[a("本文由 JavaGuide 翻译自 "),e("a",d,[a("https://www.baeldung.com/jvm-parameters"),s(n)]),a("，并对文章进行了大量的完善补充。")]),u]),m,e("p",null,[a("根据"),e("a",v,[a("Oracle 官方文档"),s(n)]),a("，在堆总可用内存配置完成之后，第二大影响因素是为 "),h,a(" 在堆内存所占的比例。默认情况下，YG 的最小大小为 1310 "),b,a("，最大大小为"),g,a("。")]),_,e("p",null,[e("strong",null,[a("🐛 修正（参见："),e("a",k,[a("issue#1947"),s(n)]),a("）")]),a("：")]),X,e("p",null,[a("可以参考 Oracle 官方文档 "),e("a",f,[a("Other Considerations"),s(n)]),a(" 中提到的：")]),M,e("p",null,[a("另外，还可以看一下这个试验："),e("a",x,[a("JVM 参数 MetaspaceSize 的误解"),s(n)]),a("。")]),G,e("p",null,[a("相关阅读："),e("a",S,[a("issue 更正：MaxMetaspaceSize 如果不指定大小的话，不会耗尽内存 #1204 "),s(n)]),a(" 。")]),C,z,e("p",null,[a("为了提高应用程序的稳定性，选择正确的"),e("a",J,[a("垃圾收集"),s(n)]),a("算法至关重要。")]),O,e("p",null,[a("有关"),w,a("实施的更多详细信息，请参见"),e("a",y,[a("此处"),s(n)]),a("。")]),V,e("ul",null,[e("li",null,[e("a",N,[a("JVM 参数配置说明 - 阿里云官方文档 - 2022"),s(n)])]),e("li",null,[e("a",P,[a("JVM 内存配置最佳实践 - 阿里云官方文档 - 2022"),s(n)])]),e("li",null,[e("a",B,[a("求你了，GC 日志打印别再瞎配置了 - 思否 - 2022"),s(n)])]),e("li",null,[e("a",j,[a("一次大量 JVM Native 内存泄露的排查分析（64M 问题） - 掘金 - 2022"),s(n)])]),e("li",null,[e("a",E,[a("一次线上 JVM 调优实践，FullGC40 次/天到 10 天一次的优化过程 - HeapDump - 2021"),s(n)])]),e("li",null,[e("a",q,[a("听说 JVM 性能优化很难？今天我小试了一把！ - 陈树义 - 2021"),s(n)])]),e("li",null,[e("a",D,[a("你们要的线上 GC 问题案例来啦 - 编了个程 - 2021"),s(n)])]),e("li",null,[e("a",U,[a("Java 中 9 种常见的 CMS GC 问题分析与解决 - 美团技术团队 - 2020"),s(n)])]),e("li",null,[e("a",H,[a("从实际案例聊聊 Java 应用的 GC 优化-美团技术团队 - 美团技术团队 - 2017"),s(n)])])]),L])}const W=r(p,[["render",F],["__file","jvm-parameters-intro.html.vue"]]);export{W as default};
