import{_ as s,o as i,c as a,R as t}from"./chunks/framework.ERN2RLUQ.js";const c=JSON.parse('{"title":"未定义操作","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"more/undefined_behavior.md","filePath":"more/undefined_behavior.md","lastUpdated":1703590216000}'),n={name:"more/undefined_behavior.md"},h=t(`<h1 id="未定义操作" tabindex="-1">未定义操作 <a class="header-anchor" href="#未定义操作" aria-label="Permalink to &quot;未定义操作&quot;">​</a></h1><p>zig 本身有许多未定义行为，它们可以很方便地帮助开发者找出错误。</p><p>如果在编译期就检测到了未定义的行为，那么 zig 会发出编译错误并停止继续编译，大多数编译时无法检测到的未定义行为均会在运行时被检测到。这就是 zig 的安全检查！</p><p>安全检查会在debug、ReleaseSafe 模式下开启，但可以使用 <a href="https://ziglang.org/documentation/master/#setRuntimeSafety" target="_blank" rel="noreferrer"><code>@setRuntimeSafety</code></a> 来强制指定在单独的块中是否开启安全检查（这将忽略构建模式）。</p><p>当出现安全检查失败时，zig 会编译失败并触发堆栈跟踪：</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;safety check&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    unreachable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zig</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test_undefined_behavior.zig</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1/1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.safety</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> check...</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> thread</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 892159</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> panic:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reached</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unreachable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> code</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/home/ci/actions-runner/_work/zig-bootstrap/zig/docgen_tmp/test_undefined_behavior.zig:2:5:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0x222c65</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.safety</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> check</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (test)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    unreachable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ^</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/home/ci/actions-runner/_work/zig-bootstrap/out/host/lib/zig/test_runner.zig:181:28:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0x22da7d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mainTerminal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (test)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test_fn.func</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                           ^</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/home/ci/actions-runner/_work/zig-bootstrap/out/host/lib/zig/test_runner.zig:36:28:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0x223c8a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (test)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mainTerminal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                           ^</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/home/ci/actions-runner/_work/zig-bootstrap/out/host/lib/zig/std/start.zig:575:22:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0x22319c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> posixCallMainAndExit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (test)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            root.main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                     ^</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/home/ci/actions-runner/_work/zig-bootstrap/out/host/lib/zig/std/start.zig:253:5:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0x222cf1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> _start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (test)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    asm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> volatile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (switch (native_arch) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ^</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">???</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 0x0 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ???</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">???</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> following</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> command</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> crashed:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/home/ci/actions-runner/_work/zig-bootstrap/out/zig-local-cache/o/4558e134302b78f1a543202d094b3e06/test</span></span></code></pre></div><p>以下说明各种未定义行为。</p><h2 id="不可达代码" tabindex="-1">不可达代码 <a class="header-anchor" href="#不可达代码" aria-label="Permalink to &quot;不可达代码&quot;">​</a></h2><p>即 <code>unreachabel</code>，如果程序执行到它，那么会触发完整的堆栈跟踪！</p><h2 id="索引越界访问" tabindex="-1">索引越界访问 <a class="header-anchor" href="#索引越界访问" aria-label="Permalink to &quot;索引越界访问&quot;">​</a></h2><p>无论是数组还是切片，发生越界访问会发生错误导致程序终止进而触发堆栈跟踪！</p><h2 id="负数转换为无符号整数" tabindex="-1">负数转换为无符号整数 <a class="header-anchor" href="#负数转换为无符号整数" aria-label="Permalink to &quot;负数转换为无符号整数&quot;">​</a></h2><p>这本身就是非法行为，故会直接出现报错，如果仅仅是想要将负数当作无符号整数看待，可以使用 <a href="https://ziglang.org/documentation/master/#bitCast" target="_blank" rel="noreferrer"><code>@bitCast</code></a>。</p><p>如果想要获取到无符号整数的最大值，可以使用 <code>std.math.maxInt</code>。</p><h2 id="数据截断" tabindex="-1">数据截断 <a class="header-anchor" href="#数据截断" aria-label="Permalink to &quot;数据截断&quot;">​</a></h2><p>注意我们这里指的是数据类型的范围变小了，不足以容纳数据的值，例如：</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> spartan_count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">u16</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> byte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">u8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@intCast</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">spartan_count</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>上面这段代码毫无疑问会失败，因为 <code>u8</code> 类型无法容纳下 300 这个数。</p><p>除非，我们显示强制截断位，使用 <a href="https://ziglang.org/documentation/master/#truncate" target="_blank" rel="noreferrer"><code>@truncate</code></a>。</p><h2 id="整数溢出" tabindex="-1">整数溢出 <a class="header-anchor" href="#整数溢出" aria-label="Permalink to &quot;整数溢出&quot;">​</a></h2><p>常规的运算可能导致溢出，如加 <code>+</code> 减 <code>-</code> 乘 <code>*</code> 除 <code>/</code> 取反 <code>-</code> 运算可能出现溢出。</p><p>还有 <a href="https://ziglang.org/documentation/master/#divTrunc" target="_blank" rel="noreferrer"><code>@divTrunc</code></a>、<a href="https://ziglang.org/documentation/master/#divFloor" target="_blank" rel="noreferrer"><code>@divFloor</code></a>、<a href="https://ziglang.org/documentation/master/#divExact" target="_blank" rel="noreferrer"><code>@divExact</code></a>，可能造成溢出。</p><p>标准库提供的函数可能存在溢出：</p><ul><li><code>@import(&quot;std&quot;).math.add</code></li><li><code>@import(&quot;std&quot;).math.sub</code></li><li><code>@import(&quot;std&quot;).math.mul</code></li><li><code>@import(&quot;std&quot;).math.divTrunc</code></li><li><code>@import(&quot;std&quot;).math.divFloor</code></li><li><code>@import(&quot;std&quot;).math.divExact</code></li><li><code>@import(&quot;std&quot;).math.shl</code></li></ul><p>为了处理这些情况，zig 提供了几个溢出检测函数来处理溢出问题：</p><ul><li><a href="https://ziglang.org/documentation/master/#addWithOverflow" target="_blank" rel="noreferrer"><code>@addWithOverflow</code></a></li><li><a href="https://ziglang.org/documentation/master/#subWithOverflow" target="_blank" rel="noreferrer"><code>@subWithOverflow</code></a></li><li><a href="https://ziglang.org/documentation/master/#mulWithOverflow" target="_blank" rel="noreferrer"><code>@mulWithOverflow</code></a></li><li><a href="https://ziglang.org/documentation/master/#shlWithOverflow" target="_blank" rel="noreferrer"><code>@shlWithOverflow</code></a></li></ul><p>以上这些内置函数会返回一个元组，包含计算的结果和是否发生溢出的判断位。</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;std&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">pub</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> fn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> byte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">u8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">255</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> ov</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@addWithOverflow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">byte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ov</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;overflowed result: {}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, .{</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ov</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;result: {}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, .{</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ov</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>除此以外，我们还可以使用环绕（<strong>Wrapping</strong>）操作来处理计算：</p><ul><li><code>+%</code> 加法环绕</li><li><code>-%</code> 减法环绕</li><li><code>-%</code> 取否环绕</li><li><code>*%</code> 乘法环绕</li></ul><p>它们会取计算后溢出的值！</p><h2 id="移位溢出" tabindex="-1">移位溢出 <a class="header-anchor" href="#移位溢出" aria-label="Permalink to &quot;移位溢出&quot;">​</a></h2><p>进行左移操作时，可能导致结果溢出，此时程序或者编译器会停止并发出警告！</p><h2 id="除零操作" tabindex="-1">除零操作 <a class="header-anchor" href="#除零操作" aria-label="Permalink to &quot;除零操作&quot;">​</a></h2><p>很显然，除零是非法操作，故会引起程序或者编译器报错！</p><p>当然，还包括求余运算，除数为零是也是非法的！</p><h2 id="精确除法溢出" tabindex="-1">精确除法溢出 <a class="header-anchor" href="#精确除法溢出" aria-label="Permalink to &quot;精确除法溢出&quot;">​</a></h2><p>精确除法使用的是 <a href="https://ziglang.org/documentation/master/#divExact" target="_blank" rel="noreferrer"><code>@divExact</code></a>，它需要保证被除数可以整除除数，否则会触发编译器错误！</p><h2 id="尝试解开可选类型-null" tabindex="-1">尝试解开可选类型 Null <a class="header-anchor" href="#尝试解开可选类型-null" aria-label="Permalink to &quot;尝试解开可选类型 Null&quot;">​</a></h2><p>可选类型值是 <code>null</code> 时，如果直接使用 <code>variable.?</code> 语法来解开可选，那么会导致出现错误！</p><p>正确的处理方案是使用 <a href="./../basic/process_control/decision.html#解构可选类型"><code>if</code> 语法</a>来解开可选类型。</p><h2 id="尝试解开错误联合类型-error" tabindex="-1">尝试解开错误联合类型 Error <a class="header-anchor" href="#尝试解开错误联合类型-error" aria-label="Permalink to &quot;尝试解开错误联合类型 Error&quot;">​</a></h2><p>错误联合类型如果是 <code>error</code> 时，直接使用它会导致程序或者编译器停止运行！</p><p>正确的处理方案是使用 <a href="./../basic/process_control/decision.html#解构错误联合类型"><code>if</code> 语法</a>来解开可选类型。</p><h2 id="无效错误码" tabindex="-1">无效错误码 <a class="header-anchor" href="#无效错误码" aria-label="Permalink to &quot;无效错误码&quot;">​</a></h2><p>使用 <a href="https://ziglang.org/documentation/master/#errorFromInt" target="_blank" rel="noreferrer"><code>@errorFromInt</code></a> 获取错误时，如果没有对应整数的错误，那么会导致程序或编译器报错！</p><h2 id="无效枚举转换" tabindex="-1">无效枚举转换 <a class="header-anchor" href="#无效枚举转换" aria-label="Permalink to &quot;无效枚举转换&quot;">​</a></h2><p>当使用 <a href="https://ziglang.org/documentation/master/#enumFromInt" target="_blank" rel="noreferrer"><code>@enumFromInt</code></a> 来获取枚举时，如果没有对应整数的枚举，那么会导致程序或者编译器报告错误！</p><h2 id="无效错误集合转换" tabindex="-1">无效错误集合转换 <a class="header-anchor" href="#无效错误集合转换" aria-label="Permalink to &quot;无效错误集合转换&quot;">​</a></h2><p>两个不相关的错误集不可以相互转换，如果强制使用 <a href="https://ziglang.org/documentation/master/#errorCast" target="_blank" rel="noreferrer"><code>@errorCast</code></a>转换两个不相关的错误集，那么会导致程序或者编译器报告错误！</p><h2 id="指针对齐错误" tabindex="-1">指针对齐错误 <a class="header-anchor" href="#指针对齐错误" aria-label="Permalink to &quot;指针对齐错误&quot;">​</a></h2><p>指针对齐转换可能发生错误，如：</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> ptr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*align</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">i32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@ptrFromInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0x1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> aligned</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*align</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">i32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@alignCast</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">ptr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p><code>0x1</code> 地址很明显是不符合 4 字节对齐，会导致编译器错误。</p><h2 id="联合类型字段访问错误" tabindex="-1">联合类型字段访问错误 <a class="header-anchor" href="#联合类型字段访问错误" aria-label="Permalink to &quot;联合类型字段访问错误&quot;">​</a></h2><p>如果访问的联合类型字段并非是它当前的有效字段，那么会触发非法行为！</p><p>可以通过重新分配来更改联合类型的有效字段：</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> Foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">union</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">u32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">Foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ .</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">42</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">Foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ .</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12.34</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">🅿️ 提示</p><p>注意：packed 和 extern 标记的联合类型并没有这种安全监测！</p></div><h2 id="浮点转换整数发生越界" tabindex="-1">浮点转换整数发生越界 <a class="header-anchor" href="#浮点转换整数发生越界" aria-label="Permalink to &quot;浮点转换整数发生越界&quot;">​</a></h2><p>当将浮点数转换为整数时，如果浮点数的值超出了整数类型的范围，就会发生非法越界，例如：</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">f32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4294967296</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">i32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">@intFromFloat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="指针强制转换为-null" tabindex="-1">指针强制转换为 Null <a class="header-anchor" href="#指针强制转换为-null" aria-label="Permalink to &quot;指针强制转换为 Null&quot;">​</a></h2><p>将允许地址为 0 的指针转换为地址不可能为 0 的指针，这会触发非法行为。</p><p>C 指针、可选指针、<code>allowzero</code> 标记的指针，这些都是允许地址为 0，但普通指针是不允许的。</p>`,66),l=[h];function e(k,p,r,d,o,E){return i(),a("div",null,l)}const F=s(n,[["render",e]]);export{c as __pageData,F as default};