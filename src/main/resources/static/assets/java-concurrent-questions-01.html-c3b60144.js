import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c as u,a as n,b as s,d as a,w as c,e}from"./app-7f13a6e3.js";const r={},d={class:"hint-container tip"},k=n("p",{class:"hint-container-title"},"这是一则或许对你有用的小广告",-1),h=n("strong",null,"面试专版",-1),v=n("strong",null,"知识星球",-1),g=e(`<h2 id="什么是线程和进程" tabindex="-1"><a class="header-anchor" href="#什么是线程和进程" aria-hidden="true">#</a> 什么是线程和进程?</h2><h3 id="何为进程" tabindex="-1"><a class="header-anchor" href="#何为进程" aria-hidden="true">#</a> 何为进程?</h3><p>进程是程序的一次执行过程，是系统运行程序的基本单位，因此进程是动态的。系统运行一个程序即是一个进程从创建，运行到消亡的过程。</p><p>在 Java 中，当我们启动 main 函数时其实就是启动了一个 JVM 的进程，而 main 函数所在的线程就是这个进程中的一个线程，也称主线程。</p><p>如下图所示，在 Windows 中通过查看任务管理器的方式，我们就可以清楚看到 Windows 当前运行的进程（<code>.exe</code> 文件的运行）。</p><figure><img src="/2019-6/进程示例图片-Windows.png" alt="进程示例图片-Windows" tabindex="0"><figcaption>进程示例图片-Windows</figcaption></figure><h3 id="何为线程" tabindex="-1"><a class="header-anchor" href="#何为线程" aria-hidden="true">#</a> 何为线程?</h3><p>线程与进程相似，但线程是一个比进程更小的执行单位。一个进程在其执行的过程中可以产生多个线程。与进程不同的是同类的多个线程共享进程的<strong>堆</strong>和<strong>方法区</strong>资源，但每个线程有自己的<strong>程序计数器</strong>、<strong>虚拟机栈</strong>和<strong>本地方法栈</strong>，所以系统在产生一个线程，或是在各个线程之间作切换工作时，负担要比进程小得多，也正因为如此，线程也被称为轻量级进程。</p><p>Java 程序天生就是多线程程序，我们可以通过 JMX 来看看一个普通的 Java 程序有哪些线程，代码如下。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MultiThread</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 获取 Java 线程管理 MXBean</span>
	<span class="token class-name">ThreadMXBean</span> threadMXBean <span class="token operator">=</span> <span class="token class-name">ManagementFactory</span><span class="token punctuation">.</span><span class="token function">getThreadMXBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 不需要获取同步的 monitor 和 synchronizer 信息，仅获取线程和线程堆栈信息</span>
		<span class="token class-name">ThreadInfo</span><span class="token punctuation">[</span><span class="token punctuation">]</span> threadInfos <span class="token operator">=</span> threadMXBean<span class="token punctuation">.</span><span class="token function">dumpAllThreads</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 遍历线程信息，仅打印线程 ID 和线程名称信息</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">ThreadInfo</span> threadInfo <span class="token operator">:</span> threadInfos<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;[&quot;</span> <span class="token operator">+</span> threadInfo<span class="token punctuation">.</span><span class="token function">getThreadId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;] &quot;</span> <span class="token operator">+</span> threadInfo<span class="token punctuation">.</span><span class="token function">getThreadName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述程序输出如下（输出内容可能不同，不用太纠结下面每个线程的作用，只用知道 main 线程执行 main 方法即可）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[5] Attach Listener //添加事件
[4] Signal Dispatcher // 分发处理给 JVM 信号的线程
[3] Finalizer //调用对象 finalize 方法的线程
[2] Reference Handler //清除 reference 线程
[1] main //main 线程,程序入口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的输出内容可以看出：<strong>一个 Java 程序的运行是 main 线程和多个其他线程同时运行</strong>。</p><h2 id="请简要描述线程与进程的关系-区别及优缺点" tabindex="-1"><a class="header-anchor" href="#请简要描述线程与进程的关系-区别及优缺点" aria-hidden="true">#</a> 请简要描述线程与进程的关系,区别及优缺点？</h2><p>从 JVM 角度说进程和线程之间的关系。</p><h3 id="图解进程和线程的关系" tabindex="-1"><a class="header-anchor" href="#图解进程和线程的关系" aria-hidden="true">#</a> 图解进程和线程的关系</h3><p>下图是 Java 内存区域，通过下图我们从 JVM 的角度来说一下线程和进程之间的关系。</p><figure><img src="/github/javaguide/java/jvm/java-runtime-data-areas-jdk1.8.png" alt="Java 运行时数据区域（JDK1.8 之后）" tabindex="0"><figcaption>Java 运行时数据区域（JDK1.8 之后）</figcaption></figure><p>从上图可以看出：一个进程中可以有多个线程，多个线程共享进程的<strong>堆</strong>和<strong>方法区 (JDK1.8 之后的元空间)<strong>资源，但是每个线程有自己的</strong>程序计数器</strong>、<strong>虚拟机栈</strong> 和 <strong>本地方法栈</strong>。</p><p><strong>总结：</strong> <strong>线程是进程划分成的更小的运行单位。线程和进程最大的不同在于基本上各进程是独立的，而各线程则不一定，因为同一进程中的线程极有可能会相互影响。线程执行开销小，但不利于资源的管理和保护；而进程正相反。</strong></p><p>下面是该知识点的扩展内容！</p><p>下面来思考这样一个问题：为什么<strong>程序计数器</strong>、<strong>虚拟机栈</strong>和<strong>本地方法栈</strong>是线程私有的呢？为什么堆和方法区是线程共享的呢？</p><h3 id="程序计数器为什么是私有的" tabindex="-1"><a class="header-anchor" href="#程序计数器为什么是私有的" aria-hidden="true">#</a> 程序计数器为什么是私有的?</h3><p>程序计数器主要有下面两个作用：</p><ol><li>字节码解释器通过改变程序计数器来依次读取指令，从而实现代码的流程控制，如：顺序执行、选择、循环、异常处理。</li><li>在多线程的情况下，程序计数器用于记录当前线程执行的位置，从而当线程被切换回来的时候能够知道该线程上次运行到哪儿了。</li></ol><p>需要注意的是，如果执行的是 native 方法，那么程序计数器记录的是 undefined 地址，只有执行的是 Java 代码时程序计数器记录的才是下一条指令的地址。</p><p>所以，程序计数器私有主要是为了<strong>线程切换后能恢复到正确的执行位置</strong>。</p><h3 id="虚拟机栈和本地方法栈为什么是私有的" tabindex="-1"><a class="header-anchor" href="#虚拟机栈和本地方法栈为什么是私有的" aria-hidden="true">#</a> 虚拟机栈和本地方法栈为什么是私有的?</h3><ul><li><strong>虚拟机栈：</strong> 每个 Java 方法在执行之前会创建一个栈帧用于存储局部变量表、操作数栈、常量池引用等信息。从方法调用直至执行完成的过程，就对应着一个栈帧在 Java 虚拟机栈中入栈和出栈的过程。</li><li><strong>本地方法栈：</strong> 和虚拟机栈所发挥的作用非常相似，区别是：<strong>虚拟机栈为虚拟机执行 Java 方法 （也就是字节码）服务，而本地方法栈则为虚拟机使用到的 Native 方法服务。</strong> 在 HotSpot 虚拟机中和 Java 虚拟机栈合二为一。</li></ul><p>所以，为了<strong>保证线程中的局部变量不被别的线程访问到</strong>，虚拟机栈和本地方法栈是线程私有的。</p><h3 id="一句话简单了解堆和方法区" tabindex="-1"><a class="header-anchor" href="#一句话简单了解堆和方法区" aria-hidden="true">#</a> 一句话简单了解堆和方法区</h3><p>堆和方法区是所有线程共享的资源，其中堆是进程中最大的一块内存，主要用于存放新创建的对象 (几乎所有对象都在这里分配内存)，方法区主要用于存放已被加载的类信息、常量、静态变量、即时编译器编译后的代码等数据。</p><h2 id="并发与并行的区别" tabindex="-1"><a class="header-anchor" href="#并发与并行的区别" aria-hidden="true">#</a> 并发与并行的区别</h2><ul><li><strong>并发</strong>：两个及两个以上的作业在同一 <strong>时间段</strong> 内执行。</li><li><strong>并行</strong>：两个及两个以上的作业在同一 <strong>时刻</strong> 执行。</li></ul><p>最关键的点是：是否是 <strong>同时</strong> 执行。</p><h2 id="同步和异步的区别" tabindex="-1"><a class="header-anchor" href="#同步和异步的区别" aria-hidden="true">#</a> 同步和异步的区别</h2><ul><li><strong>同步</strong>：发出一个调用之后，在没有得到结果之前， 该调用就不可以返回，一直等待。</li><li><strong>异步</strong>：调用在发出之后，不用等待返回结果，该调用直接返回。</li></ul><h2 id="为什么要使用多线程" tabindex="-1"><a class="header-anchor" href="#为什么要使用多线程" aria-hidden="true">#</a> 为什么要使用多线程?</h2><p>先从总体上来说：</p><ul><li><strong>从计算机底层来说：</strong> 线程可以比作是轻量级的进程，是程序执行的最小单位,线程间的切换和调度的成本远远小于进程。另外，多核 CPU 时代意味着多个线程可以同时运行，这减少了线程上下文切换的开销。</li><li><strong>从当代互联网发展趋势来说：</strong> 现在的系统动不动就要求百万级甚至千万级的并发量，而多线程并发编程正是开发高并发系统的基础，利用好多线程机制可以大大提高系统整体的并发能力以及性能。</li></ul><p>再深入到计算机底层来探讨：</p><ul><li><strong>单核时代</strong>：在单核时代多线程主要是为了提高单进程利用 CPU 和 IO 系统的效率。 假设只运行了一个 Java 进程的情况，当我们请求 IO 的时候，如果 Java 进程中只有一个线程，此线程被 IO 阻塞则整个进程被阻塞。CPU 和 IO 设备只有一个在运行，那么可以简单地说系统整体效率只有 50%。当使用多线程的时候，一个线程被 IO 阻塞，其他线程还可以继续使用 CPU。从而提高了 Java 进程利用系统资源的整体效率。</li><li><strong>多核时代</strong>: 多核时代多线程主要是为了提高进程利用多核 CPU 的能力。举个例子：假如我们要计算一个复杂的任务，我们只用一个线程的话，不论系统有几个 CPU 核心，都只会有一个 CPU 核心被利用到。而创建多个线程，这些线程可以被映射到底层多个 CPU 上执行，在任务中的多个线程没有资源竞争的情况下，任务执行的效率会有显著性的提高，约等于（单核时执行时间/CPU 核心数）。</li></ul><h2 id="使用多线程可能带来什么问题" tabindex="-1"><a class="header-anchor" href="#使用多线程可能带来什么问题" aria-hidden="true">#</a> 使用多线程可能带来什么问题?</h2><p>并发编程的目的就是为了能提高程序的执行效率提高程序运行速度，但是并发编程并不总是能提高程序运行速度的，而且并发编程可能会遇到很多问题，比如：内存泄漏、死锁、线程不安全等等。</p><h2 id="如何理解线程安全和不安全" tabindex="-1"><a class="header-anchor" href="#如何理解线程安全和不安全" aria-hidden="true">#</a> 如何理解线程安全和不安全？</h2><p>线程安全和不安全是在多线程环境下对于同一份数据的访问是否能够保证其正确性和一致性的描述。</p><ul><li>线程安全指的是在多线程环境下，对于同一份数据，不管有多少个线程同时访问，都能保证这份数据的正确性和一致性。</li><li>线程不安全则表示在多线程环境下，对于同一份数据，多个线程同时访问时可能会导致数据混乱、错误或者丢失。</li></ul><h2 id="说说线程的生命周期和状态" tabindex="-1"><a class="header-anchor" href="#说说线程的生命周期和状态" aria-hidden="true">#</a> 说说线程的生命周期和状态?</h2><p>Java 线程在运行的生命周期中的指定时刻只可能处于下面 6 种不同状态的其中一个状态：</p><ul><li>NEW: 初始状态，线程被创建出来但没有被调用 <code>start()</code> 。</li><li>RUNNABLE: 运行状态，线程被调用了 <code>start()</code>等待运行的状态。</li><li>BLOCKED：阻塞状态，需要等待锁释放。</li><li>WAITING：等待状态，表示该线程需要等待其他线程做出一些特定动作（通知或中断）。</li><li>TIME_WAITING：超时等待状态，可以在指定的时间后自行返回而不是像 WAITING 那样一直等待。</li><li>TERMINATED：终止状态，表示该线程已经运行完毕。</li></ul><p>线程在生命周期中并不是固定处于某一个状态而是随着代码的执行在不同状态之间切换。</p>`,51),m={href:"https://mp.weixin.qq.com/s/UOrXql_LhOD8dhTq_EPI0w",target:"_blank",rel:"noopener noreferrer"},b=n("figure",null,[n("img",{src:"/github/javaguide/java/concurrent/640.png",alt:"Java 线程状态变迁图",tabindex:"0"}),n("figcaption",null,"Java 线程状态变迁图")],-1),f=n("p",null,[s("由上图可以看出：线程创建之后它将处于 "),n("strong",null,"NEW（新建）"),s(" 状态，调用 "),n("code",null,"start()"),s(" 方法后开始运行，线程这时候处于 "),n("strong",null,"READY（可运行）"),s(" 状态。可运行状态的线程获得了 CPU 时间片（timeslice）后就处于 "),n("strong",null,"RUNNING（运行）"),s(" 状态。")],-1),w={href:"https://howtodoinJava.com/",title:"HowToDoInJava",target:"_blank",rel:"noopener noreferrer"},T={href:"https://howtodoinJava.com/Java/multi-threading/Java-thread-life-cycle-and-thread-states/",title:"Java Thread Life Cycle and Thread States",target:"_blank",rel:"noopener noreferrer"},y=n("strong",null,"RUNNABLE（运行中）",-1),_=n("strong",null,"为什么 JVM 没有区分这两种状态呢？",-1),x={href:"https://www.zhihu.com/question/56494969/answer/154053599",target:"_blank",rel:"noopener noreferrer"},J=e('<figure><img src="/2019-3/RUNNABLE-VS-RUNNING.png" alt="RUNNABLE-VS-RUNNING" tabindex="0"><figcaption>RUNNABLE-VS-RUNNING</figcaption></figure><ul><li>当线程执行 <code>wait()</code>方法之后，线程进入 <strong>WAITING（等待）</strong> 状态。进入等待状态的线程需要依靠其他线程的通知才能够返回到运行状态。</li><li><strong>TIMED_WAITING(超时等待)</strong> 状态相当于在等待状态的基础上增加了超时限制，比如通过 <code>sleep（long millis）</code>方法或 <code>wait（long millis）</code>方法可以将线程置于 TIMED_WAITING 状态。当超时时间结束后，线程将会返回到 RUNNABLE 状态。</li><li>当线程进入 <code>synchronized</code> 方法/块或者调用 <code>wait</code> 后（被 <code>notify</code>）重新进入 <code>synchronized</code> 方法/块，但是锁被其它线程占有，这个时候线程就会进入 <strong>BLOCKED（阻塞）</strong> 状态。</li><li>线程在执行完了 <code>run()</code>方法之后将会进入到 <strong>TERMINATED（终止）</strong> 状态。</li></ul>',2),I={href:"https://mp.weixin.qq.com/s/R5MrTsWvk9McFSQ7bS0W2w",target:"_blank",rel:"noopener noreferrer"},N=e(`<h2 id="什么是线程上下文切换" tabindex="-1"><a class="header-anchor" href="#什么是线程上下文切换" aria-hidden="true">#</a> 什么是线程上下文切换?</h2><p>线程在执行过程中会有自己的运行条件和状态（也称上下文），比如上文所说到过的程序计数器，栈信息等。当出现如下情况的时候，线程会从占用 CPU 状态中退出。</p><ul><li>主动让出 CPU，比如调用了 <code>sleep()</code>, <code>wait()</code> 等。</li><li>时间片用完，因为操作系统要防止一个线程或者进程长时间占用 CPU 导致其他线程或者进程饿死。</li><li>调用了阻塞类型的系统中断，比如请求 IO，线程被阻塞。</li><li>被终止或结束运行</li></ul><p>这其中前三种都会发生线程切换，线程切换意味着需要保存当前线程的上下文，留待线程下次占用 CPU 的时候恢复现场。并加载下一个将要占用 CPU 的线程上下文。这就是所谓的 <strong>上下文切换</strong>。</p><p>上下文切换是现代操作系统的基本功能，因其每次需要保存信息恢复信息，这将会占用 CPU，内存等系统资源进行处理，也就意味着效率会有一定损耗，如果频繁切换就会造成整体效率低下。</p><h2 id="什么是线程死锁-如何避免死锁" tabindex="-1"><a class="header-anchor" href="#什么是线程死锁-如何避免死锁" aria-hidden="true">#</a> 什么是线程死锁?如何避免死锁?</h2><h3 id="认识线程死锁" tabindex="-1"><a class="header-anchor" href="#认识线程死锁" aria-hidden="true">#</a> 认识线程死锁</h3><p>线程死锁描述的是这样一种情况：多个线程同时被阻塞，它们中的一个或者全部都在等待某个资源被释放。由于线程被无限期地阻塞，因此程序不可能正常终止。</p><p>如下图所示，线程 A 持有资源 2，线程 B 持有资源 1，他们同时都想申请对方的资源，所以这两个线程就会互相等待而进入死锁状态。</p><figure><img src="/2019-4/2019-4死锁1.png" alt="线程死锁示意图 " tabindex="0"><figcaption>线程死锁示意图 </figcaption></figure><p>下面通过一个例子来说明线程死锁,代码模拟了上图的死锁的情况 (代码来源于《并发编程之美》)：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeadLockDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> resource1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//资源 1</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> resource2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//资源 2</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>resource1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;get resource1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;waiting get resource2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>resource2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;get resource2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;线程 1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>resource2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;get resource2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;waiting get resource1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>resource1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;get resource1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;线程 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Thread[线程 1,5,main]get resource1
Thread[线程 2,5,main]get resource2
Thread[线程 1,5,main]waiting get resource2
Thread[线程 2,5,main]waiting get resource1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>线程 A 通过 <code>synchronized (resource1)</code> 获得 <code>resource1</code> 的监视器锁，然后通过<code>Thread.sleep(1000);</code>让线程 A 休眠 1s 为的是让线程 B 得到执行然后获取到 resource2 的监视器锁。线程 A 和线程 B 休眠结束了都开始企图请求获取对方的资源，然后这两个线程就会陷入互相等待的状态，这也就产生了死锁。</p><p>上面的例子符合产生死锁的四个必要条件：</p><ol><li>互斥条件：该资源任意一个时刻只由一个线程占用。</li><li>请求与保持条件：一个线程因请求资源而阻塞时，对已获得的资源保持不放。</li><li>不剥夺条件:线程已获得的资源在未使用完之前不能被其他线程强行剥夺，只有自己使用完毕后才释放资源。</li><li>循环等待条件:若干线程之间形成一种头尾相接的循环等待资源关系。</li></ol><h3 id="如何预防和避免线程死锁" tabindex="-1"><a class="header-anchor" href="#如何预防和避免线程死锁" aria-hidden="true">#</a> 如何预防和避免线程死锁?</h3><p><strong>如何预防死锁？</strong> 破坏死锁的产生的必要条件即可：</p><ol><li><strong>破坏请求与保持条件</strong>：一次性申请所有的资源。</li><li><strong>破坏不剥夺条件</strong>：占用部分资源的线程进一步申请其他资源时，如果申请不到，可以主动释放它占有的资源。</li><li><strong>破坏循环等待条件</strong>：靠按序申请资源来预防。按某一顺序申请资源，释放资源则反序释放。破坏循环等待条件。</li></ol><p><strong>如何避免死锁？</strong></p><p>避免死锁就是在资源分配时，借助于算法（比如银行家算法）对资源分配进行计算评估，使其进入安全状态。</p><blockquote><p><strong>安全状态</strong> 指的是系统能够按照某种线程推进顺序（P1、P2、P3.....Pn）来为每个线程分配所需资源，直到满足每个线程对资源的最大需求，使每个线程都可顺利完成。称 <code>&lt;P1、P2、P3.....Pn&gt;</code> 序列为安全序列。</p></blockquote><p>我们对线程 2 的代码修改成下面这样就不会产生死锁了。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>resource1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;get resource1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;waiting get resource2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>resource2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;get resource2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;线程 2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Thread[线程 1,5,main]get resource1
Thread[线程 1,5,main]waiting get resource2
Thread[线程 1,5,main]get resource2
Thread[线程 2,5,main]get resource1
Thread[线程 2,5,main]waiting get resource2
Thread[线程 2,5,main]get resource2

Process finished with exit code 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们分析一下上面的代码为什么避免了死锁的发生?</p><p>线程 1 首先获得到 resource1 的监视器锁,这时候线程 2 就获取不到了。然后线程 1 再去获取 resource2 的监视器锁，可以获取到。然后线程 1 释放了对 resource1、resource2 的监视器锁的占用，线程 2 获取到就可以执行了。这样就破坏了破坏循环等待条件，因此避免了死锁。</p><h2 id="sleep-方法和-wait-方法对比" tabindex="-1"><a class="header-anchor" href="#sleep-方法和-wait-方法对比" aria-hidden="true">#</a> sleep() 方法和 wait() 方法对比</h2><p><strong>共同点</strong>：两者都可以暂停线程的执行。</p><p><strong>区别</strong>：</p><ul><li><strong><code>sleep()</code> 方法没有释放锁，而 <code>wait()</code> 方法释放了锁</strong> 。</li><li><code>wait()</code> 通常被用于线程间交互/通信，<code>sleep()</code>通常被用于暂停执行。</li><li><code>wait()</code> 方法被调用后，线程不会自动苏醒，需要别的线程调用同一个对象上的 <code>notify()</code>或者 <code>notifyAll()</code> 方法。<code>sleep()</code>方法执行完成后，线程会自动苏醒，或者也可以使用 <code>wait(long timeout)</code> 超时后线程会自动苏醒。</li><li><code>sleep()</code> 是 <code>Thread</code> 类的静态本地方法，<code>wait()</code> 则是 <code>Object</code> 类的本地方法。为什么这样设计呢？下一个问题就会聊到。</li></ul><h2 id="为什么-wait-方法不定义在-thread-中" tabindex="-1"><a class="header-anchor" href="#为什么-wait-方法不定义在-thread-中" aria-hidden="true">#</a> 为什么 wait() 方法不定义在 Thread 中？</h2><p><code>wait()</code> 是让获得对象锁的线程实现等待，会自动释放当前线程占有的对象锁。每个对象（<code>Object</code>）都拥有对象锁，既然要释放当前线程占有的对象锁并让其进入 WAITING 状态，自然是要操作对应的对象（<code>Object</code>）而非当前的线程（<code>Thread</code>）。</p><p>类似的问题：<strong>为什么 <code>sleep()</code> 方法定义在 <code>Thread</code> 中？</strong></p><p>因为 <code>sleep()</code> 是让当前线程暂停执行，不涉及到对象类，也不需要获得对象锁。</p><h2 id="可以直接调用-thread-类的-run-方法吗" tabindex="-1"><a class="header-anchor" href="#可以直接调用-thread-类的-run-方法吗" aria-hidden="true">#</a> 可以直接调用 Thread 类的 run 方法吗？</h2><p>这是另一个非常经典的 Java 多线程面试问题，而且在面试中会经常被问到。很简单，但是很多人都会答不上来！</p><p>new 一个 <code>Thread</code>，线程进入了新建状态。调用 <code>start()</code>方法，会启动一个线程并使线程进入了就绪状态，当分配到时间片后就可以开始运行了。 <code>start()</code> 会执行线程的相应准备工作，然后自动执行 <code>run()</code> 方法的内容，这是真正的多线程工作。 但是，直接执行 <code>run()</code> 方法，会把 <code>run()</code> 方法当成一个 main 线程下的普通方法去执行，并不会在某个线程中执行它，所以这并不是多线程工作。</p><p><strong>总结：调用 <code>start()</code> 方法方可启动线程并使线程进入就绪状态，直接执行 <code>run()</code> 方法的话不会以多线程的方式执行。</strong></p><figure><img src="/github/javaguide/gongzhonghaoxuanchuan.png" alt="JavaGuide 官方公众号" tabindex="0"><figcaption>JavaGuide 官方公众号</figcaption></figure>`,42);function q(j,U){const o=p("RouterLink"),t=p("ExternalLinkIcon");return l(),u("div",null,[n("div",d,[k,n("ul",null,[n("li",null,[h,s("：准备 Java 面试的小伙伴可以考虑面试专版："),n("strong",null,[a(o,{to:"/zhuanlan/java-mian-shi-zhi-bei.html"},{default:c(()=>[s("《Java 面试指北 》")]),_:1})]),s(" (质量非常高，专为面试打造，配合 JavaGuide 食用效果最佳)。")]),n("li",null,[v,s("：技术专栏/一对一提问/简历修改/求职指南/面试打卡/不定时福利，欢迎加入 "),n("strong",null,[a(o,{to:"/about-the-author/zhishixingqiu-two-years.html"},{default:c(()=>[s("JavaGuide 官方知识星球")]),_:1})]),s("。")])])]),g,n("p",null,[s("Java 线程状态变迁图(图源："),n("a",m,[s("挑错 |《Java 并发编程的艺术》中关于线程状态的三处错误"),a(t)]),s(")：")]),b,f,n("blockquote",null,[n("p",null,[s("在操作系统层面，线程有 READY 和 RUNNING 状态；而在 JVM 层面，只能看到 RUNNABLE 状态（图源："),n("a",w,[s("HowToDoInJava"),a(t)]),s("："),n("a",T,[s("Java Thread Life Cycle and Thread States"),a(t)]),s("），所以 Java 系统一般将这两个状态统称为 "),y,s(" 状态 。")]),n("p",null,[_,s(" （摘自："),n("a",x,[s("Java 线程运行怎么有第六种状态？ - Dawell 的回答"),a(t)]),s(" ） 现在的时分（time-sharing）多任务（multi-task）操作系统架构通常都是用所谓的“时间分片（time quantum or time slice）”方式进行抢占式（preemptive）轮转调度（round-robin 式）。这个时间分片通常是很小的，一个线程一次最多只能在 CPU 上运行比如 10-20ms 的时间（此时处于 running 状态），也即大概只有 0.01 秒这一量级，时间片用后就要被切换下来放入调度队列的末尾等待再次调度。（也即回到 ready 状态）。线程切换的如此之快，区分这两种状态就没什么意义了。")])]),J,n("p",null,[s("相关阅读："),n("a",I,[s("线程的几种状态你真的了解么？"),a(t)]),s(" 。")]),N])}const A=i(r,[["render",q],["__file","java-concurrent-questions-01.html.vue"]]);export{A as default};
