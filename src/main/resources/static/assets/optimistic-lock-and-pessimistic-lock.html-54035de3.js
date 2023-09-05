import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as c,c as t,a,b as n,d as i,e as s}from"./app-62dd81fd.js";const l={},d=s(`<p>如果将悲观锁（Pessimistic Lock）和乐观锁（PessimisticLock 或 OptimisticLock）对应到现实生活中来。悲观锁有点像是一位比较悲观（也可以说是未雨绸缪）的人，总是会假设最坏的情况，避免出现问题。乐观锁有点像是一位比较乐观的人，总是会假设最好的情况，在要出现问题之前快速解决问题。</p><p>在程序世界中，乐观锁和悲观锁的最终目的都是为了保证线程安全，避免在并发场景下的资源竞争问题。但是，相比于乐观锁，悲观锁对性能的影响更大！</p><h2 id="什么是悲观锁" tabindex="-1"><a class="header-anchor" href="#什么是悲观锁" aria-hidden="true">#</a> 什么是悲观锁？</h2><p>悲观锁总是假设最坏的情况，认为共享资源每次被访问的时候就会出现问题(比如共享数据被修改)，所以每次在获取资源操作的时候都会上锁，这样其他线程想拿到这个资源就会阻塞直到锁被上一个持有者释放。也就是说，<strong>共享资源每次只给一个线程使用，其它线程阻塞，用完后再把资源转让给其它线程</strong>。</p><p>像 Java 中<code>synchronized</code>和<code>ReentrantLock</code>等独占锁就是悲观锁思想的实现。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">performSynchronisedTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 需要同步的操作</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token class-name">Lock</span> lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
   <span class="token comment">// 需要同步的操作</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>高并发的场景下，激烈的锁竞争会造成线程阻塞，大量阻塞线程会导致系统的上下文切换，增加系统的性能开销。并且，悲观锁还可能会存在死锁问题，影响代码的正常运行。</p><h2 id="什么是乐观锁" tabindex="-1"><a class="header-anchor" href="#什么是乐观锁" aria-hidden="true">#</a> 什么是乐观锁？</h2><p>乐观锁总是假设最好的情况，认为共享资源每次被访问的时候不会出现问题，线程可以不停地执行，无需加锁也无需等待，只是在提交修改的时候去验证对应的资源（也就是数据）是否被其它线程修改了（具体方法可以使用版本号机制或 CAS 算法）。</p><p>像 Java 中<code>java.util.concurrent.atomic</code>包下面的原子变量类（比如<code>AtomicInteger</code>、<code>LongAdder</code>）就是使用了乐观锁的一种实现方式 <strong>CAS</strong> 实现的。</p><figure><img src="/github/javaguide/java/JUC原子类概览-20230814005415437.png" alt="JUC原子类概览" tabindex="0"><figcaption>JUC原子类概览</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// LongAdder 在高并发场景下会比 AtomicInteger 和 AtomicLong 的性能更好</span>
<span class="token comment">// 代价就是会消耗更多的内存空间（空间换时间）</span>
<span class="token class-name">LongAdder</span> longAdder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LongAdder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 自增</span>
longAdder<span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 获取结果</span>
longAdder<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>高并发的场景下，乐观锁相比悲观锁来说，不存在锁竞争造成线程阻塞，也不会有死锁的问题，在性能上往往会更胜一筹。但是，如果冲突频繁发生（写占比非常多的情况），会频繁失败和重试（悲观锁的开销是固定的），这样同样会非常影响性能，导致 CPU 飙升。</p><p>不过，大量失败重试的问题也是可以解决的，像我们前面提到的 <code>LongAdder</code>以空间换时间的方式就解决了这个问题。</p><p>理论上来说：</p><ul><li>悲观锁通常多用于写比较多的情况下（多写场景，竞争激烈），这样可以避免频繁失败和重试影响性能，悲观锁的开销是固定的。不过，如果乐观锁解决了频繁失败和重试这个问题的话（比如<code>LongAdder</code>），也是可以考虑使用乐观锁的，要视实际情况而定。</li><li>乐观锁通常多于写比较少的情况下（多读场景，竞争较少），这样可以避免频繁加锁影响性能。不过，乐观锁主要针对的对象是单个共享变量（参考<code>java.util.concurrent.atomic</code>包下面的原子变量类）。</li></ul><h2 id="如何实现乐观锁" tabindex="-1"><a class="header-anchor" href="#如何实现乐观锁" aria-hidden="true">#</a> 如何实现乐观锁？</h2><p>乐观锁一般会使用版本号机制或 CAS 算法实现，CAS 算法相对来说更多一些，这里需要格外注意。</p><h3 id="版本号机制" tabindex="-1"><a class="header-anchor" href="#版本号机制" aria-hidden="true">#</a> 版本号机制</h3><p>一般是在数据表中加上一个数据版本号 <code>version</code> 字段，表示数据被修改的次数。当数据被修改时，<code>version</code> 值会加一。当线程 A 要更新数据值时，在读取数据的同时也会读取 <code>version</code> 值，在提交更新时，若刚才读取到的 version 值为当前数据库中的 <code>version</code> 值相等时才更新，否则重试更新操作，直到更新成功。</p><p><strong>举一个简单的例子</strong>：假设数据库中帐户信息表中有一个 version 字段，当前值为 1 ；而当前帐户余额字段（ <code>balance</code> ）为 $100 。</p><ol><li>操作员 A 此时将其读出（ <code>version</code>=1 ），并从其帐户余额中扣除 $50（ $100-$50 ）。</li><li>在操作员 A 操作的过程中，操作员 B 也读入此用户信息（ <code>version</code>=1 ），并从其帐户余额中扣除 $20 （ $100-$20 ）。</li><li>操作员 A 完成了修改工作，将数据版本号（ <code>version</code>=1 ），连同帐户扣除后余额（ <code>balance</code>=$50 ），提交至数据库更新，此时由于提交数据版本等于数据库记录当前版本，数据被更新，数据库记录 <code>version</code> 更新为 2 。</li><li>操作员 B 完成了操作，也将版本号（ <code>version</code>=1 ）试图向数据库提交数据（ <code>balance</code>=$80 ），但此时比对数据库记录版本时发现，操作员 B 提交的数据版本号为 1 ，数据库记录当前版本也为 2 ，不满足 “ 提交版本必须等于当前版本才能执行更新 “ 的乐观锁策略，因此，操作员 B 的提交被驳回。</li></ol><p>这样就避免了操作员 B 用基于 <code>version</code>=1 的旧数据修改的结果覆盖操作员 A 的操作结果的可能。</p><h3 id="cas-算法" tabindex="-1"><a class="header-anchor" href="#cas-算法" aria-hidden="true">#</a> CAS 算法</h3><p>CAS 的全称是 <strong>Compare And Swap（比较与交换）</strong> ，用于实现乐观锁，被广泛应用于各大框架中。CAS 的思想很简单，就是用一个预期值和要更新的变量值进行比较，两值相等才会进行更新。</p><p>CAS 是一个原子操作，底层依赖于一条 CPU 的原子指令。</p><blockquote><p><strong>原子操作</strong> 即最小不可拆分的操作，也就是说操作一旦开始，就不能被打断，直到操作完成。</p></blockquote><p>CAS 涉及到三个操作数：</p><ul><li><strong>V</strong>：要更新的变量值(Var)</li><li><strong>E</strong>：预期值(Expected)</li><li><strong>N</strong>：拟写入的新值(New)</li></ul><p>当且仅当 V 的值等于 E 时，CAS 通过原子方式用新值 N 来更新 V 的值。如果不等，说明已经有其它线程更新了 V，则当前线程放弃更新。</p><p><strong>举一个简单的例子</strong>：线程 A 要修改变量 i 的值为 6，i 原值为 1（V = 1，E=1，N=6，假设不存在 ABA 问题）。</p><ol><li>i 与 1 进行比较，如果相等， 则说明没被其他线程修改，可以被设置为 6 。</li><li>i 与 1 进行比较，如果不相等，则说明被其他线程修改，当前线程放弃更新，CAS 操作失败。</li></ol><p>当多个线程同时使用 CAS 操作一个变量时，只有一个会胜出，并成功更新，其余均会失败，但失败的线程并不会被挂起，仅是被告知失败，并且允许再次尝试，当然也允许失败的线程放弃操作。</p><p>Java 语言并没有直接实现 CAS，CAS 相关的实现是通过 C++ 内联汇编的形式实现的（JNI 调用）。因此， CAS 的具体实现和操作系统以及 CPU 都有关系。</p><p><code>sun.misc</code>包下的<code>Unsafe</code>类提供了<code>compareAndSwapObject</code>、<code>compareAndSwapInt</code>、<code>compareAndSwapLong</code>方法来实现的对<code>Object</code>、<code>int</code>、<code>long</code>类型的 CAS 操作</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
	*  CAS
  * <span class="token keyword">@param</span> <span class="token parameter">o</span>         包含要修改field的对象
  * <span class="token keyword">@param</span> <span class="token parameter">offset</span>    对象中某field的偏移量
  * <span class="token keyword">@param</span> <span class="token parameter">expected</span>  期望值
  * <span class="token keyword">@param</span> <span class="token parameter">update</span>    更新值
  * <span class="token keyword">@return</span>          true | false
  */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSwapObject</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">,</span> <span class="token keyword">long</span> offset<span class="token punctuation">,</span>  <span class="token class-name">Object</span> expected<span class="token punctuation">,</span> <span class="token class-name">Object</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSwapInt</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">,</span> <span class="token keyword">long</span> offset<span class="token punctuation">,</span> <span class="token keyword">int</span> expected<span class="token punctuation">,</span><span class="token keyword">int</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSwapLong</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">,</span> <span class="token keyword">long</span> offset<span class="token punctuation">,</span> <span class="token keyword">long</span> expected<span class="token punctuation">,</span> <span class="token keyword">long</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),r=a("code",null,"Unsafe",-1),u={href:"https://javaguide.cn/java/basis/unsafe.html",target:"_blank",rel:"noopener noreferrer"},k=s(`<h2 id="乐观锁存在哪些问题" tabindex="-1"><a class="header-anchor" href="#乐观锁存在哪些问题" aria-hidden="true">#</a> 乐观锁存在哪些问题？</h2><p>ABA 问题是乐观锁最常见的问题。</p><h3 id="aba-问题" tabindex="-1"><a class="header-anchor" href="#aba-问题" aria-hidden="true">#</a> ABA 问题</h3><p>如果一个变量 V 初次读取的时候是 A 值，并且在准备赋值的时候检查到它仍然是 A 值，那我们就能说明它的值没有被其他线程修改过了吗？很明显是不能的，因为在这段时间它的值可能被改为其他值，然后又改回 A，那 CAS 操作就会误认为它从来没有被修改过。这个问题被称为 CAS 操作的 <strong>&quot;ABA&quot;问题。</strong></p><p>ABA 问题的解决思路是在变量前面追加上<strong>版本号或者时间戳</strong>。JDK 1.5 以后的 <code>AtomicStampedReference</code> 类就是用来解决 ABA 问题的，其中的 <code>compareAndSet()</code> 方法就是首先检查当前引用是否等于预期引用，并且当前标志是否等于预期标志，如果全部相等，则以原子方式将该引用和该标志的值设置为给定的更新值。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSet</span><span class="token punctuation">(</span><span class="token class-name">V</span>   expectedReference<span class="token punctuation">,</span>
                             <span class="token class-name">V</span>   newReference<span class="token punctuation">,</span>
                             <span class="token keyword">int</span> expectedStamp<span class="token punctuation">,</span>
                             <span class="token keyword">int</span> newStamp<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Pair</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> current <span class="token operator">=</span> pair<span class="token punctuation">;</span>
    <span class="token keyword">return</span>
        expectedReference <span class="token operator">==</span> current<span class="token punctuation">.</span>reference <span class="token operator">&amp;&amp;</span>
        expectedStamp <span class="token operator">==</span> current<span class="token punctuation">.</span>stamp <span class="token operator">&amp;&amp;</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span>newReference <span class="token operator">==</span> current<span class="token punctuation">.</span>reference <span class="token operator">&amp;&amp;</span>
          newStamp <span class="token operator">==</span> current<span class="token punctuation">.</span>stamp<span class="token punctuation">)</span> <span class="token operator">||</span>
         <span class="token function">casPair</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> <span class="token class-name">Pair</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>newReference<span class="token punctuation">,</span> newStamp<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环时间长开销大" tabindex="-1"><a class="header-anchor" href="#循环时间长开销大" aria-hidden="true">#</a> 循环时间长开销大</h3><p>CAS 经常会用到自旋操作来进行重试，也就是不成功就一直循环执行直到成功。如果长时间不成功，会给 CPU 带来非常大的执行开销。</p><p>如果 JVM 能支持处理器提供的 pause 指令那么效率会有一定的提升，pause 指令有两个作用：</p><ol><li>可以延迟流水线执行指令，使 CPU 不会消耗过多的执行资源，延迟的时间取决于具体实现的版本，在一些处理器上延迟时间是零。</li><li>可以避免在退出循环的时候因内存顺序冲而引起 CPU 流水线被清空，从而提高 CPU 的执行效率。</li></ol><h3 id="只能保证一个共享变量的原子操作" tabindex="-1"><a class="header-anchor" href="#只能保证一个共享变量的原子操作" aria-hidden="true">#</a> 只能保证一个共享变量的原子操作</h3><p>CAS 只对单个共享变量有效，当操作涉及跨多个共享变量时 CAS 无效。但是从 JDK 1.5 开始，提供了<code>AtomicReference</code>类来保证引用对象之间的原子性，你可以把多个变量放在一个对象里来进行 CAS 操作.所以我们可以使用锁或者利用<code>AtomicReference</code>类把多个共享变量合并成一个共享变量来操作。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ul><li>高并发的场景下，激烈的锁竞争会造成线程阻塞，大量阻塞线程会导致系统的上下文切换，增加系统的性能开销。并且，悲观锁还可能会存在死锁问题，影响代码的正常运行。乐观锁相比悲观锁来说，不存在锁竞争造成线程阻塞，也不会有死锁的问题，在性能上往往会更胜一筹。不过，如果冲突频繁发生（写占比非常多的情况），会频繁失败和重试，这样同样会非常影响性能，导致 CPU 飙升。</li><li>乐观锁一般会使用版本号机制或 CAS 算法实现，CAS 算法相对来说更多一些，这里需要格外注意。</li><li>CAS 的全称是 <strong>Compare And Swap（比较与交换）</strong> ，用于实现乐观锁，被广泛应用于各大框架中。CAS 的思想很简单，就是用一个预期值和要更新的变量值进行比较，两值相等才会进行更新。</li><li>乐观锁的问题：ABA 问题、循环时间长开销大、只能保证一个共享变量的原子操作。</li></ul><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ul><li>《Java 并发编程核心 78 讲》</li><li>通俗易懂 悲观锁、乐观锁、可重入锁、自旋锁、偏向锁、轻量/重量级锁、读写锁、各种锁及其 Java 实现！：https://zhuanlan.zhihu.com/p/71156910</li><li>一文彻底搞懂 CAS 实现原理 &amp; 深入到 CPU 指令：https://zhuanlan.zhihu.com/p/94976168</li></ul><figure><img src="/github/javaguide/gongzhonghaoxuanchuan.png" alt="JavaGuide 官方公众号" tabindex="0"><figcaption>JavaGuide 官方公众号</figcaption></figure>`,17);function v(m,h){const e=p("ExternalLinkIcon");return c(),t("div",null,[d,a("p",null,[n("关于 "),r,n(" 类的详细介绍可以看这篇文章："),a("a",u,[n("Java 魔法类 Unsafe 详解 - JavaGuide - 2022"),i(e)]),n(" 。")]),k])}const A=o(l,[["render",v],["__file","optimistic-lock-and-pessimistic-lock.html.vue"]]);export{A as default};
