"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),g=i,f=c["".concat(s,".").concat(g)]||c[g]||m[g]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={},o="Core Plugins",l={unversionedId:"plugins/index",id:"plugins/index",title:"Core Plugins",description:"LazyVim provides a set of preconfigured plugins enabled by default.",source:"@site/docs/plugins/index.md",sourceDirName:"plugins",slug:"/plugins/",permalink:"/plugins/",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/plugins/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tips",permalink:"/configuration/tips"},next:{title:"Coding",permalink:"/plugins/coding"}},s={},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"core-plugins"},"Core Plugins"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"LazyVim")," provides a set of preconfigured plugins enabled by default.\nAll you need to do to utilize these plugins is install the ",(0,i.kt)("strong",{parentName:"p"},"LazyVim")," starter template."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/plugins/coding"},"Coding"),": Faster coding with features such as snippets, autocompletion, and more."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/plugins/colorscheme"},"Colorscheme"),": Default color schemes (",(0,i.kt)("strong",{parentName:"li"},"TokyoNight")," and ",(0,i.kt)("strong",{parentName:"li"},"Catppuccin"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/plugins/editor"},"Editor"),": Provides functionality like a file explorer, search and replace, fuzzy finding, git integration."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/plugins/formatting"},"Formatting"),": Set up formatters using ",(0,i.kt)("strong",{parentName:"li"},"conform.nvim"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/plugins/linting"},"Linting"),": Manage linters with the ",(0,i.kt)("strong",{parentName:"li"},"nvim-lint")," plugin."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/plugins/lsp"},"LSP"),": configure the Language Server Protocol (LSP) client."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/plugins/treesitter"},"TreeSitter"),": advanced syntax highlighting and plugins that use ",(0,i.kt)("strong",{parentName:"li"},"Treesitter")," parsers"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/plugins/ui"},"UI"),": Enhance the user interface with features such as status line, buffer line, indentation guides, dashboard, and icons."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/plugins/util"},"Util"),": Contains utilities for session management, shared functionality, and other handy tools.")),(0,i.kt)("p",null,"For detailed information on the default configurations of each plugin set and\ninstructions on customizing them, refer to the respective documentation linked above."))}c.isMDXComponent=!0}}]);