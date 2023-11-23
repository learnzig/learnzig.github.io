import{_ as s,o as n,c as a,R as p}from"./chunks/framework.XiqD54nH.js";const u=JSON.parse('{"title":"基本类型","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"basic/define-variable.md","filePath":"basic/define-variable.md","lastUpdated":1697119907000}'),l={name:"basic/define-variable.md"},o=p(`<h1 id="基本类型" tabindex="-1">基本类型 <a class="header-anchor" href="#基本类型" aria-label="Permalink to &quot;基本类型&quot;">​</a></h1><blockquote><p>变量的声明和定义是编程语言中最基础且最常见的操作之一。</p></blockquote><h2 id="变量声明" tabindex="-1">变量声明 <a class="header-anchor" href="#变量声明" aria-label="Permalink to &quot;变量声明&quot;">​</a></h2><blockquote><p>变量是在内存中存储值的单元。</p></blockquote><p>在 zig 中，我们使用 <code>var</code> 来进行变量的声明，格式是 <code>var variable:type = value;</code>，以下是一个示例：</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">std</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">@import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;std&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">pub</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 声明变量 variable 类型为i16, 并指定值为 666</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">variable</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">u16</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">666</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">std</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">debug</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;变量 variable 是{}</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, .{</span><span style="color:#FFAB70;">variable</span><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">std</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">@import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;std&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">pub</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 声明变量 variable 类型为i16, 并指定值为 666</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#E36209;">variable</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">u16</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">666</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">std</span><span style="color:#24292E;">.</span><span style="color:#E36209;">debug</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;变量 variable 是{}</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, .{</span><span style="color:#E36209;">variable</span><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="标识符命名" tabindex="-1">标识符命名 <a class="header-anchor" href="#标识符命名" aria-label="Permalink to &quot;标识符命名&quot;">​</a></h3><p>在 zig 中，<strong><em>禁止变量覆盖外部作用域</em></strong>！</p><p>命名须以 <strong><em>字母</em></strong> 或者 <strong><em>下划线</em></strong> 开头，后跟任意字母数字或下划线，并且不得与关键字重叠。</p><p>如果一定要使用不符合这些规定的名称（例如与外部库的链接），那么请使用 <code>@&quot;&quot;</code> 语法。</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">@&quot;identifier with spaces in it&quot;</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">0xff</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">@&quot;1SmallStep4Man&quot;</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">112358</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">c</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">@import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;std&quot;</span><span style="color:#E1E4E8;">).</span><span style="color:#FFAB70;">c</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">pub</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extern</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;c&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">fn</span><span style="color:#B392F0;"> @&quot;error&quot;</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">pub</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">extern</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;c&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">fn</span><span style="color:#B392F0;"> @&quot;fstat$INODE64&quot;</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">fd</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">c</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">fd_t</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">buf</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">c</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">Stat</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">c_int</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Color</span><span style="color:#E1E4E8;"> = </span><span style="color:#F97583;">enum</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">red</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">@&quot;really red&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">color</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">Color</span><span style="color:#E1E4E8;"> = .</span><span style="color:#FFAB70;">@&quot;really red&quot;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">@&quot;identifier with spaces in it&quot;</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">0xff</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">@&quot;1SmallStep4Man&quot;</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">112358</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">c</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">@import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;std&quot;</span><span style="color:#24292E;">).</span><span style="color:#E36209;">c</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">pub</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extern</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;c&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">fn</span><span style="color:#6F42C1;"> @&quot;error&quot;</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">void</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">pub</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">extern</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;c&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">fn</span><span style="color:#6F42C1;"> @&quot;fstat$INODE64&quot;</span><span style="color:#24292E;">(</span><span style="color:#E36209;">fd</span><span style="color:#24292E;">: </span><span style="color:#E36209;">c</span><span style="color:#24292E;">.</span><span style="color:#E36209;">fd_t</span><span style="color:#24292E;">, </span><span style="color:#E36209;">buf</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">c</span><span style="color:#24292E;">.</span><span style="color:#E36209;">Stat</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">c_int</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Color</span><span style="color:#24292E;"> = </span><span style="color:#D73A49;">enum</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">red</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">@&quot;really red&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">color</span><span style="color:#24292E;">: </span><span style="color:#E36209;">Color</span><span style="color:#24292E;"> = .</span><span style="color:#E36209;">@&quot;really red&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div><h3 id="常量" tabindex="-1">常量 <a class="header-anchor" href="#常量" aria-label="Permalink to &quot;常量&quot;">​</a></h3><p>zig 使用 <code>const</code> 作为关键字来声明常量，它无法再被更改，只有初次声明时可以赋值。</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">std</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">@import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;std&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">pub</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">constant</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">u16</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">666</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">std</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">debug</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;常量 constant 是{}</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, .{</span><span style="color:#FFAB70;">constant</span><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">std</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">@import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;std&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">pub</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">constant</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">u16</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">666</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">std</span><span style="color:#24292E;">.</span><span style="color:#E36209;">debug</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;常量 constant 是{}</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, .{</span><span style="color:#E36209;">constant</span><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>注意： 所有常量都是 <a href="/advanced/comptime.html"><em>编译期</em></a> 已知的！</p><h3 id="undefined" tabindex="-1"><code>undefined</code> <a class="header-anchor" href="#undefined" aria-label="Permalink to &quot;\`undefined\`&quot;">​</a></h3><p>我们可以使用 <code>undefined</code> 使变量保持未初始化状态。</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">std</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">@import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;std&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">pub</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">variable</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">u16</span><span style="color:#E1E4E8;"> = </span><span style="color:#F97583;">undefined</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">variable</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">666</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">std</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">debug</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;变量 variable 是{}</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, .{</span><span style="color:#FFAB70;">variable</span><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">std</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">@import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;std&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">pub</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#E36209;">variable</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">u16</span><span style="color:#24292E;"> = </span><span style="color:#D73A49;">undefined</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">variable</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">666</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">std</span><span style="color:#24292E;">.</span><span style="color:#E36209;">debug</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;变量 variable 是{}</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, .{</span><span style="color:#E36209;">variable</span><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">⚠️ 警告</p><p>慎重使用 <code>undefined</code>，如果一个变量是未定义的，使用它出现无法预知的情况。</p><p>当一个变量未定义时，那么它将不会执行默认的初始化操作，推荐的方案是设置一个通用的空值，以此防止因为使用未定义而导致出现难以调试的错误。</p></div><h2 id="注释" tabindex="-1">注释 <a class="header-anchor" href="#注释" aria-label="Permalink to &quot;注释&quot;">​</a></h2><p>先来看一下在 zig 中如何正确的书写注释，zig 本身支持三种注释方式，分别是普通注释、文档注释、定义文档注释。</p><p><code>//</code> 就是普通的注释，就只是和其他编程语言中 <code>//</code> 起到的注释效果相同。</p><details class="details custom-block"><summary>小细节</summary><p>值得一提的是，zig 本身并未提供类似<code>/* */</code> 这种多行注释，这意味着多行注释的最佳实践形式就是多行的<code>//</code>了。</p><p>PS:说实话，我认为这个设计并不太好。</p></details><p><code>///</code> 就是文档注释，用于给函数、类型、变量等这些提供注释，文档注释记录了紧随其后的内容。</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">/// 存储时间戳的结构体，精度为纳秒</span></span>
<span class="line"><span style="color:#6A737D;">/// (像这里就是多行文档注释)</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Timestamp</span><span style="color:#E1E4E8;"> = </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/// 自纪元开始后的秒数 (此处也是一个文档注释).</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">seconds</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">i64</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// 我们可以以此代表1970年前 (此处是普通注释)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/// 纳秒数 (文档注释).</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">nanos</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">u32</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/// 返回一个 Timestamp 结构体代表 unix 纪元;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/// 1970年 1月1日 00:00:00 UTC (文档注释).</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">pub</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">unixEpoch</span><span style="color:#E1E4E8;">() </span><span style="color:#FFAB70;">Timestamp</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">Timestamp</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            .</span><span style="color:#FFAB70;">seconds</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            .</span><span style="color:#FFAB70;">nanos</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/// 存储时间戳的结构体，精度为纳秒</span></span>
<span class="line"><span style="color:#6A737D;">/// (像这里就是多行文档注释)</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Timestamp</span><span style="color:#24292E;"> = </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/// 自纪元开始后的秒数 (此处也是一个文档注释).</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">seconds</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">i64</span><span style="color:#24292E;">,  </span><span style="color:#6A737D;">// 我们可以以此代表1970年前 (此处是普通注释)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/// 纳秒数 (文档注释).</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">nanos</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">u32</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/// 返回一个 Timestamp 结构体代表 unix 纪元;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/// 1970年 1月1日 00:00:00 UTC (文档注释).</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">pub</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">unixEpoch</span><span style="color:#24292E;">() </span><span style="color:#E36209;">Timestamp</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#E36209;">Timestamp</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">            .</span><span style="color:#E36209;">seconds</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            .</span><span style="color:#E36209;">nanos</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        };</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><p><code>//!</code> 是顶层文档注释，通常用于记录一个文件的作用，<strong>必须放在作用域的顶层，否则会编译错误</strong></p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//! 顶层文档注释</span></span>
<span class="line"><span style="color:#6A737D;">//! 顶层文档注释</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">S</span><span style="color:#E1E4E8;"> = </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//! 顶层文档注释</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//! 顶层文档注释</span></span>
<span class="line"><span style="color:#6A737D;">//! 顶层文档注释</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">S</span><span style="color:#24292E;"> = </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//! 顶层文档注释</span></span>
<span class="line"><span style="color:#24292E;">};</span></span></code></pre></div><details class="details custom-block"><summary>小细节</summary><p>为什么是作用域顶层呢？实际上，zig 将一个源码文件看作是一个容器。</p></details>`,28),e=[o];function t(c,r,E,y,i,d){return n(),a("div",null,e)}const A=s(l,[["render",t]]);export{u as __pageData,A as default};