import{X as E}from"./framework.j75xh3x2.js";function f(w={}){const{immediate:g=!1,onNeedRefresh:r,onOfflineReady:t,onRegistered:o,onRegisteredSW:d,onRegisterError:n}=w;let e,c,s;const u=async(p=!0)=>{await c,await(s==null?void 0:s())};async function m(){if("serviceWorker"in navigator){const{Workbox:p}=await E(()=>import("./workbox-window.prod.es5.prqDwDSL.js"),__vite__mapDeps([]));e=new p("/sw.js",{scope:"/",type:"classic"}),s=async()=>{await(e==null?void 0:e.messageSkipWaiting())};{let i=!1;const l=()=>{i=!0,e==null||e.addEventListener("controlling",a=>{a.isUpdate&&window.location.reload()}),r==null||r()};e.addEventListener("installed",a=>{typeof a.isUpdate>"u"?typeof a.isExternal<"u"?a.isExternal?l():!i&&(t==null||t()):a.isExternal?window.location.reload():!i&&(t==null||t()):a.isUpdate||t==null||t()}),e.addEventListener("waiting",l),e.addEventListener("externalwaiting",l)}e.register({immediate:g}).then(i=>{d?d("/sw.js",i):o==null||o(i)}).catch(i=>{n==null||n(i)})}}return c=m(),u}export{f as registerSW};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
