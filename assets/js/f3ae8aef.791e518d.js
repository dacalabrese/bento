"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[3631],{193:function(e,n,r){r.r(n),r.d(n,{assets:function(){return d},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var s=r(5893),t=r(1151),l=r(4866),a=r(5162);const o={title:"aws_lambda",slug:"aws_lambda",type:"processor",status:"stable",categories:["Integration"],name:"aws_lambda"},i=void 0,c={id:"components/processors/aws_lambda",title:"aws_lambda",description:"\x3c!--",source:"@site/docs/components/processors/aws_lambda.md",sourceDirName:"components/processors",slug:"/components/processors/aws_lambda",permalink:"/bento/docs/components/processors/aws_lambda",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/processors/aws_lambda.md",tags:[],version:"current",frontMatter:{title:"aws_lambda",slug:"aws_lambda",type:"processor",status:"stable",categories:["Integration"],name:"aws_lambda"},sidebar:"docs",previous:{title:"aws_dynamodb_partiql",permalink:"/bento/docs/components/processors/aws_dynamodb_partiql"},next:{title:"azure_cosmosdb",permalink:"/bento/docs/components/processors/azure_cosmosdb"}},d={},u=[{value:"Error Handling",id:"error-handling",level:3},{value:"Credentials",id:"credentials",level:3},{value:"Examples",id:"examples",level:2},{value:"Fields",id:"fields",level:2},{value:"<code>parallel</code>",id:"parallel",level:3},{value:"<code>function</code>",id:"function",level:3},{value:"<code>rate_limit</code>",id:"rate_limit",level:3},{value:"<code>region</code>",id:"region",level:3},{value:"<code>endpoint</code>",id:"endpoint",level:3},{value:"<code>credentials</code>",id:"credentials-1",level:3},{value:"<code>credentials.profile</code>",id:"credentialsprofile",level:3},{value:"<code>credentials.id</code>",id:"credentialsid",level:3},{value:"<code>credentials.secret</code>",id:"credentialssecret",level:3},{value:"<code>credentials.token</code>",id:"credentialstoken",level:3},{value:"<code>credentials.from_ec2_role</code>",id:"credentialsfrom_ec2_role",level:3},{value:"<code>credentials.role</code>",id:"credentialsrole",level:3},{value:"<code>credentials.role_external_id</code>",id:"credentialsrole_external_id",level:3},{value:"<code>timeout</code>",id:"timeout",level:3},{value:"<code>retries</code>",id:"retries",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Invokes an AWS lambda for each message. The contents of the message is the payload of the request, and the result of the invocation will become the new contents of the message."}),"\n",(0,s.jsx)(n.p,{children:"Introduced in version 3.36.0."}),"\n",(0,s.jsxs)(l.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,s.jsx)(a.Z,{value:"common",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# Common config fields, showing default values\nlabel: ""\naws_lambda:\n  parallel: false\n  function: "" # No default (required)\n'})})}),(0,s.jsx)(a.Z,{value:"advanced",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# All config fields, showing default values\nlabel: ""\naws_lambda:\n  parallel: false\n  function: "" # No default (required)\n  rate_limit: ""\n  region: ""\n  endpoint: ""\n  credentials:\n    profile: ""\n    id: ""\n    secret: ""\n    token: ""\n    from_ec2_role: false\n    role: ""\n    role_external_id: ""\n  timeout: 5s\n  retries: 3\n'})})})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"rate_limit"})," field can be used to specify a rate limit ",(0,s.jsx)(n.a,{href:"/docs/components/rate_limits/about",children:"resource"})," to cap the rate of requests across parallel components service wide."]}),"\n",(0,s.jsxs)(n.p,{children:["In order to map or encode the payload to a specific request body, and map the response back into the original payload instead of replacing it entirely, you can use the ",(0,s.jsxs)(n.a,{href:"/docs/components/processors/branch",children:[(0,s.jsx)(n.code,{children:"branch"})," processor"]}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"error-handling",children:"Error Handling"}),"\n",(0,s.jsxs)(n.p,{children:["When Bento is unable to connect to the AWS endpoint or is otherwise unable to invoke the target lambda function it will retry the request according to the configured number of retries. Once these attempts have been exhausted the failed message will continue through the pipeline with it's contents unchanged, but flagged as having failed, allowing you to use ",(0,s.jsx)(n.a,{href:"/docs/configuration/error_handling",children:"standard processor error handling patterns"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["However, if the invocation of the function is successful but the function itself throws an error, then the message will have it's contents updated with a JSON payload describing the reason for the failure, and a metadata field ",(0,s.jsx)(n.code,{children:"lambda_function_error"})," will be added to the message allowing you to detect and handle function errors with a ",(0,s.jsx)(n.a,{href:"/docs/components/processors/branch",children:(0,s.jsx)(n.code,{children:"branch"})}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'pipeline:\n  processors:\n    - branch:\n        processors:\n          - aws_lambda:\n              function: foo\n        result_map: |\n          root = if meta().exists("lambda_function_error") {\n            throw("Invocation failed due to %v: %v".format(this.errorType, this.errorMessage))\n          } else {\n            this\n          }\noutput:\n  switch:\n    retry_until_success: false\n    cases:\n      - check: errored()\n        output:\n          reject: ${! error() }\n      - output:\n          resource: somewhere_else\n'})}),"\n",(0,s.jsx)(n.h3,{id:"credentials",children:"Credentials"}),"\n",(0,s.jsxs)(n.p,{children:["By default Bento will use a shared credentials file when connecting to AWS services. It's also possible to set them explicitly at the component level, allowing you to transfer data across accounts. You can find out more ",(0,s.jsx)(n.a,{href:"/docs/guides/cloud/aws",children:"in this document"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(l.Z,{defaultValue:"Branched Invoke",values:[{label:"Branched Invoke",value:"Branched Invoke"}],children:(0,s.jsxs)(a.Z,{value:"Branched Invoke",children:[(0,s.jsxs)(n.p,{children:["This example uses a ",(0,s.jsxs)(n.a,{href:"/docs/components/processors/branch/",children:[(0,s.jsx)(n.code,{children:"branch"})," processor"]})," to map a new payload for triggering a lambda function with an ID and username from the original message, and the result of the lambda is discarded, meaning the original message is unchanged."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'pipeline:\n  processors:\n    - branch:\n        request_map: \'{"id":this.doc.id,"username":this.user.name}\'\n        processors:\n          - aws_lambda:\n              function: trigger_user_update\n'})})]})}),"\n",(0,s.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,s.jsx)(n.h3,{id:"parallel",children:(0,s.jsx)(n.code,{children:"parallel"})}),"\n",(0,s.jsx)(n.p,{children:"Whether messages of a batch should be dispatched in parallel."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"bool"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsx)(n.h3,{id:"function",children:(0,s.jsx)(n.code,{children:"function"})}),"\n",(0,s.jsx)(n.p,{children:"The function to invoke."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.h3,{id:"rate_limit",children:(0,s.jsx)(n.code,{children:"rate_limit"})}),"\n",(0,s.jsxs)(n.p,{children:["An optional ",(0,s.jsx)(n.a,{href:"/docs/components/rate_limits/about",children:(0,s.jsx)(n.code,{children:"rate_limit"})})," to throttle invocations by."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"region",children:(0,s.jsx)(n.code,{children:"region"})}),"\n",(0,s.jsx)(n.p,{children:"The AWS region to target."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"endpoint",children:(0,s.jsx)(n.code,{children:"endpoint"})}),"\n",(0,s.jsx)(n.p,{children:"Allows you to specify a custom endpoint for the AWS API."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"credentials-1",children:(0,s.jsx)(n.code,{children:"credentials"})}),"\n",(0,s.jsxs)(n.p,{children:["Optional manual configuration of AWS credentials to use. More information can be found ",(0,s.jsx)(n.a,{href:"/docs/guides/cloud/aws",children:"in this document"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"object"})]}),"\n",(0,s.jsx)(n.h3,{id:"credentialsprofile",children:(0,s.jsx)(n.code,{children:"credentials.profile"})}),"\n",(0,s.jsxs)(n.p,{children:["A profile from ",(0,s.jsx)(n.code,{children:"~/.aws/credentials"})," to use."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"credentialsid",children:(0,s.jsx)(n.code,{children:"credentials.id"})}),"\n",(0,s.jsx)(n.p,{children:"The ID of credentials to use."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"credentialssecret",children:(0,s.jsx)(n.code,{children:"credentials.secret"})}),"\n",(0,s.jsx)(n.p,{children:"The secret for the credentials being used."}),"\n",(0,s.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,s.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,s.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"credentialstoken",children:(0,s.jsx)(n.code,{children:"credentials.token"})}),"\n",(0,s.jsx)(n.p,{children:"The token for the credentials being used, required when using short term credentials."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"credentialsfrom_ec2_role",children:(0,s.jsx)(n.code,{children:"credentials.from_ec2_role"})}),"\n",(0,s.jsxs)(n.p,{children:["Use the credentials of a host EC2 machine configured to assume ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html",children:"an IAM role associated with the instance"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"bool"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"false"}),(0,s.jsx)(n.br,{}),"\n","Requires version 4.2.0 or newer"]}),"\n",(0,s.jsx)(n.h3,{id:"credentialsrole",children:(0,s.jsx)(n.code,{children:"credentials.role"})}),"\n",(0,s.jsx)(n.p,{children:"A role ARN to assume."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"credentialsrole_external_id",children:(0,s.jsx)(n.code,{children:"credentials.role_external_id"})}),"\n",(0,s.jsx)(n.p,{children:"An external ID to provide when assuming a role."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"timeout",children:(0,s.jsx)(n.code,{children:"timeout"})}),"\n",(0,s.jsx)(n.p,{children:"The maximum period of time to wait before abandoning an invocation."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'"5s"'})]}),"\n",(0,s.jsx)(n.h3,{id:"retries",children:(0,s.jsx)(n.code,{children:"retries"})}),"\n",(0,s.jsx)(n.p,{children:"The maximum number of retry attempts for each message."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"int"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"3"})]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5162:function(e,n,r){r.d(n,{Z:function(){return a}});r(7294);var s=r(6010),t={tabItem:"tabItem_Ymn6"},l=r(5893);function a(e){let{children:n,hidden:r,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.Z)(t.tabItem,a),hidden:r,children:n})}},4866:function(e,n,r){r.d(n,{Z:function(){return _}});var s=r(7294),t=r(6010),l=r(2466),a=r(6550),o=r(469),i=r(1980),c=r(7392),d=r(12);function u(e){var n,r;return null!=(n=null==(r=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:t}}=e;return{value:n,label:r,attributes:s,default:t}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:r}=e;const t=(0,a.k6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,i._X)(l),(0,s.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function m(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,l=h(e),[a,i]=(0,s.useState)((()=>function(e){var n;let{defaultValue:r,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}const t=null!=(n=s.find((e=>e.default)))?n:s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[c,u]=f({queryString:r,groupId:t}),[m,x]=function(e){let{groupId:n}=e;const r=function(e){return e?"docusaurus.tab."+e:null}(n),[t,l]=(0,d.Nk)(r);return[t,(0,s.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:t}),j=(()=>{const e=null!=c?c:m;return p({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{j&&i(j)}),[j]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);i(e),u(e),x(e)}),[u,x,l]),tabValues:l}}var x=r(2389),j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},b=r(5893);function v(e){let{className:n,block:r,selectedValue:s,selectValue:a,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const n=e.currentTarget,r=i.indexOf(n),t=o[r].value;t!==s&&(c(n),a(t))},u=e=>{var n;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var s;const n=i.indexOf(e.currentTarget)+1;r=null!=(s=i[n])?s:i[0];break}case"ArrowLeft":{var t;const n=i.indexOf(e.currentTarget)-1;r=null!=(t=i[n])?t:i[i.length-1];break}}null==(n=r)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...l,className:(0,t.Z)("tabs__item",j.tabItem,null==l?void 0:l.className,{"tabs__item--active":s===n}),children:null!=r?r:n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:t}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function w(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,t.Z)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(g,{...e,...n})]})}function _(e){const n=(0,x.Z)();return(0,b.jsx)(w,{...e,children:u(e.children)},String(n))}},1151:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return a}});var s=r(7294);const t={},l=s.createContext(t);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);