const e=JSON.parse('{"key":"v-16ae6b58","path":"/cs-basics/operating-system/linux-intro.html","title":"Linux 基础知识总结","lang":"zh-CN","frontmatter":{"title":"Linux 基础知识总结","category":"计算机基础","tag":["操作系统","Linux"],"head":[["meta",{"name":"description","content":"简单介绍一下 Java 程序员必知的 Linux 的一些概念以及常见命令。"}],["meta",{"property":"og:url","content":"https://javaguide.cn/cs-basics/operating-system/linux-intro.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"Linux 基础知识总结"}],["meta",{"property":"og:description","content":"这是一则或许对你有用的小广告 面试专版：准备 Java 面试的小伙伴可以考虑面试专版：《Java 面试指北 》 (质量非常高，专为面试打造，配合 JavaGuide 食用效果最佳)。 知识星球：技术专栏/一对一提问/简历修改/求职指南/面试打卡/不定时福利，欢迎加入 JavaGuide 官方知识星球。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-07T10:56:33.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:tag","content":"操作系统"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:modified_time","content":"2023-08-07T10:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux 基础知识总结\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-07T10:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]],"description":"这是一则或许对你有用的小广告 面试专版：准备 Java 面试的小伙伴可以考虑面试专版：《Java 面试指北 》 (质量非常高，专为面试打造，配合 JavaGuide 食用效果最佳)。 知识星球：技术专栏/一对一提问/简历修改/求职指南/面试打卡/不定时福利，欢迎加入 JavaGuide 官方知识星球。"},"headers":[{"level":2,"title":"初探 Linux","slug":"初探-linux","link":"#初探-linux","children":[{"level":3,"title":"Linux 简介","slug":"linux-简介","link":"#linux-简介","children":[]},{"level":3,"title":"Linux 诞生","slug":"linux-诞生","link":"#linux-诞生","children":[]},{"level":3,"title":"常见的 Linux 发行版本","slug":"常见的-linux-发行版本","link":"#常见的-linux-发行版本","children":[]}]},{"level":2,"title":"Linux 文件系统","slug":"linux-文件系统","link":"#linux-文件系统","children":[{"level":3,"title":"Linux 文件系统简介","slug":"linux-文件系统简介","link":"#linux-文件系统简介","children":[]},{"level":3,"title":"inode 介绍","slug":"inode-介绍","link":"#inode-介绍","children":[]},{"level":3,"title":"硬链接和软链接","slug":"硬链接和软链接","link":"#硬链接和软链接","children":[]},{"level":3,"title":"Linux 文件类型","slug":"linux-文件类型","link":"#linux-文件类型","children":[]},{"level":3,"title":"Linux 目录树","slug":"linux-目录树","link":"#linux-目录树","children":[]}]},{"level":2,"title":"Linux 常用命令","slug":"linux-常用命令","link":"#linux-常用命令","children":[{"level":3,"title":"目录切换","slug":"目录切换","link":"#目录切换","children":[]},{"level":3,"title":"目录操作","slug":"目录操作","link":"#目录操作","children":[]},{"level":3,"title":"文件操作","slug":"文件操作","link":"#文件操作","children":[]},{"level":3,"title":"文件压缩","slug":"文件压缩","link":"#文件压缩","children":[]},{"level":3,"title":"文件传输","slug":"文件传输","link":"#文件传输","children":[]},{"level":3,"title":"文件权限","slug":"文件权限","link":"#文件权限","children":[]},{"level":3,"title":"用户管理","slug":"用户管理","link":"#用户管理","children":[]},{"level":3,"title":"用户组管理","slug":"用户组管理","link":"#用户组管理","children":[]},{"level":3,"title":"系统状态","slug":"系统状态","link":"#系统状态","children":[]},{"level":3,"title":"网络通信","slug":"网络通信","link":"#网络通信","children":[]},{"level":3,"title":"其他","slug":"其他","link":"#其他","children":[]}]},{"level":2,"title":"Linux 环境变量","slug":"linux-环境变量","link":"#linux-环境变量","children":[{"level":3,"title":"环境变量分类","slug":"环境变量分类","link":"#环境变量分类","children":[]},{"level":3,"title":"读取环境变量","slug":"读取环境变量","link":"#读取环境变量","children":[]},{"level":3,"title":"环境变量修改","slug":"环境变量修改","link":"#环境变量修改","children":[]}]}],"git":{"createdTime":1636463233000,"updatedTime":1691405793000,"contributors":[{"name":"Guide","email":"koushuangbwcx@163.com","commits":5},{"name":"guide","email":"koushuangbwcx@163.com","commits":5},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3},{"name":"Erzbir","email":"2978086497@qq.com","commits":1},{"name":"Liu-Steve","email":"steve_liu@whu.edu.cn","commits":1},{"name":"paigeman","email":"53284808+paigeman@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":26.16,"words":7849},"filePathRelative":"cs-basics/operating-system/linux-intro.md","localizedDate":"2021年11月9日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">这是一则或许对你有用的小广告</p>\\n<ul>\\n<li><strong>面试专版</strong>：准备 Java 面试的小伙伴可以考虑面试专版：<strong><a href=\\"/zhuanlan/java-mian-shi-zhi-bei.html\\" target=\\"blank\\">《Java 面试指北 》</a></strong> (质量非常高，专为面试打造，配合 JavaGuide 食用效果最佳)。</li>\\n<li><strong>知识星球</strong>：技术专栏/一对一提问/简历修改/求职指南/面试打卡/不定时福利，欢迎加入 <strong><a href=\\"/about-the-author/zhishixingqiu-two-years.html\\" target=\\"blank\\">JavaGuide 官方知识星球</a></strong>。</li>\\n</ul>\\n</div>","copyright":{"author":"Guide"},"autoDesc":true}');export{e as data};