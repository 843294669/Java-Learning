import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as i,c as p,a as e,b as r,d as a,e as n}from"./app-62dd81fd.js";const h={},d=n('<p>大部分软件开发从业者，都会忽略软件开发中的一些最基础、最底层的一些概念。但是，这些软件开发的概念对于软件开发来说非常重要，就像是软件开发的基石一样。这也是我写这篇文章的原因。</p><h2 id="何为软件工程" tabindex="-1"><a class="header-anchor" href="#何为软件工程" aria-hidden="true">#</a> 何为软件工程？</h2><p>1968 年 NATO（北大西洋公约组织）提出了<strong>软件危机</strong>（<strong>Software crisis</strong>）一词。同年，为了解决软件危机问题，“<strong>软件工程</strong>”的概念诞生了。一门叫做软件工程的学科也就应运而生。</p><p>随着时间的推移，软件工程这门学科也经历了一轮又一轮的完善，其中的一些核心内容比如软件开发模型越来越丰富实用！</p><p><strong>什么是软件危机呢？</strong></p><p>简单来说，软件危机描述了当时软件开发的一个痛点：我们很难高效地开发出质量高的软件。</p><p>Dijkstra（Dijkstra 算法的作者） 在 1972 年图灵奖获奖感言中也提高过软件危机，他是这样说的：“导致软件危机的主要原因是机器变得功能强大了几个数量级！坦率地说：只要没有机器，编程就完全没有问题。当我们有一些弱小的计算机时，编程成为一个温和的问题，而现在我们有了庞大的计算机，编程也同样成为一个巨大的问题”。</p><p><strong>说了这么多，到底什么是软件工程呢？</strong></p><p>工程是为了解决实际的问题将理论应用于实践。软件工程指的就是将工程思想应用于软件开发。</p><p>上面是我对软件工程的定义，我们再来看看比较权威的定义。IEEE 软件工程汇刊给出的定义是这样的：　(1)将系统化的、规范的、可量化的方法应用到软件的开发、运行及维护中，即将工程化方法应用于软件。　(2)在(1)中所述方法的研究。</p><p>总之，软件工程的终极目标就是：<strong>在更少资源消耗的情况下，创造出更好、更容易维护的软件。</strong></p><h2 id="软件开发过程" tabindex="-1"><a class="header-anchor" href="#软件开发过程" aria-hidden="true">#</a> 软件开发过程</h2>',12),l={href:"https://zh.wikipedia.org/wiki/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91%E8%BF%87%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"},g=n('<blockquote><p>软件开发过程（英语：software development process），或软件过程（英语：software process），是软件开发的开发生命周期（software development life cycle），其各个阶段实现了软件的需求定义与分析、设计、实现、测试、交付和维护。软件过程是在开发与构建系统时应遵循的步骤，是软件开发的路线图。</p></blockquote><ul><li>需求分析：分析用户的需求，建立逻辑模型。</li><li>软件设计：根据需求分析的结果对软件架构进行设计。</li><li>编码：编写程序运行的源代码。</li><li>测试 : 确定测试用例，编写测试报告。</li><li>交付：将做好的软件交付给客户。</li><li>维护：对软件进行维护比如解决 bug，完善功能。</li></ul><p>软件开发过程只是比较笼统的层面上，一定义了一个软件开发可能涉及到的一些流程。</p><p>软件开发模型更具体地定义了软件开发过程，对开发过程提供了强有力的理论支持。</p><h2 id="软件开发模型" tabindex="-1"><a class="header-anchor" href="#软件开发模型" aria-hidden="true">#</a> 软件开发模型</h2><p>软件开发模型有很多种，比如瀑布模型（Waterfall Model）、快速原型模型（Rapid Prototype Model）、V 模型（V-model）、W 模型（W-model）、敏捷开发模型。其中最具有代表性的还是 <strong>瀑布模型</strong> 和 <strong>敏捷开发</strong> 。</p><p><strong>瀑布模型</strong> 定义了一套完成的软件开发周期，完整地展示了一个软件的的生命周期。</p><figure><img src="/github/javaguide/system-design/schedule-task/up-264f2750a3d30366e36c375ec3a30ec2775.png" alt="" tabindex="0"><figcaption></figcaption></figure>',8),c=e("strong",null,"敏捷开发模型",-1),u={href:"https://wiki.mbalib.com/wiki/%E6%95%8F%E6%8D%B7%E5%BC%80%E5%8F%91",target:"_blank",rel:"noopener noreferrer"},f=n('<blockquote><p><strong>敏捷开发</strong> 是一种以人为核心、迭代、循序渐进的开发方法。在敏捷开发中，软件项目的构建被切分成多个子项目，各个子项目的成果都经过测试，具备集成和可运行的特征。换言之，就是把一个大项目分为多个相互联系，但也可独立运行的小项目，并分别完成，在此过程中软件一直处于可使用状态。</p></blockquote><p>像现在比较常见的一些概念比如 <strong>持续集成</strong>、<strong>重构</strong>、<strong>小版本发布</strong>、<strong>低文档</strong>、<strong>站会</strong>、<strong>结对编程</strong>、<strong>测试驱动开发</strong> 都是敏捷开发的核心。</p><h2 id="软件开发的基本策略" tabindex="-1"><a class="header-anchor" href="#软件开发的基本策略" aria-hidden="true">#</a> 软件开发的基本策略</h2><h3 id="软件复用" tabindex="-1"><a class="header-anchor" href="#软件复用" aria-hidden="true">#</a> 软件复用</h3><p>我们在构建一个新的软件的时候，不需要从零开始，通过复用已有的一些轮子（框架、第三方库等）、设计模式、设计原则等等现成的物料，我们可以更快地构建出一个满足要求的软件。</p><p>像我们平时接触的开源项目就是最好的例子。我想，如果不是开源，我们构建出一个满足要求的软件，耗费的精力和时间要比现在多的多！</p><h3 id="分而治之" tabindex="-1"><a class="header-anchor" href="#分而治之" aria-hidden="true">#</a> 分而治之</h3><p>构建软件的过程中，我们会遇到很多问题。我们可以将一些比较复杂的问题拆解为一些小问题，然后，一一攻克。</p><p>我结合现在比较火的软件设计方法—领域驱动设计（Domain Driven Design，简称 DDD）来说说。</p><p>在领域驱动设计中，很重要的一个概念就是<strong>领域（Domain）</strong>，它就是我们要解决的问题。在领域驱动设计中，我们要做的就是把比较大的领域（问题）拆解为若干的小领域（子域）。</p>',10),_={href:"https://www.coursera.org/learn/algorithms",target:"_blank",rel:"noopener noreferrer"},b=n('<h3 id="逐步演进" tabindex="-1"><a class="header-anchor" href="#逐步演进" aria-hidden="true">#</a> 逐步演进</h3><p>软件开发是一个逐步演进的过程，我们需要不断进行迭代式增量开发，最终交付符合客户价值的产品。</p><p>这里补充一个在软件开发领域，非常重要的概念：<strong>MVP（Minimum Viable Product，最小可行产品</strong>）。</p><p>这个最小可行产品，可以理解为刚好能够满足客户需求的产品。下面这张图片把这个思想展示的非常精髓。</p><figure><img src="/github/javaguide/system-design/schedule-task/up-a99961ff7725106c0592abca845d555568a.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>利用最小可行产品，我们可以也可以提早进行市场分析，这对于我们在探索产品不确定性的道路上非常有帮助。可以非常有效地指导我们下一步该往哪里走。</p><h3 id="优化折中" tabindex="-1"><a class="header-anchor" href="#优化折中" aria-hidden="true">#</a> 优化折中</h3><p>软件开发是一个不断优化改进的过程。任何软件都有很多可以优化的点，不可能完美。我们需要不断改进和提升软件的质量。</p><p>但是，也不要陷入这个怪圈。要学会折中，在有限的投入内，以最有效的方式提高现有软件的质量。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>',10),m={href:"https://www.xuetangx.com/course/THU08091000367",target:"_blank",rel:"noopener noreferrer"},k={href:"https://zh.wikipedia.org/wiki/%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91%E8%BF%87%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"},w=e("figure",null,[e("img",{src:"/github/javaguide/gongzhonghaoxuanchuan.png",alt:"JavaGuide 官方公众号",tabindex:"0"}),e("figcaption",null,"JavaGuide 官方公众号")],-1);function x(E,B){const t=s("ExternalLinkIcon");return i(),p("div",null,[d,e("p",null,[e("a",l,[r("维基百科是这样定义软件开发过程"),a(t)]),r("的：")]),g,e("p",null,[c,r(" 是目前使用的最多的一种软件开发模型。"),e("a",u,[r("MBA 智库百科对敏捷开发的描述"),a(t)]),r("是这样的:")]),f,e("p",null,[r("除此之外，分而治之也是一个比较常用的算法思想，对应的就是分治算法。如果你想了解分治算法的话，推荐你看一下北大的"),e("a",_,[r("《算法设计与分析 Design and Analysis of Algorithms》"),a(t)]),r("。")]),b,e("ul",null,[e("li",null,[r("软件工程的基本概念-清华大学软件学院 刘强："),e("a",m,[r("https://www.xuetangx.com/course/THU08091000367"),a(t)])]),e("li",null,[r("软件开发过程-维基百科："),e("a",k,[r("https://zh.wikipedia.org/wiki/软件开发过程"),a(t)])])]),w])}const j=o(h,[["render",x],["__file","software-engineering.html.vue"]]);export{j as default};
