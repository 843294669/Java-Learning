import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,e as i}from"./app-62dd81fd.js";const r={},n=i('<p>程序员是一个流动性很大的职业，经常会有新面孔的到来，也经常会有老面孔的离开，有主动离开的，也有被动离职的。</p><p>再加上这几年卷得厉害，做的事更多了，拿到的却更少了，互联网好像也没有那么香了。</p><p>人来人往，变动无常的状态，其实也早已习惯。</p><p>打工人的唯一出路，无外乎精进自己的专业技能，提升自己的核心竞争力，这样无论有什么变动，走到哪里，都能有口饭吃。</p><p>今天分享一位博主，校招入职腾讯，工作四年后，离开的故事。</p><p>至于为什么离开，我也不清楚，可能是有其他更好的选择，或者是觉得当前的工作对自己的提升有限。</p><p><strong>下文中的“我”，指这位作者本人。</strong></p><blockquote><p>原文地址：https://zhuanlan.zhihu.com/p/602517682</p></blockquote><p>研究生毕业后， 一直在腾讯工作，不知不觉就过了四年。个人本身没有刻意总结的习惯，以前只顾着往前奔跑了，忘了停下来思考总结。记得看过一个职业规划文档，说的三年一个阶段，五年一个阶段的说法，现在恰巧是四年，同时又从腾讯离开，该做一个总结了。</p><p>先对自己这四年做一个简单的评价吧：个人认为，没有完全的浪费和辜负这四年的光阴。为何要这么说了？因为我发现和别人对比，好像意义不大，比我混的好的人很多；比我混的差的人也不少。说到底，我只是一个普普通通的人，才不惊人，技不压众，接受自己的平凡，然后看自己做的，是否让自己满意就好。</p><p>下面具体谈几点吧，我主要想聊下工作，绩效，EPC，嫡系看法，最后再谈下收获。</p><h2 id="工作情况" tabindex="-1"><a class="header-anchor" href="#工作情况" aria-hidden="true">#</a> 工作情况</h2><p>我在腾讯内部没有转过岗，但是做过的项目也还是比较丰富的，包括：BUGLY、分布式调用链（Huskie)、众包系统（SOHO)，EPC 度量系统。其中一些是对外的，一些是内部系统，可能有些大家不知道。还是比较感谢这些项目经历，既有纯业务的系统，也有偏框架的系统，让我学到了不少知识。</p><p>接下来，简单介绍一下每个项目吧，毕竟每一个项目都付出了很多心血的：</p><p>BUGLY，这是一个终端 Crash 联网上报的系统，很多 APP 都接入了。Huskie，这是一个基于 zipkin 搭建的分布式调用链跟踪项目。SOHO，这是一个众包系统，主要是将数据标准和语音采集任务众包出去，让人家做。EPC 度量系统，这是研发效能度量系统，主要是度量研发效能情况的。这里我谈一下对于业务开发的理解和认识，很多人可能都跟我最开始一样，有一个疑惑，整天做业务开发如何成长？换句话说，就是说整天做 CRUD，如何成长？我开始也有这样的疑惑，后来我转变了观念。</p><p>我觉得对于系统的复杂度，可以粗略的分为技术复杂度和业务复杂度，对于业务系统，就是业务复杂度高一些，对于框架系统就是技术复杂度偏高一些。解决这两种复杂度，都具有很大的挑战。</p><p>此前做过的众包系统，就是各种业务逻辑，搞过去，搞过来，其实这就是业务复杂度高。为了解决这个问题，我们开始探索和实践领域驱动（DDD），确实带来了一些帮助，不至于系统那么混乱了。同时，我觉得这个过程中，自己对于 DDD 的感悟，对于我后来的项目系统划分和设计以及开发都带来了帮助。</p><p>当然 DDD 不是银弹，我也不是吹嘘它有多好，只是了解了它后，有时候设计和开发时，能换一种思路。</p><p>可以发现，其实平时咱们做业务，想做好，其实也没那么容易，如果可以多探索多实践，将一些好的方法或思想或架构引入进来，与个人和业务都会有有帮助。</p><h2 id="绩效情况" tabindex="-1"><a class="header-anchor" href="#绩效情况" aria-hidden="true">#</a> 绩效情况</h2><p>我在腾讯工作四年，腾讯半年考核一次，一共考核八次，回想了下，四年来的绩效情况为:三星，三星，五星，三星，五星，四星，四星，三星。统计一下， 四五星占比刚好一半。</p><figure><img src="/github/javaguide/high-quality-technical-articles/640.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>PS：还好以前有奖杯，不然一点念想都没了。(现在腾讯似乎不发了）</p><p>印象比较深的是两次五星获得经历。第一次五星是工作的第二年，那一年是在做众包项目，因为项目本身难度不大，因此我把一些精力投入到了团队的基础建设中，帮团队搭建了 java 以及 golang 的项目脚手架，又做了几次中心技术分享，最终 Leader 觉得我表现比较突出，因此给了我五星。看来，主动一些，与个人与团队都是有好处的，最终也能获得一些回报。</p><p>第二次五星，就是与 EPC 有关了。说一个搞笑的事，我也是后来才知道的，项目初期，总监去汇报时，给老板演示系统，加载了很久指标才刷出来，总监很不好意思的说正在优化；过了一段时间，又去汇报演示，结果又很尴尬的刷了很久才出来，总监无赖表示还是在优化。没想到，自己曾经让总监这么丢脸，哈哈。好吧，说一下结果，最终，我自己写了一个查询引擎替换了 Mondrian，之后再也没有出现那种尴尬的情况了。随之而来，也给了好绩效鼓励。做 EPC 度量项目，我觉得自己成长很大，比如抗压能力，当你从零到一搭建一个系统时，会有一个先扛住再优化的过程，此外如果你的项目很重要，尤其是数据相关，那么任何一点问题，都可能让你神经紧绷，得想尽办法降低风险和故障。此外，另一个不同的感受就是，以前得项目，我大多是开发者，而这个系统，我是 Owner 负责人，当你 Owner 一个系统时，你得时刻负责，同时还需要思考系统的规划和方向，此外还需要分配好需求和把控进度，角色体验跟以前完全不一样。</p><h2 id="谈谈-epc" tabindex="-1"><a class="header-anchor" href="#谈谈-epc" aria-hidden="true">#</a> 谈谈 EPC</h2><p>很多人都骂 EPC，或者笑 EPC，作为度量平台核心开发者之一，我来谈谈客观的看法。</p><p>其实 EPC 初衷是好的，希望通过全方位多维度的研效指标，来度量研发效能各环节的质量，进而反推业务，提升研发效能。然而，最终在实践的过程中，才发现，客观条件并不支持（工具还没建设好）；此外，一味的追求指标数据，使得下面的人想方设法让指标好看，最终违背了初衷。</p><p>为什么，说 EPC 好了，其实如果你仔细了解下 EPC，你就会发现，他是一套相当完善且比较先进的指标度量体系。覆盖了需求，代码，缺陷，测试，持续集成，运营部署各个环节。</p><p>此外，这个过程中，虽然一些人和一些业务做弊，但绝大多数业务还是做出了改变的，比如微视那边的人反馈是，以前的代码写的跟屎一样，当有了 EPC 后，代码质量好了很多。虽然最后微视还是亡了，但是大厦将倾，EPC 是救不了的，亡了也更不能怪 EPC。</p><h2 id="谈谈嫡系" tabindex="-1"><a class="header-anchor" href="#谈谈嫡系" aria-hidden="true">#</a> 谈谈嫡系</h2><p>大家都说腾讯，嫡系文化盛行。但其实我觉得在那个公司都一样吧。这也符合事物的基本规律，人们只相信自己信任并熟悉的人。作为领导，你难道会把把重要的事情交给自己不熟悉的人吗？</p><p>其实我也不知道我算不算嫡系，脉脉上有人问过”怎么知道自己算不算嫡系”，下面有一个回答，我觉得很妙：如果你不知道你是不是嫡系，那你就不是。哈哈，这么说来，我可能不是。</p><p>但另一方面，后来我负责了团队内很重要的事情，应该是中心内都算很重要的事，我独自负责一个方向，直接向总监汇报，似乎又有点像。</p><p>网上也有其他说法，一针见血，是不是嫡系，就看钱到不到位，这么说也有道理。我在 7 级时，就发了股票，自我感觉，还是不错的。我当时以为不出意外的话，我以后的钱途和发展是不是就会一帆风顺。不出意外就出了意外，第二年，EPC 不达预期，部门总经理和总监都被换了，中心来了一个新的的总监。</p><p>好吧，又要重新建立信任了。再到后来，是不是嫡系已经不重要了，因为大环境不好，又加上裁员，大家主动的被动的差不多都走了。</p><p>总结一下，嫡系的存在，其实情有可原。怎么样成为嫡系了？其实我也不知道。不过，我觉得，与其思考怎么成为嫡系，不如思考怎么展现自己的价值和能力，当别人发现你的价值和能力了，那自然更多的机会就会给予你，有了机会，只要把握住了，那就有更多的福利了。</p><h2 id="再谈收获" tabindex="-1"><a class="header-anchor" href="#再谈收获" aria-hidden="true">#</a> 再谈收获</h2><p>收获，什么叫做收获了？个人觉得无论是外在的物质，技能，职级；还是内在的感悟，认识，都算收获。</p><p>先说一些可量化的吧，我觉得有:</p><ul><li>级别上，升上了九级，高级工程师。虽然大家都在说腾讯职级缩水，但是有没有高工的能力自己其实是知道的，我个人感觉，通过我这几年的努力，我算是达到了我当时认为的我需要在高工时达到的状态；</li><li>绩效上，自我评价，个人不是一个特别卷的人，或者说不会为了卷而卷。但是，如果我认定我应该把它做好得，我的 Owner 意识，以及负责态度，我觉得还是可以的。最终在腾讯四年的绩效也还算过的去。再谈一些其他软技能方面:</li></ul><p><strong>1、文档能力</strong></p><p>作为程序员，文档能力其实是一项很重要的能力。其实我也没觉得自己文档能力有多好，但是前后两任总监，都说我的文档不错，那看来，我可能在平均水准之上。</p><p><strong>2、明确方向</strong></p><p>最后，说一个更虚的，但是我觉得最有价值的收获: 我逐渐明确了，或者确定了以后的方向和路，那就是走数据开发。</p><p>其实，找到并确定一个目标很难，身边有清晰目标和方向的人很少，大多数是迷茫的。</p><p>前一段时间，跟人聊天，谈到职业规划，说是可以从两个角度思考：</p><ul><li>选一个业务方向，比如电商，广告，不断地积累业务领域知识和业务相关技能，随着经验的不断积累，最终你就是这个领域的专家。</li><li>深入一个技术方向，不断钻研底层技术知识，这样就有希望成为此技术专家。坦白来说，虽然我深入研究并实践过领域驱动设计，也用来建模和解决了一些复杂业务问题，但是发自内心的，我其实更喜欢钻研技术，同时，我又对大数据很感兴趣。因此，我决定了，以后的方向，就做数据相关的工作。</li></ul><p>腾讯的四年，是我的第一份工作经历，认识了很多厉害的人，学到了很多。最后自己主动离开，也算走的体面（即使损失了大礼包），还是感谢腾讯。</p><figure><img src="/github/javaguide/gongzhonghaoxuanchuan.png" alt="JavaGuide 官方公众号" tabindex="0"><figcaption>JavaGuide 官方公众号</figcaption></figure>',50),t=[n];function h(o,c){return a(),e("div",null,t)}const u=p(r,[["render",h],["__file","four-year-work-in-tencent-summary.html.vue"]]);export{u as default};
