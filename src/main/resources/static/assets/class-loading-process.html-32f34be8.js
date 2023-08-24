import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as s,c,a as e,b as a,d as i,e as t}from"./app-7f13a6e3.js";const r={},d=t('<h2 id="类的生命周期" tabindex="-1"><a class="header-anchor" href="#类的生命周期" aria-hidden="true">#</a> 类的生命周期</h2><p>类从被加载到虚拟机内存中开始到卸载出内存为止，它的整个生命周期可以简单概括为 7 个阶段：：加载（Loading）、验证（Verification）、准备（Preparation）、解析（Resolution）、初始化（Initialization）、使用（Using）和卸载（Unloading）。其中，验证、准备和解析这三个阶段可以统称为连接（Linking）。</p><p>这 7 个阶段的顺序如下图所示：</p><figure><img src="/github/javaguide/java/jvm/lifecycle-of-a-class.png" alt="一个类的完整生命周期" tabindex="0"><figcaption>一个类的完整生命周期</figcaption></figure><h2 id="类加载过程" tabindex="-1"><a class="header-anchor" href="#类加载过程" aria-hidden="true">#</a> 类加载过程</h2><p><strong>Class 文件需要加载到虚拟机中之后才能运行和使用，那么虚拟机是如何加载这些 Class 文件呢？</strong></p><p>系统加载 Class 类型的文件主要三步：<strong>加载-&gt;连接-&gt;初始化</strong>。连接过程又可分为三步：<strong>验证-&gt;准备-&gt;解析</strong>。</p><figure><img src="/github/javaguide/java/jvm/class-loading-procedure.png" alt="类加载过程" tabindex="0"><figcaption>类加载过程</figcaption></figure>',8),p={href:"https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-5.html#jvms-5.3",title:"Java Virtual Machine Specification - 5.3. Creation and Loading",target:"_blank",rel:"noopener noreferrer"},g=t('<h3 id="加载" tabindex="-1"><a class="header-anchor" href="#加载" aria-hidden="true">#</a> 加载</h3><p>类加载过程的第一步，主要完成下面 3 件事情：</p><ol><li>通过全类名获取定义此类的二进制字节流。</li><li>将字节流所代表的静态存储结构转换为方法区的运行时数据结构。</li><li>在内存中生成一个代表该类的 <code>Class</code> 对象，作为方法区这些数据的访问入口。</li></ol><p>虚拟机规范上面这 3 点并不具体，因此是非常灵活的。比如：&quot;通过全类名获取定义此类的二进制字节流&quot; 并没有指明具体从哪里获取（ <code>ZIP</code>、 <code>JAR</code>、<code>EAR</code>、<code>WAR</code>、网络、动态代理技术运行时动态生成、其他文件生成比如 <code>JSP</code>...）、怎样获取。</p><p>加载这一步主要是通过我们后面要讲到的 <strong>类加载器</strong> 完成的。类加载器有很多种，当我们想要加载一个类的时候，具体是哪个类加载器加载由 <strong>双亲委派模型</strong> 决定（不过，我们也能打破由双亲委派模型）。</p>',5),u={href:"https://javaguide.cn/java/jvm/classloader.html",title:"类加载器详解",target:"_blank",rel:"noopener noreferrer"},h=t('<p>每个 Java 类都有一个引用指向加载它的 <code>ClassLoader</code>。不过，数组类不是通过 <code>ClassLoader</code> 创建的，而是 JVM 在需要的时候自动创建的，数组类通过<code>getClassLoader()</code>方法获取 <code>ClassLoader</code> 的时候和该数组的元素类型的 <code>ClassLoader</code> 是一致的。</p><p>一个非数组类的加载阶段（加载阶段获取类的二进制字节流的动作）是可控性最强的阶段，这一步我们可以去完成还可以自定义类加载器去控制字节流的获取方式（重写一个类加载器的 <code>loadClass()</code> 方法）。</p><p>加载阶段与连接阶段的部分动作(如一部分字节码文件格式验证动作)是交叉进行的，加载阶段尚未结束，连接阶段可能就已经开始了。</p><h3 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h3><p><strong>验证是连接阶段的第一步，这一阶段的目的是确保 Class 文件的字节流中包含的信息符合《Java 虚拟机规范》的全部约束要求，保证这些信息被当作代码运行后不会危害虚拟机自身的安全。</strong></p><p>验证阶段这一步在整个类加载过程中耗费的资源还是相对较多的，但很有必要，可以有效防止恶意代码的执行。任何时候，程序安全都是第一位。</p><p>不过，验证阶段也不是必须要执行的阶段。如果程序运行的全部代码(包括自己编写的、第三方包中的、从外部加载的、动态生成的等所有代码)都已经被反复使用和验证过，在生产环境的实施阶段就可以考虑使用 <code>-Xverify:none</code> 参数来关闭大部分的类验证措施，以缩短虚拟机类加载的时间。</p><p>验证阶段主要由四个检验阶段组成：</p><ol><li>文件格式验证（Class 文件格式检查）</li><li>元数据验证（字节码语义检查）</li><li>字节码验证（程序语义检查）</li><li>符号引用验证（类的正确性检查）</li></ol><figure><img src="/github/javaguide/java/jvm/class-loading-process-verification.png" alt="验证阶段示意图" tabindex="0"><figcaption>验证阶段示意图</figcaption></figure><p>文件格式验证这一阶段是基于该类的二进制字节流进行的，主要目的是保证输入的字节流能正确地解析并存储于方法区之内，格式上符合描述一个 Java 类型信息的要求。除了这一阶段之外，其余三个验证阶段都是基于方法区的存储结构上进行的，不会再直接读取、操作字节流了。</p>',11),v=e("p",null,[a("方法区属于是 JVM 运行时数据区域的一块逻辑区域，是各个线程共享的内存区域。当虚拟机要使用一个类时，它需要读取并解析 Class 文件获取相关信息，再将信息存入到方法区。方法区会存储已被虚拟机加载的 "),e("strong",null,"类信息、字段信息、方法信息、常量、静态变量、即时编译器编译后的代码缓存等数据"),a("。")],-1),f={href:"https://javaguide.cn/java/jvm/memory-area.html",title:"Java 内存区域详解",target:"_blank",rel:"noopener noreferrer"},_=t('<p>符号引用验证发生在类加载过程中的解析阶段，具体点说是 JVM 将符号引用转化为直接引用的时候（解析阶段会介绍符号引用和直接引用）。</p><p>符号引用验证的主要目的是确保解析阶段能正常执行，如果无法通过符号引用验证，JVM 会抛出异常，比如：</p><ul><li><code>java.lang.IllegalAccessError</code>：当类试图访问或修改它没有权限访问的字段，或调用它没有权限访问的方法时，抛出该异常。</li><li><code>java.lang.NoSuchFieldError</code>：当类试图访问或修改一个指定的对象字段，而该对象不再包含该字段时，抛出该异常。</li><li><code>java.lang.NoSuchMethodError</code>：当类试图访问一个指定的方法，而该方法不存在时，抛出该异常。</li><li>......</li></ul><h3 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h3><p><strong>准备阶段是正式为类变量分配内存并设置类变量初始值的阶段</strong>，这些内存都将在方法区中分配。对于该阶段有以下几点需要注意：</p>',5),m=e("li",null,[a("这时候进行内存分配的仅包括类变量（ Class Variables ，即静态变量，被 "),e("code",null,"static"),a(" 关键字修饰的变量，只与类相关，因此被称为类变量），而不包括实例变量。实例变量会在对象实例化时随着对象一块分配在 Java 堆中。")],-1),b=e("strong",null,"方法区",-1),j={href:"https://github.com/fenixsoft/jvm_book/issues/75",title:"《深入理解Java虚拟机（第3版）》勘误#75",target:"_blank",rel:"noopener noreferrer"},J=e("li",null,[a('这里所设置的初始值"通常情况"下是数据类型默认的零值（如 0、0L、null、false 等），比如我们定义了'),e("code",null,"public static int value=111"),a(" ，那么 value 变量在准备阶段的初始值就是 0 而不是 111（初始化阶段才会赋值）。特殊情况：比如给 value 变量加上了 final 关键字"),e("code",null,"public static final int value=111"),a(" ，那么准备阶段 value 的值就被赋值为 111。")],-1),C=t('<p><strong>基本数据类型的零值</strong>：(图片来自《深入理解 Java 虚拟机》第 3 版 7.33 )</p><figure><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/基本数据类型的零值.png" alt="基本数据类型的零值" tabindex="0"><figcaption>基本数据类型的零值</figcaption></figure><h3 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h3><p><strong>解析阶段是虚拟机将常量池内的符号引用替换为直接引用的过程。</strong> 解析动作主要针对类或接口、字段、类方法、接口方法、方法类型、方法句柄和调用限定符 7 类符号引用进行。</p><p>《深入理解 Java 虚拟机》7.34 节第三版对符号引用和直接引用的解释如下：</p><figure><img src="/github/javaguide/java/jvm/symbol-reference-and-direct-reference.png" alt="符号引用和直接引用" tabindex="0"><figcaption>符号引用和直接引用</figcaption></figure><p>举个例子：在程序执行方法时，系统需要明确知道这个方法所在的位置。Java 虚拟机为每个类都准备了一张方法表来存放类中所有的方法。当需要调用一个类的方法的时候，只要知道这个方法在方法表中的偏移量就可以直接调用该方法了。通过解析操作符号引用就可以直接转变为目标方法在类中方法表的位置，从而使得方法可以被调用。</p><p>综上，解析阶段是虚拟机将常量池内的符号引用替换为直接引用的过程，也就是得到类或者字段、方法在内存中的指针或者偏移量。</p><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3><p><strong>初始化阶段是执行初始化方法 <code>&lt;clinit&gt; ()</code>方法的过程，是类加载的最后一步，这一步 JVM 才开始真正执行类中定义的 Java 程序代码(字节码)。</strong></p><blockquote><p>说明：<code>&lt;clinit&gt; ()</code>方法是编译之后自动生成的。</p></blockquote><p>对于<code>&lt;clinit&gt; ()</code> 方法的调用，虚拟机会自己确保其在多线程环境中的安全性。因为 <code>&lt;clinit&gt; ()</code> 方法是带锁线程安全，所以在多线程环境下进行类初始化的话可能会引起多个线程阻塞，并且这种阻塞很难被发现。</p><p>对于初始化阶段，虚拟机严格规范了有且只有 6 种情况下，必须对类进行初始化(只有主动去使用类才会初始化类)：</p>',13),x=t("<li>当遇到 <code>new</code>、 <code>getstatic</code>、<code>putstatic</code> 或 <code>invokestatic</code> 这 4 条字节码指令时，比如 <code>new</code> 一个类，读取一个静态字段(未被 final 修饰)、或调用一个类的静态方法时。 <ul><li>当 jvm 执行 <code>new</code> 指令时会初始化类。即当程序创建一个类的实例对象。</li><li>当 jvm 执行 <code>getstatic</code> 指令时会初始化类。即程序访问类的静态变量(不是静态常量，常量会被加载到运行时常量池)。</li><li>当 jvm 执行 <code>putstatic</code> 指令时会初始化类。即程序给类的静态变量赋值。</li><li>当 jvm 执行 <code>invokestatic</code> 指令时会初始化类。即程序调用类的静态方法。</li></ul></li><li>使用 <code>java.lang.reflect</code> 包的方法对类进行反射调用时如 <code>Class.forname(&quot;...&quot;)</code>, <code>newInstance()</code> 等等。如果类没初始化，需要触发其初始化。</li><li>初始化一个类，如果其父类还未初始化，则先触发该父类的初始化。</li><li>当虚拟机启动时，用户需要定义一个要执行的主类 (包含 <code>main</code> 方法的那个类)，虚拟机会先初始化这个类。</li><li><code>MethodHandle</code> 和 <code>VarHandle</code> 可以看作是轻量级的反射调用机制，而要想使用这 2 个调用， 就必须先使用 <code>findStaticVarHandle</code> 来初始化要调用的类。</li>",5),k={href:"https://github.com/Snailclimb/JavaGuide/issues/745",title:"issue745",target:"_blank",rel:"noopener noreferrer"},L=e("h2",{id:"类卸载",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#类卸载","aria-hidden":"true"},"#"),a(" 类卸载")],-1),V={href:"https://github.com/Snailclimb/JavaGuide/issues/662",title:"issue#662",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/guang19",title:"guang19",target:"_blank",rel:"noopener noreferrer"},M=t('<p><strong>卸载类即该类的 Class 对象被 GC。</strong></p><p>卸载类需要满足 3 个要求:</p><ol><li>该类的所有的实例对象都已被 GC，也就是说堆不存在该类的实例对象。</li><li>该类没有在其他任何地方被引用</li><li>该类的类加载器的实例已被 GC</li></ol><p>所以，在 JVM 生命周期内，由 jvm 自带的类加载器加载的类是不会被卸载的。但是由我们自定义的类加载器加载的类是可能被卸载的。</p><p>只要想通一点就好了，JDK 自带的 <code>BootstrapClassLoader</code>, <code>ExtClassLoader</code>, <code>AppClassLoader</code> 负责加载 JDK 提供的类，所以它们(类加载器的实例)肯定不会被回收。而我们自定义的类加载器的实例是可以被回收的，所以使用我们自定义加载器加载的类是可以被卸载掉的。</p><p><strong>参考</strong></p><ul><li>《深入理解 Java 虚拟机》</li><li>《实战 Java 虚拟机》</li><li>Chapter 5. Loading, Linking, and Initializing - Java Virtual Machine Specification：https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-5.html#jvms-5.4</li></ul><figure><img src="/github/javaguide/gongzhonghaoxuanchuan.png" alt="JavaGuide 官方公众号" tabindex="0"><figcaption>JavaGuide 官方公众号</figcaption></figure>',8);function q(E,G){const o=n("ExternalLinkIcon");return s(),c("div",null,[d,e("p",null,[a("详见 "),e("a",p,[a("Java Virtual Machine Specification - 5.3. Creation and Loading"),i(o)]),a("。")]),g,e("blockquote",null,[e("p",null,[a("类加载器、双亲委派模型也是非常重要的知识点，这部分内容在"),e("a",u,[a("类加载器详解"),i(o)]),a("这篇文章中有详细介绍到。阅读本篇文章的时候，大家知道有这么个东西就可以了。")])]),h,e("blockquote",null,[v,e("p",null,[a("关于方法区的详细介绍，推荐阅读 "),e("a",f,[a("Java 内存区域详解"),i(o)]),a(" 这篇文章。")])]),_,e("ol",null,[m,e("li",null,[a("从概念上讲，类变量所使用的内存都应当在 "),b,a(" 中进行分配。不过有一点需要注意的是：JDK 7 之前，HotSpot 使用永久代来实现方法区的时候，实现是完全符合这种逻辑概念的。 而在 JDK 7 及之后，HotSpot 已经把原本放在永久代的字符串常量池、静态变量等移动到堆中，这个时候类变量则会随着 Class 对象一起存放在 Java 堆中。相关阅读："),e("a",j,[a("《深入理解 Java 虚拟机（第 3 版）》勘误#75"),i(o)])]),J]),C,e("ol",null,[x,e("li",null,[e("strong",null,[a("「补充，来自"),e("a",k,[a("issue745"),i(o)]),a("」")]),a(" 当一个接口中定义了 JDK8 新加入的默认方法（被 default 关键字修饰的接口方法）时，如果有这个接口的实现类发生了初始化，那该接口要在其之前被初始化。")])]),L,e("blockquote",null,[e("p",null,[a("卸载这部分内容来自 "),e("a",V,[a("issue#662"),i(o)]),a("由 "),e("strong",null,[e("a",S,[a("guang19"),i(o)])]),a(" 补充完善。")])]),M])}const N=l(r,[["render",q],["__file","class-loading-process.html.vue"]]);export{N as default};
