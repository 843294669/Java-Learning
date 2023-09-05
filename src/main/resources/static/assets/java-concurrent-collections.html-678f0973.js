import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as d,c as r,a as n,b as e,d as a,w as p,e as s}from"./app-62dd81fd.js";const u={},l=s('<p>JDK 提供的这些容器大部分在 <code>java.util.concurrent</code> 包中。</p><ul><li><strong><code>ConcurrentHashMap</code></strong> : 线程安全的 <code>HashMap</code></li><li><strong><code>CopyOnWriteArrayList</code></strong> : 线程安全的 <code>List</code>，在读多写少的场合性能非常好，远远好于 <code>Vector</code>。</li><li><strong><code>ConcurrentLinkedQueue</code></strong> : 高效的并发队列，使用链表实现。可以看做一个线程安全的 <code>LinkedList</code>，这是一个非阻塞队列。</li><li><strong><code>BlockingQueue</code></strong> : 这是一个接口，JDK 内部通过链表、数组等方式实现了这个接口。表示阻塞队列，非常适合用于作为数据共享的通道。</li><li><strong><code>ConcurrentSkipListMap</code></strong> : 跳表的实现。这是一个 Map，使用跳表的数据结构进行快速查找。</li></ul><h2 id="concurrenthashmap" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap" aria-hidden="true">#</a> ConcurrentHashMap</h2><p>我们知道 <code>HashMap</code> 不是线程安全的，在并发场景下如果要保证一种可行的方式是使用 <code>Collections.synchronizedMap()</code> 方法来包装我们的 <code>HashMap</code>。但这是通过使用一个全局的锁来同步不同线程间的并发访问，因此会带来不可忽视的性能问题。</p><p>所以就有了 <code>HashMap</code> 的线程安全版本—— <code>ConcurrentHashMap</code> 的诞生。</p><p>在 JDK1.7 的时候，<code>ConcurrentHashMap</code> 对整个桶数组进行了分割分段(<code>Segment</code>，分段锁)，每一把锁只锁容器其中一部分数据（下面有示意图），多线程访问容器里不同数据段的数据，就不会存在锁竞争，提高并发访问率。</p><p>到了 JDK1.8 的时候，<code>ConcurrentHashMap</code> 已经摒弃了 <code>Segment</code> 的概念，而是直接用 <code>Node</code> 数组+链表+红黑树的数据结构来实现，并发控制使用 <code>synchronized</code> 和 CAS 来操作。（JDK1.6 以后 <code>synchronized</code> 锁做了很多优化） 整个看起来就像是优化过且线程安全的 <code>HashMap</code>，虽然在 JDK1.8 中还能看到 <code>Segment</code> 的数据结构，但是已经简化了属性，只是为了兼容旧版本。</p>',7),k=n("code",null,"ConcurrentHashMap",-1),g=n("code",null,"ConcurrentHashMap",-1),h=s('<h2 id="copyonwritearraylist" tabindex="-1"><a class="header-anchor" href="#copyonwritearraylist" aria-hidden="true">#</a> CopyOnWriteArrayList</h2><p>在 JDK1.5 之前，如果想要使用并发安全的 <code>List</code> 只能选择 <code>Vector</code>。而 <code>Vector</code> 是一种老旧的集合，已经被淘汰。<code>Vector</code> 对于增删改查等方法基本都加了 <code>synchronized</code>，这种方式虽然能够保证同步，但这相当于对整个 <code>Vector</code> 加上了一把大锁，使得每个方法执行的时候都要去获得锁，导致性能非常低下。</p><p>JDK1.5 引入了 <code>Java.util.concurrent</code>（JUC）包，其中提供了很多线程安全且并发性能良好的容器，其中唯一的线程安全 <code>List</code> 实现就是 <code>CopyOnWriteArrayList</code> 。</p><p>对于大部分业务场景来说，读取操作往往是远大于写入操作的。由于读取操作不会对原有数据进行修改，因此，对于每次读取都进行加锁其实是一种资源浪费。相比之下，我们应该允许多个线程同时访问 <code>List</code> 的内部数据，毕竟对于读取操作来说是安全的。</p><p>这种思路与 <code>ReentrantReadWriteLock</code> 读写锁的设计思想非常类似，即读读不互斥、读写互斥、写写互斥（只有读读不互斥）。<code>CopyOnWriteArrayList</code> 更进一步地实现了这一思想。为了将读操作性能发挥到极致，<code>CopyOnWriteArrayList</code> 中的读取操作是完全无需加锁的。更加厉害的是，写入操作也不会阻塞读取操作，只有写写才会互斥。这样一来，读操作的性能就可以大幅度提升。</p><p><code>CopyOnWriteArrayList</code> 线程安全的核心在于其采用了 <strong>写时复制（Copy-On-Write）</strong> 的策略，从 <code>CopyOnWriteArrayList</code> 的名字就能看出了。</p><p>当需要修改（ <code>add</code>，<code>set</code>、<code>remove</code> 等操作） <code>CopyOnWriteArrayList</code> 的内容时，不会直接修改原数组，而是会先创建底层数组的副本，对副本数组进行修改，修改完之后再将修改后的数组赋值回去，这样就可以保证写操作不会影响读操作了。</p>',7),m=n("code",null,"CopyOnWriteArrayList",-1),v=n("code",null,"CopyOnWriteArrayList",-1),y=s(`<h2 id="concurrentlinkedqueue" tabindex="-1"><a class="header-anchor" href="#concurrentlinkedqueue" aria-hidden="true">#</a> ConcurrentLinkedQueue</h2><p>Java 提供的线程安全的 <code>Queue</code> 可以分为<strong>阻塞队列</strong>和<strong>非阻塞队列</strong>，其中阻塞队列的典型例子是 <code>BlockingQueue</code>，非阻塞队列的典型例子是 <code>ConcurrentLinkedQueue</code>，在实际应用中要根据实际需要选用阻塞队列或者非阻塞队列。 <strong>阻塞队列可以通过加锁来实现，非阻塞队列可以通过 CAS 操作实现。</strong></p><p>从名字可以看出，<code>ConcurrentLinkedQueue</code>这个队列使用链表作为其数据结构．<code>ConcurrentLinkedQueue</code> 应该算是在高并发环境中性能最好的队列了。它之所有能有很好的性能，是因为其内部复杂的实现。</p><p><code>ConcurrentLinkedQueue</code> 内部代码我们就不分析了，大家知道 <code>ConcurrentLinkedQueue</code> 主要使用 CAS 非阻塞算法来实现线程安全就好了。</p><p><code>ConcurrentLinkedQueue</code> 适合在对性能要求相对较高，同时对队列的读写存在多个线程同时进行的场景，即如果对队列加锁的成本较高则适合使用无锁的 <code>ConcurrentLinkedQueue</code> 来替代。</p><h2 id="blockingqueue" tabindex="-1"><a class="header-anchor" href="#blockingqueue" aria-hidden="true">#</a> BlockingQueue</h2><h3 id="blockingqueue-简介" tabindex="-1"><a class="header-anchor" href="#blockingqueue-简介" aria-hidden="true">#</a> BlockingQueue 简介</h3><p>上面我们己经提到了 <code>ConcurrentLinkedQueue</code> 作为高性能的非阻塞队列。下面我们要讲到的是阻塞队列——<code>BlockingQueue</code>。阻塞队列（<code>BlockingQueue</code>）被广泛使用在“生产者-消费者”问题中，其原因是 <code>BlockingQueue</code> 提供了可阻塞的插入和移除的方法。当队列容器已满，生产者线程会被阻塞，直到队列未满；当队列容器为空时，消费者线程会被阻塞，直至队列非空时为止。</p><p><code>BlockingQueue</code> 是一个接口，继承自 <code>Queue</code>，所以其实现类也可以作为 <code>Queue</code> 的实现来使用，而 <code>Queue</code> 又继承自 <code>Collection</code> 接口。下面是 <code>BlockingQueue</code> 的相关实现类：</p><figure><img src="/github/javaguide/java/51622268.jpg" alt="BlockingQueue 的实现类" tabindex="0"><figcaption>BlockingQueue 的实现类</figcaption></figure><p>下面主要介绍一下 3 个常见的 <code>BlockingQueue</code> 的实现类：<code>ArrayBlockingQueue</code>、<code>LinkedBlockingQueue</code>、<code>PriorityBlockingQueue</code> 。</p><h3 id="arrayblockingqueue" tabindex="-1"><a class="header-anchor" href="#arrayblockingqueue" aria-hidden="true">#</a> ArrayBlockingQueue</h3><p><code>ArrayBlockingQueue</code> 是 <code>BlockingQueue</code> 接口的有界队列实现类，底层采用数组来实现。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArrayBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span>
<span class="token keyword">extends</span> <span class="token class-name">AbstractQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span>
<span class="token keyword">implements</span> <span class="token class-name">BlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">Serializable</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ArrayBlockingQueue</code> 一旦创建，容量不能改变。其并发控制采用可重入锁 <code>ReentrantLock</code> ，不管是插入操作还是读取操作，都需要获取到锁才能进行操作。当队列容量满时，尝试将元素放入队列将导致操作阻塞;尝试从一个空队列中取一个元素也会同样阻塞。</p><p><code>ArrayBlockingQueue</code> 默认情况下不能保证线程访问队列的公平性，所谓公平性是指严格按照线程等待的绝对时间顺序，即最先等待的线程能够最先访问到 <code>ArrayBlockingQueue</code>。而非公平性则是指访问 <code>ArrayBlockingQueue</code> 的顺序不是遵守严格的时间顺序，有可能存在，当 <code>ArrayBlockingQueue</code> 可以被访问时，长时间阻塞的线程依然无法访问到 <code>ArrayBlockingQueue</code>。如果保证公平性，通常会降低吞吐量。如果需要获得公平性的 <code>ArrayBlockingQueue</code>，可采用如下代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">ArrayBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> blockingQueue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="linkedblockingqueue" tabindex="-1"><a class="header-anchor" href="#linkedblockingqueue" aria-hidden="true">#</a> LinkedBlockingQueue</h3><p><code>LinkedBlockingQueue</code> 底层基于<strong>单向链表</strong>实现的阻塞队列，可以当做无界队列也可以当做有界队列来使用，同样满足 FIFO 的特性，与 <code>ArrayBlockingQueue</code> 相比起来具有更高的吞吐量，为了防止 <code>LinkedBlockingQueue</code> 容量迅速增，损耗大量内存。通常在创建 <code>LinkedBlockingQueue</code> 对象时，会指定其大小，如果未指定，容量等于 <code>Integer.MAX_VALUE</code> 。</p><p><strong>相关构造方法:</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     *某种意义上的无界队列
     * Creates a <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">LinkedBlockingQueue</span></span></span><span class="token punctuation">}</span> with a capacity of
     * <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Integer</span><span class="token punctuation">#</span><span class="token field">MAX_VALUE</span></span><span class="token punctuation">}</span>.
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">LinkedBlockingQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *有界队列
     * Creates a <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">LinkedBlockingQueue</span></span></span><span class="token punctuation">}</span> with the given (fixed) capacity.
     *
     * <span class="token keyword">@param</span> <span class="token parameter">capacity</span> the capacity of this queue
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IllegalArgumentException</span></span> if <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">capacity</span></span><span class="token punctuation">}</span> is not greater
     *         than zero
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">LinkedBlockingQueue</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>capacity <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>capacity <span class="token operator">=</span> capacity<span class="token punctuation">;</span>
        last <span class="token operator">=</span> head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="priorityblockingqueue" tabindex="-1"><a class="header-anchor" href="#priorityblockingqueue" aria-hidden="true">#</a> PriorityBlockingQueue</h3><p><code>PriorityBlockingQueue</code> 是一个支持优先级的无界阻塞队列。默认情况下元素采用自然顺序进行排序，也可以通过自定义类实现 <code>compareTo()</code> 方法来指定元素排序规则，或者初始化时通过构造器参数 <code>Comparator</code> 来指定排序规则。</p><p><code>PriorityBlockingQueue</code> 并发控制采用的是可重入锁 <code>ReentrantLock</code>，队列为无界队列（<code>ArrayBlockingQueue</code> 是有界队列，<code>LinkedBlockingQueue</code> 也可以通过在构造函数中传入 <code>capacity</code> 指定队列最大的容量，但是 <code>PriorityBlockingQueue</code> 只能指定初始的队列大小，后面插入元素的时候，<strong>如果空间不够的话会自动扩容</strong>）。</p><p>简单地说，它就是 <code>PriorityQueue</code> 的线程安全版本。不可以插入 null 值，同时，插入队列的对象必须是可比较大小的（comparable），否则报 <code>ClassCastException</code> 异常。它的插入操作 put 方法不会 block，因为它是无界队列（take 方法在队列为空的时候会阻塞）。</p>`,25),b=n("strong",null,"推荐文章：",-1),Q={href:"https://javadoop.com/post/java-concurrent-queue",target:"_blank",rel:"noopener noreferrer"},L=n("h2",{id:"concurrentskiplistmap",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#concurrentskiplistmap","aria-hidden":"true"},"#"),e(" ConcurrentSkipListMap")],-1),B={href:"https://time.geekbang.org/column/intro/126?code=zl3GYeAsRI4rEJIBNu5B/km7LSZsPDlGWQEpAYw5Vu0=&utm_term=SPoster",title:"《数据结构与算法之美》",target:"_blank",rel:"noopener noreferrer"},f=s('<p>为了引出 <code>ConcurrentSkipListMap</code>，先带着大家简单理解一下跳表。</p><p>对于一个单链表，即使链表是有序的，如果我们想要在其中查找某个数据，也只能从头到尾遍历链表，这样效率自然就会很低，跳表就不一样了。跳表是一种可以用来快速查找的数据结构，有点类似于平衡树。它们都可以对元素进行快速的查找。但一个重要的区别是：对平衡树的插入和删除往往很可能导致平衡树进行一次全局的调整。而对跳表的插入和删除只需要对整个数据结构的局部进行操作即可。这样带来的好处是：在高并发的情况下，你会需要一个全局锁来保证整个平衡树的线程安全。而对于跳表，你只需要部分锁即可。这样，在高并发环境下，你就可以拥有更好的性能。而就查询的性能而言，跳表的时间复杂度也是 <strong>O(logn)</strong> 所以在并发数据结构中，JDK 使用跳表来实现一个 Map。</p><p>跳表的本质是同时维护了多个链表，并且链表是分层的，</p><figure><img src="/github/javaguide/java/93666217.jpg" alt="2级索引跳表" tabindex="0"><figcaption>2级索引跳表</figcaption></figure><p>最低层的链表维护了跳表内所有的元素，每上面一层链表都是下面一层的子集。</p><p>跳表内的所有链表的元素都是排序的。查找时，可以从顶级链表开始找。一旦发现被查找的元素大于当前链表中的取值，就会转入下一层链表继续找。这也就是说在查找过程中，搜索是跳跃式的。如上图所示，在跳表中查找元素 18。</p><figure><img src="/github/javaguide/java/32005738.jpg" alt="在跳表中查找元素18" tabindex="0"><figcaption>在跳表中查找元素18</figcaption></figure><p>查找 18 的时候原来需要遍历 18 次，现在只需要 7 次即可。针对链表长度比较大的时候，构建索引查找效率的提升就会非常明显。</p><p>从上面很容易看出，<strong>跳表是一种利用空间换时间的算法。</strong></p><p>使用跳表实现 <code>Map</code> 和使用哈希算法实现 <code>Map</code> 的另外一个不同之处是：哈希并不会保存元素的顺序，而跳表内所有的元素都是排序的。因此在对跳表进行遍历时，你会得到一个有序的结果。所以，如果你的应用需要有序性，那么跳表就是你不二的选择。JDK 中实现这一数据结构的类是 <code>ConcurrentSkipListMap</code>。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ul><li>《实战 Java 高并发程序设计》</li><li>https://javadoop.com/post/java-concurrent-queue</li><li>https://juejin.im/post/5aeebd02518825672f19c546</li></ul><figure><img src="/github/javaguide/gongzhonghaoxuanchuan.png" alt="JavaGuide 官方公众号" tabindex="0"><figcaption>JavaGuide 官方公众号</figcaption></figure>',13);function _(C,A){const o=t("RouterLink"),c=t("ExternalLinkIcon");return d(),r("div",null,[l,n("p",null,[e("关于 "),k,e(" 的详细介绍，请看我写的这篇文章："),a(o,{to:"/java/collection/concurrent-hash-map-source-code.html"},{default:p(()=>[g,e(" 源码分析")]),_:1}),e("。")]),h,n("p",null,[e("关于 "),m,e(" 的详细介绍，请看我写的这篇文章："),a(o,{to:"/java/collection/copyonwritearraylist-source-code.html"},{default:p(()=>[v,e(" 源码分析")]),_:1}),e("。")]),y,n("p",null,[b,e(),n("a",Q,[e("《解读 Java 并发队列 BlockingQueue》"),a(c)])]),L,n("blockquote",null,[n("p",null,[e("下面这部分内容参考了极客时间专栏"),n("a",B,[e("《数据结构与算法之美》"),a(c)]),e("以及《实战 Java 高并发程序设计》。")])]),f])}const x=i(u,[["render",_],["__file","java-concurrent-collections.html.vue"]]);export{x as default};
