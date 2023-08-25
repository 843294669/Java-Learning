import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as h,c as s,a as t,b as e,d as a,e as o}from"./app-7f13a6e3.js";const c={},u=t("p",null,"我使用 Github 已经有 6 年多了，今天毫无保留地把自己觉得比较有用的 Github 小技巧送给关注 JavaGuide 的各位小伙伴。",-1),g=t("h2",{id:"一键生成-github-简历-github-年报",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#一键生成-github-简历-github-年报","aria-hidden":"true"},"#"),e(" 一键生成 Github 简历 & Github 年报")],-1),d={href:"https://resume.github.io/",target:"_blank",rel:"noopener noreferrer"},p=t("p",null,"当时我参加的校招的时候，个人信息那里就放了一个在线的 Github 简历。我觉得这样会让面试官感觉你是一个内行，会提高一些印象分。",-1),l=t("p",null,"但是，如果你的 Github 没有什么项目的话还是不要放在简历里面了。生成后的效果如下图所示。",-1),b=t("figure",null,[t("img",{src:"/2020-11/image-20201108192205620.png",alt:"Github简历",tabindex:"0"}),t("figcaption",null,"Github简历")],-1),f={href:"https://www.githubtrends.io/wrapped",target:"_blank",rel:"noopener noreferrer"},_=o('<figure><img src="/github/dootask/image-20211226144607457.png" alt="" tabindex="0"><figcaption></figcaption></figure><h2 id="个性化-github-首页" tabindex="-1"><a class="header-anchor" href="#个性化-github-首页" aria-hidden="true">#</a> 个性化 Github 首页</h2><p>Github 目前支持在个人主页自定义展示一些内容。展示效果如下图所示。</p><figure><img src="/java-guide-blog/image-20210616221212259.png" alt="个性化首页展示效果" tabindex="0"><figcaption>个性化首页展示效果</figcaption></figure><p>想要做到这样非常简单，你只需要创建一个和你的 Github 账户同名的仓库，然后自定义<code>README.md</code>的内容即可。</p><p>展示在你主页的自定义内容就是<code>README.md</code>的内容（<em>不会 Markdown 语法的小伙伴自行面壁 5 分钟</em>）。</p><figure><img src="/java-guide-blog/image-20201107110309341.png" alt="创建一个和你的Github账户同名的仓库" tabindex="0"><figcaption>创建一个和你的Github账户同名的仓库</figcaption></figure>',7),m={href:"https://hellogithub.com/periodical/statistics/click/?target=https://github.com/anuraghazra/github-readme-stats",target:"_blank",rel:"noopener noreferrer"},G=t("figure",null,[t("img",{src:"/java-guide-blog/image-20210616221312426.png",alt:"通过github-readme-stats动态生成GitHub统计信息 ",tabindex:"0"}),t("figcaption",null,"通过github-readme-stats动态生成GitHub统计信息 ")],-1),x=t("p",null,"关于个性化首页这个就不多提了，感兴趣的小伙伴自行研究一下。",-1),v=t("h2",{id:"自定义项目徽章",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#自定义项目徽章","aria-hidden":"true"},"#"),e(" 自定义项目徽章")],-1),w={href:"https://shields.io/",target:"_blank",rel:"noopener noreferrer"},j=o('<figure><img src="/2020-11/image-20201107143136559.png" alt="项目徽章" tabindex="0"><figcaption>项目徽章</figcaption></figure><p>并且，你不光可以生成静态徽章，shield.io 还可以动态读取你项目的状态并生成对应的徽章。</p><figure><img src="/2020-11/image-20201107143502356.png" alt="自定义项目徽章" tabindex="0"><figcaption>自定义项目徽章</figcaption></figure><p>生成的描述项目状态的徽章效果如下图所示。</p><figure><img src="/2020-11/image-20201107143752642.png" alt="描述项目状态的徽章" tabindex="0"><figcaption>描述项目状态的徽章</figcaption></figure><h2 id="自动为项目添加贡献情况图标" tabindex="-1"><a class="header-anchor" href="#自动为项目添加贡献情况图标" aria-hidden="true">#</a> 自动为项目添加贡献情况图标</h2><p>通过 repobeats 这个工具可以为 Github 项目添加如下图所示的项目贡献基本情况图表，挺不错的 👍</p><figure><img src="/github/dootask/repobeats.png" alt="" tabindex="0"><figcaption></figcaption></figure>',8),k={href:"https://repobeats.axiom.co/",target:"_blank",rel:"noopener noreferrer"},E=t("h2",{id:"github-表情",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#github-表情","aria-hidden":"true"},"#"),e(" Github 表情")],-1),A=t("figure",null,[t("img",{src:"/2020-11/image-20201107162254582.png",alt:"Github表情",tabindex:"0"}),t("figcaption",null,"Github表情")],-1),C={href:"https://www.webfx.com/tools/emoji-cheat-sheet/",target:"_blank",rel:"noopener noreferrer"},H=o('<figure><img src="/2020-11/image-20201107162432941.png" alt="在线Github表情" tabindex="0"><figcaption>在线Github表情</figcaption></figure><h2 id="高效阅读-github-项目的源代码" tabindex="-1"><a class="header-anchor" href="#高效阅读-github-项目的源代码" aria-hidden="true">#</a> 高效阅读 Github 项目的源代码</h2><p>Github 前段时间推出的 Codespaces 可以提供类似 VS Code 的在线 IDE，不过目前还没有完全开发使用。</p><p>简单介绍几种我最常用的阅读 Github 项目源代码的方式。</p><h3 id="chrome-插件-octotree" tabindex="-1"><a class="header-anchor" href="#chrome-插件-octotree" aria-hidden="true">#</a> Chrome 插件 Octotree</h3><p>这个已经老生常谈了，是我最喜欢的一种方式。使用了 Octotree 之后网页侧边栏会按照树形结构展示项目，为我们带来 IDE 般的阅读源代码的感受。</p><figure><img src="/2020-11/image-20201107144944798.png" alt="Chrome插件Octotree" tabindex="0"><figcaption>Chrome插件Octotree</figcaption></figure><h3 id="chrome-插件-sourcegraph" tabindex="-1"><a class="header-anchor" href="#chrome-插件-sourcegraph" aria-hidden="true">#</a> Chrome 插件 SourceGraph</h3><p>我不想将项目 clone 到本地的时候一般就会使用这种方式来阅读项目源代码。SourceGraph 不仅可以让我们在 Github 优雅的查看代码，它还支持一些骚操作，比如：类之间的跳转、代码搜索等功能。</p><p>当你下载了这个插件之后，你的项目主页会多出一个小图标如下图所示。点击这个小图标即可在线阅读项目源代码。</p><figure><img src="/2020-11/image-20201107145749659.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>使用 SourceGraph 阅读代码的就像下面这样，同样是树形结构展示代码，但是我个人感觉没有 Octotree 的手感舒服。不过，SourceGraph 内置了很多插件，而且还支持类之间的跳转！</p><figure><img src="/2020-11/image-20201107150307314.png" alt="" tabindex="0"><figcaption></figcaption></figure><h3 id="克隆项目到本地" tabindex="-1"><a class="header-anchor" href="#克隆项目到本地" aria-hidden="true">#</a> 克隆项目到本地</h3><p>先把项目克隆到本地，然后使用自己喜欢的 IDE 来阅读。可以说是最酸爽的方式了！</p><p>如果你想要深入了解某个项目的话，首选这种方式。一个<code>git clone</code> 就完事了。</p><h2 id="扩展-github-的功能" tabindex="-1"><a class="header-anchor" href="#扩展-github-的功能" aria-hidden="true">#</a> 扩展 Github 的功能</h2><p><strong>Enhanced GitHub</strong> 可以让你的 Github 更好用。这个 Chrome 插件可以可视化你的 Github 仓库大小，每个文件的大小并且可以让你快速下载单个文件。</p><figure><img src="/2020-11/image-20201107160817672.png" alt="" tabindex="0"><figcaption></figcaption></figure><h2 id="自动为-markdown-文件生成目录" tabindex="-1"><a class="header-anchor" href="#自动为-markdown-文件生成目录" aria-hidden="true">#</a> 自动为 Markdown 文件生成目录</h2><p>如果你想为 Github 上的 Markdown 文件生成目录的话，通过 VS Code 的 <strong>Markdown Preview Enhanced</strong> 这个插件就可以了。</p><p>生成的目录效果如下图所示。你直接点击目录中的链接即可跳转到文章对应的位置，可以优化阅读体验。</p><figure><img src="/2020-11/iShot2020-11-07 16.14.14 (1).png" alt="" tabindex="0"><figcaption></figcaption></figure><p>不过，目前 Github 已经自动为 Markdown 文件生成了目录，只是需要通过点击的方式才能显示出来。</p><figure><img src="/github/cosy/image-20211227093215005.png" alt="" tabindex="0"><figcaption></figcaption></figure><h2 id="善用-github-explore" tabindex="-1"><a class="header-anchor" href="#善用-github-explore" aria-hidden="true">#</a> 善用 Github Explore</h2><p>其实，Github 自带的 Explore 是一个非常强大且好用的功能。不过，据我观察，国内很多 Github 用户都不知道这个到底是干啥的。</p><p>简单来说，Github Explore 可以为你带来下面这些服务：</p>',28),D=t("li",null,"可以根据你的个人兴趣为你推荐项目；",-1),M={href:"https://github.com/topics/data-visualization",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/topics/awesome",target:"_blank",rel:"noopener noreferrer"},I=t("li",null,"通过 Github Trending 我们可以看到最近比较热门的一些开源项目，我们可以按照语言类型以及时间维度对项目进行筛选；",-1),V={href:"https://github.com/collections/teaching-computational-social-science",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/collections/learn-to-code",target:"_blank",rel:"noopener noreferrer"},T=t("li",null,"......",-1),z=t("figure",null,[t("img",{src:"/github/javaguide/github-explore.png",alt:"",tabindex:"0"}),t("figcaption")],-1),J=t("h2",{id:"github-actions-很强大",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#github-actions-很强大","aria-hidden":"true"},"#"),e(" GitHub Actions 很强大")],-1),L=t("p",null,"你可以简单地将 GitHub Actions 理解为 Github 自带的 CI/CD ，通过 GitHub Actions 你可以直接在 GitHub 构建、测试和部署代码，你还可以对代码进行审查、管理 API、分析项目依赖项。总之，GitHub Actions 可以自动化地帮你完成很多事情。",-1),N={href:"https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"},B=t("p",null,"GitHub Actions 有一个官方市场，上面有非常多别人提交的 Actions ，你可以直接拿来使用。",-1),R=t("figure",null,[t("img",{src:"/github/javaguide/image-20211227100147433.png",alt:"",tabindex:"0"}),t("figcaption")],-1),y=t("h2",{id:"后记",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#后记","aria-hidden":"true"},"#"),e(" 后记")],-1),P=t("p",null,"这一篇文章，我毫无保留地把自己这些年总结的 Github 小技巧分享了出来，真心希望对大家有帮助，真心希望大家一定要利用好 Github 这个专属程序员的宝藏。",-1),q=t("p",null,"另外，这篇文章中，我并没有提到 Github 搜索技巧。在我看来，Github 搜索技巧不必要记网上那些文章说的各种命令啥的，真没啥卵用。你会发现你用的最多的还是关键字搜索以及 Github 自带的筛选功能。",-1),F=t("figure",null,[t("img",{src:"/github/javaguide/gongzhonghaoxuanchuan.png",alt:"JavaGuide 官方公众号",tabindex:"0"}),t("figcaption",null,"JavaGuide 官方公众号")],-1);function K(Q,U){const i=r("ExternalLinkIcon");return h(),s("div",null,[u,g,t("p",null,[e("通过 "),t("a",d,[e("https://resume.github.io/"),a(i)]),e(" 这个网站你可以一键生成一个在线的 Github 简历。")]),p,l,b,t("p",null,[e("通过 "),t("a",f,[e("https://www.githubtrends.io/wrapped"),a(i)]),e(" 这个网站，你可以生成一份 Github 个人年报，这个年报会列举出你在这一年的项目贡献情况、最常使用的编程语言、详细的贡献信息。")]),_,t("p",null,[e("这个也是可以玩出花来的！比如说：通过 "),t("a",m,[e("github-readme-stats"),a(i)]),e(" 这个开源项目，你可以 README 中展示动态生成的 GitHub 统计信息。展示效果如下图所示。")]),G,x,v,t("p",null,[e("你在 Github 上看到的项目徽章都是通过 "),t("a",w,[e("https://shields.io/"),a(i)]),e(" 这个网站生成的。我的 JavaGuide 这个项目的徽章如下图所示。")]),j,t("p",null,[e("地址："),t("a",k,[e("https://repobeats.axiom.co/"),a(i)]),e(" 。")]),E,A,t("p",null,[e("如果你想要在 Github 使用表情的话，可以在这里找找："),t("a",C,[e("www.webfx.com/tools/emoji-cheat-sheet/"),a(i)]),e("。")]),H,t("ol",null,[D,t("li",null,[e("Githunb Topics 按照类别/话题将一些项目进行了分类汇总。比如 "),t("a",M,[e("Data visualization"),a(i)]),e(" 汇总了数据可视化相关的一些开源项目，"),t("a",S,[e("Awesome Lists"),a(i)]),e(" 汇总了 Awesome 系列的仓库；")]),I,t("li",null,[e("Github Collections 类似一个收藏夹集合。比如 "),t("a",V,[e("Teaching materials for computational social science"),a(i)]),e(" 这个收藏夹就汇总了计算机课程相关的开源资源，"),t("a",O,[e("Learn to Code"),a(i)]),e(" 这个收藏夹就汇总了对你学习编程有帮助的一些仓库；")]),T]),z,J,L,t("p",null,[e("关于 GitHub Actions 的详细介绍，推荐看一下阮一峰老师写的 "),t("a",N,[e("GitHub Actions 入门教程"),a(i)]),e(" 。")]),B,R,y,P,q,F])}const Y=n(c,[["render",K],["__file","github-tips.html.vue"]]);export{Y as default};