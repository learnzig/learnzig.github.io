import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.gI2xCOxE.js";const y=JSON.parse('{"title":"zig 命令","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"environment/zig-command.md","filePath":"environment/zig-command.md","lastUpdated":1700408052000}'),o={name:"environment/zig-command.md"},l=n('<h1 id="zig-命令" tabindex="-1"><code>zig</code> 命令 <a class="header-anchor" href="#zig-命令" aria-label="Permalink to &quot;`zig` 命令&quot;">​</a></h1><p>现在，我们已经安装了 zig ，也安装了对应的编辑器，接下来就了解一下基本的 <code>zig</code> 命令。</p><p>这单单一个命令可神了，它囊括了项目建立、构建、测试、运行，甚至你可以用它来部署你的项目，也可以用来给 C/C++ 作为编译或者依赖管理工具，非常的全面，这一切都是得益于 zig 本身的编译期。</p><p>以下仅列出常用的命令！</p><h2 id="zig-build" tabindex="-1"><code>zig build</code> <a class="header-anchor" href="#zig-build" aria-label="Permalink to &quot;`zig build`&quot;">​</a></h2><p>构建项目，会自动搜索当前目录及父目录的 <code>build.zig</code> 进行构建。</p><h2 id="zig-init-exe" tabindex="-1"><code>zig init-exe</code> <a class="header-anchor" href="#zig-init-exe" aria-label="Permalink to &quot;`zig init-exe`&quot;">​</a></h2><p>这个命令用于初始化项目（可执行二进制文件），在当前路径下创建 <code>src/main.zig</code> 和 <code>build.zig</code> 两个文件。</p><p>关于 <code>build.zig</code> 这个文件的内容涉及到了 zig 的构建系统，我们将会单独讲述。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">.</span></span>\n<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build.zig</span></span>\n<span class="line"><span style="color:#B392F0;">└──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">src</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">└──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">main.zig</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">.</span></span>\n<span class="line"><span style="color:#6F42C1;">├──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build.zig</span></span>\n<span class="line"><span style="color:#6F42C1;">└──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">src</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">└──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">main.zig</span></span></code></pre></div><h2 id="zig-init-lib" tabindex="-1"><code>zig init-lib</code> <a class="header-anchor" href="#zig-init-lib" aria-label="Permalink to &quot;`zig init-lib`&quot;">​</a></h2><p>如果你想写一个 zig 的库，那么可以使用该命令，在当前路径下创建 <code>src/main.zig</code> 和 <code>build.zig</code> 两个文件。</p><div class="tip custom-block"><p class="custom-block-title">🅿️ 提示</p><p>创建出来的 <code>main.zig</code> <code>build.zig</code> 和通过 <code>init-exe</code> 命令创建出来的 <code>main.zig</code> <code>build.zig</code> 并不相同。</p></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">.</span></span>\n<span class="line"><span style="color:#B392F0;">├──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">build.zig</span></span>\n<span class="line"><span style="color:#B392F0;">└──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">src</span></span>\n<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">└──</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">main.zig</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">.</span></span>\n<span class="line"><span style="color:#6F42C1;">├──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">build.zig</span></span>\n<span class="line"><span style="color:#6F42C1;">└──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">src</span></span>\n<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">└──</span><span style="color:#24292E;"> </span><span style="color:#032F62;">main.zig</span></span></code></pre></div><h2 id="zig-ast-check" tabindex="-1"><code>zig ast-check</code> <a class="header-anchor" href="#zig-ast-check" aria-label="Permalink to &quot;`zig ast-check`&quot;">​</a></h2><p>对指定文件进行AST语法检查，支持指定文件和标准输入。</p><h2 id="zig-fmt" tabindex="-1"><code>zig fmt</code> <a class="header-anchor" href="#zig-fmt" aria-label="Permalink to &quot;`zig fmt`&quot;">​</a></h2><p>用于格式化代码源文件，支持<code>stdin</code>和指定路径。</p><h2 id="zig-test" tabindex="-1"><code>zig test</code> <a class="header-anchor" href="#zig-test" aria-label="Permalink to &quot;`zig test`&quot;">​</a></h2><p>对指定的源文件运行test,适用于单元测试。</p>',20),i=[l];function p(c,t,d,r,g,h){return a(),e("div",null,i)}const u=s(o,[["render",p]]);export{y as __pageData,u as default};