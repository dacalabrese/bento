"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[9412],{8872:function(e,t,s){s.r(t),s.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var r=s(5893),n=s(1151),o=s(5808);const a={title:"Processors",sidebar_label:"About"},i=void 0,c={id:"components/processors/about",title:"Processors",description:"Bento processors are functions applied to messages passing through a pipeline. The function signature allows a processor to mutate or drop messages depending on the content of the message. There are many types on offer but the most powerful are the mapping and mutation processors.",source:"@site/docs/components/processors/about.md",sourceDirName:"components/processors",slug:"/components/processors/about",permalink:"/bento/docs/components/processors/about",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/processors/about.md",tags:[],version:"current",frontMatter:{title:"Processors",sidebar_label:"About"},sidebar:"docs",previous:{title:"to_the_end",permalink:"/bento/docs/components/scanners/to_the_end"},next:{title:"archive",permalink:"/bento/docs/components/processors/archive"}},l={},u=[{value:"Labels",id:"labels",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"Error Logs",id:"error-logs",level:3},{value:"Using Processors as Outputs",id:"using-processors-as-outputs",level:2},{value:"Categories",id:"categories",level:2},{value:"Batching and Multiple Part Messages",id:"batching-and-multiple-part-messages",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Bento processors are functions applied to messages passing through a pipeline. The function signature allows a processor to mutate or drop messages depending on the content of the message. There are many types on offer but the most powerful are the ",(0,r.jsx)(t.a,{href:"/docs/components/processors/mapping",children:(0,r.jsx)(t.code,{children:"mapping"})})," and ",(0,r.jsx)(t.a,{href:"/docs/components/processors/mutation",children:(0,r.jsx)(t.code,{children:"mutation"})})," processors."]}),"\n",(0,r.jsx)(t.p,{children:"Processors are set via config, and depending on where in the config they are placed they will be run either immediately after a specific input (set in the input section), on all messages (set in the pipeline section) or before a specific output (set in the output section). Most processors apply to all messages and can be placed in the pipeline section:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"pipeline:\n  threads: 1\n  processors:\n    - label: my_cool_mapping\n      mapping: |\n        root.message = this\n        root.meta.link_count = this.links.length()\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"threads"})," field in the pipeline section determines how many parallel processing threads are created. You can read more about parallel processing in the ",(0,r.jsx)(t.a,{href:"/docs/configuration/processing_pipelines",children:"pipeline guide"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"labels",children:"Labels"}),"\n",(0,r.jsxs)(t.p,{children:["Processors have an optional field ",(0,r.jsx)(t.code,{children:"label"})," that can uniquely identify them in observability data such as metrics and logs. This can be useful when running configs with multiple nested processors, otherwise their metrics labels will be generated based on their composition. For more information check out the ",(0,r.jsx)(t.a,{href:"/docs/components/metrics/about",children:"metrics documentation"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,r.jsxs)(t.p,{children:["Some processors have conditions whereby they might fail. Rather than throw these messages into the abyss Bento still attempts to send these messages onwards, and has mechanisms for filtering, recovering or dead-letter queuing messages that have failed which can be read about ",(0,r.jsx)(t.a,{href:"/docs/configuration/error_handling",children:"here"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"error-logs",children:"Error Logs"}),"\n",(0,r.jsx)(t.p,{children:"Errors that occur during processing can be roughly separated into two groups; those that are unexpected intermittent errors such as connectivity problems, and those that are logical errors such as bad input data or unmatched schemas."}),"\n",(0,r.jsxs)(t.p,{children:["All processing errors result in the messages being flagged as failed, ",(0,r.jsx)(t.a,{href:"/docs/components/metrics/about",children:"error metrics"})," increasing for the given errored processor, and debug level logs being emitted that describe the error. Only errors that are known to be intermittent are also logged at the error level."]}),"\n",(0,r.jsxs)(t.p,{children:["The reason for this behaviour is to prevent noisy logging in cases where logical errors are expected and will likely be ",(0,r.jsx)(t.a,{href:"/docs/configuration/error_handling",children:"handled in config"}),". However, this can also sometimes make it easy to miss logical errors in your configs when they lack error handling. If you suspect you are experiencing processing errors and do not wish to add error handling yet then a quick and easy way to expose those errors is to enable debug level logs with the cli flag ",(0,r.jsx)(t.code,{children:"--log.level=debug"})," or by setting the level in config:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"logger:\n  level: DEBUG\n"})}),"\n",(0,r.jsx)(t.h2,{id:"using-processors-as-outputs",children:"Using Processors as Outputs"}),"\n",(0,r.jsxs)(t.p,{children:["It might be the case that a processor that results in a side effect, such as the ",(0,r.jsx)(t.a,{href:"/docs/components/processors/sql_insert",children:(0,r.jsx)(t.code,{children:"sql_insert"})})," or ",(0,r.jsx)(t.a,{href:"/docs/components/processors/redis",children:(0,r.jsx)(t.code,{children:"redis"})})," processors, is the only side effect of a pipeline, and therefore could be considered the output."]}),"\n",(0,r.jsxs)(t.p,{children:["In such cases it's possible to place these processors within a ",(0,r.jsxs)(t.a,{href:"/docs/components/outputs/reject",children:[(0,r.jsx)(t.code,{children:"reject"})," output"]})," so that they behave the same as regular outputs, where success results in dropping the message with an acknowledgement and failure results in a nack (or retry):"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"output:\n  reject: 'failed to send data: ${! error() }'\n  processors:\n    - try:\n        - redis:\n            url: tcp://localhost:6379\n            command: sadd\n            args_mapping: 'root = [ this.key, this.value ]'\n        - mapping: root = deleted()\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The way this works is that if your processor with the side effect (",(0,r.jsx)(t.code,{children:"redis"})," in this case) succeeds then the final ",(0,r.jsx)(t.code,{children:"mapping"})," processor deletes the message which results in an acknowledgement. If the processor fails then the ",(0,r.jsx)(t.code,{children:"try"})," block exits early without executing the ",(0,r.jsx)(t.code,{children:"mapping"})," processor and instead the message is routed to the ",(0,r.jsx)(t.code,{children:"reject"})," output, which nacks the message with an error message containing the error obtained from the ",(0,r.jsx)(t.code,{children:"redis"})," processor."]}),"\n","\n","\n",(0,r.jsx)(t.h2,{id:"categories",children:"Categories"}),"\n",(0,r.jsx)(o.Z,{type:"processors"}),"\n",(0,r.jsx)(t.h2,{id:"batching-and-multiple-part-messages",children:"Batching and Multiple Part Messages"}),"\n",(0,r.jsxs)(t.p,{children:["All Bento processors support multiple part messages, which are synonymous with batches. This enables some cool ",(0,r.jsx)(t.a,{href:"/docs/configuration/windowed_processing",children:"windowed processing"})," capabilities."]}),"\n",(0,r.jsxs)(t.p,{children:["Many processors are able to perform their behaviours on specific parts of a message batch, or on all parts, and have a field ",(0,r.jsx)(t.code,{children:"parts"})," for specifying an array of part indexes they should apply to. If the list of target parts is empty these processors will be applied to all message parts."]}),"\n",(0,r.jsx)(t.p,{children:"Part indexes can be negative, and if so the part will be selected from the end counting backwards starting from -1. E.g. if part = -1 then the selected part will be the last part of the message, if part = -2 then the part before the last element will be selected, and so on."}),"\n",(0,r.jsxs)(t.p,{children:["Some processors such as ",(0,r.jsx)(t.a,{href:"/docs/components/processors/dedupe",children:(0,r.jsx)(t.code,{children:"dedupe"})})," act across an entire batch, when instead we might like to perform them on individual messages of a batch. In this case the ",(0,r.jsx)(t.a,{href:"/docs/components/processors/for_each",children:(0,r.jsx)(t.code,{children:"for_each"})})," processor can be used."]}),"\n",(0,r.jsxs)(t.p,{children:["You can read more about batching ",(0,r.jsx)(t.a,{href:"/docs/configuration/batching",children:"in this document"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5162:function(e,t,s){s.d(t,{Z:function(){return a}});s(7294);var r=s(6010),n={tabItem:"tabItem_Ymn6"},o=s(5893);function a(e){let{children:t,hidden:s,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(n.tabItem,a),hidden:s,children:t})}},4866:function(e,t,s){s.d(t,{Z:function(){return j}});var r=s(7294),n=s(6010),o=s(2466),a=s(6550),i=s(469),c=s(1980),l=s(7392),u=s(12);function d(e){var t,s;return null!=(t=null==(s=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:s.filter(Boolean))?t:[]}function h(e){const{values:t,children:s}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:r,default:n}}=e;return{value:t,label:s,attributes:r,default:n}}))}(s);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,s])}function p(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:s}=e;const n=(0,a.k6)(),o=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:t,groupId:s});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:s=!1,groupId:n}=e,o=h(e),[a,c]=(0,r.useState)((()=>function(e){var t;let{defaultValue:s,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+s+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return s}const n=null!=(t=r.find((e=>e.default)))?t:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,d]=m({queryString:s,groupId:n}),[g,f]=function(e){let{groupId:t}=e;const s=function(e){return e?"docusaurus.tab."+e:null}(t),[n,o]=(0,u.Nk)(s);return[n,(0,r.useCallback)((e=>{s&&o.set(e)}),[s,o])]}({groupId:n}),b=(()=>{const e=null!=l?l:g;return p({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{b&&c(b)}),[b]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);c(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=s(2389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},v=s(5893);function w(e){let{className:t,block:s,selectedValue:r,selectValue:a,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.o5)(),u=e=>{const t=e.currentTarget,s=c.indexOf(t),n=i[s].value;n!==r&&(l(t),a(n))},d=e=>{var t;let s=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var r;const t=c.indexOf(e.currentTarget)+1;s=null!=(r=c[t])?r:c[0];break}case"ArrowLeft":{var n;const t=c.indexOf(e.currentTarget)-1;s=null!=(n=c[t])?n:c[c.length-1];break}}null==(t=s)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":s},t),children:i.map((e=>{let{value:t,label:s,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...o,className:(0,n.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===t}),children:null!=s?s:t},t)}))})}function y(e){let{lazy:t,children:s,selectedValue:n}=e;const o=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function x(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,n.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(w,{...e,...t}),(0,v.jsx)(y,{...e,...t})]})}function j(e){const t=(0,f.Z)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(t))}},5808:function(e,t,s){s.d(t,{Z:function(){return d}});s(7294);var r=s(2263),n=s(4866),o=s(5162),a=s(9960),i="componentCard_EbTf",c=s(5893);var l=function(e){const{type:t,component:s}=e;return(0,c.jsx)(a.Z,{to:"/docs/components/"+t+"/"+s.name,className:i,children:(0,c.jsx)("strong",{children:s.name})})};let u={inputs:[{name:"Services",description:"Inputs that consume from storage or message streaming services."},{name:"Network",description:"Inputs that consume directly from low level network protocols."},{name:"AWS",description:"Inputs that consume from Amazon Web Services products."},{name:"GCP",description:"Inputs that consume from Google Cloud Platform services."},{name:"Azure",description:"Inputs that consume from Microsoft Azure services."},{name:"Social",description:"Inputs that consume from social applications and services."},{name:"Local",description:"Inputs that consume from the local machine/filesystem."},{name:"Utility",description:"Inputs that provide utility by generating data or combining/wrapping other inputs."}],buffers:[{name:"Windowing",description:"Buffers that provide message windowing capabilities."},{name:"Utility",description:"Buffers that are intended for niche but general use."}],processors:[{name:"Mapping",description:"Processors that specialize in restructuring messages."},{name:"Integration",description:"Processors that interact with external services."},{name:"Parsing",description:"Processors that specialize in translating messages from one format to another."},{name:"Composition",description:"Higher level processors that compose other processors and modify their behavior."},{name:"Utility",description:"Processors that provide general utility or do not fit in another category."}],outputs:[{name:"Services",description:"Outputs that write to storage or message streaming services."},{name:"Network",description:"Outputs that write directly to low level network protocols."},{name:"AWS",description:"Outputs that write to Amazon Web Services products."},{name:"GCP",description:"Outputs that write to Google Cloud Platform services."},{name:"Azure",description:"Outputs that write to Microsoft Azure services."},{name:"Social",description:"Outputs that write to social applications and services."},{name:"Local",description:"Outputs that write to the local machine/filesystem."},{name:"Utility",description:"Outputs that provide utility by combining/wrapping other outputs."}]};var d=function(e){let{type:t}=e;const s=(0,r.Z)().siteConfig.customFields.components[t];let a=u[t]||[],i={},d=[];for(let r=0;r<a.length;r++)d.push(a[r].name),i[a[r].name.toLowerCase()]={summary:a[r].description,items:[]};for(let r=0;r<s.length;r++){let e=s[r].categories;if(Array.isArray(e))for(let t=0;t<e.length;t++){let n=e[t].toLowerCase();void 0===i[n]?(d.push(n.charAt(0).toUpperCase()+n.slice(1)),i[n]={summary:"",items:[s[r]]}):i[n].items.push(s[r])}}return(0,c.jsx)(n.Z,{defaultValue:d[0].toLowerCase(),values:d.map((e=>({label:e,value:e.toLowerCase()}))),children:d.map((e=>(0,c.jsxs)(o.Z,{value:e.toLowerCase(),children:[(0,c.jsx)("p",{children:i[e.toLowerCase()].summary}),i[e.toLowerCase()].items.map(((e,s)=>(0,c.jsx)(l,{type:t,component:e},s)))]},e.toLowerCase())))})}},1151:function(e,t,s){s.d(t,{Z:function(){return i},a:function(){return a}});var r=s(7294);const n={},o=r.createContext(n);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);