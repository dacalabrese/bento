"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[4549],{7398:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return u}});var s=t(5893),r=t(1151),l=t(4866),i=t(5162);const a={title:"amqp_1",slug:"amqp_1",type:"output",status:"stable",categories:["Services"],name:"amqp_1"},c=void 0,o={id:"components/outputs/amqp_1",title:"amqp_1",description:"\x3c!--",source:"@site/docs/components/outputs/amqp_1.md",sourceDirName:"components/outputs",slug:"/components/outputs/amqp_1",permalink:"/bento/docs/components/outputs/amqp_1",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/outputs/amqp_1.md",tags:[],version:"current",frontMatter:{title:"amqp_1",slug:"amqp_1",type:"output",status:"stable",categories:["Services"],name:"amqp_1"},sidebar:"docs",previous:{title:"amqp_0_9",permalink:"/bento/docs/components/outputs/amqp_0_9"},next:{title:"aws_dynamodb",permalink:"/bento/docs/components/outputs/aws_dynamodb"}},d={},u=[{value:"Metadata",id:"metadata",level:3},{value:"Performance",id:"performance",level:2},{value:"Fields",id:"fields",level:2},{value:"<code>urls</code>",id:"urls",level:3},{value:"<code>target_address</code>",id:"target_address",level:3},{value:"<code>max_in_flight</code>",id:"max_in_flight",level:3},{value:"<code>tls</code>",id:"tls",level:3},{value:"<code>tls.enabled</code>",id:"tlsenabled",level:3},{value:"<code>tls.skip_cert_verify</code>",id:"tlsskip_cert_verify",level:3},{value:"<code>tls.enable_renegotiation</code>",id:"tlsenable_renegotiation",level:3},{value:"<code>tls.root_cas</code>",id:"tlsroot_cas",level:3},{value:"<code>tls.root_cas_file</code>",id:"tlsroot_cas_file",level:3},{value:"<code>tls.client_certs</code>",id:"tlsclient_certs",level:3},{value:"<code>tls.client_certs[].cert</code>",id:"tlsclient_certscert",level:3},{value:"<code>tls.client_certs[].key</code>",id:"tlsclient_certskey",level:3},{value:"<code>tls.client_certs[].cert_file</code>",id:"tlsclient_certscert_file",level:3},{value:"<code>tls.client_certs[].key_file</code>",id:"tlsclient_certskey_file",level:3},{value:"<code>tls.client_certs[].password</code>",id:"tlsclient_certspassword",level:3},{value:"<code>application_properties_map</code>",id:"application_properties_map",level:3},{value:"<code>sasl</code>",id:"sasl",level:3},{value:"<code>sasl.mechanism</code>",id:"saslmechanism",level:3},{value:"<code>sasl.user</code>",id:"sasluser",level:3},{value:"<code>sasl.password</code>",id:"saslpassword",level:3},{value:"<code>metadata</code>",id:"metadata-1",level:3},{value:"<code>metadata.exclude_prefixes</code>",id:"metadataexclude_prefixes",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Sends messages to an AMQP (1.0) server."}),"\n",(0,s.jsxs)(l.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,s.jsx)(i.Z,{value:"common",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# Common config fields, showing default values\noutput:\n  label: ""\n  amqp_1:\n    urls: [] # No default (optional)\n    target_address: /foo # No default (required)\n    max_in_flight: 64\n    metadata:\n      exclude_prefixes: []\n'})})}),(0,s.jsx)(i.Z,{value:"advanced",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# All config fields, showing default values\noutput:\n  label: ""\n  amqp_1:\n    urls: [] # No default (optional)\n    target_address: /foo # No default (required)\n    max_in_flight: 64\n    tls:\n      enabled: false\n      skip_cert_verify: false\n      enable_renegotiation: false\n      root_cas: ""\n      root_cas_file: ""\n      client_certs: []\n    application_properties_map: "" # No default (optional)\n    sasl:\n      mechanism: none\n      user: ""\n      password: ""\n    metadata:\n      exclude_prefixes: []\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"Metadata"}),"\n",(0,s.jsxs)(n.p,{children:["Message metadata is added to each AMQP message as string annotations. In order to control which metadata keys are added use the ",(0,s.jsx)(n.code,{children:"metadata"})," config field."]}),"\n",(0,s.jsx)(n.h2,{id:"performance",children:"Performance"}),"\n",(0,s.jsxs)(n.p,{children:["This output benefits from sending multiple messages in flight in parallel for improved performance. You can tune the max number of in flight messages (or message batches) with the field ",(0,s.jsx)(n.code,{children:"max_in_flight"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,s.jsx)(n.h3,{id:"urls",children:(0,s.jsx)(n.code,{children:"urls"})}),"\n",(0,s.jsx)(n.p,{children:"A list of URLs to connect to. The first URL to successfully establish a connection will be used until the connection is closed. If an item of the list contains commas it will be expanded into multiple URLs."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"array"}),(0,s.jsx)(n.br,{}),"\n","Requires version 4.23.0 or newer"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nurls:\n  - amqp://guest:guest@127.0.0.1:5672/\n\nurls:\n  - amqp://127.0.0.1:5672/,amqp://127.0.0.2:5672/\n\nurls:\n  - amqp://127.0.0.1:5672/\n  - amqp://127.0.0.2:5672/\n"})}),"\n",(0,s.jsx)(n.h3,{id:"target_address",children:(0,s.jsx)(n.code,{children:"target_address"})}),"\n",(0,s.jsx)(n.p,{children:"The target address to write to."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\ntarget_address: /foo\n\ntarget_address: queue:/bar\n\ntarget_address: topic:/baz\n"})}),"\n",(0,s.jsx)(n.h3,{id:"max_in_flight",children:(0,s.jsx)(n.code,{children:"max_in_flight"})}),"\n",(0,s.jsx)(n.p,{children:"The maximum number of messages to have in flight at a given time. Increase this to improve throughput."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"int"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"64"})]}),"\n",(0,s.jsx)(n.h3,{id:"tls",children:(0,s.jsx)(n.code,{children:"tls"})}),"\n",(0,s.jsx)(n.p,{children:"Custom TLS settings can be used to override system defaults."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"object"})]}),"\n",(0,s.jsx)(n.h3,{id:"tlsenabled",children:(0,s.jsx)(n.code,{children:"tls.enabled"})}),"\n",(0,s.jsx)(n.p,{children:"Whether custom TLS settings are enabled."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"bool"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsx)(n.h3,{id:"tlsskip_cert_verify",children:(0,s.jsx)(n.code,{children:"tls.skip_cert_verify"})}),"\n",(0,s.jsx)(n.p,{children:"Whether to skip server side certificate verification."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"bool"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsx)(n.h3,{id:"tlsenable_renegotiation",children:(0,s.jsx)(n.code,{children:"tls.enable_renegotiation"})}),"\n",(0,s.jsxs)(n.p,{children:["Whether to allow the remote server to repeatedly request renegotiation. Enable this option if you're seeing the error message ",(0,s.jsx)(n.code,{children:"local error: tls: no renegotiation"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"bool"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"false"}),(0,s.jsx)(n.br,{}),"\n","Requires version 3.45.0 or newer"]}),"\n",(0,s.jsx)(n.h3,{id:"tlsroot_cas",children:(0,s.jsx)(n.code,{children:"tls.root_cas"})}),"\n",(0,s.jsx)(n.p,{children:"An optional root certificate authority to use. This is a string, representing a certificate chain from the parent trusted root certificate, to possible intermediate signing certificates, to the host certificate."}),"\n",(0,s.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,s.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,s.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nroot_cas: |-\n  -----BEGIN CERTIFICATE-----\n  ...\n  -----END CERTIFICATE-----\n"})}),"\n",(0,s.jsx)(n.h3,{id:"tlsroot_cas_file",children:(0,s.jsx)(n.code,{children:"tls.root_cas_file"})}),"\n",(0,s.jsx)(n.p,{children:"An optional path of a root certificate authority file to use. This is a file, often with a .pem extension, containing a certificate chain from the parent trusted root certificate, to possible intermediate signing certificates, to the host certificate."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nroot_cas_file: ./root_cas.pem\n"})}),"\n",(0,s.jsx)(n.h3,{id:"tlsclient_certs",children:(0,s.jsx)(n.code,{children:"tls.client_certs"})}),"\n",(0,s.jsxs)(n.p,{children:["A list of client certificates to use. For each certificate either the fields ",(0,s.jsx)(n.code,{children:"cert"})," and ",(0,s.jsx)(n.code,{children:"key"}),", or ",(0,s.jsx)(n.code,{children:"cert_file"})," and ",(0,s.jsx)(n.code,{children:"key_file"})," should be specified, but not both."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"array"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"[]"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nclient_certs:\n  - cert: foo\n    key: bar\n\nclient_certs:\n  - cert_file: ./example.pem\n    key_file: ./example.key\n"})}),"\n",(0,s.jsx)(n.h3,{id:"tlsclient_certscert",children:(0,s.jsx)(n.code,{children:"tls.client_certs[].cert"})}),"\n",(0,s.jsx)(n.p,{children:"A plain text certificate to use."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"tlsclient_certskey",children:(0,s.jsx)(n.code,{children:"tls.client_certs[].key"})}),"\n",(0,s.jsx)(n.p,{children:"A plain text certificate key to use."}),"\n",(0,s.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,s.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,s.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"tlsclient_certscert_file",children:(0,s.jsx)(n.code,{children:"tls.client_certs[].cert_file"})}),"\n",(0,s.jsx)(n.p,{children:"The path of a certificate to use."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"tlsclient_certskey_file",children:(0,s.jsx)(n.code,{children:"tls.client_certs[].key_file"})}),"\n",(0,s.jsx)(n.p,{children:"The path of a certificate key to use."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"tlsclient_certspassword",children:(0,s.jsx)(n.code,{children:"tls.client_certs[].password"})}),"\n",(0,s.jsxs)(n.p,{children:["A plain text password for when the private key is password encrypted in PKCS#1 or PKCS#8 format. The obsolete ",(0,s.jsx)(n.code,{children:"pbeWithMD5AndDES-CBC"})," algorithm is not supported for the PKCS#8 format. Warning: Since it does not authenticate the ciphertext, it is vulnerable to padding oracle attacks that can let an attacker recover the plaintext."]}),"\n",(0,s.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,s.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,s.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\npassword: foo\n\npassword: ${KEY_PASSWORD}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"application_properties_map",children:(0,s.jsx)(n.code,{children:"application_properties_map"})}),"\n",(0,s.jsxs)(n.p,{children:["An optional Bloblang mapping that can be defined in order to set the ",(0,s.jsx)(n.code,{children:"application-properties"})," on output messages."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.h3,{id:"sasl",children:(0,s.jsx)(n.code,{children:"sasl"})}),"\n",(0,s.jsx)(n.p,{children:"Enables SASL authentication."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"object"})]}),"\n",(0,s.jsx)(n.h3,{id:"saslmechanism",children:(0,s.jsx)(n.code,{children:"sasl.mechanism"})}),"\n",(0,s.jsx)(n.p,{children:"The SASL authentication mechanism to use."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'"none"'})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Option"}),(0,s.jsx)(n.th,{children:"Summary"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"anonymous"})}),(0,s.jsx)(n.td,{children:"Anonymous SASL authentication."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"none"})}),(0,s.jsx)(n.td,{children:"No SASL based authentication."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"plain"})}),(0,s.jsx)(n.td,{children:"Plain text SASL authentication."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"sasluser",children:(0,s.jsx)(n.code,{children:"sasl.user"})}),"\n",(0,s.jsx)(n.p,{children:"A SASL plain text username. It is recommended that you use environment variables to populate this field."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nuser: ${USER}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"saslpassword",children:(0,s.jsx)(n.code,{children:"sasl.password"})}),"\n",(0,s.jsx)(n.p,{children:"A SASL plain text password. It is recommended that you use environment variables to populate this field."}),"\n",(0,s.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,s.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,s.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\npassword: ${PASSWORD}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"metadata-1",children:(0,s.jsx)(n.code,{children:"metadata"})}),"\n",(0,s.jsx)(n.p,{children:"Specify criteria for which metadata values are attached to messages as headers."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"object"})]}),"\n",(0,s.jsx)(n.h3,{id:"metadataexclude_prefixes",children:(0,s.jsx)(n.code,{children:"metadata.exclude_prefixes"})}),"\n",(0,s.jsx)(n.p,{children:"Provide a list of explicit metadata key prefixes to be excluded when adding metadata to sent messages."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"array"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"[]"})]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5162:function(e,n,t){t.d(n,{Z:function(){return i}});t(7294);var s=t(6010),r={tabItem:"tabItem_Ymn6"},l=t(5893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:t,children:n})}},4866:function(e,n,t){t.d(n,{Z:function(){return y}});var s=t(7294),r=t(6010),l=t(2466),i=t(6550),a=t(469),c=t(1980),o=t(7392),d=t(12);function u(e){var n,t;return null!=(n=null==(t=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c._X)(l),(0,s.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=h(e),[i,c]=(0,s.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const r=null!=(n=s.find((e=>e.default)))?n:s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[o,u]=x({queryString:t,groupId:r}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[r,l]=(0,d.Nk)(t);return[r,(0,s.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),j=(()=>{const e=null!=o?o:f;return p({value:e,tabValues:l})?e:null})();(0,a.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);c(e),u(e),m(e)}),[u,m,l]),tabValues:l}}var m=t(2389),j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},b=t(5893);function g(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=a[t].value;r!==s&&(o(n),i(r))},u=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var s;const n=c.indexOf(e.currentTarget)+1;t=null!=(s=c[n])?s:c[0];break}case"ArrowLeft":{var r;const n=c.indexOf(e.currentTarget)-1;t=null!=(r=c[n])?r:c[c.length-1];break}}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...l,className:(0,r.Z)("tabs__item",j.tabItem,null==l?void 0:l.className,{"tabs__item--active":s===n}),children:null!=t?t:n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function _(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,b.jsx)(g,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function y(e){const n=(0,m.Z)();return(0,b.jsx)(_,{...e,children:u(e.children)},String(n))}},1151:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(7294);const r={},l=s.createContext(r);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);