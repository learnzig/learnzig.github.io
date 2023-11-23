import{_ as s,o as n,c as a,R as l}from"./chunks/framework.XiqD54nH.js";const d=JSON.parse('{"title":"汇编","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"advanced/assembly.md","filePath":"advanced/assembly.md","lastUpdated":1700712565000}'),p={name:"advanced/assembly.md"},o=l(`<h1 id="汇编" tabindex="-1">汇编 <a class="header-anchor" href="#汇编" aria-label="Permalink to &quot;汇编&quot;">​</a></h1><blockquote><p>尽管现代高级语言的特性已经非常丰富，但我们仍需要汇编语言的帮助，在某些特殊的场景下，汇编语言可以发挥出比高级语言更好的性能，这是因为汇编语言更加接近硬件，它允许我们对硬件直接进行操作。</p></blockquote><p>一般是在以下场景下，才会涉及到使用汇编语言：</p><ol><li>时效性高的程序，例如工业控制的程序。</li><li>驱动程序，这需要直接操控硬件，由于高级语言的抽象层次过高，导致其不如汇编语言来的方便。</li><li>内核的开发，现代化内核编写时均会使用汇编来完成一些初始化工作，如 bootloader，分段分页，中断处理等。</li><li>程序的优化，高级语言的编译器并不是完美的，它有时会做出反而使程序变慢的“优化”，而汇编语言完全由程序员控制。</li></ol><p>在 zig 中使用汇编有两种方式，引入外部的内联汇编，内联汇编大概是使用最多的情况。</p><div class="info custom-block"><p class="custom-block-title">🅿️ 提示</p><p>对于 x86 和 x86_64 ，当前汇编语法为 AT＆T 语法，而不是更流行的 Intel 语法。这是由于技术限制，汇编解析由LLVM提供，其对 Intel 语法的支持存在 bug 且测试​​结果并不理想。</p><p>在未来的某一天 Zig 可能有自己的汇编器。这将使汇编能够更加无缝地集成到语言中，并与流行的 Nasm 语法兼容。</p></div><h2 id="外部汇编" tabindex="-1">外部汇编 <a class="header-anchor" href="#外部汇编" aria-label="Permalink to &quot;外部汇编&quot;">​</a></h2><p>两种方式引入外部汇编，一种是在 <code>build.zig</code> 中使用 <code>addAssemblyFile</code> 添加汇编文件，另一种是通过 zig 本身的全局汇编功能。</p><p>这里讲述全局汇编功能：当汇编表达式出现在容器级 comptime 块中时，就是全局汇编。</p><div class="info custom-block"><p class="custom-block-title">🅿️ 提示</p><p>你可能对于<strong>容器</strong>这个概念比较疑惑，在 Zig 中，容器是充当保存变量和函数声明的命名空间的任何语法结构。容器也是可以实例化的类型定义。结构体、枚举、联合、不透明，甚至 Zig 源文件本身都是容器，但容器并不能包含语句（语句是描述程序运行操作的一个单位）。</p><p>当然，你也可以这样理解：容器是一个只包含变量或常量定义以及函数定义的命名空间。</p><p>注意：容器和块（block）不同！</p></div><p>它的实际作用就和使用 <code>addAssemblyFile</code> 的效果类似，在编译期它们会被提取出来作为单独的汇编文件进行编译和链接。</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">std</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">@import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;std&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">comptime</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">asm</span><span style="color:#E1E4E8;"> (</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">\\\\.global my_func;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">\\\\.type my_func, @function;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">\\\\my_func:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">\\\\  lea (%rdi,%rsi,1),%eax</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">\\\\  retq</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">extern</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">my_func</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">a</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">i32</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">b</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">i32</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">i32</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">pub</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">std</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">debug</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">print</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;{}</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">, .{</span><span style="color:#B392F0;">my_func</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">)});</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">std</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">@import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;std&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">comptime</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">asm</span><span style="color:#24292E;"> (</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">\\\\.global my_func;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">\\\\.type my_func, @function;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">\\\\my_func:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">\\\\  lea (%rdi,%rsi,1),%eax</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">\\\\  retq</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">extern</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">my_func</span><span style="color:#24292E;">(</span><span style="color:#E36209;">a</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">i32</span><span style="color:#24292E;">, </span><span style="color:#E36209;">b</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">i32</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">i32</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">pub</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">std</span><span style="color:#24292E;">.</span><span style="color:#E36209;">debug</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">print</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;{}</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">, .{</span><span style="color:#6F42C1;">my_func</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">)});</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>以上这段函数中，我们通过全局汇编定义了一个汇编函数，以实现加法功能，并在 <code>main</code> 中实现了调用，如果你想了解更多这些相关的内容，你可以继续查询有关<strong>调用约定</strong>（<strong>Calling convention</strong>）的资料。</p><h2 id="内联汇编" tabindex="-1">内联汇编 <a class="header-anchor" href="#内联汇编" aria-label="Permalink to &quot;内联汇编&quot;">​</a></h2><p>内联汇编给予了我们可以将 <code>low-level</code> 的汇编代码和高级语言相组合，实现更加高效或者更直白的操作。</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">pub</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">noreturn</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;"> = </span><span style="color:#9ECBFF;">&quot;hello world</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;"> = </span><span style="color:#B392F0;">syscall3</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">SYS_write</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">STDOUT_FILENO</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">@intFromPtr</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">), </span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">.</span><span style="color:#FFAB70;">len</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">_</span><span style="color:#E1E4E8;"> = </span><span style="color:#B392F0;">syscall1</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">SYS_exit</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">unreachable</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">pub</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">SYS_write</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">pub</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">SYS_exit</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">60</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">pub</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">STDOUT_FILENO</span><span style="color:#E1E4E8;"> = </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">pub</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">syscall1</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">number</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">usize</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">arg1</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">usize</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">usize</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">asm</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">volatile</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">&quot;syscall&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        : [</span><span style="color:#FFAB70;">ret</span><span style="color:#E1E4E8;">] </span><span style="color:#9ECBFF;">&quot;={rax}&quot;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">usize</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        : [</span><span style="color:#FFAB70;">number</span><span style="color:#E1E4E8;">] </span><span style="color:#9ECBFF;">&quot;{rax}&quot;</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">number</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          [</span><span style="color:#FFAB70;">arg1</span><span style="color:#E1E4E8;">] </span><span style="color:#9ECBFF;">&quot;{rdi}&quot;</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">arg1</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        : </span><span style="color:#9ECBFF;">&quot;rcx&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;r11&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">pub</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">fn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">syscall3</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">number</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">usize</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">arg1</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">usize</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">arg2</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">usize</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">arg3</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">usize</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">usize</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">asm</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">volatile</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">&quot;syscall&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        : [</span><span style="color:#FFAB70;">ret</span><span style="color:#E1E4E8;">] </span><span style="color:#9ECBFF;">&quot;={rax}&quot;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">usize</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        : [</span><span style="color:#FFAB70;">number</span><span style="color:#E1E4E8;">] </span><span style="color:#9ECBFF;">&quot;{rax}&quot;</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">number</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          [</span><span style="color:#FFAB70;">arg1</span><span style="color:#E1E4E8;">] </span><span style="color:#9ECBFF;">&quot;{rdi}&quot;</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">arg1</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          [</span><span style="color:#FFAB70;">arg2</span><span style="color:#E1E4E8;">] </span><span style="color:#9ECBFF;">&quot;{rsi}&quot;</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">arg2</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          [</span><span style="color:#FFAB70;">arg3</span><span style="color:#E1E4E8;">] </span><span style="color:#9ECBFF;">&quot;{rdx}&quot;</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">arg3</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        : </span><span style="color:#9ECBFF;">&quot;rcx&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;r11&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">pub</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">noreturn</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">msg</span><span style="color:#24292E;"> = </span><span style="color:#032F62;">&quot;hello world</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">_</span><span style="color:#24292E;"> = </span><span style="color:#6F42C1;">syscall3</span><span style="color:#24292E;">(</span><span style="color:#E36209;">SYS_write</span><span style="color:#24292E;">, </span><span style="color:#E36209;">STDOUT_FILENO</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">@intFromPtr</span><span style="color:#24292E;">(</span><span style="color:#E36209;">msg</span><span style="color:#24292E;">), </span><span style="color:#E36209;">msg</span><span style="color:#24292E;">.</span><span style="color:#E36209;">len</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">_</span><span style="color:#24292E;"> = </span><span style="color:#6F42C1;">syscall1</span><span style="color:#24292E;">(</span><span style="color:#E36209;">SYS_exit</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">unreachable</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">pub</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">SYS_write</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">pub</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">SYS_exit</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">60</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">pub</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#E36209;">STDOUT_FILENO</span><span style="color:#24292E;"> = </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">pub</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">syscall1</span><span style="color:#24292E;">(</span><span style="color:#E36209;">number</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">usize</span><span style="color:#24292E;">, </span><span style="color:#E36209;">arg1</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">usize</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">usize</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">asm</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">volatile</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">&quot;syscall&quot;</span></span>
<span class="line"><span style="color:#24292E;">        : [</span><span style="color:#E36209;">ret</span><span style="color:#24292E;">] </span><span style="color:#032F62;">&quot;={rax}&quot;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">usize</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        : [</span><span style="color:#E36209;">number</span><span style="color:#24292E;">] </span><span style="color:#032F62;">&quot;{rax}&quot;</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">number</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">          [</span><span style="color:#E36209;">arg1</span><span style="color:#24292E;">] </span><span style="color:#032F62;">&quot;{rdi}&quot;</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">arg1</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        : </span><span style="color:#032F62;">&quot;rcx&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;r11&quot;</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">pub</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">fn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">syscall3</span><span style="color:#24292E;">(</span><span style="color:#E36209;">number</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">usize</span><span style="color:#24292E;">, </span><span style="color:#E36209;">arg1</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">usize</span><span style="color:#24292E;">, </span><span style="color:#E36209;">arg2</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">usize</span><span style="color:#24292E;">, </span><span style="color:#E36209;">arg3</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">usize</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">usize</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">asm</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">volatile</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">&quot;syscall&quot;</span></span>
<span class="line"><span style="color:#24292E;">        : [</span><span style="color:#E36209;">ret</span><span style="color:#24292E;">] </span><span style="color:#032F62;">&quot;={rax}&quot;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">usize</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        : [</span><span style="color:#E36209;">number</span><span style="color:#24292E;">] </span><span style="color:#032F62;">&quot;{rax}&quot;</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">number</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">          [</span><span style="color:#E36209;">arg1</span><span style="color:#24292E;">] </span><span style="color:#032F62;">&quot;{rdi}&quot;</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">arg1</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">          [</span><span style="color:#E36209;">arg2</span><span style="color:#24292E;">] </span><span style="color:#032F62;">&quot;{rsi}&quot;</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">arg2</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">          [</span><span style="color:#E36209;">arg3</span><span style="color:#24292E;">] </span><span style="color:#032F62;">&quot;{rdx}&quot;</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">arg3</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        : </span><span style="color:#032F62;">&quot;rcx&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;r11&quot;</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>上面这段代码是通过内联汇编实现在 x86-64 linux 下输出 <code>hello world</code>，接下来讲解一下它们的组成和使用。</p><p>内联汇编是以 <code>asm</code> 关键字开头的一个表达式，这说明它可以返回值（也可以不返回值），<code>volatile</code> 关键字会通知编译器，内联汇编的表达式会被某些编译器未知的因素更改（例如操作系统，硬件 MMIO 或者其他线程等等），这样编译器就不会额外优化这段内联汇编。</p><p>上面就是基本的内联汇编的一个外部结构说明，接下来我们介绍具体的内部结构：</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">asm</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">volatile</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">&quot;assembly code&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        : [</span><span style="color:#FFAB70;">ret</span><span style="color:#E1E4E8;">] </span><span style="color:#9ECBFF;">&quot;={rax}&quot;</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">usize</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        : [</span><span style="color:#FFAB70;">number</span><span style="color:#E1E4E8;">] </span><span style="color:#9ECBFF;">&quot;{rax}&quot;</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">number</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          [</span><span style="color:#FFAB70;">arg1</span><span style="color:#E1E4E8;">] </span><span style="color:#9ECBFF;">&quot;{rdi}&quot;</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">arg1</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          [</span><span style="color:#FFAB70;">arg2</span><span style="color:#E1E4E8;">] </span><span style="color:#9ECBFF;">&quot;{rsi}&quot;</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">arg2</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">          [</span><span style="color:#FFAB70;">arg3</span><span style="color:#E1E4E8;">] </span><span style="color:#9ECBFF;">&quot;{rdx}&quot;</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">arg3</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">        : </span><span style="color:#9ECBFF;">&quot;rcx&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;r11&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    );</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">asm</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">volatile</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">&quot;assembly code&quot;</span></span>
<span class="line"><span style="color:#24292E;">        : [</span><span style="color:#E36209;">ret</span><span style="color:#24292E;">] </span><span style="color:#032F62;">&quot;={rax}&quot;</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">usize</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        : [</span><span style="color:#E36209;">number</span><span style="color:#24292E;">] </span><span style="color:#032F62;">&quot;{rax}&quot;</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">number</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">          [</span><span style="color:#E36209;">arg1</span><span style="color:#24292E;">] </span><span style="color:#032F62;">&quot;{rdi}&quot;</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">arg1</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">          [</span><span style="color:#E36209;">arg2</span><span style="color:#24292E;">] </span><span style="color:#032F62;">&quot;{rsi}&quot;</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">arg2</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">          [</span><span style="color:#E36209;">arg3</span><span style="color:#24292E;">] </span><span style="color:#032F62;">&quot;{rdx}&quot;</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">arg3</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">        : </span><span style="color:#032F62;">&quot;rcx&quot;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&quot;r11&quot;</span></span>
<span class="line"><span style="color:#24292E;">    );</span></span></code></pre></div><p>结构大体是这样的:</p><div class="language-asm vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">asm</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 别忘记三个冒号，即便对应的部分不存在也需要有冒号</span></span>
<span class="line"><span style="color:#E1E4E8;">AssemblerTemplate</span></span>
<span class="line"><span style="color:#E1E4E8;">: OutputOperands</span></span>
<span class="line"><span style="color:#E1E4E8;">[ : InputOperands</span></span>
<span class="line"><span style="color:#E1E4E8;">[ : Clobbers ] ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 别忘记三个冒号，即便对应的部分不存在也需要有冒号</span></span>
<span class="line"><span style="color:#24292E;">AssemblerTemplate</span></span>
<span class="line"><span style="color:#24292E;">: OutputOperands</span></span>
<span class="line"><span style="color:#24292E;">[ : InputOperands</span></span>
<span class="line"><span style="color:#24292E;">[ : Clobbers ] ]</span></span></code></pre></div><ol><li>首先是一个内联汇编的语句，但它和普通的内联语句不同，它可以使用“占位符”，类似<code>%[value]</code>，这就是一个占位符，以 <code>%</code> 开头，如果需要使用寄存器，则需要使用两个 <code>%</code> ，例如使用 CR3 寄存器就是 <code>%%cr3</code>。</li><li>之后是一个输出位置，它表示你需要将值输出到哪里，也可以没有返回值，例如上方的示例中 <code>[ret] &quot;={rax}&quot; (-&gt; usize)</code> 代表我们使用 <code>[ret]</code> 标记了返回值，并且返回值就是 rax 寄存器中的值，其后的 <code>(-&gt; usize)</code> 代表我们整个内联汇编表达式需要返回一个值，当然这里如果是一个变量，就会将rax寄存器的值通过<code>[ret]</code>标记绑定到变量上。（注意，此处的 <code>=</code> 代表只能进行写入操作数，属于是一个约束。）</li><li>这是输入操作数，它和输出位置类似，但它可以存在多个输入，并且它也支持“占位符”和相关的约束。</li><li>这里是改动的寄存器，用于通知编译器，我们在执行此内联汇编会使用（或者称之为破坏更合适）的寄存器，默认包含了输入和输出寄存器。还有一个特殊标记 <code>memory</code>，它会通知编译器内联汇编会写入任意为声明的内存位置。</li></ol><div class="info custom-block"><p class="custom-block-title">🅿️ 提示</p><p>关于更多的内联汇编约束信息，你可以阅读这里：<a href="http://releases.llvm.org/10.0.0/docs/LangRef.html#inline-asm-constraint-string" target="_blank" rel="noreferrer">LLVM documentation</a>，<a href="https://gcc.gnu.org/onlinedocs/gcc/Extended-Asm.html" target="_blank" rel="noreferrer">GCC documentation</a>。</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>内联汇编特性在未来可能会发生更改以支持新的特性（如多个返回值），具体见此 <a href="https://github.com/ziglang/zig/issues/215" target="_blank" rel="noreferrer">issue</a>。</p></div>`,25),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const g=s(p,[["render",t]]);export{d as __pageData,g as default};