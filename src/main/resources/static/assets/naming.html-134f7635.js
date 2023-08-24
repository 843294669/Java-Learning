const e=JSON.parse('{"key":"v-501812b4","path":"/system-design/basis/naming.html","title":"代码命名指南","lang":"zh-CN","frontmatter":{"title":"代码命名指南","category":"代码质量","description":"我还记得我刚工作那一段时间， 项目 Code Review 的时候，我经常因为变量命名不规范而被 “diss”! 究其原因还是自己那会经验不足，而且，大学那会写项目的时候不太注意这些问题，想着只要把功能实现出来就行了。 但是，工作中就不一样，为了代码的可读性、可维护性，项目组对于代码质量的要求还是很高的！ 前段时间，项目组新来的一个实习生也经常在 Code Review 因为变量命名不规范而被 “diss”，这让我想到自己刚到公司写代码那会的日子。 于是，我就简单写了这篇关于变量命名规范的文章，希望能对同样有此困扰的小伙伴提供一些帮助。","head":[["meta",{"property":"og:url","content":"https://javaguide.cn/system-design/basis/naming.html"}],["meta",{"property":"og:site_name","content":"JavaGuide(Java面试 + 学习指南)"}],["meta",{"property":"og:title","content":"代码命名指南"}],["meta",{"property":"og:description","content":"我还记得我刚工作那一段时间， 项目 Code Review 的时候，我经常因为变量命名不规范而被 “diss”! 究其原因还是自己那会经验不足，而且，大学那会写项目的时候不太注意这些问题，想着只要把功能实现出来就行了。 但是，工作中就不一样，为了代码的可读性、可维护性，项目组对于代码质量的要求还是很高的！ 前段时间，项目组新来的一个实习生也经常在 Code Review 因为变量命名不规范而被 “diss”，这让我想到自己刚到公司写代码那会的日子。 于是，我就简单写了这篇关于变量命名规范的文章，希望能对同样有此困扰的小伙伴提供一些帮助。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-07T10:56:33.000Z"}],["meta",{"property":"article:author","content":"Guide"}],["meta",{"property":"article:modified_time","content":"2023-08-07T10:56:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代码命名指南\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-07T10:56:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Guide\\",\\"url\\":\\"https://javaguide.cn/article/\\"}]}"]]},"headers":[{"level":2,"title":"为什么需要重视命名？","slug":"为什么需要重视命名","link":"#为什么需要重视命名","children":[]},{"level":2,"title":"常见命名规则以及适用场景","slug":"常见命名规则以及适用场景","link":"#常见命名规则以及适用场景","children":[{"level":3,"title":"驼峰命名法（CamelCase）","slug":"驼峰命名法-camelcase","link":"#驼峰命名法-camelcase","children":[]},{"level":3,"title":"蛇形命名法（snake_case）","slug":"蛇形命名法-snake-case","link":"#蛇形命名法-snake-case","children":[]},{"level":3,"title":"串式命名法（kebab-case）","slug":"串式命名法-kebab-case","link":"#串式命名法-kebab-case","children":[]}]},{"level":2,"title":"常见命名规范","slug":"常见命名规范","link":"#常见命名规范","children":[{"level":3,"title":"Java 语言基本命名规范","slug":"java-语言基本命名规范","link":"#java-语言基本命名规范","children":[]},{"level":3,"title":"命名易读性规范","slug":"命名易读性规范","link":"#命名易读性规范","children":[]}]},{"level":2,"title":"Codelf:变量命名神器?","slug":"codelf-变量命名神器","link":"#codelf-变量命名神器","children":[]},{"level":2,"title":"相关阅读推荐","slug":"相关阅读推荐","link":"#相关阅读推荐","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1636454878000,"updatedTime":1691405793000,"contributors":[{"name":"guide","email":"koushuangbwcx@163.com","commits":5},{"name":"Guide","email":"koushuangbwcx@163.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2},{"name":"Zuoxq99","email":"97277469+Zuoxq99@users.noreply.github.com","commits":2}]},"readingTime":{"minutes":7.48,"words":2243},"filePathRelative":"system-design/basis/naming.md","localizedDate":"2021年11月9日","excerpt":"<p>我还记得我刚工作那一段时间， 项目 Code Review 的时候，我经常因为变量命名不规范而被 “diss”!</p>\\n<p>究其原因还是自己那会经验不足，而且，大学那会写项目的时候不太注意这些问题，想着只要把功能实现出来就行了。</p>\\n<p>但是，工作中就不一样，为了代码的可读性、可维护性，项目组对于代码质量的要求还是很高的！</p>\\n<p>前段时间，项目组新来的一个实习生也经常在 Code Review 因为变量命名不规范而被 “diss”，这让我想到自己刚到公司写代码那会的日子。</p>\\n<p>于是，我就简单写了这篇关于变量命名规范的文章，希望能对同样有此困扰的小伙伴提供一些帮助。</p>","copyright":{"author":"Guide"},"autoDesc":true}');export{e as data};
