"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[7554],{6640:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u}});var r=t(5893),s=t(1151),a=t(4866),l=t(5162);const i={title:"sftp",slug:"sftp",type:"input",status:"beta",categories:["Network"],name:"sftp"},c=void 0,o={id:"components/inputs/sftp",title:"sftp",description:"\x3c!--",source:"@site/docs/components/inputs/sftp.md",sourceDirName:"components/inputs",slug:"/components/inputs/sftp",permalink:"/bento/docs/components/inputs/sftp",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/inputs/sftp.md",tags:[],version:"current",frontMatter:{title:"sftp",slug:"sftp",type:"input",status:"beta",categories:["Network"],name:"sftp"},sidebar:"docs",previous:{title:"sequence",permalink:"/bento/docs/components/inputs/sequence"},next:{title:"socket",permalink:"/bento/docs/components/inputs/socket"}},d={},u=[{value:"Metadata",id:"metadata",level:2},{value:"Fields",id:"fields",level:2},{value:"<code>address</code>",id:"address",level:3},{value:"<code>credentials</code>",id:"credentials",level:3},{value:"<code>credentials.username</code>",id:"credentialsusername",level:3},{value:"<code>credentials.password</code>",id:"credentialspassword",level:3},{value:"<code>credentials.private_key_file</code>",id:"credentialsprivate_key_file",level:3},{value:"<code>credentials.private_key_pass</code>",id:"credentialsprivate_key_pass",level:3},{value:"<code>paths</code>",id:"paths",level:3},{value:"<code>auto_replay_nacks</code>",id:"auto_replay_nacks",level:3},{value:"<code>scanner</code>",id:"scanner",level:3},{value:"<code>delete_on_finish</code>",id:"delete_on_finish",level:3},{value:"<code>watcher</code>",id:"watcher",level:3},{value:"<code>watcher.enabled</code>",id:"watcherenabled",level:3},{value:"<code>watcher.minimum_age</code>",id:"watcherminimum_age",level:3},{value:"<code>watcher.poll_interval</code>",id:"watcherpoll_interval",level:3},{value:"<code>watcher.cache</code>",id:"watchercache",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"BETA",type:"caution",children:(0,r.jsx)(n.p,{children:"This component is mostly stable but breaking changes could still be made outside of major version releases if a fundamental problem with the component is found."})}),"\n",(0,r.jsx)(n.p,{children:"Consumes files from an SFTP server."}),"\n",(0,r.jsx)(n.p,{children:"Introduced in version 3.39.0."}),"\n",(0,r.jsxs)(a.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,r.jsx)(l.Z,{value:"common",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Common config fields, showing default values\ninput:\n  label: ""\n  sftp:\n    address: "" # No default (required)\n    credentials:\n      username: ""\n      password: ""\n      private_key_file: ""\n      private_key_pass: ""\n    paths: [] # No default (required)\n    auto_replay_nacks: true\n    scanner:\n      to_the_end: {}\n    watcher:\n      enabled: false\n      minimum_age: 1s\n      poll_interval: 1s\n      cache: ""\n'})})}),(0,r.jsx)(l.Z,{value:"advanced",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# All config fields, showing default values\ninput:\n  label: ""\n  sftp:\n    address: "" # No default (required)\n    credentials:\n      username: ""\n      password: ""\n      private_key_file: ""\n      private_key_pass: ""\n    paths: [] # No default (required)\n    auto_replay_nacks: true\n    scanner:\n      to_the_end: {}\n    delete_on_finish: false\n    watcher:\n      enabled: false\n      minimum_age: 1s\n      poll_interval: 1s\n      cache: ""\n'})})})]}),"\n",(0,r.jsx)(n.h2,{id:"metadata",children:"Metadata"}),"\n",(0,r.jsx)(n.p,{children:"This input adds the following metadata fields to each message:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"- sftp_path\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can access these metadata fields using ",(0,r.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"function interpolation"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsx)(n.h3,{id:"address",children:(0,r.jsx)(n.code,{children:"address"})}),"\n",(0,r.jsx)(n.p,{children:"The address of the server to connect to."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.h3,{id:"credentials",children:(0,r.jsx)(n.code,{children:"credentials"})}),"\n",(0,r.jsx)(n.p,{children:"The credentials to use to log into the target server."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"object"})]}),"\n",(0,r.jsx)(n.h3,{id:"credentialsusername",children:(0,r.jsx)(n.code,{children:"credentials.username"})}),"\n",(0,r.jsx)(n.p,{children:"The username to connect to the SFTP server."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n",(0,r.jsx)(n.h3,{id:"credentialspassword",children:(0,r.jsx)(n.code,{children:"credentials.password"})}),"\n",(0,r.jsx)(n.p,{children:"The password for the username to connect to the SFTP server."}),"\n",(0,r.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,r.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,r.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n",(0,r.jsx)(n.h3,{id:"credentialsprivate_key_file",children:(0,r.jsx)(n.code,{children:"credentials.private_key_file"})}),"\n",(0,r.jsx)(n.p,{children:"The private key for the username to connect to the SFTP server."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n",(0,r.jsx)(n.h3,{id:"credentialsprivate_key_pass",children:(0,r.jsx)(n.code,{children:"credentials.private_key_pass"})}),"\n",(0,r.jsx)(n.p,{children:"Optional passphrase for private key."}),"\n",(0,r.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,r.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,r.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n",(0,r.jsx)(n.h3,{id:"paths",children:(0,r.jsx)(n.code,{children:"paths"})}),"\n",(0,r.jsx)(n.p,{children:"A list of paths to consume sequentially. Glob patterns are supported."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"array"})]}),"\n",(0,r.jsx)(n.h3,{id:"auto_replay_nacks",children:(0,r.jsx)(n.code,{children:"auto_replay_nacks"})}),"\n",(0,r.jsxs)(n.p,{children:["Whether messages that are rejected (nacked) at the output level should be automatically replayed indefinitely, eventually resulting in back pressure if the cause of the rejections is persistent. If set to ",(0,r.jsx)(n.code,{children:"false"})," these messages will instead be deleted. Disabling auto replays can greatly improve memory efficiency of high throughput streams as the original shape of the data can be discarded immediately upon consumption and mutation."]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"bool"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:"true"})]}),"\n",(0,r.jsx)(n.h3,{id:"scanner",children:(0,r.jsx)(n.code,{children:"scanner"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"/docs/components/scanners/about",children:"scanner"})," by which the stream of bytes consumed will be broken out into individual messages. Scanners are useful for processing large sources of data without holding the entirety of it within memory. For example, the ",(0,r.jsx)(n.code,{children:"csv"})," scanner allows you to process individual CSV rows without loading the entire CSV file in memory at once."]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"scanner"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'{"to_the_end":{}}'}),(0,r.jsx)(n.br,{}),"\n","Requires version 4.25.0 or newer"]}),"\n",(0,r.jsx)(n.h3,{id:"delete_on_finish",children:(0,r.jsx)(n.code,{children:"delete_on_finish"})}),"\n",(0,r.jsx)(n.p,{children:"Whether to delete files from the server once they are processed."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"bool"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:"false"})]}),"\n",(0,r.jsx)(n.h3,{id:"watcher",children:(0,r.jsx)(n.code,{children:"watcher"})}),"\n",(0,r.jsx)(n.p,{children:"An experimental mode whereby the input will periodically scan the target paths for new files and consume them, when all files are consumed the input will continue polling for new files."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"object"}),(0,r.jsx)(n.br,{}),"\n","Requires version 3.42.0 or newer"]}),"\n",(0,r.jsx)(n.h3,{id:"watcherenabled",children:(0,r.jsx)(n.code,{children:"watcher.enabled"})}),"\n",(0,r.jsx)(n.p,{children:"Whether file watching is enabled."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"bool"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:"false"})]}),"\n",(0,r.jsx)(n.h3,{id:"watcherminimum_age",children:(0,r.jsx)(n.code,{children:"watcher.minimum_age"})}),"\n",(0,r.jsx)(n.p,{children:"The minimum period of time since a file was last updated before attempting to consume it. Increasing this period decreases the likelihood that a file will be consumed whilst it is still being written to."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'"1s"'})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nminimum_age: 10s\n\nminimum_age: 1m\n\nminimum_age: 10m\n"})}),"\n",(0,r.jsx)(n.h3,{id:"watcherpoll_interval",children:(0,r.jsx)(n.code,{children:"watcher.poll_interval"})}),"\n",(0,r.jsx)(n.p,{children:"The interval between each attempt to scan the target paths for new files."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'"1s"'})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"# Examples\n\npoll_interval: 100ms\n\npoll_interval: 1s\n"})}),"\n",(0,r.jsx)(n.h3,{id:"watchercache",children:(0,r.jsx)(n.code,{children:"watcher.cache"})}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:"/docs/components/caches/about",children:"cache resource"})," for storing the paths of files already consumed."]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'""'})]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:function(e,n,t){t.d(n,{Z:function(){return l}});t(7294);var r=t(6010),s={tabItem:"tabItem_Ymn6"},a=t(5893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:t,children:n})}},4866:function(e,n,t){t.d(n,{Z:function(){return w}});var r=t(7294),s=t(6010),a=t(2466),l=t(6550),i=t(469),c=t(1980),o=t(7392),d=t(12);function u(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[l,c]=(0,r.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const s=null!=(n=r.find((e=>e.default)))?n:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[o,u]=f({queryString:t,groupId:s}),[m,x]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[s,a]=(0,d.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),j=(()=>{const e=null!=o?o:m;return p({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);c(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=t(2389),j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},v=t(5893);function b(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),s=i[t].value;s!==r&&(o(n),l(s))},u=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var r;const n=c.indexOf(e.currentTarget)+1;t=null!=(r=c[n])?r:c[0];break}case"ArrowLeft":{var s;const n=c.indexOf(e.currentTarget)-1;t=null!=(s=c[n])?s:c[c.length-1];break}}null==(n=t)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.Z)("tabs__item",j.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===n}),children:null!=t?t:n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",j.tabList),children:[(0,v.jsx)(b,{...e,...n}),(0,v.jsx)(g,{...e,...n})]})}function w(e){const n=(0,x.Z)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(n))}},1151:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var r=t(7294);const s={},a=r.createContext(s);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);