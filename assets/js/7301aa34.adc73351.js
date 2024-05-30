"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[7793],{9406:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return d}});var r=n(5893),a=n(1151),s=n(4866),l=n(5162);const c={title:"lru",slug:"lru",type:"cache",status:"stable",name:"lru"},o=void 0,i={id:"components/caches/lru",title:"lru",description:"\x3c!--",source:"@site/docs/components/caches/lru.md",sourceDirName:"components/caches",slug:"/components/caches/lru",permalink:"/bento/docs/components/caches/lru",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/caches/lru.md",tags:[],version:"current",frontMatter:{title:"lru",slug:"lru",type:"cache",status:"stable",name:"lru"},sidebar:"docs",previous:{title:"gcp_cloud_storage",permalink:"/bento/docs/components/caches/gcp_cloud_storage"},next:{title:"memcached",permalink:"/bento/docs/components/caches/memcached"}},u={},d=[{value:"Fields",id:"fields",level:2},{value:"<code>cap</code>",id:"cap",level:3},{value:"<code>init_values</code>",id:"init_values",level:3},{value:"<code>algorithm</code>",id:"algorithm",level:3},{value:"<code>two_queues_recent_ratio</code>",id:"two_queues_recent_ratio",level:3},{value:"<code>two_queues_ghost_ratio</code>",id:"two_queues_ghost_ratio",level:3},{value:"<code>optimistic</code>",id:"optimistic",level:3}];function h(e){const t={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Stores key/value pairs in a lru in-memory cache. This cache is therefore reset every time the service restarts."}),"\n",(0,r.jsxs)(s.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,r.jsx)(l.Z,{value:"common",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yml",children:'# Common config fields, showing default values\nlabel: ""\nlru:\n  cap: 1000\n  init_values: {}\n'})})}),(0,r.jsx)(l.Z,{value:"advanced",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yml",children:'# All config fields, showing default values\nlabel: ""\nlru:\n  cap: 1000\n  init_values: {}\n  algorithm: standard\n  two_queues_recent_ratio: 0.25\n  two_queues_ghost_ratio: 0.5\n  optimistic: false\n'})})})]}),"\n",(0,r.jsx)(t.p,{children:"This provides the lru package which implements a fixed-size thread safe LRU cache."}),"\n",(0,r.jsxs)(t.p,{children:["It uses the package ",(0,r.jsx)(t.a,{href:"https://github.com/hashicorp/golang-lru/v2",children:(0,r.jsx)(t.code,{children:"lru"})})]}),"\n",(0,r.jsx)(t.p,{children:"The field init_values can be used to pre-populate the memory cache with any number of key/value pairs:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"cache_resources:\n  - label: foocache\n    lru:\n      cap: 1024\n      init_values:\n        foo: bar\n"})}),"\n",(0,r.jsx)(t.p,{children:"These values can be overridden during execution."}),"\n",(0,r.jsx)(t.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsx)(t.h3,{id:"cap",children:(0,r.jsx)(t.code,{children:"cap"})}),"\n",(0,r.jsx)(t.p,{children:"The cache maximum capacity (number of entries)"}),"\n",(0,r.jsxs)(t.p,{children:["Type: ",(0,r.jsx)(t.code,{children:"int"}),(0,r.jsx)(t.br,{}),"\n","Default: ",(0,r.jsx)(t.code,{children:"1000"})]}),"\n",(0,r.jsx)(t.h3,{id:"init_values",children:(0,r.jsx)(t.code,{children:"init_values"})}),"\n",(0,r.jsx)(t.p,{children:"A table of key/value pairs that should be present in the cache on initialization. This can be used to create static lookup tables."}),"\n",(0,r.jsxs)(t.p,{children:["Type: ",(0,r.jsx)(t.code,{children:"object"}),(0,r.jsx)(t.br,{}),"\n","Default: ",(0,r.jsx)(t.code,{children:"{}"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yml",children:'# Examples\n\ninit_values:\n  Nickelback: "1995"\n  Spice Girls: "1994"\n  The Human League: "1977"\n'})}),"\n",(0,r.jsx)(t.h3,{id:"algorithm",children:(0,r.jsx)(t.code,{children:"algorithm"})}),"\n",(0,r.jsx)(t.p,{children:"the lru cache implementation"}),"\n",(0,r.jsxs)(t.p,{children:["Type: ",(0,r.jsx)(t.code,{children:"string"}),(0,r.jsx)(t.br,{}),"\n","Default: ",(0,r.jsx)(t.code,{children:'"standard"'})]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Option"}),(0,r.jsx)(t.th,{children:"Summary"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"arc"})}),(0,r.jsx)(t.td,{children:"is an adaptive replacement cache. It tracks recent evictions as well as recent usage in both the frequent and recent caches. Its computational overhead is comparable to two_queues, but the memory overhead is linear with the size of the cache. ARC has been patented by IBM."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"standard"})}),(0,r.jsx)(t.td,{children:"is a simple LRU cache. It is based on the LRU implementation in groupcache"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"two_queues"})}),(0,r.jsx)(t.td,{children:"tracks frequently used and recently used entries separately. This avoids a burst of accesses from taking out frequently used entries, at the cost of about 2x computational overhead and some extra bookkeeping."})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"two_queues_recent_ratio",children:(0,r.jsx)(t.code,{children:"two_queues_recent_ratio"})}),"\n",(0,r.jsx)(t.p,{children:"is the ratio of the two_queues cache dedicated to recently added entries that have only been accessed once."}),"\n",(0,r.jsxs)(t.p,{children:["Type: ",(0,r.jsx)(t.code,{children:"float"}),(0,r.jsx)(t.br,{}),"\n","Default: ",(0,r.jsx)(t.code,{children:"0.25"})]}),"\n",(0,r.jsx)(t.h3,{id:"two_queues_ghost_ratio",children:(0,r.jsx)(t.code,{children:"two_queues_ghost_ratio"})}),"\n",(0,r.jsx)(t.p,{children:"is the default ratio of ghost entries kept to track entries recently evicted on two_queues cache."}),"\n",(0,r.jsxs)(t.p,{children:["Type: ",(0,r.jsx)(t.code,{children:"float"}),(0,r.jsx)(t.br,{}),"\n","Default: ",(0,r.jsx)(t.code,{children:"0.5"})]}),"\n",(0,r.jsx)(t.h3,{id:"optimistic",children:(0,r.jsx)(t.code,{children:"optimistic"})}),"\n",(0,r.jsx)(t.p,{children:"If true, we do not lock on read/write events. The lru package is thread-safe, however the ADD operation is not atomic."}),"\n",(0,r.jsxs)(t.p,{children:["Type: ",(0,r.jsx)(t.code,{children:"bool"}),(0,r.jsx)(t.br,{}),"\n","Default: ",(0,r.jsx)(t.code,{children:"false"})]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:function(e,t,n){n.d(t,{Z:function(){return l}});n(7294);var r=n(6010),a={tabItem:"tabItem_Ymn6"},s=n(5893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:n,children:t})}},4866:function(e,t,n){n.d(t,{Z:function(){return _}});var r=n(7294),a=n(6010),s=n(2466),l=n(6550),c=n(469),o=n(1980),i=n(7392),u=n(12);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[l,o]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const a=null!=(t=r.find((e=>e.default)))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,d]=m({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,s]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),x=(()=>{const e=null!=i?i:f;return p({value:e,tabValues:s})?e:null})();(0,c.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(2389),x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},v=n(5893);function j(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.o5)(),u=e=>{const t=e.currentTarget,n=o.indexOf(t),a=c[n].value;a!==r&&(i(t),l(a))},d=e=>{var t;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var r;const t=o.indexOf(e.currentTarget)+1;n=null!=(r=o[t])?r:o[0];break}case"ArrowLeft":{var a;const t=o.indexOf(e.currentTarget)-1;n=null!=(a=o[t])?a:o[o.length-1];break}}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:c.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.Z)("tabs__item",x.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(j,{...e,...t}),(0,v.jsx)(g,{...e,...t})]})}function _(e){const t=(0,b.Z)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},1151:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return l}});var r=n(7294);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);