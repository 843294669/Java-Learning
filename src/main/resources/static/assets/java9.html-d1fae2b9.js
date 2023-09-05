import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,a as n,b as a,d as e,e as t}from"./app-62dd81fd.js";const i={},u=n("p",null,[n("strong",null,"Java 9"),a(" 发布于 2017 年 9 月 21 日 。作为 Java 8 之后 3 年半才发布的新版本，Java 9 带来了很多重大的变化其中最重要的改动是 Java 平台模块系统的引入，其他还有诸如集合、"),n("code",null,"Stream"),a(" 流......。")],-1),r={href:"http://jdk.java.net/archive/",target:"_blank",rel:"noopener noreferrer"},d=n("p",null,[n("strong",null,"概览（精选了一部分）"),a("：")],-1),k={href:"https://openjdk.java.net/jeps/222",target:"_blank",rel:"noopener noreferrer"},m={href:"https://openjdk.java.net/jeps/261",target:"_blank",rel:"noopener noreferrer"},v={href:"https://openjdk.java.net/jeps/248",target:"_blank",rel:"noopener noreferrer"},g={href:"https://openjdk.java.net/jeps/193",target:"_blank",rel:"noopener noreferrer"},h={href:"https://openjdk.java.net/jeps/254",target:"_blank",rel:"noopener noreferrer"},b=t('<h2 id="jshell" tabindex="-1"><a class="header-anchor" href="#jshell" aria-hidden="true">#</a> JShell</h2><p>JShell 是 Java 9 新增的一个实用工具。为 Java 提供了类似于 Python 的实时命令行交互工具。</p><p>在 JShell 中可以直接输入表达式并查看其执行结果。</p><figure><img src="/java-guide-blog/image-20210816083417616.png" alt="" tabindex="0"><figcaption></figcaption></figure><p><strong>JShell 为我们带来了哪些好处呢？</strong></p><ol><li>降低了输出第一行 Java 版&quot;Hello World！&quot;的门槛，能够提高新手的学习热情。</li><li>在处理简单的小逻辑，验证简单的小问题时，比 IDE 更有效率（并不是为了取代 IDE，对于复杂逻辑的验证，IDE 更合适，两者互补）。</li><li>......</li></ol><p><strong>JShell 的代码和普通的可编译代码，有什么不一样？</strong></p><ol><li>一旦语句输入完成，JShell 立即就能返回执行的结果，而不再需要编辑器、编译器、解释器。</li><li>JShell 支持变量的重复声明，后面声明的会覆盖前面声明的。</li><li>JShell 支持独立的表达式比如普通的加法运算 <code>1 + 1</code>。</li><li>......</li></ol><h2 id="模块化系统" tabindex="-1"><a class="header-anchor" href="#模块化系统" aria-hidden="true">#</a> 模块化系统</h2>',9),f={href:"https://openjdk.java.net/projects/jigsaw/",target:"_blank",rel:"noopener noreferrer"},j=t('<p><strong>什么是模块系统？</strong> 官方的定义是：</p><blockquote><p>A uniquely named, reusable group of related packages, as well as resources (such as images and XML files) and a module descriptor。</p></blockquote><p>简单来说，你可以将一个模块看作是一组唯一命名、可重用的包、资源和模块描述文件（<code>module-info.java</code>）。</p><p>任意一个 jar 文件，只要加上一个模块描述文件（<code>module-info.java</code>），就可以升级为一个模块。</p><figure><img src="/java-guide-blog/module-structure.png" alt="" tabindex="0"><figcaption></figcaption></figure>',5),w={href:"http://openjdk.java.net/jeps/282",target:"_blank",rel:"noopener noreferrer"},y=t(`<p>我们可以通过 <code>exports</code> 关键词精准控制哪些类可以对外开放使用，哪些类只能内部使用。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">module</span> <span class="token namespace">my<span class="token punctuation">.</span>module</span> <span class="token punctuation">{</span>
    <span class="token comment">//exports 公开指定包的所有公共成员</span>
    <span class="token keyword">exports</span> <span class="token namespace">com<span class="token punctuation">.</span>my<span class="token punctuation">.</span>package<span class="token punctuation">.</span>name</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">module</span> <span class="token namespace">my<span class="token punctuation">.</span>module</span> <span class="token punctuation">{</span>
     <span class="token comment">//exports…to 限制访问的成员范围</span>
    export com<span class="token punctuation">.</span>my<span class="token punctuation">.</span><span class="token keyword">package</span><span class="token punctuation">.</span>name <span class="token keyword">to</span> <span class="token namespace">com<span class="token punctuation">.</span>specific<span class="token punctuation">.</span>package</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>想要深入了解 Java 9 的模块化，可以参考下面这几篇文章：</p>`,3),J={href:"https://openjdk.java.net/projects/jigsaw/quick-start",target:"_blank",rel:"noopener noreferrer"},S={href:"https://stacktraceguru.com/java9/module-introduction",target:"_blank",rel:"noopener noreferrer"},_={href:"http://www.cnblogs.com/IcanFixIt/p/6947763.html",target:"_blank",rel:"noopener noreferrer"},x=t(`<h2 id="g1-成为默认垃圾回收器" tabindex="-1"><a class="header-anchor" href="#g1-成为默认垃圾回收器" aria-hidden="true">#</a> G1 成为默认垃圾回收器</h2><p>在 Java 8 的时候，默认垃圾回收器是 Parallel Scavenge（新生代）+Parallel Old（老年代）。到了 Java 9, CMS 垃圾回收器被废弃了，<strong>G1（Garbage-First Garbage Collector）</strong> 成为了默认垃圾回收器。</p><p>G1 还是在 Java 7 中被引入的，经过两个版本优异的表现成为成为默认垃圾回收器。</p><h2 id="快速创建不可变集合" tabindex="-1"><a class="header-anchor" href="#快速创建不可变集合" aria-hidden="true">#</a> 快速创建不可变集合</h2><p>增加了<code>List.of()</code>、<code>Set.of()</code>、<code>Map.of()</code> 和 <code>Map.ofEntries()</code>等工厂方法来创建不可变集合（有点参考 Guava 的味道）：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">List</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">&quot;Java&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C++&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Set</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">&quot;Java&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;C++&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Map</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">&quot;Java&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;C++&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code>of()</code> 创建的集合为不可变集合，不能进行添加、删除、替换、 排序等操作，不然会报 <code>java.lang.UnsupportedOperationException</code> 异常。</p><h2 id="string-存储结构优化" tabindex="-1"><a class="header-anchor" href="#string-存储结构优化" aria-hidden="true">#</a> String 存储结构优化</h2><p>Java 8 及之前的版本，<code>String</code> 一直是用 <code>char[]</code> 存储。在 Java 9 之后，<code>String</code> 的实现改用 <code>byte[]</code> 数组存储字符串，节省了空间。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">String</span> <span class="token keyword">implements</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span><span class="token punctuation">,</span><span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token class-name">CharSequence</span> <span class="token punctuation">{</span>
    <span class="token comment">// @Stable 注解表示变量最多被修改一次，称为“稳定的”。</span>
    <span class="token annotation punctuation">@Stable</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口私有方法" tabindex="-1"><a class="header-anchor" href="#接口私有方法" aria-hidden="true">#</a> 接口私有方法</h2><p>Java 9 允许在接口中使用私有方法。这样的话，接口的使用就更加灵活了，有点像是一个简化版的抽象类。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MyInterface</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">methodPrivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="try-with-resources-增强" tabindex="-1"><a class="header-anchor" href="#try-with-resources-增强" aria-hidden="true">#</a> try-with-resources 增强</h2><p>在 Java 9 之前，我们只能在 <code>try-with-resources</code> 块中声明变量：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;testRead.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">PrintWriter</span> writer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PrintWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;testWrite.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// omitted</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Java 9 之后，在 <code>try-with-resources</code> 语句中可以使用 effectively-final 变量。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;testRead.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">PrintWriter</span> writer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PrintWriter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">&quot;testWrite.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">try</span> <span class="token punctuation">(</span>scanner<span class="token punctuation">;</span>writer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// omitted</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>什么是 effectively-final 变量？</strong> 简单来说就是没有被 <code>final</code> 修饰但是值在初始化后从未更改的变量。</p><p>正如上面的代码所演示的那样，即使 <code>writer</code> 变量没有被显示声明为 <code>final</code>，但它在第一次被复制后就不会改变了，因此，它就是 effectively-final 变量。</p><h2 id="stream-optional-增强" tabindex="-1"><a class="header-anchor" href="#stream-optional-增强" aria-hidden="true">#</a> Stream &amp; Optional 增强</h2><p><code>Stream</code> 中增加了新的方法 <code>ofNullable()</code>、<code>dropWhile()</code>、<code>takeWhile()</code> 以及 <code>iterate()</code> 方法的重载方法。</p><p>Java 9 中的 <code>ofNullable()</code> 方 法允许我们创建一个单元素的 <code>Stream</code>，可以包含一个非空元素，也可以创建一个空 <code>Stream</code>。 而在 Java 8 中则不可以创建空的 <code>Stream</code> 。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> stringStream <span class="token operator">=</span> <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">ofNullable</span><span class="token punctuation">(</span><span class="token string">&quot;Java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>stringStream<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 1</span>
<span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> nullStream <span class="token operator">=</span> <span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">ofNullable</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>nullStream<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>takeWhile()</code> 方法可以从 <code>Stream</code> 中依次获取满足条件的元素，直到不满足条件为止结束获取。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> integerList <span class="token operator">=</span> <span class="token class-name">List</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">66</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
integerList<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">takeWhile</span><span class="token punctuation">(</span>x <span class="token operator">-&gt;</span> x <span class="token operator">&lt;</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 11 33</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>dropWhile()</code> 方法的效果和 <code>takeWhile()</code> 相反。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> integerList2 <span class="token operator">=</span> <span class="token class-name">List</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">66</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
integerList2<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">dropWhile</span><span class="token punctuation">(</span>x <span class="token operator">-&gt;</span> x <span class="token operator">&lt;</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 66 8 9 13</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>iterate()</code> 方法的新重载方法提供了一个 <code>Predicate</code> 参数 (判断条件)来决定什么时候结束迭代</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">iterate</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">T</span> seed<span class="token punctuation">,</span> <span class="token keyword">final</span> <span class="token class-name">UnaryOperator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> f<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">// 新增加的重载方法</span>
<span class="token keyword">public</span> <span class="token keyword">static</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">iterate</span><span class="token punctuation">(</span><span class="token class-name">T</span> seed<span class="token punctuation">,</span> <span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> hasNext<span class="token punctuation">,</span> <span class="token class-name">UnaryOperator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>两者的使用对比如下，新的 <code>iterate()</code> 重载方法更加灵活一些。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 使用原始 iterate() 方法输出数字 1~10</span>
<span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">iterate</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> i <span class="token operator">-&gt;</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">limit</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 使用新的 iterate() 重载方法输出数字 1~10</span>
<span class="token class-name">Stream</span><span class="token punctuation">.</span><span class="token function">iterate</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> i <span class="token operator">-&gt;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">,</span> i <span class="token operator">-&gt;</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Optional</code> 类中新增了 <code>ifPresentOrElse()</code>、<code>or()</code> 和 <code>stream()</code> 等方法</p><p><code>ifPresentOrElse()</code> 方法接受两个参数 <code>Consumer</code> 和 <code>Runnable</code> ，如果 <code>Optional</code> 不为空调用 <code>Consumer</code> 参数，为空则调用 <code>Runnable</code> 参数。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">ifPresentOrElse</span><span class="token punctuation">(</span><span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> action<span class="token punctuation">,</span> <span class="token class-name">Runnable</span> emptyAction<span class="token punctuation">)</span>

<span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> objectOptional <span class="token operator">=</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
objectOptional<span class="token punctuation">.</span><span class="token function">ifPresentOrElse</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Empty!!!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// Empty!!!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>or()</code> 方法接受一个 <code>Supplier</code> 参数 ，如果 <code>Optional</code> 为空则返回 <code>Supplier</code> 参数指定的 <code>Optional</code> 值。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">or</span><span class="token punctuation">(</span><span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Optional</span><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">T</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> supplier<span class="token punctuation">)</span>

<span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> objectOptional <span class="token operator">=</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
objectOptional<span class="token punctuation">.</span><span class="token function">or</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">&quot;java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ifPresent</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//java</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="进程-api" tabindex="-1"><a class="header-anchor" href="#进程-api" aria-hidden="true">#</a> 进程 API</h2><p>Java 9 增加了 <code>java.lang.ProcessHandle</code> 接口来实现对原生进程进行管理，尤其适合于管理长时间运行的进程。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 获取当前正在运行的 JVM 的进程</span>
<span class="token class-name">ProcessHandle</span> currentProcess <span class="token operator">=</span> <span class="token class-name">ProcessHandle</span><span class="token punctuation">.</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出进程的 id</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>currentProcess<span class="token punctuation">.</span><span class="token function">pid</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出进程的信息</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>currentProcess<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ProcessHandle</code> 接口概览：</p><figure><img src="/java-guide-blog/image-20210816104614414.png" alt="" tabindex="0"><figcaption></figcaption></figure><h2 id="响应式流-reactive-streams" tabindex="-1"><a class="header-anchor" href="#响应式流-reactive-streams" aria-hidden="true">#</a> 响应式流 （ Reactive Streams ）</h2><p>在 Java 9 中的 <code>java.util.concurrent.Flow</code> 类中新增了反应式流规范的核心接口 。</p><p><code>Flow</code> 中包含了 <code>Flow.Publisher</code>、<code>Flow.Subscriber</code>、<code>Flow.Subscription</code> 和 <code>Flow.Processor</code> 等 4 个核心接口。Java 9 还提供了<code>SubmissionPublisher</code> 作为<code>Flow.Publisher</code> 的一个实现。</p>`,45),P={href:"https://www.cnblogs.com/IcanFixIt/p/7245377.html",target:"_blank",rel:"noopener noreferrer"},q=t('<h2 id="变量句柄" tabindex="-1"><a class="header-anchor" href="#变量句柄" aria-hidden="true">#</a> 变量句柄</h2><p>变量句柄是一个变量或一组变量的引用，包括静态域，非静态域，数组元素和堆外数据结构中的组成部分等。</p><p>变量句柄的含义类似于已有的方法句柄 <code>MethodHandle</code> ，由 Java 类 <code>java.lang.invoke.VarHandle</code> 来表示，可以使用类 <code>java.lang.invoke.MethodHandles.Lookup</code> 中的静态工厂方法来创建 <code>VarHandle</code> 对象。</p><p><code>VarHandle</code> 的出现替代了 <code>java.util.concurrent.atomic</code> 和 <code>sun.misc.Unsafe</code> 的部分操作。并且提供了一系列标准的内存屏障操作，用于更加细粒度的控制内存排序。在安全性、可用性、性能上都要优于现有的 API。</p><h2 id="其它" tabindex="-1"><a class="header-anchor" href="#其它" aria-hidden="true">#</a> 其它</h2><ul><li><strong>平台日志 API 改进</strong>：Java 9 允许为 JDK 和应用配置同样的日志实现。新增了 <code>System.LoggerFinder</code> 用来管理 JDK 使 用的日志记录器实现。JVM 在运行时只有一个系统范围的 <code>LoggerFinder</code> 实例。我们可以通过添加自己的 <code>System.LoggerFinder</code> 实现来让 JDK 和应用使用 SLF4J 等其他日志记录框架。</li><li><strong><code>CompletableFuture</code>类增强</strong>：新增了几个新的方法（<code>completeAsync</code> ，<code>orTimeout</code> 等）。</li><li><strong>Nashorn 引擎的增强</strong>：Nashorn 是从 Java8 开始引入的 JavaScript 引擎，Java9 对 Nashorn 做了些增强，实现了一些 ES6 的新特性（Java 11 中已经被弃用）。</li><li><strong>I/O 流的新特性</strong>：增加了新的方法来读取和复制 <code>InputStream</code> 中包含的数据。</li><li><strong>改进应用的安全性能</strong>：Java 9 新增了 4 个 SHA- 3 哈希算法，SHA3-224、SHA3-256、SHA3-384 和 SHA3-512。</li><li><strong>改进方法句柄（Method Handle）</strong>：方法句柄从 Java7 开始引入，Java9 在类<code>java.lang.invoke.MethodHandles</code> 中新增了更多的静态方法来创建不同类型的方法句柄。</li><li>......</li></ul><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ul><li>Java version history：https://en.wikipedia.org/wiki/Java_version_history</li><li>Release Notes for JDK 9 and JDK 9 Update Releases : https://www.oracle.com/java/technologies/javase/9-all-relnotes.html</li><li>《深入剖析 Java 新特性》-极客时间 - JShell：怎么快速验证简单的小问题？</li><li>New Features in Java 9:https://www.baeldung.com/new-java-9</li><li>Java – Try with Resources：https://www.baeldung.com/java-try-with-resources</li></ul><figure><img src="/github/javaguide/gongzhonghaoxuanchuan.png" alt="JavaGuide 官方公众号" tabindex="0"><figcaption>JavaGuide 官方公众号</figcaption></figure>',9);function O(E,F){const s=o("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[a("你可以在 "),n("a",r,[a("Archived OpenJDK General-Availability Releases"),e(s)]),a(" 上下载自己需要的 JDK 版本！官方的新特性说明文档地址：https://openjdk.java.net/projects/jdk/ 。")]),d,n("ul",null,[n("li",null,[n("a",k,[a("JEP 222: Java 命令行工具"),e(s)])]),n("li",null,[n("a",m,[a("JEP 261: 模块化系统"),e(s)])]),n("li",null,[n("a",v,[a("JEP 248：G1 成为默认垃圾回收器"),e(s)])]),n("li",null,[n("a",g,[a("JEP 193: 变量句柄"),e(s)])]),n("li",null,[n("a",h,[a("JEP 254：字符串存储结构优化"),e(s)])])]),b,n("p",null,[a("模块系统是"),n("a",f,[a("Jigsaw Project"),e(s)]),a("的一部分，把模块化开发实践引入到了 Java 平台中，可以让我们的代码可重用性更好！")]),j,n("p",null,[a("在引入了模块系统之后，JDK 被重新组织成 94 个模块。Java 应用可以通过新增的 "),n("strong",null,[n("a",w,[a("jlink"),e(s)]),a(" 工具")]),a(" (Jlink 是随 Java 9 一起发布的新命令行工具。它允许开发人员为基于模块的 Java 应用程序创建自己的轻量级、定制的 JRE)，创建出只包含所依赖的 JDK 模块的自定义运行时镜像。这样可以极大的减少 Java 运行时环境的大小。")]),y,n("ul",null,[n("li",null,[n("a",J,[a("《Project Jigsaw: Module System Quick-Start Guide》"),e(s)])]),n("li",null,[n("a",S,[a("《Java 9 Modules: part 1》"),e(s)])]),n("li",null,[n("a",_,[a("Java 9 揭秘（2. 模块化系统）"),e(s)])])]),x,n("p",null,[a("关于 Java 9 响应式流更详细的解读，推荐你看 "),n("a",P,[a("Java 9 揭秘（17. Reactive Streams ）- 林本托 "),e(s)]),a(" 这篇文章。")]),q])}const I=p(i,[["render",O],["__file","java9.html.vue"]]);export{I as default};
