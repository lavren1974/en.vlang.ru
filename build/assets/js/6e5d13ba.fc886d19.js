"use strict";(self.webpackChunkvlang_ru=self.webpackChunkvlang_ru||[]).push([[4128],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>d});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=i,b=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return a?t.createElement(b,l(l({ref:n},u),{},{components:a})):t.createElement(b,l({ref:n},u))}));function d(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6177:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var t=a(7462),i=(a(7294),a(3905));const r={sidebar_position:7},l="Variables",o={unversionedId:"documentation/variables",id:"documentation/variables",title:"Variables",description:"Variables are declared and initialized with :=. This is the only",source:"@site/docs/documentation/variables.md",sourceDirName:"documentation",slug:"/documentation/variables",permalink:"/docs/documentation/variables",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Symbol visibility",permalink:"/docs/documentation/symbol-visibility"},next:{title:"Types",permalink:"/docs/documentation/types"}},s={},p=[{value:"Mutable variables",id:"mutable-variables",level:2},{value:"Initialization vs assignment",id:"initialization-vs-assignment",level:2},{value:"Declaration errors",id:"declaration-errors",level:2}],u={toc:p};function c(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"variables"},"Variables"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-v"},"name := 'Bob'\nage := 20\nlarge_number := i64(9999999999)\nprintln(name)\nprintln(age)\nprintln(large_number)\n")),(0,i.kt)("p",null,"Variables are declared and initialized with ",(0,i.kt)("inlineCode",{parentName:"p"},":="),". This is the only\nway to declare variables in V. This means that variables always have an initial\nvalue."),(0,i.kt)("p",null,"The variable's type is inferred from the value on the right hand side.\nTo choose a different type, use type conversion:\nthe expression ",(0,i.kt)("inlineCode",{parentName:"p"},"T(v)")," converts the value ",(0,i.kt)("inlineCode",{parentName:"p"},"v")," to the\ntype ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"."),(0,i.kt)("p",null,"Unlike most other languages, V only allows defining variables in functions.\nGlobal (module level) variables are not allowed. There's no global state in V."),(0,i.kt)("p",null,"For consistency across different code bases, all variable and function names\nmust use the ",(0,i.kt)("inlineCode",{parentName:"p"},"snake_case")," style, as opposed to type names, which must use ",(0,i.kt)("inlineCode",{parentName:"p"},"PascalCase"),"."),(0,i.kt)("h2",{id:"mutable-variables"},"Mutable variables"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-v"},"mut age := 20\nprintln(age)\nage = 21\nprintln(age)\n")),(0,i.kt)("p",null,"To change the value of the variable use ",(0,i.kt)("inlineCode",{parentName:"p"},"="),". In V, variables are\nimmutable by default.\nTo be able to change the value of the variable, you have to declare it with ",(0,i.kt)("inlineCode",{parentName:"p"},"mut"),"."),(0,i.kt)("p",null,"Try compiling the program above after removing ",(0,i.kt)("inlineCode",{parentName:"p"},"mut")," from the first line."),(0,i.kt)("h2",{id:"initialization-vs-assignment"},"Initialization vs assignment"),(0,i.kt)("p",null,"Note the (important) difference between ",(0,i.kt)("inlineCode",{parentName:"p"},":=")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"="),".\n",(0,i.kt)("inlineCode",{parentName:"p"},":=")," is used for declaring and initializing, ",(0,i.kt)("inlineCode",{parentName:"p"},"=")," is used for assigning."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-v",metastring:"failcompile",failcompile:!0},"fn main() {\n    age = 21\n}\n")),(0,i.kt)("p",null,"This code will not compile, because the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"age")," is not declared.\nAll variables need to be declared in V."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-v"},"fn main() {\n    age := 21\n}\n")),(0,i.kt)("p",null,"The values of multiple variables can be changed in one line.\nIn this way, their values can be swapped without an intermediary variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-v"},"mut a := 0\nmut b := 1\nprintln('$a, $b') // 0, 1\na, b = b, a\nprintln('$a, $b') // 1, 0\n")),(0,i.kt)("h2",{id:"declaration-errors"},"Declaration errors"),(0,i.kt)("p",null,"In development mode the compiler will warn you that you haven't used the variable\n(you'll get an \"unused variable\" warning).\nIn production mode (enabled by passing the ",(0,i.kt)("inlineCode",{parentName:"p"},"-prod")," flag to v \u2013 ",(0,i.kt)("inlineCode",{parentName:"p"},"v -prod foo.v"),")\nit will not compile at all (like in Go)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-v",metastring:"failcompile nofmt",failcompile:!0,nofmt:!0},"fn main() {\n    a := 10\n    if true {\n        a := 20 // error: redefinition of `a`\n    }\n    // warning: unused variable `a`\n}\n")),(0,i.kt)("p",null,"Unlike most languages, variable shadowing is not allowed. Declaring a variable with a name\nthat is already used in a parent scope will cause a compilation error."),(0,i.kt)("p",null,"You can shadow imported modules though, as it is very useful in some situations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-v",metastring:"ignore",ignore:!0},"import ui\nimport gg\n\nfn draw(ctx &gg.Context) {\n    gg := ctx.parent.get_ui().gg\n    gg.draw_rect(10, 10, 100, 50)\n}\n")))}c.isMDXComponent=!0}}]);