"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[4333],{9620:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return s},metadata:function(){return r},toc:function(){return l}});var i=n(5893),o=n(1151);const s={title:"Secrets"},a=void 0,r={id:"configuration/secrets",title:"Secrets",description:"I sometimes like to fill my mouth with acorns and pretend I am a rodent, free of the burdens of humanity. That was a secret of mine and, similarly to secrets within your software, it's best not to share them publicly lest they become disturbing publications instead. This document outlines how to add secrets to a Bento config without persisting them, and we won't mention acorns again.",source:"@site/docs/configuration/secrets.md",sourceDirName:"configuration",slug:"/configuration/secrets",permalink:"/bento/docs/configuration/secrets",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/configuration/secrets.md",tags:[],version:"current",frontMatter:{title:"Secrets"},sidebar:"docs",previous:{title:"Interpolation",permalink:"/bento/docs/configuration/interpolation"},next:{title:"Field Paths",permalink:"/bento/docs/configuration/field_paths"}},c={},l=[{value:"Using Environment Variables",id:"using-environment-variables",level:2},{value:"Using CLI Flags",id:"using-cli-flags",level:2},{value:"Avoiding Leaked Secrets",id:"avoiding-leaked-secrets",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"I sometimes like to fill my mouth with acorns and pretend I am a rodent, free of the burdens of humanity. That was a secret of mine and, similarly to secrets within your software, it's best not to share them publicly lest they become disturbing publications instead. This document outlines how to add secrets to a Bento config without persisting them, and we won't mention acorns again."}),"\n",(0,i.jsx)(t.h2,{id:"using-environment-variables",children:"Using Environment Variables"}),"\n",(0,i.jsxs)(t.p,{children:["One of the most prolific approaches to providing secrets to a service is via environment variables. Bento allows you to inject the values of environment variables into a configuration with the interpolation syntax ",(0,i.jsx)(t.code,{children:"${FOO}"}),", within a config it looks like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yml",children:'thing:\n  super_secret: "${SECRET}"\n'})}),"\n",(0,i.jsx)(t.admonition,{title:"Use quotes",type:"info",children:(0,i.jsxs)(t.p,{children:["Note that it would be valid to have ",(0,i.jsx)(t.code,{children:"super_secret: ${SECRET}"})," above (without the quotes), but if ",(0,i.jsx)(t.code,{children:"SECRET"})," is unset then the config becomes structurally different. Therefore, it's always best to wrap environment variable interpolations with quotes so that when the variable is unset you still have a valid config (with an empty string)."]})}),"\n",(0,i.jsxs)(t.p,{children:["More information about this syntax can be found on the ",(0,i.jsx)(t.a,{href:"/docs/configuration/interpolation",children:"interpolation field page"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"using-cli-flags",children:"Using CLI Flags"}),"\n",(0,i.jsxs)(t.p,{children:["As an alternative to environment variables it's possible to set specific fields within a config using the CLI flag ",(0,i.jsx)(t.code,{children:"--set"})," where the syntax is a ",(0,i.jsx)(t.code,{children:"<path>=<value>"})," pair, the path being a ",(0,i.jsx)(t.a,{href:"/docs/configuration/field_paths",children:"dot-separated path to the field being set"})," and the value being the thing to set it to. If, for example, we had the config:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yml",children:'thing:\n  super_secret: ""\n'})}),"\n",(0,i.jsxs)(t.p,{children:["And we wanted to set the value of ",(0,i.jsx)(t.code,{children:"super_secret"})," to a value stored within something like Hashicorp Vault we could run the config using the ",(0,i.jsx)(t.code,{children:"--set"})," flag with backticks to execute a shell command for the value:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:'bento -c ./config.yaml \\\n  --set "thing.super_secret=`vault kv get -mount=secret thing_secret`"\n'})}),"\n",(0,i.jsx)(t.p,{children:'Using this method we can inject the secret into the config without "leaking" it into an environment variable.'}),"\n",(0,i.jsx)(t.h2,{id:"avoiding-leaked-secrets",children:"Avoiding Leaked Secrets"}),"\n",(0,i.jsx)(t.p,{children:"There are a few ways in which configs parsed by Bento can be exported back out of the service. In all of these cases Bento will attempt to scrub any field values within the config that are known secrets (any field marked as a secret in the docs)."}),"\n",(0,i.jsxs)(t.p,{children:["However, if you're embedding secrets within a config outside of the value of secret fields, maybe as part of a Bloblang mapping, then care should be made to avoid exposing the resulting config. This specifically means you should not enable ",(0,i.jsx)(t.a,{href:"/docs/components/http/about#debug-endpoints",children:"debug HTTP endpoints"})," when the port is exposed, and don't use the ",(0,i.jsx)(t.code,{children:"bento echo"})," subcommand on configs containing secrets unless you're printing to a secure pipe."]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return a}});var i=n(7294);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);