import{_ as s,o as a,c as i,R as e}from"./chunks/framework.ekaVIUcx.js";const g=JSON.parse('{"title":"包管理","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"advanced/package_management.md","filePath":"advanced/package_management.md","lastUpdated":1701399971000}'),n={name:"advanced/package_management.md"},d=e(`<h1 id="包管理" tabindex="-1">包管理 <a class="header-anchor" href="#包管理" aria-label="Permalink to &quot;包管理&quot;">​</a></h1><p>随着 <code>0.11</code> 的发布，zig 终于迎来了一个正式的官方包管理器，此前已知是通过第三方包管理器下载并处理包。</p><p>zig 当前并没有一个中心化存储库，包可以来自任何来源，无论是本地还是网络上。</p><h2 id="新的文件结构" tabindex="-1">新的文件结构 <a class="header-anchor" href="#新的文件结构" aria-label="Permalink to &quot;新的文件结构&quot;">​</a></h2><p><code>build.zig.zon</code> 这个文件存储了包的信息，它是 zig 新引入的一种简单数据交换格式，使用了 zig 的匿名结构和数组初始化语法。</p><div class="language-zig vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zig</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;my_package_name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;0.1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">dependencies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = .{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        .</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">dep_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = .{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            .</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://link.to/dependency.tar.gz&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            .</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">hash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;12200f41f9804eb9abff259c5d0d84f27caa0a25e0f72451a0243a806c8f94fdc433&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 这里的 paths 字段是当前 nightly 版本新引入的</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 它用于显式声明包含的源文件，如果包含全部则指定为空</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = .{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>以上字段含义为：</p><ul><li><code>name</code>：当前你所开发的包的名字</li><li><code>version</code>：包的版本，使用<a href="https://semver.org/" target="_blank" rel="noreferrer">Semantic Version</a>。</li><li><code>dependencies</code>：依赖项，内部是一连串的匿名结构体，字段 <code>dep_name</code> 是依赖包的名字，<code>url</code> 是源代码地址，<code>hash</code> 是对应的hash（源文件内容的hash）</li><li><code>paths</code>：显式声明包含的源文件，包含所有则指定为空，当前仅 <code>nightly</code> 可用。</li></ul><p>目前为止，<code>0.11</code> 版本支持两种打包格式的源文件：<code>tar.gz</code> 和 <code>tar.xz</code>。</p><h2 id="包对外暴露模块" tabindex="-1">包对外暴露模块 <a class="header-anchor" href="#包对外暴露模块" aria-label="Permalink to &quot;包对外暴露模块&quot;">​</a></h2><p>每个作为依赖的包都可以对外暴露模块，使用 <code>std.Build.addModule</code> 实现，通过该函数暴露的模块是完全公开的，如果需要使用私有的模块，请使用 <code>std.Build.createModule</code>。关于二进制构建结果（例如动态链接库），任何会被执行 <code>install</code> 的构建均会被暴露出去。</p><h2 id="引入依赖项" tabindex="-1">引入依赖项 <a class="header-anchor" href="#引入依赖项" aria-label="Permalink to &quot;引入依赖项&quot;">​</a></h2><p>在 <code>build.zig</code> 中，可以使用 <code>std.Build.dependency</code> 函数引入依赖项，它使用在 <code>.zon</code> 中的依赖项名字并返回一个 <code>*std.Build.Dependency</code>，返回的结果可以使用 <code>artifact</code> 和 <code>module</code> 方法来访问依赖项的构建结果和暴漏的模块。</p><p>如果需要引入本地具有 <code>build.zig</code> 的依赖项，可以使用 <code>std.Build.anonymousDependency</code>， 它会将依赖项的包构建根目录和通过 <code>@import</code> 导入的依赖项的 <code>build.zig</code> 作为参数。</p><p><code>dependency</code> 和 <code>anonymousDependency</code> 都包含一个额外的参数 <code>args</code>，这是传给对应的依赖项构建的参数（类似在命令行构建时使用的 <code>-D</code> 参数，通过 <code>std.Build.option</code> 实现），当前包的参数并不会向依赖项传递，需要手动显式指定转发。</p><p>TODO：更多的示例说明，当前的包管理讲解并不清楚！</p>`,16),t=[d];function l(p,h,o,c,k,E){return a(),i("div",null,t)}const y=s(n,[["render",l]]);export{g as __pageData,y as default};
