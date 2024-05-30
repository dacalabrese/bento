"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[8128],{3001:function(e,n,s){s.r(n),s.d(n,{assets:function(){return d},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var t=s(5893),r=s(1151),l=s(4866),i=s(5162);const o={title:"aws_sqs",slug:"aws_sqs",type:"input",status:"stable",categories:["Services","AWS"],name:"aws_sqs"},a=void 0,c={id:"components/inputs/aws_sqs",title:"aws_sqs",description:"\x3c!--",source:"@site/docs/components/inputs/aws_sqs.md",sourceDirName:"components/inputs",slug:"/components/inputs/aws_sqs",permalink:"/bento/docs/components/inputs/aws_sqs",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/inputs/aws_sqs.md",tags:[],version:"current",frontMatter:{title:"aws_sqs",slug:"aws_sqs",type:"input",status:"stable",categories:["Services","AWS"],name:"aws_sqs"},sidebar:"docs",previous:{title:"aws_s3",permalink:"/bento/docs/components/inputs/aws_s3"},next:{title:"azure_blob_storage",permalink:"/bento/docs/components/inputs/azure_blob_storage"}},d={},u=[{value:"Credentials",id:"credentials",level:3},{value:"Metadata",id:"metadata",level:3},{value:"Fields",id:"fields",level:2},{value:"<code>url</code>",id:"url",level:3},{value:"<code>delete_message</code>",id:"delete_message",level:3},{value:"<code>reset_visibility</code>",id:"reset_visibility",level:3},{value:"<code>max_number_of_messages</code>",id:"max_number_of_messages",level:3},{value:"<code>wait_time_seconds</code>",id:"wait_time_seconds",level:3},{value:"<code>region</code>",id:"region",level:3},{value:"<code>endpoint</code>",id:"endpoint",level:3},{value:"<code>credentials</code>",id:"credentials-1",level:3},{value:"<code>credentials.profile</code>",id:"credentialsprofile",level:3},{value:"<code>credentials.id</code>",id:"credentialsid",level:3},{value:"<code>credentials.secret</code>",id:"credentialssecret",level:3},{value:"<code>credentials.token</code>",id:"credentialstoken",level:3},{value:"<code>credentials.from_ec2_role</code>",id:"credentialsfrom_ec2_role",level:3},{value:"<code>credentials.role</code>",id:"credentialsrole",level:3},{value:"<code>credentials.role_external_id</code>",id:"credentialsrole_external_id",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Consume messages from an AWS SQS URL."}),"\n",(0,t.jsxs)(l.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,t.jsx)(i.Z,{value:"common",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'# Common config fields, showing default values\ninput:\n  label: ""\n  aws_sqs:\n    url: "" # No default (required)\n'})})}),(0,t.jsx)(i.Z,{value:"advanced",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'# All config fields, showing default values\ninput:\n  label: ""\n  aws_sqs:\n    url: "" # No default (required)\n    delete_message: true\n    reset_visibility: true\n    max_number_of_messages: 10\n    wait_time_seconds: 0\n    region: ""\n    endpoint: ""\n    credentials:\n      profile: ""\n      id: ""\n      secret: ""\n      token: ""\n      from_ec2_role: false\n      role: ""\n      role_external_id: ""\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"credentials",children:"Credentials"}),"\n",(0,t.jsxs)(n.p,{children:["By default Bento will use a shared credentials file when connecting to AWS\nservices. It's also possible to set them explicitly at the component level,\nallowing you to transfer data across accounts. You can find out more\n",(0,t.jsx)(n.a,{href:"/docs/guides/cloud/aws",children:"in this document"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"metadata",children:"Metadata"}),"\n",(0,t.jsx)(n.p,{children:"This input adds the following metadata fields to each message:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"- sqs_message_id\n- sqs_receipt_handle\n- sqs_approximate_receive_count\n- All message attributes\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can access these metadata fields using\n",(0,t.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"function interpolation"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,t.jsx)(n.h3,{id:"url",children:(0,t.jsx)(n.code,{children:"url"})}),"\n",(0,t.jsx)(n.p,{children:"The SQS URL to consume from."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.h3,{id:"delete_message",children:(0,t.jsx)(n.code,{children:"delete_message"})}),"\n",(0,t.jsx)(n.p,{children:"Whether to delete the consumed message once it is acked. Disabling allows you to handle the deletion using a different mechanism."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"bool"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"true"})]}),"\n",(0,t.jsx)(n.h3,{id:"reset_visibility",children:(0,t.jsx)(n.code,{children:"reset_visibility"})}),"\n",(0,t.jsx)(n.p,{children:"Whether to set the visibility timeout of the consumed message to zero once it is nacked. Disabling honors the preset visibility timeout specified for the queue."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"bool"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"true"}),(0,t.jsx)(n.br,{}),"\n","Requires version 3.58.0 or newer"]}),"\n",(0,t.jsx)(n.h3,{id:"max_number_of_messages",children:(0,t.jsx)(n.code,{children:"max_number_of_messages"})}),"\n",(0,t.jsx)(n.p,{children:"The maximum number of messages to return on one poll. Valid values: 1 to 10."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"int"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"10"})]}),"\n",(0,t.jsx)(n.h3,{id:"wait_time_seconds",children:(0,t.jsx)(n.code,{children:"wait_time_seconds"})}),"\n",(0,t.jsx)(n.p,{children:"Whether to set the wait time. Enabling this activates long-polling. Valid values: 0 to 20."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"int"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"0"})]}),"\n",(0,t.jsx)(n.h3,{id:"region",children:(0,t.jsx)(n.code,{children:"region"})}),"\n",(0,t.jsx)(n.p,{children:"The AWS region to target."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"endpoint",children:(0,t.jsx)(n.code,{children:"endpoint"})}),"\n",(0,t.jsx)(n.p,{children:"Allows you to specify a custom endpoint for the AWS API."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"credentials-1",children:(0,t.jsx)(n.code,{children:"credentials"})}),"\n",(0,t.jsxs)(n.p,{children:["Optional manual configuration of AWS credentials to use. More information can be found ",(0,t.jsx)(n.a,{href:"/docs/guides/cloud/aws",children:"in this document"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"object"})]}),"\n",(0,t.jsx)(n.h3,{id:"credentialsprofile",children:(0,t.jsx)(n.code,{children:"credentials.profile"})}),"\n",(0,t.jsxs)(n.p,{children:["A profile from ",(0,t.jsx)(n.code,{children:"~/.aws/credentials"})," to use."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"credentialsid",children:(0,t.jsx)(n.code,{children:"credentials.id"})}),"\n",(0,t.jsx)(n.p,{children:"The ID of credentials to use."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"credentialssecret",children:(0,t.jsx)(n.code,{children:"credentials.secret"})}),"\n",(0,t.jsx)(n.p,{children:"The secret for the credentials being used."}),"\n",(0,t.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,t.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,t.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"credentialstoken",children:(0,t.jsx)(n.code,{children:"credentials.token"})}),"\n",(0,t.jsx)(n.p,{children:"The token for the credentials being used, required when using short term credentials."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"credentialsfrom_ec2_role",children:(0,t.jsx)(n.code,{children:"credentials.from_ec2_role"})}),"\n",(0,t.jsxs)(n.p,{children:["Use the credentials of a host EC2 machine configured to assume ",(0,t.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html",children:"an IAM role associated with the instance"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"bool"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"false"}),(0,t.jsx)(n.br,{}),"\n","Requires version 4.2.0 or newer"]}),"\n",(0,t.jsx)(n.h3,{id:"credentialsrole",children:(0,t.jsx)(n.code,{children:"credentials.role"})}),"\n",(0,t.jsx)(n.p,{children:"A role ARN to assume."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"credentialsrole_external_id",children:(0,t.jsx)(n.code,{children:"credentials.role_external_id"})}),"\n",(0,t.jsx)(n.p,{children:"An external ID to provide when assuming a role."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5162:function(e,n,s){s.d(n,{Z:function(){return i}});s(7294);var t=s(6010),r={tabItem:"tabItem_Ymn6"},l=s(5893);function i(e){let{children:n,hidden:s,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,i),hidden:s,children:n})}},4866:function(e,n,s){s.d(n,{Z:function(){return w}});var t=s(7294),r=s(6010),l=s(2466),i=s(6550),o=s(469),a=s(1980),c=s(7392),d=s(12);function u(e){var n,s;return null!=(n=null==(s=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:s.filter(Boolean))?n:[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const r=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:n,groupId:s});return[(0,a._X)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function f(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,l=h(e),[i,a]=(0,t.useState)((()=>function(e){var n;let{defaultValue:s,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+s+'" but none of its children has the corresponding value. Available values are: '+t.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return s}const r=null!=(n=t.find((e=>e.default)))?n:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,u]=m({queryString:s,groupId:r}),[f,x]=function(e){let{groupId:n}=e;const s=function(e){return e?"docusaurus.tab."+e:null}(n),[r,l]=(0,d.Nk)(s);return[r,(0,t.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:r}),j=(()=>{const e=null!=c?c:f;return p({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{j&&a(j)}),[j]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);a(e),u(e),x(e)}),[u,x,l]),tabValues:l}}var x=s(2389),j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},b=s(5893);function v(e){let{className:n,block:s,selectedValue:t,selectValue:i,tabValues:o}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const n=e.currentTarget,s=a.indexOf(n),r=o[s].value;r!==t&&(c(n),i(r))},u=e=>{var n;let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var t;const n=a.indexOf(e.currentTarget)+1;s=null!=(t=a[n])?t:a[0];break}case"ArrowLeft":{var r;const n=a.indexOf(e.currentTarget)-1;s=null!=(r=a[n])?r:a[a.length-1];break}}null==(n=s)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>a.push(e),onKeyDown:u,onClick:d,...l,className:(0,r.Z)("tabs__item",j.tabItem,null==l?void 0:l.className,{"tabs__item--active":t===n}),children:null!=s?s:n},n)}))})}function g(e){let{lazy:n,children:s,selectedValue:r}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function _(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(g,{...e,...n})]})}function w(e){const n=(0,x.Z)();return(0,b.jsx)(_,{...e,children:u(e.children)},String(n))}},1151:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var t=s(7294);const r={},l=t.createContext(r);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);