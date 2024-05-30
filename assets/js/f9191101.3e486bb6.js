"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[5629],{674:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return d}});var r=t(5893),s=t(1151),l=t(4866),i=t(5162);const o={title:"splunk_hec",slug:"splunk_hec",type:"output",status:"experimental",categories:["Services"],name:"splunk_hec"},c=void 0,a={id:"components/outputs/splunk_hec",title:"splunk_hec",description:"\x3c!--",source:"@site/docs/components/outputs/splunk_hec.md",sourceDirName:"components/outputs",slug:"/components/outputs/splunk_hec",permalink:"/bento/docs/components/outputs/splunk_hec",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/outputs/splunk_hec.md",tags:[],version:"current",frontMatter:{title:"splunk_hec",slug:"splunk_hec",type:"output",status:"experimental",categories:["Services"],name:"splunk_hec"},sidebar:"docs",previous:{title:"socket",permalink:"/bento/docs/components/outputs/socket"},next:{title:"sql_insert",permalink:"/bento/docs/components/outputs/sql_insert"}},u={},d=[{value:"Fields",id:"fields",level:2},{value:"<code>url</code>",id:"url",level:3},{value:"<code>token</code>",id:"token",level:3},{value:"<code>gzip</code>",id:"gzip",level:3},{value:"<code>event_host</code>",id:"event_host",level:3},{value:"<code>event_source</code>",id:"event_source",level:3},{value:"<code>event_sourcetype</code>",id:"event_sourcetype",level:3},{value:"<code>event_index</code>",id:"event_index",level:3},{value:"<code>batching_count</code>",id:"batching_count",level:3},{value:"<code>batching_period</code>",id:"batching_period",level:3},{value:"<code>batching_byte_size</code>",id:"batching_byte_size",level:3},{value:"<code>rate_limit</code>",id:"rate_limit",level:3},{value:"<code>max_in_flight</code>",id:"max_in_flight",level:3},{value:"<code>skip_cert_verify</code>",id:"skip_cert_verify",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"EXPERIMENTAL",type:"caution",children:(0,r.jsx)(n.p,{children:"This component is experimental and therefore subject to change or removal outside of major version releases."})}),"\n",(0,r.jsx)(n.p,{children:"Writes messages to a Splunk HTTP Endpoint Collector."}),"\n",(0,r.jsxs)(l.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,r.jsx)(i.Z,{value:"common",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Common config fields, showing default values\noutput:\n  label: ""\n  splunk_hec:\n    url: "" # No default (required)\n    token: "" # No default (required)\n    gzip: false\n    event_host: ""\n    event_source: ""\n    event_sourcetype: ""\n    event_index: ""\n    batching_count: 100\n    batching_period: 30s\n    batching_byte_size: 1000000\n'})})}),(0,r.jsx)(i.Z,{value:"advanced",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# All config fields, showing default values\noutput:\n  label: ""\n  splunk_hec:\n    url: "" # No default (required)\n    token: "" # No default (required)\n    gzip: false\n    event_host: ""\n    event_source: ""\n    event_sourcetype: ""\n    event_index: ""\n    batching_count: 100\n    batching_period: 30s\n    batching_byte_size: 1000000\n    rate_limit: ""\n    max_in_flight: 64\n    skip_cert_verify: false\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["This output POSTs messages to a Splunk HTTP Endpoint Collector (HEC) using token based authentication. The format of the message must be a ",(0,r.jsx)(n.a,{href:"https://docs.splunk.com/Documentation/SplunkCloud/latest/Data/FormateventsforHTTPEventCollector",children:"valid event JSON"}),". Raw is not supported."]}),"\n",(0,r.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsx)(n.h3,{id:"url",children:(0,r.jsx)(n.code,{children:"url"})}),"\n",(0,r.jsxs)(n.p,{children:["Full HTTP Endpoint Collector (HEC) URL, ie. ",(0,r.jsx)(n.a,{href:"https://foobar.splunkcloud.com/services/collector/event",children:"https://foobar.splunkcloud.com/services/collector/event"})]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.h3,{id:"token",children:(0,r.jsx)(n.code,{children:"token"})}),"\n",(0,r.jsx)(n.p,{children:"A bot token used for authentication."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.h3,{id:"gzip",children:(0,r.jsx)(n.code,{children:"gzip"})}),"\n",(0,r.jsx)(n.p,{children:"Enable gzip compression"}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"bool"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:"false"})]}),"\n",(0,r.jsx)(n.h3,{id:"event_host",children:(0,r.jsx)(n.code,{children:"event_host"})}),"\n",(0,r.jsx)(n.p,{children:"Set the host value to assign to the event data. Overrides existing host field if present."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n",(0,r.jsx)(n.h3,{id:"event_source",children:(0,r.jsx)(n.code,{children:"event_source"})}),"\n",(0,r.jsx)(n.p,{children:"Set the source value to assign to the event data. Overrides existing source field if present."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n",(0,r.jsx)(n.h3,{id:"event_sourcetype",children:(0,r.jsx)(n.code,{children:"event_sourcetype"})}),"\n",(0,r.jsx)(n.p,{children:"Set the sourcetype value to assign to the event data. Overrides existing sourcetype field if present."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n",(0,r.jsx)(n.h3,{id:"event_index",children:(0,r.jsx)(n.code,{children:"event_index"})}),"\n",(0,r.jsx)(n.p,{children:"Set the index value to assign to the event data. Overrides existing index field if present."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n",(0,r.jsx)(n.h3,{id:"batching_count",children:(0,r.jsx)(n.code,{children:"batching_count"})}),"\n",(0,r.jsx)(n.p,{children:"A number of messages at which the batch should be flushed. If 0 disables count based batching."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"int"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:"100"})]}),"\n",(0,r.jsx)(n.h3,{id:"batching_period",children:(0,r.jsx)(n.code,{children:"batching_period"})}),"\n",(0,r.jsx)(n.p,{children:"A period in which an incomplete batch should be flushed regardless of its size."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'"30s"'})]}),"\n",(0,r.jsx)(n.h3,{id:"batching_byte_size",children:(0,r.jsx)(n.code,{children:"batching_byte_size"})}),"\n",(0,r.jsx)(n.p,{children:"An amount of bytes at which the batch should be flushed. If 0 disables size based batching. Splunk Cloud recommends limiting content length of HEC payload to 1 MB."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"int"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:"1000000"})]}),"\n",(0,r.jsx)(n.h3,{id:"rate_limit",children:(0,r.jsx)(n.code,{children:"rate_limit"})}),"\n",(0,r.jsx)(n.p,{children:"An optional rate limit resource to restrict API requests with."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n",(0,r.jsx)(n.h3,{id:"max_in_flight",children:(0,r.jsx)(n.code,{children:"max_in_flight"})}),"\n",(0,r.jsx)(n.p,{children:"The maximum number of parallel message batches to have in flight at any given time."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"int"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:"64"})]}),"\n",(0,r.jsx)(n.h3,{id:"skip_cert_verify",children:(0,r.jsx)(n.code,{children:"skip_cert_verify"})}),"\n",(0,r.jsx)(n.p,{children:"Whether to skip server side certificate verification."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"bool"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:"false"})]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:function(e,n,t){t.d(n,{Z:function(){return i}});t(7294);var r=t(6010),s={tabItem:"tabItem_Ymn6"},l=t(5893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:t,children:n})}},4866:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(7294),s=t(6010),l=t(2466),i=t(6550),o=t(469),c=t(1980),a=t(7392),u=t(12);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,a.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,l=h(e),[i,c]=(0,r.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const s=null!=(n=r.find((e=>e.default)))?n:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:l}))),[a,d]=f({queryString:t,groupId:s}),[v,x]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[s,l]=(0,u.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:s}),b=(()=>{const e=null!=a?a:v;return p({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{b&&c(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);c(e),d(e),x(e)}),[d,x,l]),tabValues:l}}var x=t(2389),b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},m=t(5893);function j(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,l.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),s=o[t].value;s!==r&&(a(n),i(s))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var r;const n=c.indexOf(e.currentTarget)+1;t=null!=(r=c[n])?r:c[0];break}case"ArrowLeft":{var s;const n=c.indexOf(e.currentTarget)-1;t=null!=(s=c[n])?s:c[c.length-1];break}}null==(n=t)||n.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...l,className:(0,s.Z)("tabs__item",b.tabItem,null==l?void 0:l.className,{"tabs__item--active":r===n}),children:null!=t?t:n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function _(e){const n=v(e);return(0,m.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,m.jsx)(j,{...e,...n}),(0,m.jsx)(g,{...e,...n})]})}function y(e){const n=(0,x.Z)();return(0,m.jsx)(_,{...e,children:d(e.children)},String(n))}},1151:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var r=t(7294);const s={},l=r.createContext(s);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);