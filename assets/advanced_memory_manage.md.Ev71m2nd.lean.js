import{_ as a,o as t,c as o,k as e,a as n}from"./chunks/framework.gI2xCOxE.js";const v=JSON.parse('{"title":"内存管理","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"advanced/memory_manage.md","filePath":"advanced/memory_manage.md","lastUpdated":1700410180000}'),s={name:"advanced/memory_manage.md"},c=e("h1",{id:"内存管理",tabindex:"-1"},[n("内存管理 "),e("a",{class:"header-anchor",href:"#内存管理","aria-label":'Permalink to "内存管理"'},"​")],-1),d=e("blockquote",null,[e("p",null,"zig 在内存管理方面采取了类似 C 的方案，完全由程序员管理内存，这也是为什么 zig 没有运行时开销的原因，同时这也是为什么 zig 可以在如此多环境（包括实时软件、操作系统内核、嵌入式设备和低延迟服务器）中无缝工作的原因。")],-1),r=e("p",null,"事实上，在 C 开发中最难以调试的 bug 往往是由于错误的内存管理引起的， zig 在此基础上给我们提供了少量的保护，但仅仅是少量的保护（这点就不如 rust 的内存安全了）",-1),l=e("blockquote",null,[e("p",null,"对于可以自由操控的程序员，明白数据在内存中存在的形式极为重要，这会使你明确知道你的变量被分配在什么上面。")],-1),_=e("p",null,"zig 针对这种模式提供的方案是：显式声明并传递使用的内存分配模式，需要我们本身自己来显式声明使用的内存分配函数，并传递它。同时，标准库不会为我们做任何的隐式分配。",-1),i=[c,d,r,l,_];function m(p,u,h,g,f,k){return t(),o("div",null,i)}const x=a(s,[["render",m]]);export{v as __pageData,x as default};