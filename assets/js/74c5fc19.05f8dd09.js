"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[8612],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||s;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),s=n(6010),o=n(2466),l=n(6550),i=n(1980),u=n(7392),p=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=d(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,u]=f({queryString:n,groupId:a}),[c,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=i??c;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,s]),tabValues:s}}var g=n(2389);const b="tabList__CuJ",y="tabItem_LNqP";function h(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==l&&(c(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},o,{className:(0,s.Z)("tabs__item",y,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function T(e){const t=v(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",b)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(T,(0,a.Z)({key:String(t)},e))}},7007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),s=n(4866),o=n(5162);const l={},i="Typescript",u={unversionedId:"extras/lang/typescript",id:"extras/lang/typescript",title:"Typescript",description:"To use this, add it to your lazy.nvim imports:",source:"@site/docs/extras/lang/typescript.md",sourceDirName:"extras/lang",slug:"/extras/lang/typescript",permalink:"/extras/lang/typescript",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/extras/lang/typescript.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"lang.tex",permalink:"/extras/lang/tex"},next:{title:"lang.yaml",permalink:"/extras/lang/yaml"}},p={},c=[{value:"nvim-treesitter",id:"nvim-treesitter",level:2},{value:"nvim-lspconfig",id:"nvim-lspconfig",level:2},{value:"nvim-dap",id:"nvim-dap",level:2},{value:"mason.nvim",id:"masonnvim",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"typescript"},"Typescript"),(0,r.kt)("p",null,"To use this, add it to your ",(0,r.kt)("strong",{parentName:"p"},"lazy.nvim")," imports:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.lang.typescript" },\n    { import = "plugins" },\n  },\n})\n')),(0,r.kt)("h2",{id:"nvim-treesitter"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/nvim-treesitter/nvim-treesitter"},"nvim-treesitter")),(0,r.kt)("p",null," add typescript to treesitter"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  if type(opts.ensure_installed) == "table" then\n    vim.list_extend(opts.ensure_installed, { "typescript", "tsx" })\n  end\nend\n'))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-treesitter/nvim-treesitter",\n  opts = function(_, opts)\n    if type(opts.ensure_installed) == "table" then\n      vim.list_extend(opts.ensure_installed, { "typescript", "tsx" })\n    end\n  end,\n}\n')))),(0,r.kt)("h2",{id:"nvim-lspconfig"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/neovim/nvim-lspconfig"},"nvim-lspconfig")),(0,r.kt)("p",null," correctly setup lspconfig"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  -- make sure mason installs the server\n  servers = {\n    ---@type lspconfig.options.tsserver\n    tsserver = {\n      keys = {\n        {\n          "<leader>co",\n          function()\n            vim.lsp.buf.code_action({\n              apply = true,\n              context = {\n                only = { "source.organizeImports.ts" },\n                diagnostics = {},\n              },\n            })\n          end,\n          desc = "Organize Imports",\n        },\n      },\n      settings = {\n        typescript = {\n          format = {\n            indentSize = vim.o.shiftwidth,\n            convertTabsToSpaces = vim.o.expandtab,\n            tabSize = vim.o.tabstop,\n          },\n        },\n        javascript = {\n          format = {\n            indentSize = vim.o.shiftwidth,\n            convertTabsToSpaces = vim.o.expandtab,\n            tabSize = vim.o.tabstop,\n          },\n        },\n        completions = {\n          completeFunctionCalls = true,\n        },\n      },\n    },\n  },\n}\n'))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "neovim/nvim-lspconfig",\n  opts = {\n    -- make sure mason installs the server\n    servers = {\n      ---@type lspconfig.options.tsserver\n      tsserver = {\n        keys = {\n          {\n            "<leader>co",\n            function()\n              vim.lsp.buf.code_action({\n                apply = true,\n                context = {\n                  only = { "source.organizeImports.ts" },\n                  diagnostics = {},\n                },\n              })\n            end,\n            desc = "Organize Imports",\n          },\n        },\n        settings = {\n          typescript = {\n            format = {\n              indentSize = vim.o.shiftwidth,\n              convertTabsToSpaces = vim.o.expandtab,\n              tabSize = vim.o.tabstop,\n            },\n          },\n          javascript = {\n            format = {\n              indentSize = vim.o.shiftwidth,\n              convertTabsToSpaces = vim.o.expandtab,\n              tabSize = vim.o.tabstop,\n            },\n          },\n          completions = {\n            completeFunctionCalls = true,\n          },\n        },\n      },\n    },\n  },\n}\n')))),(0,r.kt)("h2",{id:"nvim-dap"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/mfussenegger/nvim-dap"},"nvim-dap")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local dap = require("dap")\n  if not dap.adapters["pwa-node"] then\n    require("dap").adapters["pwa-node"] = {\n      type = "server",\n      host = "localhost",\n      port = "${port}",\n      executable = {\n        command = "node",\n        -- \ud83d\udc80 Make sure to update this path to point to your installation\n        args = {\n          require("mason-registry").get_package("js-debug-adapter"):get_install_path()\n            .. "/js-debug/src/dapDebugServer.js",\n          "${port}",\n        },\n      },\n    }\n  end\n  for _, language in ipairs({ "typescript", "javascript", "typescriptreact", "javascriptreact" }) do\n    if not dap.configurations[language] then\n      dap.configurations[language] = {\n        {\n          type = "pwa-node",\n          request = "launch",\n          name = "Launch file",\n          program = "${file}",\n          cwd = "${workspaceFolder}",\n        },\n        {\n          type = "pwa-node",\n          request = "attach",\n          name = "Attach",\n          processId = require("dap.utils").pick_process,\n          cwd = "${workspaceFolder}",\n        },\n      }\n    end\n  end\nend\n'))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "mfussenegger/nvim-dap",\n  optional = true,\n  dependencies = {\n    {\n      "williamboman/mason.nvim",\n      opts = function(_, opts)\n        opts.ensure_installed = opts.ensure_installed or {}\n        table.insert(opts.ensure_installed, "js-debug-adapter")\n      end,\n    },\n  },\n  opts = function()\n    local dap = require("dap")\n    if not dap.adapters["pwa-node"] then\n      require("dap").adapters["pwa-node"] = {\n        type = "server",\n        host = "localhost",\n        port = "${port}",\n        executable = {\n          command = "node",\n          -- \ud83d\udc80 Make sure to update this path to point to your installation\n          args = {\n            require("mason-registry").get_package("js-debug-adapter"):get_install_path()\n              .. "/js-debug/src/dapDebugServer.js",\n            "${port}",\n          },\n        },\n      }\n    end\n    for _, language in ipairs({ "typescript", "javascript", "typescriptreact", "javascriptreact" }) do\n      if not dap.configurations[language] then\n        dap.configurations[language] = {\n          {\n            type = "pwa-node",\n            request = "launch",\n            name = "Launch file",\n            program = "${file}",\n            cwd = "${workspaceFolder}",\n          },\n          {\n            type = "pwa-node",\n            request = "attach",\n            name = "Attach",\n            processId = require("dap.utils").pick_process,\n            cwd = "${workspaceFolder}",\n          },\n        }\n      end\n    end\n  end,\n}\n')))),(0,r.kt)("h2",{id:"masonnvim"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/williamboman/mason.nvim"},"mason.nvim")),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  opts.ensure_installed = opts.ensure_installed or {}\n  table.insert(opts.ensure_installed, "js-debug-adapter")\nend\n'))),(0,r.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "williamboman/mason.nvim",\n  opts = function(_, opts)\n    opts.ensure_installed = opts.ensure_installed or {}\n    table.insert(opts.ensure_installed, "js-debug-adapter")\n  end,\n}\n')))))}m.isMDXComponent=!0}}]);