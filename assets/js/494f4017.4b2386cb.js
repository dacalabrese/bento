"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[1378],{853:function(e,n,r){r.r(n),r.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});var t=r(5893),s=r(1151),o=r(4866),a=r(5162);const l={title:"parquet_encode",slug:"parquet_encode",type:"processor",status:"experimental",categories:["Parsing"],name:"parquet_encode"},c=void 0,i={id:"components/processors/parquet_encode",title:"parquet_encode",description:"\x3c!--",source:"@site/docs/components/processors/parquet_encode.md",sourceDirName:"components/processors",slug:"/components/processors/parquet_encode",permalink:"/bento/docs/components/processors/parquet_encode",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/processors/parquet_encode.md",tags:[],version:"current",frontMatter:{title:"parquet_encode",slug:"parquet_encode",type:"processor",status:"experimental",categories:["Parsing"],name:"parquet_encode"},sidebar:"docs",previous:{title:"parquet_decode",permalink:"/bento/docs/components/processors/parquet_decode"},next:{title:"parse_log",permalink:"/bento/docs/components/processors/parse_log"}},d={},u=[{value:"Examples",id:"examples",level:2},{value:"Fields",id:"fields",level:2},{value:"<code>schema</code>",id:"schema",level:3},{value:"<code>schema[].name</code>",id:"schemaname",level:3},{value:"<code>schema[].type</code>",id:"schematype",level:3},{value:"<code>schema[].repeated</code>",id:"schemarepeated",level:3},{value:"<code>schema[].optional</code>",id:"schemaoptional",level:3},{value:"<code>schema[].fields</code>",id:"schemafields",level:3},{value:"<code>default_compression</code>",id:"default_compression",level:3},{value:"<code>default_encoding</code>",id:"default_encoding",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{title:"EXPERIMENTAL",type:"caution",children:(0,t.jsx)(n.p,{children:"This component is experimental and therefore subject to change or removal outside of major version releases."})}),"\n",(0,t.jsxs)(n.p,{children:["Encodes ",(0,t.jsx)(n.a,{href:"https://parquet.apache.org/docs/",children:"Parquet files"})," from a batch of structured messages."]}),"\n",(0,t.jsx)(n.p,{children:"Introduced in version 4.4.0."}),"\n",(0,t.jsxs)(o.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,t.jsx)(a.Z,{value:"common",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'# Common config fields, showing default values\nlabel: ""\nparquet_encode:\n  schema: [] # No default (required)\n  default_compression: uncompressed\n'})})}),(0,t.jsx)(a.Z,{value:"advanced",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'# All config fields, showing default values\nlabel: ""\nparquet_encode:\n  schema: [] # No default (required)\n  default_compression: uncompressed\n  default_encoding: DELTA_LENGTH_BYTE_ARRAY\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["This processor uses ",(0,t.jsx)(n.a,{href:"https://github.com/parquet-go/parquet-go",children:"https://github.com/parquet-go/parquet-go"}),", which is itself experimental. Therefore changes could be made into how this processor functions outside of major version releases."]}),"\n",(0,t.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(o.Z,{defaultValue:"Writing Parquet Files to AWS S3",values:[{label:"Writing Parquet Files to AWS S3",value:"Writing Parquet Files to AWS S3"}],children:(0,t.jsxs)(a.Z,{value:"Writing Parquet Files to AWS S3",children:[(0,t.jsxs)(n.p,{children:["In this example we use the batching mechanism of an ",(0,t.jsx)(n.code,{children:"aws_s3"})," output to collect a batch of messages in memory, which then converts it to a parquet file and uploads it."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"output:\n  aws_s3:\n    bucket: TODO\n    path: 'stuff/${! timestamp_unix() }-${! uuid_v4() }.parquet'\n    batching:\n      count: 1000\n      period: 10s\n      processors:\n        - parquet_encode:\n            schema:\n              - name: id\n                type: INT64\n              - name: weight\n                type: DOUBLE\n              - name: content\n                type: BYTE_ARRAY\n            default_compression: zstd\n"})})]})}),"\n",(0,t.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,t.jsx)(n.h3,{id:"schema",children:(0,t.jsx)(n.code,{children:"schema"})}),"\n",(0,t.jsx)(n.p,{children:"Parquet schema."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"array"})]}),"\n",(0,t.jsx)(n.h3,{id:"schemaname",children:(0,t.jsx)(n.code,{children:"schema[].name"})}),"\n",(0,t.jsx)(n.p,{children:"The name of the column."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.h3,{id:"schematype",children:(0,t.jsx)(n.code,{children:"schema[].type"})}),"\n",(0,t.jsx)(n.p,{children:"The type of the column, only applicable for leaf columns with no child fields. Some logical types can be specified here such as UTF8."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Options: ",(0,t.jsx)(n.code,{children:"BOOLEAN"}),", ",(0,t.jsx)(n.code,{children:"INT32"}),", ",(0,t.jsx)(n.code,{children:"INT64"}),", ",(0,t.jsx)(n.code,{children:"FLOAT"}),", ",(0,t.jsx)(n.code,{children:"DOUBLE"}),", ",(0,t.jsx)(n.code,{children:"BYTE_ARRAY"}),", ",(0,t.jsx)(n.code,{children:"UTF8"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"schemarepeated",children:(0,t.jsx)(n.code,{children:"schema[].repeated"})}),"\n",(0,t.jsx)(n.p,{children:"Whether the field is repeated."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"bool"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"false"})]}),"\n",(0,t.jsx)(n.h3,{id:"schemaoptional",children:(0,t.jsx)(n.code,{children:"schema[].optional"})}),"\n",(0,t.jsx)(n.p,{children:"Whether the field is optional."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"bool"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"false"})]}),"\n",(0,t.jsx)(n.h3,{id:"schemafields",children:(0,t.jsx)(n.code,{children:"schema[].fields"})}),"\n",(0,t.jsx)(n.p,{children:"A list of child fields."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"array"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nfields:\n  - name: foo\n    type: INT64\n  - name: bar\n    type: BYTE_ARRAY\n"})}),"\n",(0,t.jsx)(n.h3,{id:"default_compression",children:(0,t.jsx)(n.code,{children:"default_compression"})}),"\n",(0,t.jsx)(n.p,{children:"The default compression type to use for fields."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'"uncompressed"'}),(0,t.jsx)(n.br,{}),"\n","Options: ",(0,t.jsx)(n.code,{children:"uncompressed"}),", ",(0,t.jsx)(n.code,{children:"snappy"}),", ",(0,t.jsx)(n.code,{children:"gzip"}),", ",(0,t.jsx)(n.code,{children:"brotli"}),", ",(0,t.jsx)(n.code,{children:"zstd"}),", ",(0,t.jsx)(n.code,{children:"lz4raw"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"default_encoding",children:(0,t.jsx)(n.code,{children:"default_encoding"})}),"\n",(0,t.jsxs)(n.p,{children:["The default encoding type to use for fields. A custom default encoding is only necessary when consuming data with libraries that do not support ",(0,t.jsx)(n.code,{children:"DELTA_LENGTH_BYTE_ARRAY"})," and is therefore best left unset where possible."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'"DELTA_LENGTH_BYTE_ARRAY"'}),(0,t.jsx)(n.br,{}),"\n","Requires version 4.11.0 or newer",(0,t.jsx)(n.br,{}),"\n","Options: ",(0,t.jsx)(n.code,{children:"DELTA_LENGTH_BYTE_ARRAY"}),", ",(0,t.jsx)(n.code,{children:"PLAIN"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5162:function(e,n,r){r.d(n,{Z:function(){return a}});r(7294);var t=r(6010),s={tabItem:"tabItem_Ymn6"},o=r(5893);function a(e){let{children:n,hidden:r,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,a),hidden:r,children:n})}},4866:function(e,n,r){r.d(n,{Z:function(){return _}});var t=r(7294),s=r(6010),o=r(2466),a=r(6550),l=r(469),c=r(1980),i=r(7392),d=r(12);function u(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const s=(0,a.k6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,c._X)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,o=h(e),[a,c]=(0,t.useState)((()=>function(e){var n;let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}const s=null!=(n=t.find((e=>e.default)))?n:t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[i,u]=m({queryString:r,groupId:s}),[f,x]=function(e){let{groupId:n}=e;const r=function(e){return e?"docusaurus.tab."+e:null}(n),[s,o]=(0,d.Nk)(r);return[s,(0,t.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:s}),j=(()=>{const e=null!=i?i:f;return p({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);c(e),u(e),x(e)}),[u,x,o]),tabValues:o}}var x=r(2389),j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},b=r(5893);function v(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,o.o5)(),d=e=>{const n=e.currentTarget,r=c.indexOf(n),s=l[r].value;s!==t&&(i(n),a(s))},u=e=>{var n;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var t;const n=c.indexOf(e.currentTarget)+1;r=null!=(t=c[n])?t:c[0];break}case"ArrowLeft":{var s;const n=c.indexOf(e.currentTarget)-1;r=null!=(s=c[n])?s:c[c.length-1];break}}null==(n=r)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...o,className:(0,s.Z)("tabs__item",j.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===n}),children:null!=r?r:n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:s}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",j.tabList),children:[(0,b.jsx)(v,{...e,...n}),(0,b.jsx)(g,{...e,...n})]})}function _(e){const n=(0,x.Z)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},1151:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return a}});var t=r(7294);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);