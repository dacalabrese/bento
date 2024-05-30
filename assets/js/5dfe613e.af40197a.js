"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[3929],{2118:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return c}});var r=t(5893),s=t(1151);t(4866),t(5162);const o={title:"sentry_capture",slug:"sentry_capture",type:"processor",status:"experimental",name:"sentry_capture"},l=void 0,a={id:"components/processors/sentry_capture",title:"sentry_capture",description:"\x3c!--",source:"@site/docs/components/processors/sentry_capture.md",sourceDirName:"components/processors",slug:"/components/processors/sentry_capture",permalink:"/bento/docs/components/processors/sentry_capture",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/processors/sentry_capture.md",tags:[],version:"current",frontMatter:{title:"sentry_capture",slug:"sentry_capture",type:"processor",status:"experimental",name:"sentry_capture"},sidebar:"docs",previous:{title:"select_parts",permalink:"/bento/docs/components/processors/select_parts"},next:{title:"sleep",permalink:"/bento/docs/components/processors/sleep"}},i={},c=[{value:"Fields",id:"fields",level:2},{value:"<code>dsn</code>",id:"dsn",level:3},{value:"<code>message</code>",id:"message",level:3},{value:"<code>context</code>",id:"context",level:3},{value:"<code>tags</code>",id:"tags",level:3},{value:"<code>environment</code>",id:"environment",level:3},{value:"<code>release</code>",id:"release",level:3},{value:"<code>level</code>",id:"level",level:3},{value:"<code>transport_mode</code>",id:"transport_mode",level:3},{value:"<code>flush_timeout</code>",id:"flush_timeout",level:3},{value:"<code>sampling_rate</code>",id:"sampling_rate",level:3}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"EXPERIMENTAL",type:"caution",children:(0,r.jsx)(n.p,{children:"This component is experimental and therefore subject to change or removal outside of major version releases."})}),"\n",(0,r.jsxs)(n.p,{children:["Captures log events from messages and submits them to ",(0,r.jsx)(n.a,{href:"https://sentry.io/",children:"Sentry"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Introduced in version 4.16.0."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Config fields, showing default values\nlabel: ""\nsentry_capture:\n  dsn: ""\n  message: webhook event received # No default (required)\n  context: \'root = {"order": {"product_id": "P93174", "quantity": 5}}\' # No default (optional)\n  tags: {} # No default (optional)\n  environment: ""\n  release: ""\n  level: INFO\n  transport_mode: async\n  flush_timeout: 5s\n  sampling_rate: 1\n'})}),"\n",(0,r.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsx)(n.h3,{id:"dsn",children:(0,r.jsx)(n.code,{children:"dsn"})}),"\n",(0,r.jsx)(n.p,{children:"The DSN address to send sentry events to. If left empty, then SENTRY_DSN is used."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n",(0,r.jsx)(n.h3,{id:"message",children:(0,r.jsx)(n.code,{children:"message"})}),"\n",(0,r.jsxs)(n.p,{children:["A message to set on the sentry event\nThis field supports ",(0,r.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"interpolation functions"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nmessage: webhook event received\n\nmessage: 'failed to find product in database: ${! error() }'\n"})}),"\n",(0,r.jsx)(n.h3,{id:"context",children:(0,r.jsx)(n.code,{children:"context"})}),"\n",(0,r.jsxs)(n.p,{children:["A mapping that must evaluate to an object-of-objects or ",(0,r.jsx)(n.code,{children:"deleted()"}),". If this mapping produces a value, then it is set on a sentry event as additional context."]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Examples\n\ncontext: \'root = {"order": {"product_id": "P93174", "quantity": 5}}\'\n\ncontext: root = deleted()\n'})}),"\n",(0,r.jsx)(n.h3,{id:"tags",children:(0,r.jsx)(n.code,{children:"tags"})}),"\n",(0,r.jsxs)(n.p,{children:["Sets key/value string tags on an event. Unlike context, these are indexed and searchable on Sentry but have length limitations.\nThis field supports ",(0,r.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"interpolation functions"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"object"})]}),"\n",(0,r.jsx)(n.h3,{id:"environment",children:(0,r.jsx)(n.code,{children:"environment"})}),"\n",(0,r.jsx)(n.p,{children:"The environment to be sent with events. If left empty, then SENTRY_ENVIRONMENT is used."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n",(0,r.jsx)(n.h3,{id:"release",children:(0,r.jsx)(n.code,{children:"release"})}),"\n",(0,r.jsx)(n.p,{children:"The version of the code deployed to an environment. If left empty, then the Sentry client will attempt to detect the release from the environment."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n",(0,r.jsx)(n.h3,{id:"level",children:(0,r.jsx)(n.code,{children:"level"})}),"\n",(0,r.jsx)(n.p,{children:"Sets the level on sentry events similar to logging levels."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'"INFO"'}),(0,r.jsx)(n.br,{}),"\n","Options: ",(0,r.jsx)(n.code,{children:"DEBUG"}),", ",(0,r.jsx)(n.code,{children:"INFO"}),", ",(0,r.jsx)(n.code,{children:"WARN"}),", ",(0,r.jsx)(n.code,{children:"ERROR"}),", ",(0,r.jsx)(n.code,{children:"FATAL"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"transport_mode",children:(0,r.jsx)(n.code,{children:"transport_mode"})}),"\n",(0,r.jsx)(n.p,{children:"Determines how events are sent. A sync transport will block when sending each event until a response is received from the Sentry server. The recommended async transport will enqueue events in a buffer and send them in the background."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'"async"'}),(0,r.jsx)(n.br,{}),"\n","Options: ",(0,r.jsx)(n.code,{children:"async"}),", ",(0,r.jsx)(n.code,{children:"sync"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"flush_timeout",children:(0,r.jsx)(n.code,{children:"flush_timeout"})}),"\n",(0,r.jsx)(n.p,{children:"The duration to wait when closing the processor to flush any remaining enqueued events."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'"5s"'})]}),"\n",(0,r.jsx)(n.h3,{id:"sampling_rate",children:(0,r.jsx)(n.code,{children:"sampling_rate"})}),"\n",(0,r.jsx)(n.p,{children:"The rate at which events are sent to the server. A value of 0 disables capturing sentry events entirely. A value of 1 results in sending all events to Sentry. Any value in between results sending some percentage of events."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"float"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:"1"})]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5162:function(e,n,t){t.d(n,{Z:function(){return l}});t(7294);var r=t(6010),s={tabItem:"tabItem_Ymn6"},o=t(5893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:t,children:n})}},4866:function(e,n,t){t.d(n,{Z:function(){return _}});var r=t(7294),s=t(6010),o=t(2466),l=t(6550),a=t(469),i=t(1980),c=t(7392),d=t(12);function u(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=h(e),[l,i]=(0,r.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const s=null!=(n=r.find((e=>e.default)))?n:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[c,u]=m({queryString:t,groupId:s}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[s,o]=(0,d.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),v=(()=>{const e=null!=c?c:f;return p({value:e,tabValues:o})?e:null})();(0,a.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);i(e),u(e),x(e)}),[u,x,o]),tabValues:o}}var x=t(2389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},j=t(5893);function b(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:a}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),s=a[t].value;s!==r&&(c(n),l(s))},u=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var r;const n=i.indexOf(e.currentTarget)+1;t=null!=(r=i[n])?r:i[0];break}case"ArrowLeft":{var s;const n=i.indexOf(e.currentTarget)-1;t=null!=(s=i[n])?s:i[i.length-1];break}}null==(n=t)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...o,className:(0,s.Z)("tabs__item",v.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===n}),children:null!=t?t:n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,j.jsx)(b,{...e,...n}),(0,j.jsx)(g,{...e,...n})]})}function _(e){const n=(0,x.Z)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},1151:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var r=t(7294);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);