"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[6355],{4423:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=t(5893),r=t(1151),s=t(4866),a=t(5162);const l={title:"protobuf",slug:"protobuf",type:"processor",status:"stable",categories:["Parsing"],name:"protobuf"},i=void 0,c={id:"components/processors/protobuf",title:"protobuf",description:"\x3c!--",source:"@site/docs/components/processors/protobuf.md",sourceDirName:"components/processors",slug:"/components/processors/protobuf",permalink:"/bento/docs/components/processors/protobuf",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/processors/protobuf.md",tags:[],version:"current",frontMatter:{title:"protobuf",slug:"protobuf",type:"processor",status:"stable",categories:["Parsing"],name:"protobuf"},sidebar:"docs",previous:{title:"processors",permalink:"/bento/docs/components/processors/processors"},next:{title:"rate_limit",permalink:"/bento/docs/components/processors/rate_limit"}},u={},d=[{value:"Operators",id:"operators",level:2},{value:"<code>to_json</code>",id:"to_json",level:3},{value:"<code>from_json</code>",id:"from_json",level:3},{value:"Examples",id:"examples",level:2},{value:"Fields",id:"fields",level:2},{value:"<code>operator</code>",id:"operator",level:3},{value:"<code>message</code>",id:"message",level:3},{value:"<code>discard_unknown</code>",id:"discard_unknown",level:3},{value:"<code>use_proto_names</code>",id:"use_proto_names",level:3},{value:"<code>import_paths</code>",id:"import_paths",level:3}];function p(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Performs conversions to or from a protobuf message. This processor uses reflection, meaning conversions can be made directly from the target .proto files."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",children:'# Config fields, showing default values\nlabel: ""\nprotobuf:\n  operator: "" # No default (required)\n  message: "" # No default (required)\n  discard_unknown: false\n  use_proto_names: false\n  import_paths: []\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The main functionality of this processor is to map to and from JSON documents, you can read more about JSON mapping of protobuf messages here: ",(0,o.jsx)(n.a,{href:"https://developers.google.com/protocol-buffers/docs/proto3#json",children:"https://developers.google.com/protocol-buffers/docs/proto3#json"})]}),"\n",(0,o.jsxs)(n.p,{children:["Using reflection for processing protobuf messages in this way is less performant than generating and using native code. Therefore when performance is critical it is recommended that you use Bento plugins instead for processing protobuf messages natively, you can find an example of Bento plugins at ",(0,o.jsx)(n.a,{href:"https://github.cowarpstreamlabs/bentoento-plugin-example",children:"https://github.com/warpstreamlabs/bento-plugin-example"})]}),"\n",(0,o.jsx)(n.h2,{id:"operators",children:"Operators"}),"\n",(0,o.jsx)(n.h3,{id:"to_json",children:(0,o.jsx)(n.code,{children:"to_json"})}),"\n",(0,o.jsx)(n.p,{children:"Converts protobuf messages into a generic JSON structure. This makes it easier to manipulate the contents of the document within Bento."}),"\n",(0,o.jsx)(n.h3,{id:"from_json",children:(0,o.jsx)(n.code,{children:"from_json"})}),"\n",(0,o.jsx)(n.p,{children:"Attempts to create a target protobuf message from a generic JSON structure."}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsxs)(s.Z,{defaultValue:"JSON to Protobuf",values:[{label:"JSON to Protobuf",value:"JSON to Protobuf"},{label:"Protobuf to JSON",value:"Protobuf to JSON"}],children:[(0,o.jsxs)(a.Z,{value:"JSON to Protobuf",children:[(0,o.jsxs)(n.p,{children:["If we have the following protobuf definition within a directory called ",(0,o.jsx)(n.code,{children:"testing/schema"}),":"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-protobuf",children:'syntax = "proto3";\npackage testing;\n\nimport "google/protobuf/timestamp.proto";\n\nmessage Person {\n  string first_name = 1;\n  string last_name = 2;\n  string full_name = 3;\n  int32 age = 4;\n  int32 id = 5; // Unique ID number for this person.\n  string email = 6;\n\n  google.protobuf.Timestamp last_updated = 7;\n}\n'})}),(0,o.jsx)(n.p,{children:"And a stream of JSON documents of the form:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n\t"firstName": "caleb",\n\t"lastName": "quaye",\n\t"email": "caleb@myspace.com"\n}\n'})}),(0,o.jsx)(n.p,{children:"We can convert the documents into protobuf messages with the following config:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"pipeline:\n  processors:\n    - protobuf:\n        operator: from_json\n        message: testing.Person\n        import_paths: [ testing/schema ]\n"})})]}),(0,o.jsxs)(a.Z,{value:"Protobuf to JSON",children:[(0,o.jsxs)(n.p,{children:["If we have the following protobuf definition within a directory called ",(0,o.jsx)(n.code,{children:"testing/schema"}),":"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-protobuf",children:'syntax = "proto3";\npackage testing;\n\nimport "google/protobuf/timestamp.proto";\n\nmessage Person {\n  string first_name = 1;\n  string last_name = 2;\n  string full_name = 3;\n  int32 age = 4;\n  int32 id = 5; // Unique ID number for this person.\n  string email = 6;\n\n  google.protobuf.Timestamp last_updated = 7;\n}\n'})}),(0,o.jsxs)(n.p,{children:["And a stream of protobuf messages of the type ",(0,o.jsx)(n.code,{children:"Person"}),", we could convert them into JSON documents of the format:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n\t"firstName": "caleb",\n\t"lastName": "quaye",\n\t"email": "caleb@myspace.com"\n}\n'})}),(0,o.jsx)(n.p,{children:"With the following config:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"pipeline:\n  processors:\n    - protobuf:\n        operator: to_json\n        message: testing.Person\n        import_paths: [ testing/schema ]\n"})})]})]}),"\n",(0,o.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,o.jsx)(n.h3,{id:"operator",children:(0,o.jsx)(n.code,{children:"operator"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"#operators",children:"operator"})," to execute"]}),"\n",(0,o.jsxs)(n.p,{children:["Type: ",(0,o.jsx)(n.code,{children:"string"}),(0,o.jsx)(n.br,{}),"\n","Options: ",(0,o.jsx)(n.code,{children:"to_json"}),", ",(0,o.jsx)(n.code,{children:"from_json"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"message",children:(0,o.jsx)(n.code,{children:"message"})}),"\n",(0,o.jsx)(n.p,{children:"The fully qualified name of the protobuf message to convert to/from."}),"\n",(0,o.jsxs)(n.p,{children:["Type: ",(0,o.jsx)(n.code,{children:"string"})]}),"\n",(0,o.jsx)(n.h3,{id:"discard_unknown",children:(0,o.jsx)(n.code,{children:"discard_unknown"})}),"\n",(0,o.jsxs)(n.p,{children:["If ",(0,o.jsx)(n.code,{children:"true"}),", the ",(0,o.jsx)(n.code,{children:"from_json"})," operator discards fields that are unknown to the schema."]}),"\n",(0,o.jsxs)(n.p,{children:["Type: ",(0,o.jsx)(n.code,{children:"bool"}),(0,o.jsx)(n.br,{}),"\n","Default: ",(0,o.jsx)(n.code,{children:"false"})]}),"\n",(0,o.jsx)(n.h3,{id:"use_proto_names",children:(0,o.jsx)(n.code,{children:"use_proto_names"})}),"\n",(0,o.jsxs)(n.p,{children:["If ",(0,o.jsx)(n.code,{children:"true"}),", the ",(0,o.jsx)(n.code,{children:"to_json"})," operator deserializes fields exactly as named in schema file."]}),"\n",(0,o.jsxs)(n.p,{children:["Type: ",(0,o.jsx)(n.code,{children:"bool"}),(0,o.jsx)(n.br,{}),"\n","Default: ",(0,o.jsx)(n.code,{children:"false"})]}),"\n",(0,o.jsx)(n.h3,{id:"import_paths",children:(0,o.jsx)(n.code,{children:"import_paths"})}),"\n",(0,o.jsx)(n.p,{children:"A list of directories containing .proto files, including all definitions required for parsing the target message. If left empty the current directory is used. Each directory listed will be walked with all found .proto files imported."}),"\n",(0,o.jsxs)(n.p,{children:["Type: ",(0,o.jsx)(n.code,{children:"array"}),(0,o.jsx)(n.br,{}),"\n","Default: ",(0,o.jsx)(n.code,{children:"[]"})]})]})}function f(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},5162:function(e,n,t){t.d(n,{Z:function(){return a}});t(7294);var o=t(6010),r={tabItem:"tabItem_Ymn6"},s=t(5893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,a),hidden:t,children:n})}},4866:function(e,n,t){t.d(n,{Z:function(){return _}});var o=t(7294),r=t(6010),s=t(2466),a=t(6550),l=t(469),i=t(1980),c=t(7392),u=t(12);function d(e){var n,t;return null!=(n=null==(t=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function p(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:r}}=e;return{value:n,label:t,attributes:o,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,i._X)(s),(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=p(e),[a,i]=(0,o.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+o.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const r=null!=(n=o.find((e=>e.default)))?n:o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=h({queryString:t,groupId:r}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[r,s]=(0,u.Nk)(t);return[r,(0,o.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),g=(()=>{const e=null!=c?c:m;return f({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(2389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},x=t(5893);function j(e){let{className:n,block:t,selectedValue:o,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),r=l[t].value;r!==o&&(c(n),a(r))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var o;const n=i.indexOf(e.currentTarget)+1;t=null!=(o=i[n])?o:i[0];break}case"ArrowLeft":{var r;const n=i.indexOf(e.currentTarget)-1;t=null!=(r=i[n])?r:i[i.length-1];break}}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.Z)("tabs__item",g.tabItem,null==s?void 0:s.className,{"tabs__item--active":o===n}),children:null!=t?t:n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(j,{...e,...n}),(0,x.jsx)(v,{...e,...n})]})}function _(e){const n=(0,b.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},1151:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var o=t(7294);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);