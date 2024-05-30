"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[9267],{1698:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var r=t(5893),s=t(1151),a=t(4866),l=t(5162);const i={title:"pulsar",slug:"pulsar",type:"input",status:"experimental",categories:["Services"],name:"pulsar"},o=void 0,c={id:"components/inputs/pulsar",title:"pulsar",description:"\x3c!--",source:"@site/docs/components/inputs/pulsar.md",sourceDirName:"components/inputs",slug:"/components/inputs/pulsar",permalink:"/bento/docs/components/inputs/pulsar",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/inputs/pulsar.md",tags:[],version:"current",frontMatter:{title:"pulsar",slug:"pulsar",type:"input",status:"experimental",categories:["Services"],name:"pulsar"},sidebar:"docs",previous:{title:"parquet",permalink:"/bento/docs/components/inputs/parquet"},next:{title:"read_until",permalink:"/bento/docs/components/inputs/read_until"}},u={},d=[{value:"Metadata",id:"metadata",level:3},{value:"Fields",id:"fields",level:2},{value:"<code>url</code>",id:"url",level:3},{value:"<code>topics</code>",id:"topics",level:3},{value:"<code>topics_pattern</code>",id:"topics_pattern",level:3},{value:"<code>subscription_name</code>",id:"subscription_name",level:3},{value:"<code>subscription_type</code>",id:"subscription_type",level:3},{value:"<code>tls</code>",id:"tls",level:3},{value:"<code>tls.root_cas_file</code>",id:"tlsroot_cas_file",level:3},{value:"<code>auth</code>",id:"auth",level:3},{value:"<code>auth.oauth2</code>",id:"authoauth2",level:3},{value:"<code>auth.oauth2.enabled</code>",id:"authoauth2enabled",level:3},{value:"<code>auth.oauth2.audience</code>",id:"authoauth2audience",level:3},{value:"<code>auth.oauth2.issuer_url</code>",id:"authoauth2issuer_url",level:3},{value:"<code>auth.oauth2.private_key_file</code>",id:"authoauth2private_key_file",level:3},{value:"<code>auth.token</code>",id:"authtoken",level:3},{value:"<code>auth.token.enabled</code>",id:"authtokenenabled",level:3},{value:"<code>auth.token.token</code>",id:"authtokentoken",level:3}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"EXPERIMENTAL",type:"caution",children:(0,r.jsx)(n.p,{children:"This component is experimental and therefore subject to change or removal outside of major version releases."})}),"\n",(0,r.jsx)(n.p,{children:"Reads messages from an Apache Pulsar server."}),"\n",(0,r.jsx)(n.p,{children:"Introduced in version 3.43.0."}),"\n",(0,r.jsxs)(a.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,r.jsx)(l.Z,{value:"common",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# Common config fields, showing default values\ninput:\n  label: ""\n  pulsar:\n    url: pulsar://localhost:6650 # No default (required)\n    topics: [] # No default (optional)\n    topics_pattern: "" # No default (optional)\n    subscription_name: "" # No default (required)\n    subscription_type: shared\n    tls:\n      root_cas_file: ""\n'})})}),(0,r.jsx)(l.Z,{value:"advanced",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'# All config fields, showing default values\ninput:\n  label: ""\n  pulsar:\n    url: pulsar://localhost:6650 # No default (required)\n    topics: [] # No default (optional)\n    topics_pattern: "" # No default (optional)\n    subscription_name: "" # No default (required)\n    subscription_type: shared\n    tls:\n      root_cas_file: ""\n    auth:\n      oauth2:\n        enabled: false\n        audience: ""\n        issuer_url: ""\n        private_key_file: ""\n      token:\n        enabled: false\n        token: ""\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"metadata",children:"Metadata"}),"\n",(0,r.jsx)(n.p,{children:"This input adds the following metadata fields to each message:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"- pulsar_message_id\n- pulsar_key\n- pulsar_ordering_key\n- pulsar_event_time_unix\n- pulsar_publish_time_unix\n- pulsar_topic\n- pulsar_producer_name\n- pulsar_redelivery_count\n- All properties of the message\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can access these metadata fields using\n",(0,r.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"function interpolation"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,r.jsx)(n.h3,{id:"url",children:(0,r.jsx)(n.code,{children:"url"})}),"\n",(0,r.jsx)(n.p,{children:"A URL to connect to."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nurl: pulsar://localhost:6650\n\nurl: pulsar://pulsar.us-west.example.com:6650\n\nurl: pulsar+ssl://pulsar.us-west.example.com:6651\n"})}),"\n",(0,r.jsx)(n.h3,{id:"topics",children:(0,r.jsx)(n.code,{children:"topics"})}),"\n",(0,r.jsx)(n.p,{children:"A list of topics to subscribe to. This or topics_pattern must be set."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"array"})]}),"\n",(0,r.jsx)(n.h3,{id:"topics_pattern",children:(0,r.jsx)(n.code,{children:"topics_pattern"})}),"\n",(0,r.jsx)(n.p,{children:"A regular expression matching the topics to subscribe to. This or topics must be set."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.h3,{id:"subscription_name",children:(0,r.jsx)(n.code,{children:"subscription_name"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the subscription name for this consumer."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"})]}),"\n",(0,r.jsx)(n.h3,{id:"subscription_type",children:(0,r.jsx)(n.code,{children:"subscription_type"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the subscription type for this consumer."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["NOTE: Using a ",(0,r.jsx)(n.code,{children:"key_shared"})," subscription type will ",(0,r.jsx)(n.strong,{children:"allow out-of-order delivery"})," since nack-ing messages sets non-zero nack delivery delay - this can potentially cause consumers to stall. See ",(0,r.jsx)(n.a,{href:"https://pulsar.apache.org/docs/en/2.8.1/concepts-messaging/#negative-acknowledgement",children:"Pulsar documentation"})," and ",(0,r.jsx)(n.a,{href:"https://github.com/apache/pulsar/issues/12208",children:"this Github issue"})," for more details."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'"shared"'}),(0,r.jsx)(n.br,{}),"\n","Options: ",(0,r.jsx)(n.code,{children:"shared"}),", ",(0,r.jsx)(n.code,{children:"key_shared"}),", ",(0,r.jsx)(n.code,{children:"failover"}),", ",(0,r.jsx)(n.code,{children:"exclusive"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"tls",children:(0,r.jsx)(n.code,{children:"tls"})}),"\n",(0,r.jsx)(n.p,{children:"Specify the path to a custom CA certificate to trust broker TLS service."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"object"})]}),"\n",(0,r.jsx)(n.h3,{id:"tlsroot_cas_file",children:(0,r.jsx)(n.code,{children:"tls.root_cas_file"})}),"\n",(0,r.jsx)(n.p,{children:"An optional path of a root certificate authority file to use. This is a file, often with a .pem extension, containing a certificate chain from the parent trusted root certificate, to possible intermediate signing certificates, to the host certificate."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nroot_cas_file: ./root_cas.pem\n"})}),"\n",(0,r.jsx)(n.h3,{id:"auth",children:(0,r.jsx)(n.code,{children:"auth"})}),"\n",(0,r.jsx)(n.p,{children:"Optional configuration of Pulsar authentication methods."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"object"}),(0,r.jsx)(n.br,{}),"\n","Requires version 3.60.0 or newer"]}),"\n",(0,r.jsx)(n.h3,{id:"authoauth2",children:(0,r.jsx)(n.code,{children:"auth.oauth2"})}),"\n",(0,r.jsx)(n.p,{children:"Parameters for Pulsar OAuth2 authentication."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"object"})]}),"\n",(0,r.jsx)(n.h3,{id:"authoauth2enabled",children:(0,r.jsx)(n.code,{children:"auth.oauth2.enabled"})}),"\n",(0,r.jsx)(n.p,{children:"Whether OAuth2 is enabled."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"bool"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:"false"})]}),"\n",(0,r.jsx)(n.h3,{id:"authoauth2audience",children:(0,r.jsx)(n.code,{children:"auth.oauth2.audience"})}),"\n",(0,r.jsx)(n.p,{children:"OAuth2 audience."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n",(0,r.jsx)(n.h3,{id:"authoauth2issuer_url",children:(0,r.jsx)(n.code,{children:"auth.oauth2.issuer_url"})}),"\n",(0,r.jsx)(n.p,{children:"OAuth2 issuer URL."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n",(0,r.jsx)(n.h3,{id:"authoauth2private_key_file",children:(0,r.jsx)(n.code,{children:"auth.oauth2.private_key_file"})}),"\n",(0,r.jsx)(n.p,{children:"The path to a file containing a private key."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'""'})]}),"\n",(0,r.jsx)(n.h3,{id:"authtoken",children:(0,r.jsx)(n.code,{children:"auth.token"})}),"\n",(0,r.jsx)(n.p,{children:"Parameters for Pulsar Token authentication."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"object"})]}),"\n",(0,r.jsx)(n.h3,{id:"authtokenenabled",children:(0,r.jsx)(n.code,{children:"auth.token.enabled"})}),"\n",(0,r.jsx)(n.p,{children:"Whether Token Auth is enabled."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"bool"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:"false"})]}),"\n",(0,r.jsx)(n.h3,{id:"authtokentoken",children:(0,r.jsx)(n.code,{children:"auth.token.token"})}),"\n",(0,r.jsx)(n.p,{children:"Actual base64 encoded token."}),"\n",(0,r.jsxs)(n.p,{children:["Type: ",(0,r.jsx)(n.code,{children:"string"}),(0,r.jsx)(n.br,{}),"\n","Default: ",(0,r.jsx)(n.code,{children:'""'})]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:function(e,n,t){t.d(n,{Z:function(){return l}});t(7294);var r=t(6010),s={tabItem:"tabItem_Ymn6"},a=t(5893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:t,children:n})}},4866:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(7294),s=t(6010),a=t(2466),l=t(6550),i=t(469),o=t(1980),c=t(7392),u=t(12);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,o._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[l,o]=(0,r.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const s=null!=(n=r.find((e=>e.default)))?n:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:a}))),[c,d]=x({queryString:t,groupId:s}),[f,j]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[s,a]=(0,u.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),m=(()=>{const e=null!=c?c:f;return p({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{m&&o(m)}),[m]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);o(e),d(e),j(e)}),[d,j,a]),tabValues:a}}var j=t(2389),m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},b=t(5893);function v(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),s=i[t].value;s!==r&&(c(n),l(s))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var r;const n=o.indexOf(e.currentTarget)+1;t=null!=(r=o[n])?r:o[0];break}case"ArrowLeft":{var s;const n=o.indexOf(e.currentTarget)-1;t=null!=(s=o[n])?s:o[o.length-1];break}}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.Z)("tabs__item",m.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===n}),children:null!=t?t:n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function _(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(g,{...e,...n})]})}function y(e){const n=(0,j.Z)();return(0,b.jsx)(_,{...e,children:d(e.children)},String(n))}},1151:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return l}});var r=t(7294);const s={},a=r.createContext(s);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);