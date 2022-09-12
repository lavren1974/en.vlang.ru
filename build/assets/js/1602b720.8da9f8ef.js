"use strict";(self.webpackChunkvlang_ru=self.webpackChunkvlang_ru||[]).push([[6904],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?t.createElement(f,i(i({ref:n},p),{},{components:r})):t.createElement(f,i({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7739:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=r(7462),o=(r(7294),r(3905));const a={sidebar_position:17},i="Cross compilation",l={unversionedId:"advanced/cross-compilation",id:"advanced/cross-compilation",title:"Cross compilation",description:"To cross compile your project simply run",source:"@site/docs/advanced/cross-compilation.md",sourceDirName:"advanced",slug:"/advanced/cross-compilation",permalink:"/docs/advanced/cross-compilation",draft:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Hot code reloading",permalink:"/docs/advanced/hot-code-reloading"},next:{title:"Cross-platform shell scripts in V",permalink:"/docs/advanced/cross-platform-shell-scripts"}},s={},c=[],p={toc:c};function u(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cross-compilation"},"Cross compilation"),(0,o.kt)("p",null,"To cross compile your project simply run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"v -os windows .\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"v -os linux .\n")),(0,o.kt)("p",null,"NB: Cross-compiling a windows binary on a linux machine requires the GNU C compiler for\nMinGW-w64 (targeting Win64) to first be installed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install gcc-mingw-w64-x86-64\n")),(0,o.kt)("p",null,"(Cross compiling for macOS is temporarily not possible.)"),(0,o.kt)("p",null,"If you don't have any C dependencies, that's all you need to do. This works even\nwhen compiling GUI apps using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ui")," module or graphical apps using ",(0,o.kt)("inlineCode",{parentName:"p"},"gg"),"."),(0,o.kt)("p",null,"You will need to install Clang, LLD linker, and download a zip file with\nlibraries and include files for Windows and Linux. V will provide you with a link."))}u.isMDXComponent=!0}}]);