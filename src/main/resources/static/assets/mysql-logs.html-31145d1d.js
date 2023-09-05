import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o,c as d,e as c}from"./app-62dd81fd.js";const n="/assets/redo-log-cb4967d7.png",i={},a=c(`<blockquote><p>本文来自公号程序猿阿星投稿，JavaGuide 对其做了补充完善。</p></blockquote><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p><code>MySQL</code> 日志 主要包括错误日志、查询日志、慢查询日志、事务日志、二进制日志几大类。其中，比较重要的还要属二进制日志 <code>binlog</code>（归档日志）和事务日志 <code>redo log</code>（重做日志）和 <code>undo log</code>（回滚日志）。</p><figure><img src="/github/javaguide/01.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>今天就来聊聊 <code>redo log</code>（重做日志）、<code>binlog</code>（归档日志）、两阶段提交、<code>undo log</code> （回滚日志）。</p><h2 id="redo-log" tabindex="-1"><a class="header-anchor" href="#redo-log" aria-hidden="true">#</a> redo log</h2><p><code>redo log</code>（重做日志）是<code>InnoDB</code>存储引擎独有的，它让<code>MySQL</code>拥有了崩溃恢复能力。</p><p>比如 <code>MySQL</code> 实例挂了或宕机了，重启时，<code>InnoDB</code>存储引擎会使用<code>redo log</code>恢复数据，保证数据的持久性与完整性。</p><figure><img src="/github/javaguide/02.png" alt="" tabindex="0"><figcaption></figcaption></figure><p><code>MySQL</code> 中数据是以页为单位，你查询一条记录，会从硬盘把一页的数据加载出来，加载出来的数据叫数据页，会放入到 <code>Buffer Pool</code> 中。</p><p>后续的查询都是先从 <code>Buffer Pool</code> 中找，没有命中再去硬盘加载，减少硬盘 <code>IO</code> 开销，提升性能。</p><p>更新表数据的时候，也是如此，发现 <code>Buffer Pool</code> 里存在要更新的数据，就直接在 <code>Buffer Pool</code> 里更新。</p><p>然后会把“在某个数据页上做了什么修改”记录到重做日志缓存（<code>redo log buffer</code>）里，接着刷盘到 <code>redo log</code> 文件里。</p><figure><img src="/github/javaguide/03.png" alt="" tabindex="0"><figcaption></figcaption></figure><blockquote><p>图片笔误提示：第 4 步 “清空 redo log buffe 刷盘到 redo 日志中”这句话中的 buffe 应该是 buffer。</p></blockquote><p>理想情况，事务一提交就会进行刷盘操作，但实际上，刷盘的时机是根据策略来进行的。</p><blockquote><p>小贴士：每条 redo 记录由“表空间号+数据页号+偏移量+修改数据长度+具体修改的数据”组成</p></blockquote><h3 id="刷盘时机" tabindex="-1"><a class="header-anchor" href="#刷盘时机" aria-hidden="true">#</a> 刷盘时机</h3><p>InnoDB 刷新重做日志的时机有几种情况：</p><p>InnoDB 将 redo log 刷到磁盘上有几种情况：</p><ol><li>事务提交：当事务提交时，log buffer 里的 redo log 会被刷新到磁盘（可以通过<code>innodb_flush_log_at_trx_commit</code>参数控制，后文会提到）。</li><li>log buffer 空间不足时：log buffer 中缓存的 redo log 已经占满了 log buffer 总容量的大约一半左右，就需要把这些日志刷新到磁盘上。</li><li>事务日志缓冲区满：InnoDB 使用一个事务日志缓冲区（transaction log buffer）来暂时存储事务的重做日志条目。当缓冲区满时，会触发日志的刷新，将日志写入磁盘。</li><li>Checkpoint（检查点）：InnoDB 定期会执行检查点操作，将内存中的脏数据（已修改但尚未写入磁盘的数据）刷新到磁盘，并且会将相应的重做日志一同刷新，以确保数据的一致性。</li><li>后台刷新线程：InnoDB 启动了一个后台线程，负责周期性（每隔 1 秒）地将脏页（已修改但尚未写入磁盘的数据页）刷新到磁盘，并将相关的重做日志一同刷新。</li><li>正常关闭服务器：MySQL 关闭的时候，redo log 都会刷入到磁盘里去。</li></ol><p>总之，InnoDB 在多种情况下会刷新重做日志，以保证数据的持久性和一致性。</p><p>我们要注意设置正确的刷盘策略<code>innodb_flush_log_at_trx_commit</code> 。根据 MySQL 配置的刷盘策略的不同，MySQL 宕机之后可能会存在轻微的数据丢失问题。</p><p><code>innodb_flush_log_at_trx_commit</code> 的值有 3 种，也就是共有 3 种刷盘策略：</p><ul><li><strong>0</strong>：设置为 0 的时候，表示每次事务提交时不进行刷盘操作。这种方式性能最高，但是也最不安全，因为如果 MySQL 挂了或宕机了，可能会丢失最近 1 秒内的事务。</li><li><strong>1</strong>：设置为 1 的时候，表示每次事务提交时都将进行刷盘操作。这种方式性能最低，但是也最安全，因为只要事务提交成功，redo log 记录就一定在磁盘里，不会有任何数据丢失。</li><li><strong>2</strong>：设置为 2 的时候，表示每次事务提交时都只把 log buffer 里的 redo log 内容写入 page cache（文件系统缓存）。page cache 是专门用来缓存文件的，这里被缓存的文件就是 redo log 文件。这种方式的性能和安全性都介于前两者中间。</li></ul><p>刷盘策略<code>innodb_flush_log_at_trx_commit</code> 的默认值为 1，设置为 1 的时候才不会丢失任何数据。为了保证事务的持久性，我们必须将其设置为 1。</p><p>另外，<code>InnoDB</code> 存储引擎有一个后台线程，每隔<code>1</code> 秒，就会把 <code>redo log buffer</code> 中的内容写到文件系统缓存（<code>page cache</code>），然后调用 <code>fsync</code> 刷盘。</p><figure><img src="/github/javaguide/04.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>也就是说，一个没有提交事务的 <code>redo log</code> 记录，也可能会刷盘。</p><p><strong>为什么呢？</strong></p><p>因为在事务执行过程 <code>redo log</code> 记录是会写入<code>redo log buffer</code> 中，这些 <code>redo log</code> 记录会被后台线程刷盘。</p><figure><img src="/github/javaguide/05.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>除了后台线程每秒<code>1</code>次的轮询操作，还有一种情况，当 <code>redo log buffer</code> 占用的空间即将达到 <code>innodb_log_buffer_size</code> 一半的时候，后台线程会主动刷盘。</p><p>下面是不同刷盘策略的流程图。</p><h4 id="innodb-flush-log-at-trx-commit-0" tabindex="-1"><a class="header-anchor" href="#innodb-flush-log-at-trx-commit-0" aria-hidden="true">#</a> innodb_flush_log_at_trx_commit=0</h4><figure><img src="/github/javaguide/06.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>为<code>0</code>时，如果<code>MySQL</code>挂了或宕机可能会有<code>1</code>秒数据的丢失。</p><h4 id="innodb-flush-log-at-trx-commit-1" tabindex="-1"><a class="header-anchor" href="#innodb-flush-log-at-trx-commit-1" aria-hidden="true">#</a> innodb_flush_log_at_trx_commit=1</h4><figure><img src="/github/javaguide/07.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>为<code>1</code>时， 只要事务提交成功，<code>redo log</code>记录就一定在硬盘里，不会有任何数据丢失。</p><p>如果事务执行期间<code>MySQL</code>挂了或宕机，这部分日志丢了，但是事务并没有提交，所以日志丢了也不会有损失。</p><h4 id="innodb-flush-log-at-trx-commit-2" tabindex="-1"><a class="header-anchor" href="#innodb-flush-log-at-trx-commit-2" aria-hidden="true">#</a> innodb_flush_log_at_trx_commit=2</h4><figure><img src="/github/javaguide/09.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>为<code>2</code>时， 只要事务提交成功，<code>redo log buffer</code>中的内容只写入文件系统缓存（<code>page cache</code>）。</p><p>如果仅仅只是<code>MySQL</code>挂了不会有任何数据丢失，但是宕机可能会有<code>1</code>秒数据的丢失。</p><h3 id="日志文件组" tabindex="-1"><a class="header-anchor" href="#日志文件组" aria-hidden="true">#</a> 日志文件组</h3><p>硬盘上存储的 <code>redo log</code> 日志文件不只一个，而是以一个<strong>日志文件组</strong>的形式出现的，每个的<code>redo</code>日志文件大小都是一样的。</p><p>比如可以配置为一组<code>4</code>个文件，每个文件的大小是 <code>1GB</code>，整个 <code>redo log</code> 日志文件组可以记录<code>4G</code>的内容。</p><p>它采用的是环形数组形式，从头开始写，写到末尾又回到头循环写，如下图所示。</p><figure><img src="/github/javaguide/10.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>在个<strong>日志文件组</strong>中还有两个重要的属性，分别是 <code>write pos、checkpoint</code></p><ul><li><strong>write pos</strong> 是当前记录的位置，一边写一边后移</li><li><strong>checkpoint</strong> 是当前要擦除的位置，也是往后推移</li></ul><p>每次刷盘 <code>redo log</code> 记录到<strong>日志文件组</strong>中，<code>write pos</code> 位置就会后移更新。</p><p>每次 <code>MySQL</code> 加载<strong>日志文件组</strong>恢复数据时，会清空加载过的 <code>redo log</code> 记录，并把 <code>checkpoint</code> 后移更新。</p><p><code>write pos</code> 和 <code>checkpoint</code> 之间的还空着的部分可以用来写入新的 <code>redo log</code> 记录。</p><figure><img src="/github/javaguide/11.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>如果 <code>write pos</code> 追上 <code>checkpoint</code> ，表示<strong>日志文件组</strong>满了，这时候不能再写入新的 <code>redo log</code> 记录，<code>MySQL</code> 得停下来，清空一些记录，把 <code>checkpoint</code> 推进一下。</p><figure><img src="/github/javaguide/12.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>注意从 MySQL 8.0.30 开始，日志文件组有了些许变化：</p><blockquote><p>The innodb_redo_log_capacity variable supersedes the innodb_log_files_in_group and innodb_log_file_size variables, which are deprecated. When the innodb_redo_log_capacity setting is defined, the innodb_log_files_in_group and innodb_log_file_size settings are ignored; otherwise, these settings are used to compute the innodb_redo_log_capacity setting (innodb_log_files_in_group * innodb_log_file_size = innodb_redo_log_capacity). If none of those variables are set, redo log capacity is set to the innodb_redo_log_capacity default value, which is 104857600 bytes (100MB). The maximum redo log capacity is 128GB.</p></blockquote><blockquote><p>Redo log files reside in the #innodb_redo directory in the data directory unless a different directory was specified by the innodb_log_group_home_dir variable. If innodb_log_group_home_dir was defined, the redo log files reside in the #innodb_redo directory in that directory. There are two types of redo log files, ordinary and spare. Ordinary redo log files are those being used. Spare redo log files are those waiting to be used. InnoDB tries to maintain 32 redo log files in total, with each file equal in size to 1/32 * innodb_redo_log_capacity; however, file sizes may differ for a time after modifying the innodb_redo_log_capacity setting.</p></blockquote><p>意思是在 MySQL 8.0.30 之前可以通过 <code>innodb_log_files_in_group</code> 和 <code>innodb_log_file_size</code> 配置日志文件组的文件数和文件大小，但在 MySQL 8.0.30 及之后的版本中，这两个变量已被废弃，即使被指定也是用来计算 <code>innodb_redo_log_capacity</code> 的值。而日志文件组的文件数则固定为 32，文件大小则为 <code>innodb_redo_log_capacity / 32</code> 。</p><p>关于这一点变化，我们可以验证一下。</p><p>首先创建一个配置文件，里面配置一下 <code>innodb_log_files_in_group</code> 和 <code>innodb_log_file_size</code> 的值：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code>[mysqld]
<span class="token key attr-name">innodb_log_file_size</span> <span class="token punctuation">=</span> <span class="token value attr-value">10485760</span>
<span class="token key attr-name">innodb_log_files_in_group</span> <span class="token punctuation">=</span> <span class="token value attr-value">64</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker 启动一个 MySQL 8.0.32 的容器：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">3312</span>:3309 <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>your-password <span class="token parameter variable">-v</span> /path/to/your/conf:/etc/mysql/conf.d <span class="token parameter variable">--name</span>
MySQL830 mysql:8.0.32
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们来看一下启动日志：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2023-08-03T02:05:11.720357Z 0 [Warning] [MY-013907] [InnoDB] Deprecated configuration parameters innodb_log_file_size and/or innodb_log_files_in_group have been used to compute innodb_redo_log_capacity=671088640. Please use innodb_redo_log_capacity instead.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里也表明了 <code>innodb_log_files_in_group</code> 和 <code>innodb_log_file_size</code> 这两个变量是用来计算 <code>innodb_redo_log_capacity</code> ，且已经被废弃。</p><p>我们再看下日志文件组的文件数是多少：</p><figure><img src="`+n+`" alt="" tabindex="0"><figcaption></figcaption></figure><p>可以看到刚好是 32 个，并且每个日志文件的大小是 <code>671088640 / 32 = 20971520</code></p><p>所以在使用 MySQL 8.0.30 及之后的版本时，推荐使用 <code>innodb_redo_log_capacity</code> 变量配置日志文件组</p><h3 id="redo-log-小结" tabindex="-1"><a class="header-anchor" href="#redo-log-小结" aria-hidden="true">#</a> redo log 小结</h3><p>相信大家都知道 <code>redo log</code> 的作用和它的刷盘时机、存储形式。</p><p>现在我们来思考一个问题：<strong>只要每次把修改后的数据页直接刷盘不就好了，还有 <code>redo log</code> 什么事？</strong></p><p>它们不都是刷盘么？差别在哪里？</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">1</span> <span class="token class-name">Byte</span> <span class="token operator">=</span> <span class="token number">8</span>bit
<span class="token number">1</span> <span class="token constant">KB</span> <span class="token operator">=</span> <span class="token number">1024</span> <span class="token class-name">Byte</span>
<span class="token number">1</span> <span class="token constant">MB</span> <span class="token operator">=</span> <span class="token number">1024</span> <span class="token constant">KB</span>
<span class="token number">1</span> <span class="token constant">GB</span> <span class="token operator">=</span> <span class="token number">1024</span> <span class="token constant">MB</span>
<span class="token number">1</span> <span class="token constant">TB</span> <span class="token operator">=</span> <span class="token number">1024</span> <span class="token constant">GB</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上，数据页大小是<code>16KB</code>，刷盘比较耗时，可能就修改了数据页里的几 <code>Byte</code> 数据，有必要把完整的数据页刷盘吗？</p><p>而且数据页刷盘是随机写，因为一个数据页对应的位置可能在硬盘文件的随机位置，所以性能是很差。</p><p>如果是写 <code>redo log</code>，一行记录可能就占几十 <code>Byte</code>，只包含表空间号、数据页号、磁盘文件偏移 量、更新值，再加上是顺序写，所以刷盘速度很快。</p><p>所以用 <code>redo log</code> 形式记录修改内容，性能会远远超过刷数据页的方式，这也让数据库的并发能力更强。</p><blockquote><p>其实内存的数据页在一定时机也会刷盘，我们把这称为页合并，讲 <code>Buffer Pool</code>的时候会对这块细说</p></blockquote><h2 id="binlog" tabindex="-1"><a class="header-anchor" href="#binlog" aria-hidden="true">#</a> binlog</h2><p><code>redo log</code> 它是物理日志，记录内容是“在某个数据页上做了什么修改”，属于 <code>InnoDB</code> 存储引擎。</p><p>而 <code>binlog</code> 是逻辑日志，记录内容是语句的原始逻辑，类似于“给 ID=2 这一行的 c 字段加 1”，属于<code>MySQL Server</code> 层。</p><p>不管用什么存储引擎，只要发生了表数据更新，都会产生 <code>binlog</code> 日志。</p><p>那 <code>binlog</code> 到底是用来干嘛的？</p><p>可以说<code>MySQL</code>数据库的<strong>数据备份、主备、主主、主从</strong>都离不开<code>binlog</code>，需要依靠<code>binlog</code>来同步数据，保证数据一致性。</p><figure><img src="/github/javaguide/01-20220305234724956.png" alt="" tabindex="0"><figcaption></figcaption></figure><p><code>binlog</code>会记录所有涉及更新数据的逻辑操作，并且是顺序写。</p><h3 id="记录格式" tabindex="-1"><a class="header-anchor" href="#记录格式" aria-hidden="true">#</a> 记录格式</h3><p><code>binlog</code> 日志有三种格式，可以通过<code>binlog_format</code>参数指定。</p><ul><li><strong>statement</strong></li><li><strong>row</strong></li><li><strong>mixed</strong></li></ul><p>指定<code>statement</code>，记录的内容是<code>SQL</code>语句原文，比如执行一条<code>update T set update_time=now() where id=1</code>，记录的内容如下。</p><figure><img src="/github/javaguide/02-20220305234738688.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>同步数据时，会执行记录的<code>SQL</code>语句，但是有个问题，<code>update_time=now()</code>这里会获取当前系统时间，直接执行会导致与原库的数据不一致。</p><p>为了解决这种问题，我们需要指定为<code>row</code>，记录的内容不再是简单的<code>SQL</code>语句了，还包含操作的具体数据，记录内容如下。</p><figure><img src="/github/javaguide/03-20220305234742460.png" alt="" tabindex="0"><figcaption></figcaption></figure><p><code>row</code>格式记录的内容看不到详细信息，要通过<code>mysqlbinlog</code>工具解析出来。</p><p><code>update_time=now()</code>变成了具体的时间<code>update_time=1627112756247</code>，条件后面的@1、@2、@3 都是该行数据第 1 个~3 个字段的原始值（<strong>假设这张表只有 3 个字段</strong>）。</p><p>这样就能保证同步数据的一致性，通常情况下都是指定为<code>row</code>，这样可以为数据库的恢复与同步带来更好的可靠性。</p><p>但是这种格式，需要更大的容量来记录，比较占用空间，恢复与同步时会更消耗<code>IO</code>资源，影响执行速度。</p><p>所以就有了一种折中的方案，指定为<code>mixed</code>，记录的内容是前两者的混合。</p><p><code>MySQL</code>会判断这条<code>SQL</code>语句是否可能引起数据不一致，如果是，就用<code>row</code>格式，否则就用<code>statement</code>格式。</p><h3 id="写入机制" tabindex="-1"><a class="header-anchor" href="#写入机制" aria-hidden="true">#</a> 写入机制</h3><p><code>binlog</code>的写入时机也非常简单，事务执行过程中，先把日志写到<code>binlog cache</code>，事务提交的时候，再把<code>binlog cache</code>写到<code>binlog</code>文件中。</p><p>因为一个事务的<code>binlog</code>不能被拆开，无论这个事务多大，也要确保一次性写入，所以系统会给每个线程分配一个块内存作为<code>binlog cache</code>。</p><p>我们可以通过<code>binlog_cache_size</code>参数控制单个线程 binlog cache 大小，如果存储内容超过了这个参数，就要暂存到磁盘（<code>Swap</code>）。</p><p><code>binlog</code>日志刷盘流程如下</p><figure><img src="/github/javaguide/04-20220305234747840.png" alt="" tabindex="0"><figcaption></figcaption></figure><ul><li><strong>上图的 write，是指把日志写入到文件系统的 page cache，并没有把数据持久化到磁盘，所以速度比较快</strong></li><li><strong>上图的 fsync，才是将数据持久化到磁盘的操作</strong></li></ul><p><code>write</code>和<code>fsync</code>的时机，可以由参数<code>sync_binlog</code>控制，默认是<code>1</code>。</p><p>为<code>0</code>的时候，表示每次提交事务都只<code>write</code>，由系统自行判断什么时候执行<code>fsync</code>。</p><figure><img src="/github/javaguide/05-20220305234754405.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>虽然性能得到提升，但是机器宕机，<code>page cache</code>里面的 binlog 会丢失。</p><p>为了安全起见，可以设置为<code>1</code>，表示每次提交事务都会执行<code>fsync</code>，就如同 <strong>redo log 日志刷盘流程</strong> 一样。</p><p>最后还有一种折中方式，可以设置为<code>N(N&gt;1)</code>，表示每次提交事务都<code>write</code>，但累积<code>N</code>个事务后才<code>fsync</code>。</p><figure><img src="/github/javaguide/06-20220305234801592.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>在出现<code>IO</code>瓶颈的场景里，将<code>sync_binlog</code>设置成一个比较大的值，可以提升性能。</p><p>同样的，如果机器宕机，会丢失最近<code>N</code>个事务的<code>binlog</code>日志。</p><h2 id="两阶段提交" tabindex="-1"><a class="header-anchor" href="#两阶段提交" aria-hidden="true">#</a> 两阶段提交</h2><p><code>redo log</code>（重做日志）让<code>InnoDB</code>存储引擎拥有了崩溃恢复能力。</p><p><code>binlog</code>（归档日志）保证了<code>MySQL</code>集群架构的数据一致性。</p><p>虽然它们都属于持久化的保证，但是侧重点不同。</p><p>在执行更新语句过程，会记录<code>redo log</code>与<code>binlog</code>两块日志，以基本的事务为单位，<code>redo log</code>在事务执行过程中可以不断写入，而<code>binlog</code>只有在提交事务时才写入，所以<code>redo log</code>与<code>binlog</code>的写入时机不一样。</p><figure><img src="/github/javaguide/01-20220305234816065.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>回到正题，<code>redo log</code>与<code>binlog</code>两份日志之间的逻辑不一致，会出现什么问题？</p><p>我们以<code>update</code>语句为例，假设<code>id=2</code>的记录，字段<code>c</code>值是<code>0</code>，把字段<code>c</code>值更新成<code>1</code>，<code>SQL</code>语句为<code>update T set c=1 where id=2</code>。</p><p>假设执行过程中写完<code>redo log</code>日志后，<code>binlog</code>日志写期间发生了异常，会出现什么情况呢？</p><figure><img src="/github/javaguide/02-20220305234828662.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>由于<code>binlog</code>没写完就异常，这时候<code>binlog</code>里面没有对应的修改记录。因此，之后用<code>binlog</code>日志恢复数据时，就会少这一次更新，恢复出来的这一行<code>c</code>值是<code>0</code>，而原库因为<code>redo log</code>日志恢复，这一行<code>c</code>值是<code>1</code>，最终数据不一致。</p><figure><img src="/github/javaguide/03-20220305235104445.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>为了解决两份日志之间的逻辑一致问题，<code>InnoDB</code>存储引擎使用<strong>两阶段提交</strong>方案。</p><p>原理很简单，将<code>redo log</code>的写入拆成了两个步骤<code>prepare</code>和<code>commit</code>，这就是<strong>两阶段提交</strong>。</p><figure><img src="/github/javaguide/04-20220305234956774.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>使用<strong>两阶段提交</strong>后，写入<code>binlog</code>时发生异常也不会有影响，因为<code>MySQL</code>根据<code>redo log</code>日志恢复数据时，发现<code>redo log</code>还处于<code>prepare</code>阶段，并且没有对应<code>binlog</code>日志，就会回滚该事务。</p><figure><img src="/github/javaguide/05-20220305234937243.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>再看一个场景，<code>redo log</code>设置<code>commit</code>阶段发生异常，那会不会回滚事务呢？</p><figure><img src="/github/javaguide/06-20220305234907651.png" alt="" tabindex="0"><figcaption></figcaption></figure><p>并不会回滚事务，它会执行上图框住的逻辑，虽然<code>redo log</code>是处于<code>prepare</code>阶段，但是能通过事务<code>id</code>找到对应的<code>binlog</code>日志，所以<code>MySQL</code>认为是完整的，就会提交事务恢复数据。</p><h2 id="undo-log" tabindex="-1"><a class="header-anchor" href="#undo-log" aria-hidden="true">#</a> undo log</h2><blockquote><p>这部分内容为 JavaGuide 的补充：</p></blockquote><p>我们知道如果想要保证事务的原子性，就需要在异常发生时，对已经执行的操作进行<strong>回滚</strong>，在 MySQL 中，恢复机制是通过 <strong>回滚日志（undo log）</strong> 实现的，所有事务进行的修改都会先记录到这个回滚日志中，然后再执行相关的操作。如果执行过程中遇到异常的话，我们直接利用 <strong>回滚日志</strong> 中的信息将数据回滚到修改之前的样子即可！并且，回滚日志会先于数据持久化到磁盘上。这样就保证了即使遇到数据库突然宕机等情况，当用户再次启动数据库的时候，数据库还能够通过查询回滚日志来回滚将之前未完成的事务。</p><p>另外，<code>MVCC</code> 的实现依赖于：<strong>隐藏字段、Read View、undo log</strong>。在内部实现中，<code>InnoDB</code> 通过数据行的 <code>DB_TRX_ID</code> 和 <code>Read View</code> 来判断数据的可见性，如不可见，则通过数据行的 <code>DB_ROLL_PTR</code> 找到 <code>undo log</code> 中的历史版本。每个事务读到的数据版本可能是不一样的，在同一个事务中，用户只能看到该事务创建 <code>Read View</code> 之前已经提交的修改和该事务本身做的修改</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><blockquote><p>这部分内容为 JavaGuide 的补充：</p></blockquote><p>MySQL InnoDB 引擎使用 <strong>redo log(重做日志)</strong> 保证事务的<strong>持久性</strong>，使用 <strong>undo log(回滚日志)</strong> 来保证事务的<strong>原子性</strong>。</p><p><code>MySQL</code>数据库的<strong>数据备份、主备、主主、主从</strong>都离不开<code>binlog</code>，需要依靠<code>binlog</code>来同步数据，保证数据一致性。</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ul><li>《MySQL 实战 45 讲》</li><li>《从零开始带你成为 MySQL 实战优化高手》</li><li>《MySQL 是怎样运行的：从根儿上理解 MySQL》</li><li>《MySQL 技术 Innodb 存储引擎》</li></ul><figure><img src="/github/javaguide/gongzhonghaoxuanchuan.png" alt="JavaGuide 官方公众号" tabindex="0"><figcaption>JavaGuide 官方公众号</figcaption></figure>`,153),t=[a];function s(r,g){return o(),d("div",null,t)}const u=e(i,[["render",s],["__file","mysql-logs.html.vue"]]);export{u as default};
