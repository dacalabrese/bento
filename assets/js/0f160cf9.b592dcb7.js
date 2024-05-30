"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[6742],{5595:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var r=t(5893),a=t(1151),s=t(4866),o=t(5162);const i={title:"command",slug:"command",type:"processor",status:"experimental",categories:["Integration"],name:"command"},c=void 0,l={id:"components/processors/command",title:"command",description:"\x3c!--",source:"@site/docs/components/processors/command.md",sourceDirName:"components/processors",slug:"/components/processors/command",permalink:"/bento/docs/components/processors/command",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/processors/command.md",tags:[],version:"current",frontMatter:{title:"command",slug:"command",type:"processor",status:"experimental",categories:["Integration"],name:"command"},sidebar:"docs",previous:{title:"catch",permalink:"/bento/docs/components/processors/catch"},next:{title:"compress",permalink:"/bento/docs/components/processors/compress"}},u={},d=[{value:"Performance",id:"performance",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"Fields",id:"fields",level:2},{value:"<code>name</code>",id:"name",level:3},{value:"<code>args_mapping</code>",id:"args_mapping",level:3},{value:"Examples",id:"examples",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"EXPERIMENTAL",type:"caution",children:(0,r.jsx)(n.p,{children:"This component is experimental and therefore subject to change or removal outside of major version releases."})}),"\n",(0,r.jsx)(n.p,{children:"Executes a command for each message."}),"\n",(0,r.jsx)(n.p,{children:"Introduced in version 4.21.0."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Config fields, showing default values\nlabel: ""\ncommand:\n  name: bash # No default (required)\n  args_mapping: \'[ "-c", this.script_path ]\' # No default (optional)\n'})}),"\n",(0,r.jsx)(n.p,{children:"The specified command is executed for each message processed, with the raw bytes of the message being fed into the stdin of the command process, and the resulting message having its contents replaced with the stdout of it."}),"\n",(0,r.jsx)(n.h2,{id:"performance",children:"Performance"}),"\n",(0,r.jsxs)(n.p,{children:["Since this processor executes a new process for each message performance will likely be an issue for high throughput streams. If this is the case then consider using the ",(0,r.jsxs)(n.a,{href:"/docs/components/processors/subprocess",children:[(0,r.jsx)(n.code,{children:"subprocess"})," processor"]})," instead as it keeps the underlying process alive long term and uses codecs to insert and extract inputs and outputs to it via stdin/stdout."]}),"\n",(0,r.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,r.jsxs)(n.p,{children:["If a non-zero error code is returned by the command then an error containing the entirety of stderr (or a generic message if nothing is written) is set on the message. These failed messages will continue through the pipeline unchanged, but can be dropped or placed in a dead letter queue according to your config, you can read about these patterns ",(0,r.jsx)(n.a,{href:"/docs/configuration/error_handling",children:"here"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If the command is successful but stderr is written to then a metadata field ",(0,r.jsx)(n.code,{children:"command_stderr"})," is populated with its contents."]}),"\n",(0,r.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsx)(n.h3,{id:"name",children:(0,r.jsx)(n.code,{children:"name"})}),"\n",(0,r.jsxs)(n.p,{children:["The name of the command to execute.\nThis field supports ",(0,r.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"interpolation functions"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nname: bash\n\nname: go\n\nname: ${! @command }\n"})}),"\n",(0,r.jsx)(n.h3,{id:"args_mapping",children:(0,r.jsx)(n.code,{children:"args_mapping"})}),"\n",(0,r.jsxs)(n.p,{children:["An optional ",(0,r.jsx)(n.a,{href:"/docs/guides/bloblang/about",children:"Bloblang mapping"})," that, when specified, should resolve into an array of arguments to pass to the command. Command arguments are expressed this way in order to support dynamic behaviour."]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nargs_mapping: '[ \"-c\", this.script_path ]'\n"})}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(s.Z,{defaultValue:"Cron Scheduled Command",values:[{label:"Cron Scheduled Command",value:"Cron Scheduled Command"},{label:"Dynamic Command Execution",value:"Dynamic Command Execution"}],children:[(0,r.jsxs)(o.Z,{value:"Cron Scheduled Command",children:[(0,r.jsxs)(n.p,{children:["This example uses a ",(0,r.jsxs)(n.a,{href:"/docs/components/inputs/generate",children:[(0,r.jsx)(n.code,{children:"generate"})," input"]})," to trigger a command on a cron schedule:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"input:\n  generate:\n    interval: '0,30 */2 * * * *'\n    mapping: 'root = \"\"' # Empty string as we do not need to pipe anything to stdin\n  processors:\n    - command:\n        name: df\n        args_mapping: '[ \"-h\" ]'\n"})})]}),(0,r.jsxs)(o.Z,{value:"Dynamic Command Execution",children:[(0,r.jsxs)(n.p,{children:["This example config takes structured messages of the form ",(0,r.jsx)(n.code,{children:'{"command":"echo","args":["foo"]}'})," and uses their contents to execute the contained command and arguments dynamically, replacing its contents with the command result printed to stdout:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"pipeline:\n  processors:\n    - command:\n        name: ${! this.command }\n        args_mapping: 'this.args'\n"})})]})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},5162:function(e,n,t){t.d(n,{Z:function(){return o}});t(7294);var r=t(6010),a={tabItem:"tabItem_Ymn6"},s=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:t,children:n})}},4866:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(7294),a=t(6010),s=t(2466),o=t(6550),i=t(469),c=t(1980),l=t(7392),u=t(12);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=m(e),[o,c]=(0,r.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const a=null!=(n=r.find((e=>e.default)))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[l,d]=h({queryString:t,groupId:a}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[a,s]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=null!=l?l:f;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{b&&c(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);c(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=t(2389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},x=t(5893);function v(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),a=i[t].value;a!==r&&(l(n),o(a))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var r;const n=c.indexOf(e.currentTarget)+1;t=null!=(r=c[n])?r:c[0];break}case"ArrowLeft":{var a;const n=c.indexOf(e.currentTarget)-1;t=null!=(a=c[n])?a:c[c.length-1];break}}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===n}),children:null!=t?t:n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function w(e){const n=(0,g.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},1151:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var r=t(7294);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);