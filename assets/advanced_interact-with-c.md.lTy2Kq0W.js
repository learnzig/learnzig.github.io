import{_ as i,o as s,c as a,R as n}from"./chunks/framework.ekaVIUcx.js";const E=JSON.parse('{"title":"与 C 交互","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"advanced/interact-with-c.md","filePath":"advanced/interact-with-c.md","lastUpdated":1701774107000}'),t={name:"advanced/interact-with-c.md"},l=n(`<h1 id="与-c-交互" tabindex="-1">与 C 交互 <a class="header-anchor" href="#与-c-交互" aria-label="Permalink to &quot;与 C 交互&quot;">​</a></h1><p>zig 作为一个可以独立于的语言，并且不依赖于 libc，但 zig 仍然具有非常强大的与 c 直接交互的能力，并远超其他语言。</p><div class="info custom-block"><p class="custom-block-title">🅿️ 提示</p><p>zig 所指的交互并不仅仅是使用 C 的库，zig 还可以作为 C 的编译器，导出 C ABI 兼容的库供其他程序使用。</p><p>并且 zig 使用 C 并不是通过 <a href="https://en.wikipedia.org/wiki/Foreign_function_interface" target="_blank" rel="noreferrer">FFI</a>/bindings 实现，而是近乎原生的调用，这归功于 zig 实现了一套 C 的编译器并且支持将 C 代码翻译为 zig 代码！</p></div><h2 id="c-abi-类型" tabindex="-1">C ABI 类型 <a class="header-anchor" href="#c-abi-类型" aria-label="Permalink to &quot;C ABI 类型&quot;">​</a></h2><p>zig 定义了几个对应 C ABI 的基本类型：</p><ul><li><code>c_char</code></li><li><code>c_short</code></li><li><code>c_ushort</code></li><li><code>c_int</code></li><li><code>c_uint</code></li><li><code>c_long</code></li><li><code>c_ulong</code></li><li><code>c_longlong</code></li><li><code>c_ulonglong</code></li><li><code>c_longdouble</code></li></ul><p>对应 C <code>void</code> 类型的时候，使用 <code>anyopaque</code> (大小为止的类型)。</p><h2 id="c-header-导入" tabindex="-1">C Header 导入 <a class="header-anchor" href="#c-header-导入" aria-label="Permalink to &quot;C Header 导入&quot;">​</a></h2><p>C 语言共享类型通常是通过引入头文件实现，这点在 zig 中可以无缝做到，得益于 zig 的 <strong>translate-c</strong> 功能。</p><p>接下来展示一个例子，简单地引入 c 标准库的 <code>printf</code> 函数：</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@cImport</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    @cDefine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;_NO_CRT_STDIO_INLINE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    @cInclude</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stdio.h&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pub</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    _</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">🅿️ 提示</p><p>注意：为了构建这个，我们需要引入 <code>libc</code>，可以在 <code>build.zig</code> 中添加 <code>exe.linkLibC</code> 函数，<code>exe</code> 是默认的构建变量。</p><p>或者我们可以手动执行构建：<code>zig build-exe source.zig -lc</code></p></div><p><a href="https://ziglang.org/documentation/master/#cImport" target="_blank" rel="noreferrer"><code>@cImport</code></a> 函数接受一个表达式作为参数，该表达式会在编译期执行，用于控制预处理器指令并引入头文件。</p><div class="info custom-block"><p class="custom-block-title">🅿️ 提示</p><p>表达式内应仅包含 <a href="https://ziglang.org/documentation/master/#cInclude" target="_blank" rel="noreferrer"><code>@cInclude</code></a>、<a href="https://ziglang.org/documentation/master/#cDefine" target="_blank" rel="noreferrer"><code>@cDefine</code></a>、<a href="https://ziglang.org/documentation/master/#cUndef" target="_blank" rel="noreferrer"><code>@cUndef</code></a>，它们会在编译时进行解析并转换为 C 代码。</p><p>通常情况下，应当只存在一个 <code>@cImport</code>，这是防止编译器重复调用 clang，并且避免内联函数被重复，只有为了避免符号冲突（两个文件均定义了相同的标识符）和分析具有不同预处理定义的代码时才出现多个 <code>@cImport</code>。</p></div><h2 id="c-translation-cli" tabindex="-1"><code>C Translation CLI</code> <a class="header-anchor" href="#c-translation-cli" aria-label="Permalink to &quot;\`C Translation CLI\`&quot;">​</a></h2><p>zig 提供了一个命令行工具 <code>zig translate-c</code> 供我们使用，它可以将 C 的代码翻译为 zig 的代码，并将其输出到标准输出。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>注意：当前 zig 的 <code>translate-c</code> 功能并不完善，可能存在某些 bug，使用时请注意查询 issue！</p></div><h3 id="命令行参数" tabindex="-1">命令行参数 <a class="header-anchor" href="#命令行参数" aria-label="Permalink to &quot;命令行参数&quot;">​</a></h3><ul><li><code>-I</code>：指定 <code>include</code> 文件的搜索目录，可多次使用，相当于 clang 的 <code>-I</code> 标志，默认不包含当前目录（仅添加参数 <code>-I</code> 来添加当前目录）。</li><li><code>-D</code>：定义预处理器宏，相当于 clang 的 <code>-D</code> 标志。</li><li><code>-cflags [flags] --</code>：将任意附加命令行参数传递给 clang（注意：最后一定要加 <code>--</code>）。</li><li><code>-target</code>：zig 的构建目标三元组，缺省则使用本机作为构建目标。</li></ul><div class="info custom-block"><p class="custom-block-title">🅿️ 提示</p><p>完整的构架目标三元组可以在这里 <em><a href="https://ziglang.org/documentation/master/#Targets" target="_blank" rel="noreferrer">查看</a></em>。</p><p>在使用翻译功能时，需要保证 target 和传递的 cflags 是正确的，否则可能会出现解析失败或者与 C 代码链接时出现微妙的 ABI 不兼容问题。</p></div><h3 id="cimport-vs-translate-c" tabindex="-1"><code>@cImport</code> vs <code>translate-c</code> <a class="header-anchor" href="#cimport-vs-translate-c" aria-label="Permalink to &quot;\`@cImport\` vs \`translate-c\`&quot;">​</a></h3><p>事实上，这两个东西的底层实现是一样的，<code>@cImport</code> 一般用于使用 C 库时引入头文件，而 <code>translate-c</code> 通常是为了修改翻译后的代码，例如：将 <code>anytype</code> 修改为更加精确的类型、将 <code>[*c]T</code> 指针修改为 <code>[*]T</code> 或者 <code>*T</code> 来提高类型安全性、启动或者禁用某些运行时的安全性功能。</p><h2 id="c-翻译缓存" tabindex="-1">C 翻译缓存 <a class="header-anchor" href="#c-翻译缓存" aria-label="Permalink to &quot;C 翻译缓存&quot;">​</a></h2><p>C 翻译功能（无论是通过 <code>zig translate-c</code> 还是 <code>@cImport</code> 使用）与 Zig 缓存系统集成。使用相同源文件、目标和 <code>cflags</code> 的后续构建将使用缓存，而不是重复翻译相同的代码。</p><p>要在编译使用 <code>@cImport</code> 引入的代码时打印缓存文件的存储位置，请使用 <code>--verbose-cimport</code> 参数：</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 示例文件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@cImport</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    @cDefine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;_NO_CRT_STDIO_INLINE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    @cInclude</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stdio.h&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pub</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    _</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zig</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build-exe</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.zig</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -lc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --verbose-cimport</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info(compilation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">): C import source: /home/username/.cache/zig/o/6f35761b17b87ee4c9f26e643a06e289/cimport.h</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info(compilation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">): C import .d file: /home/username/.cache/zig/o/6f35761b17b87ee4c9f26e643a06e289/cimport.h.d</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info(compilation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">): C import output: /home/username/.cache/zig/o/86899cd499e4c3f94aa141e400ac265f/cimport.zig</span></span></code></pre></div><p><code>cimport.h</code> 包含要翻译的文件（通过调用 <code>@cInclude</code>、<code>@cDefine</code> 和 <code>@cUndef</code> 构建），<code>cimport.h.d</code> 是文件依赖项列表，<code>cimport.zig</code> 包含翻译后的代码。</p><h2 id="c-翻译错误" tabindex="-1">C 翻译错误 <a class="header-anchor" href="#c-翻译错误" aria-label="Permalink to &quot;C 翻译错误&quot;">​</a></h2><p>针对某些 C 的结构，zig 会无法翻译，如：<code>goto</code>、使用位域（<strong>bitfields</strong>）的结构体、拼接（<strong>token-pasting</strong>）宏，zig 会暂时简单处理一下它们以继续翻译任务。</p><p>处理方式有三种：<code>opaque</code>、<code>extern</code>、<code>@compileError</code>。</p><ol><li>无法被正确翻译的 C 结构体和联合类型会被翻译为 <a href="./../basic/advanced_type/opaque.html"><code>opaque{}</code></a>。</li><li>包含 <code>opaque</code> 类型或者代码结构无法被翻译的函数会使用 <code>extern</code> 标记为外部连接函数，仅存在函数的声明，没有具体的定义。只要编译器知道去哪里找到函数的具体实现，那就可以正常使用。</li><li>当顶层空间（全局变量、函数原型、宏）无法转换或处理时，zig 会使用 <code>@compileError</code> ，但得益于 zig 针对顶级声明使用惰性分析，故只有在使用它们时才会报告编译错误。</li></ol><h2 id="c-macro" tabindex="-1">C Macro <a class="header-anchor" href="#c-macro" aria-label="Permalink to &quot;C Macro&quot;">​</a></h2><p>关于 C 中的宏，zig 会尽量将类似函数的宏定义转为对应的 zig 函数，但由于宏是在词法分析的级别上生效，并非所有宏均可以转为函数。无法翻译的宏会被转为 <code>@compileError</code> 错误。</p><div class="info custom-block"><p class="custom-block-title">🅿️ 提示</p><p>请注意，使用了宏的 C 代码转换并不会出问题，这是因为 zig 会在经过预处理器加工后的代码上进行翻译，只是翻译宏可能失败（但不排除当前因为 bug 导致翻译出错）。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MAKELOCAL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">NAME</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">INIT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NAME </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> INIT</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   MAKELOCAL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">   MAKELOCAL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(b, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">   return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pub</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">c_int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">c_int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    _</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">c_int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    _</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pub</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> MAKELOCAL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@compileError</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;unable to translate C expr: unexpected token .Equal&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>例如，以上代码翻译完成后，函数 <code>foo</code> 是正常可以工作的，仅仅是宏 <code>MAKELOCAL</code> 无法正常使用！</p></div><h2 id="c-指针" tabindex="-1">C 指针 <a class="header-anchor" href="#c-指针" aria-label="Permalink to &quot;C 指针&quot;">​</a></h2><p>应当避免使用此类型，通常它仅出现在翻译输出代码中。</p><p>导入 C 头文件后，zig 并不知道如何处理指针（因为 C 的指针可以同时作为单项指针和多项指针使用），这会导致歧义，故 zig 引入一种新类型 <code>[*]T</code>，作为一种折中方案，新类型 <code>[*]T</code> 具有以下特点：</p><ol><li>支持 zig 普通指针（<code>*T</code> 和 <code>[*]T</code>）的全部语法。</li><li>可以强制转换为其他的任意指针类型，当然也包括可选指针类型（当被转换为非可选指针时，如果地址为 0，此时会触发安全检查的保护机制，报错并通知出现了未定义行为）。</li><li>允许地址为 0，在非 <code>freestanding</code>（可以简单看作裸机器，通常编写内核会使用这个）目标上，不允许取消引用地址为 0 的指针（会触发未定义行为）。可选的 C 指针引入一个位来跟踪 <code>null</code>，但通常它没有这样做，可以直接使用普通的可选指针。</li><li>支持与整数进行强制转换。</li><li>支持和整数进行比较。</li><li>不支持 zig 的指针特性，例如对齐（align）方式，如果要设置这些，请转换为普通指针后再进行操作！</li></ol><p>当 C 指针指向一个结构体时，此时它是单项指针，则可以这样解引用：</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ptr_to_struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">struct_member</span></span></code></pre></div><p>当 C 指针指向一个数组时，此时它是一个多项指针，则可以这样解引用：</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ptr_to_struct_array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">struct_member</span></span></code></pre></div><h2 id="c-可变参数函数" tabindex="-1">C 可变参数函数 <a class="header-anchor" href="#c-可变参数函数" aria-label="Permalink to &quot;C 可变参数函数&quot;">​</a></h2><p>zig 支持外部（<code>extern</code>）可变参数函数：</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这是对应 C printf 的声明</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pub</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extern</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;c&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> u8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ...) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">c_int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>可变参数的访问可以使用 <a href="https://ziglang.org/documentation/master/#cVaStart" target="_blank" rel="noreferrer"><code>@cVaStart</code></a>、<a href="https://ziglang.org/documentation/master/#cVaEnd" target="_blank" rel="noreferrer"><code>@cVaEnd</code></a>、<a href="https://ziglang.org/documentation/master/#cVaArg" target="_blank" rel="noreferrer"><code>@cVaArg</code></a> 和 <a href="https://ziglang.org/documentation/master/#cVaCopy" target="_blank" rel="noreferrer"><code>@cVaCopy</code></a> 来实现：</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;std&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用 callconv 声明函数调用约定为 C</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">c_int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, ...) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">callconv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(.</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">C</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">c_int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 对应 C 的宏 va_start</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> ap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@cVaStart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 对应 C 的宏 va_start</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    defer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @cVaEnd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">usize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    var</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">c_int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt; </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) : (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 对应 C 的宏 va_arg</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">        sum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> @cVaArg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">c_int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="额外内容" tabindex="-1">额外内容 <a class="header-anchor" href="#额外内容" aria-label="Permalink to &quot;额外内容&quot;">​</a></h2><p>以下是经过实践和总结出来的额外信息，官方的 ziglang 并未提供！</p><h3 id="为什么-zig-可以做到比-c-更好的编译" tabindex="-1">为什么 zig 可以做到比 c 更好的编译 <a class="header-anchor" href="#为什么-zig-可以做到比-c-更好的编译" aria-label="Permalink to &quot;为什么 zig 可以做到比 c 更好的编译&quot;">​</a></h3><p>实际上，zig 本身实现了一个 C 的编译器，当然不仅仅如此，zig 还提供了一个比较 <strong><em>magic</em></strong> 的东西—— <a href="https://github.com/ziglang/glibc-abi-tool" target="_blank" rel="noreferrer"><code>glibc-abi-tool</code></a>，这是一个收集每个版本的 glibc 的 <code>.abilist</code> 文件的存储库，还包含一个将它们组合成一个数据集的工具。</p><p>所以，zig 本身所谓的 “<strong><em>ships with libc</em></strong>” 并不准确，它的确分发 libc，但它只携带每个版本的符号库，仅依赖这个符号库，zig 就可以实现在没有 libc 的情况下仍然正确地进行动态链接！</p><div class="info custom-block"><p class="custom-block-title">🅿️ 提示</p><p>由于这种特性，这导致 zig 尽管携带了 40 个 libc，却仍然能保持 45MB（linux-x86-64）左右的大小，作为对比 llvm 分发的 clang 完整的工具链的大小多达好几百 M。</p><p>关于更多的细节，你可以参考以下链接：</p><ul><li><a href="https://github.com/ziglang/zig/blob/0.4.0/libc/process_headers.zig" target="_blank" rel="noreferrer">process_headers tool</a></li><li><a href="https://github.com/ziglang/zig/wiki/Updating-libc" target="_blank" rel="noreferrer">Updating libc</a></li><li><a href="https://news.ycombinator.com/item?id=29538264" target="_blank" rel="noreferrer">hacker news</a></li></ul></div><h3 id="zig-能静态链接-libc-吗" tabindex="-1">zig 能静态链接 libc 吗？ <a class="header-anchor" href="#zig-能静态链接-libc-吗" aria-label="Permalink to &quot;zig 能静态链接 libc 吗？&quot;">​</a></h3><p>能，又不能！</p><p>zig 支持静态链接 musl（针对linux的另一个 libc，目标为嵌入式系统与移动设备），其他仅支持动态链接。受益于这种特性，我们可以将它作为 C 编译器的替代品使用，它可以提供更加完善的工具链。</p><p>举个比较<em>剑走偏锋</em>的例子，go 的 cgo 特性一直为人们所吐槽，一旦使用了它，基本就要和 go 宣称的非常方便的交叉编译说拜拜了，但我们可以使用 zig 来帮助我们实现 cgo 的交叉编译：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CC</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;zig cc -target x86_64-linux-gnu&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CXX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;zig cc -target x86_64-linux-gnu&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div><p>设置 zig 作为 C 编译器来供 go 使用，只要对 zig 和 go 设置正确的target，就可以在本机实现完善的交叉编译。</p><p>再进一步，我们还可以构建出 linux 的使用 cgo 的静态链接的二进制可执行文件：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CC</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;zig cc -target x86_64-linux-musl&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CXX</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;zig cc -target x86_64-linux-musl&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CGO_CFLAGS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-D_LARGEFILE64_SOURCE&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ldflags=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;-linkmode=external -extldflags -static&#39;</span></span></code></pre></div><p>上方的 <code>CGO_CFLAGS</code> 是为了防止编译失败，<code>ldfalgs</code> 是为了指定静态链接！</p>`,63),h=[l];function e(p,k,d,r,c,o){return s(),a("div",null,h)}const y=i(t,[["render",e]]);export{E as __pageData,y as default};
