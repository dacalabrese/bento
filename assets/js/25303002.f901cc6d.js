"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[8908],{4091:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var s=t(5893),o=t(1151),r=t(4866),a=t(5162);const l={slug:"custom-metrics",title:"Custom Metrics",description:"Learn how to emit custom metrics from messages."},i=void 0,c={permalink:"/bento/cookbooks/custom-metrics",source:"@site/cookbooks/custom_metrics.md",title:"Custom Metrics",description:"Learn how to emit custom metrics from messages."},u=[{value:"The Basics",id:"the-basics",level:2},{value:"Harder Example",id:"harder-example",level:2},{value:"Combining into a Workflow",id:"combining-into-a-workflow",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["You can't build cool graphs without metrics, and ",(0,s.jsx)(n.a,{href:"/docs/components/metrics/about",children:"Bento emits many"}),". However, occasionally you might want to also emit custom metrics that track data extracted from messages being processed. In this cookbook we'll explore how to achieve this by configuring Bento to pull download stats from Github, Dockerhub and Homebrew and emit them as gauges."]}),"\n",(0,s.jsx)(n.h2,{id:"the-basics",children:"The Basics"}),"\n",(0,s.jsx)(n.p,{children:"Firstly, we need to target an API so let's start with the nice and simple Homebrew API, which we'll poll every 60 seconds."}),"\n",(0,s.jsxs)(n.p,{children:["We can either do it with an ",(0,s.jsxs)(n.a,{href:"/docs/components/inputs/http_client",children:[(0,s.jsx)(n.code,{children:"http_client"})," input"]})," and a ",(0,s.jsx)(n.a,{href:"/docs/components/rate_limits/about",children:"rate limit"})," that restricts us to one request per 60 seconds, or we can use a ",(0,s.jsxs)(n.a,{href:"/docs/components/inputs/generate",children:[(0,s.jsx)(n.code,{children:"generate"})," input"]})," to generate a message every 60 seconds that triggers an ",(0,s.jsxs)(n.a,{href:"/docs/components/processors/http",children:[(0,s.jsx)(n.code,{children:"http"})," processor"]}),":"]}),"\n","\n","\n",(0,s.jsxs)(r.Z,{defaultValue:"Processor",values:[{label:"With Processor",value:"Processor"},{label:"With Input",value:"Input"}],children:[(0,s.jsx)(a.Z,{value:"Processor",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'input:\n  generate:\n    interval: 60s\n    mapping: root = ""\n\npipeline:\n  processors:\n    - http:\n        url: https://formulae.brew.sh/api/formula/bento.json\n        verb: GET\n'})})}),(0,s.jsx)(a.Z,{value:"Input",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"input:\n  http_client:\n    url: https://formulae.brew.sh/api/formula/bento.json\n    verb: GET\n    rate_limit: brewlimit\n\nrate_limit_resources:\n  - label: brewlimit\n    local:\n      count: 1\n      interval: 60s\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["For this cookbook we'll continue with the processor option as it makes it easier to deploy it as a ",(0,s.jsx)(n.a,{href:"/docs/guides/serverless/lambda",children:"scheduled lambda function"})," later on, which is how I'm currently doing it in real life."]}),"\n",(0,s.jsx)(n.p,{children:"The homebrew formula API gives us a JSON blob that looks like this (removing fields we're not interested in, and with numbers inflated relative to my ego):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "name":"bento",\n    "desc":"Stream processor for mundane tasks written in Go",\n    "analytics":{"install":{"30d":{"bento":78978979},"90d":{"bento":253339124},"365d":{"bento":681356871}}}\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This format makes it fairly easy to emit the value of ",(0,s.jsx)(n.code,{children:"analytics.install.30d.bento"})," as a gauge with the ",(0,s.jsxs)(n.a,{href:"/docs/components/processors/metric",children:[(0,s.jsx)(n.code,{children:"metric"})," processor"]}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'http:\n  address: 0.0.0.0:4195\n\ninput:\n  generate:\n    interval: 60s\n    mapping: root = ""\n\npipeline:\n  processors:\n    - http:\n        url: https://formulae.brew.sh/api/formula/bento.json\n        verb: GET\n\n    - metric:\n        type: gauge\n        name: downloads\n        labels:\n          source: homebrew\n        value: ${! json("analytics.install.30d.bento") }\n\n    - mapping: root = deleted()\n\nmetrics:\n  mapping: if this != "downloads" { deleted() }\n  prometheus: {}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["With the above config we have selected the ",(0,s.jsxs)(n.a,{href:"/docs/components/metrics/prometheus",children:[(0,s.jsx)(n.code,{children:"prometheus"})," metrics type"]}),", which allows us to use ",(0,s.jsx)(n.a,{href:"https://prometheus.io/",children:"Prometheus"})," to scrape metrics from Bento by polling its HTTP API at the url ",(0,s.jsx)(n.code,{children:"http://localhost:4195/stats"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["We have also specified a [",(0,s.jsx)(n.code,{children:"path_mapping"}),"][metrics.prometheus.path_mapping] that deletes any internal metrics usually emitted by Bento by filtering on our custom metric name."]}),"\n",(0,s.jsxs)(n.p,{children:["Finally, there's also a ",(0,s.jsxs)(n.a,{href:"/docs/components/processors/mapping",children:[(0,s.jsx)(n.code,{children:"mapping"})," processor"]})," added to the end of our pipeline that deletes all messages since we're not interested in sending the raw data anywhere after this point anyway."]}),"\n",(0,s.jsxs)(n.p,{children:["While running this config you can verify that our custom metric is emitted with ",(0,s.jsx)(n.code,{children:"curl"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"curl -s http://localhost:4195/stats | grep downloads\n"})}),"\n",(0,s.jsx)(n.p,{children:"Giving something like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'# HELP bento_downloads Bento Gauge metric\n# TYPE bento_downloads gauge\nbento_downloads{source="homebrew"} 78978979\n'})}),"\n",(0,s.jsx)(n.p,{children:"Easy! The Dockerhub API is also pretty simple, and adding it to our pipeline is just:"}),"\n",(0,s.jsxs)(r.Z,{defaultValue:"Diff",values:[{label:"Diff",value:"Diff"},{label:"Full Config",value:"Full Config"}],children:[(0,s.jsx)(a.Z,{value:"Diff",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:'           source: homebrew\n         value: ${! json("analytics.install.30d.bento") }\n\n+    - mapping: root = ""\n+\n+    - http:\n+        url: https://hub.docker.com/v2/repositories/jeffail/bento/\n+        verb: GET\n+        headers:\n+          Content-Type: application/json\n+\n+    - metric:\n+        type: gauge\n+        name: downloads\n+        labels:\n+          source: dockerhub\n+        value: ${! json("pull_count") }\n+\n     - mapping: root = deleted()\n'})})}),(0,s.jsx)(a.Z,{value:"Full Config",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'http:\n  address: 0.0.0.0:4195\n\ninput:\n  generate:\n    interval: 60s\n    mapping: root = ""\n\npipeline:\n  processors:\n    - http:\n        url: https://formulae.brew.sh/api/formula/bento.json\n        verb: GET\n\n    - metric:\n        type: gauge\n        name: downloads\n        labels:\n          source: homebrew\n        value: ${! json("analytics.install.30d.bento") }\n\n    - mapping: root = ""\n\n    - http:\n        url: https://hub.docker.com/v2/repositories/jeffail/bento/\n        verb: GET\n        headers:\n          Content-Type: application/json\n\n    - metric:\n        type: gauge\n        name: downloads\n        labels:\n          source: dockerhub\n        value: ${! json("pull_count") }\n\n    - mapping: root = deleted()\n\nmetrics:\n  mapping: if this != "downloads" { deleted() }\n  prometheus: {}\n'})})})]}),"\n",(0,s.jsx)(n.h2,{id:"harder-example",children:"Harder Example"}),"\n",(0,s.jsx)(n.p,{children:"So that's the basics covered. Next, we're going to target the Github releases API which gives a slightly more complex payload that looks something like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "tag_name": "X.XX.X",\n    "assets":[\n      {"name":"bento-lambda_X.XX.X_linux_amd64.zip","download_count":543534545},\n      {"name":"bento_X.XX.X_darwin_amd64.tar.gz","download_count":43242342},\n      {"name":"bento_X.XX.X_freebsd_amd64.tar.gz","download_count":534565656},\n      {"name":"bento_X.XX.X_linux_amd64.tar.gz","download_count":743282474324}\n    ]\n  }\n]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["It's an array of objects, one for each tagged release, with a field ",(0,s.jsx)(n.code,{children:"assets"})," which is an array of objects representing each release asset, of which we want to emit a separate download gauge. In order to do this we're going to use a ",(0,s.jsxs)(n.a,{href:"/docs/components/processors/mapping",children:[(0,s.jsx)(n.code,{children:"mapping"})," processor"]})," to remap the payload from Github into an array of objects of the following form:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n  {"source":"github","dist":"lambda_linux_amd64","download_count":543534545,"version":"X.XX.X"},\n  {"source":"github","dist":"darwin_amd64","download_count":43242342,"version":"X.XX.X"},\n  {"source":"github","dist":"freebsd_amd64","download_count":534565656,"version":"X.XX.X"},\n  {"source":"github","dist":"linux_amd64","download_count":743282474324,"version":"X.XX.X"}\n]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Then we can use an ",(0,s.jsxs)(n.a,{href:"/docs/components/processors/unarchive",children:[(0,s.jsx)(n.code,{children:"unarchive"})," processor"]})," with the format ",(0,s.jsx)(n.code,{children:"json_array"})," to expand this array into N individual messages, one for each asset. Finally, we will follow up with a ",(0,s.jsxs)(n.a,{href:"/docs/components/processors/metric",children:[(0,s.jsx)(n.code,{children:"metric"})," processor"]})," that dynamically sets labels following the fields ",(0,s.jsx)(n.code,{children:"source"}),", ",(0,s.jsx)(n.code,{children:"dist"})," and ",(0,s.jsx)(n.code,{children:"version"})," so that we have a separate metrics series for each asset type for each tagged version."]}),"\n",(0,s.jsx)(n.p,{children:"A simple pipeline of these steps would look like this (please forgive the regexp):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'http:\n  address: 0.0.0.0:4195\n\ninput:\n  generate:\n    interval: 60s\n    mapping: root = ""\n\npipeline:\n  processors:\n    - http:\n        url: https://api.github.com/repos/warpstreamlabs/bento/releases\n        verb: GET\n\n    - mapping: |\n        root = this.map_each(release -> release.assets.map_each(asset -> {\n          "source":         "github",\n          "dist":           asset.name.re_replace_all("^bento-?((lambda_)|_)[0-9\\\\.]+(-rc[0-9]+)?_([^\\\\.]+).*", "$2$4"),\n          "download_count": asset.download_count,\n          "version":        release.tag_name.trim("v"),\n        }).filter(asset -> asset.dist != "checksums")).flatten()\n\n    - unarchive:\n        format: json_array\n\n    - metric:\n        type: gauge\n        name: downloads\n        labels:\n          dist: ${! json("dist") }\n          source: ${! json("source") }\n        value: ${! json("download_count") }\n\n    - mapping: root = deleted()\n\nmetrics:\n  mapping: if this != "downloads" { deleted() }\n  prometheus: {}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Finally, let's combine all the custom metrics into one pipeline."}),"\n",(0,s.jsx)(n.h2,{id:"combining-into-a-workflow",children:"Combining into a Workflow"}),"\n",(0,s.jsxs)(n.p,{children:["Okay I'm getting bored now so let's wrap this up. The following config expands on the previous examples by configuring each API poll as a ",(0,s.jsxs)(n.a,{href:"/docs/components/processors/branch",children:[(0,s.jsx)(n.code,{children:"branch"})," processor"]}),", which allows us to run them within a ",(0,s.jsxs)(n.a,{href:"/docs/components/processors/workflow",children:[(0,s.jsx)(n.code,{children:"workflow"})," processor"]})," that can execute all three branches in parallel."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsxs)(n.a,{href:"/docs/components/processors/metric",children:[(0,s.jsx)(n.code,{children:"metric"})," processors"]})," have also been combined into a single reusable resource by updating the other API calls to format their payloads into the same structure as our Github remap."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'http:\n  address: 0.0.0.0:4195\n\ninput:\n  generate:\n    interval: 60s\n    mapping: root = {}\n\npipeline:\n  processors:\n    - workflow:\n        meta_path: results\n        order: [ [ dockerhub, github, homebrew ] ]\n\nprocessor_resources:\n  - label: dockerhub\n    branch:\n      request_map: \'root = ""\'\n      processors:\n        - try:\n          - http:\n              url: https://hub.docker.com/v2/repositories/jeffail/bento/\n              verb: GET\n              headers:\n                Content-Type: application/json\n          - mapping: |\n              root.source = "docker"\n              root.dist = "docker"\n              root.download_count = this.pull_count\n              root.version = "all"\n          - resource: metric_gauge\n\n  - label: github\n    branch:\n      request_map: \'root = ""\'\n      processors:\n        - try:\n          - http:\n              url: https://api.github.com/repos/warpstreamlabs/bento/releases\n              verb: GET\n          - mapping: |\n              root = this.map_each(release -> release.assets.map_each(asset -> {\n                "source":         "github",\n                "dist":           asset.name.re_replace_all("^bento-?((lambda_)|_)[0-9\\\\.]+(-rc[0-9]+)?_([^\\\\.]+).*", "$2$4"),\n                "download_count": asset.download_count,\n                "version":        release.tag_name.trim("v"),\n              }).filter(asset -> asset.dist != "checksums")).flatten()\n          - unarchive:\n              format: json_array\n          - resource: metric_gauge\n          - mapping: \'root = if batch_index() != 0 { deleted() }\'\n\n  - label: homebrew\n    branch:\n      request_map: \'root = ""\'\n      processors:\n        - try:\n          - http:\n              url: https://formulae.brew.sh/api/formula/bento.json\n              verb: GET\n          - mapping: |\n              root.source = "homebrew"\n              root.dist = "homebrew"\n              root.download_count = this.analytics.install.30d.bento\n              root.version = "all"\n          - resource: metric_gauge\n\n  - label: metric_gauge\n    metric:\n      type: gauge\n      name: downloads\n      labels:\n        dist: ${! json("dist") }\n        source: ${! json("source") }\n        version: ${! json("version") }\n      value: ${! json("download_count") }\n\nmetrics:\n  mapping: if this != "downloads" { deleted() }\n  prometheus: {}\n'})})]})}function h(e){void 0===e&&(e={});const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5162:function(e,n,t){t.d(n,{Z:function(){return a}});t(7294);var s=t(6010),o={tabItem:"tabItem_Ymn6"},r=t(5893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(o.tabItem,a),hidden:t,children:n})}},4866:function(e,n,t){t.d(n,{Z:function(){return y}});var s=t(7294),o=t(6010),r=t(2466),a=t(6550),l=t(469),i=t(1980),c=t(7392),u=t(12);function d(e){var n,t;return null!=(n=null==(t=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:o}}=e;return{value:n,label:t,attributes:s,default:o}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,a.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,i._X)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=h(e),[a,i]=(0,s.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const o=null!=(n=s.find((e=>e.default)))?n:s[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[c,d]=m({queryString:t,groupId:o}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[o,r]=(0,u.Nk)(t);return[o,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),g=(()=>{const e=null!=c?c:b;return p({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);i(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=t(2389),g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},w=t(5893);function j(e){let{className:n,block:t,selectedValue:s,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),o=l[t].value;o!==s&&(c(n),a(o))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var s;const n=i.indexOf(e.currentTarget)+1;t=null!=(s=i[n])?s:i[0];break}case"ArrowLeft":{var o;const n=i.indexOf(e.currentTarget)-1;t=null!=(o=i[n])?o:i[i.length-1];break}}null==(n=t)||n.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...r,className:(0,o.Z)("tabs__item",g.tabItem,null==r?void 0:r.className,{"tabs__item--active":s===n}),children:null!=t?t:n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:o}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function x(e){const n=b(e);return(0,w.jsxs)("div",{className:(0,o.Z)("tabs-container",g.tabList),children:[(0,w.jsx)(j,{...e,...n}),(0,w.jsx)(v,{...e,...n})]})}function y(e){const n=(0,f.Z)();return(0,w.jsx)(x,{...e,children:d(e.children)},String(n))}},1151:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var s=t(7294);const o={},r=s.createContext(o);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);