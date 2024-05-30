"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[1503],{240:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return u}});var s=t(5893),i=t(1151),r=t(4866),l=t(5162);const a={title:"nats_request_reply",slug:"nats_request_reply",type:"processor",status:"experimental",categories:["Services"],name:"nats_request_reply"},c=void 0,o={id:"components/processors/nats_request_reply",title:"nats_request_reply",description:"\x3c!--",source:"@site/docs/components/processors/nats_request_reply.md",sourceDirName:"components/processors",slug:"/components/processors/nats_request_reply",permalink:"/bento/docs/components/processors/nats_request_reply",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/processors/nats_request_reply.md",tags:[],version:"current",frontMatter:{title:"nats_request_reply",slug:"nats_request_reply",type:"processor",status:"experimental",categories:["Services"],name:"nats_request_reply"},sidebar:"docs",previous:{title:"nats_kv",permalink:"/bento/docs/components/processors/nats_kv"},next:{title:"noop",permalink:"/bento/docs/components/processors/noop"}},d={},u=[{value:"Metadata",id:"metadata",level:3},{value:"Connection Name",id:"connection-name",level:3},{value:"Authentication",id:"authentication",level:3},{value:"NKey file",id:"nkey-file",level:4},{value:"User Credentials",id:"user-credentials",level:4},{value:"Fields",id:"fields",level:2},{value:"<code>urls</code>",id:"urls",level:3},{value:"<code>subject</code>",id:"subject",level:3},{value:"<code>inbox_prefix</code>",id:"inbox_prefix",level:3},{value:"<code>headers</code>",id:"headers",level:3},{value:"<code>metadata</code>",id:"metadata-1",level:3},{value:"<code>metadata.include_prefixes</code>",id:"metadatainclude_prefixes",level:3},{value:"<code>metadata.include_patterns</code>",id:"metadatainclude_patterns",level:3},{value:"<code>timeout</code>",id:"timeout",level:3},{value:"<code>tls</code>",id:"tls",level:3},{value:"<code>tls.enabled</code>",id:"tlsenabled",level:3},{value:"<code>tls.skip_cert_verify</code>",id:"tlsskip_cert_verify",level:3},{value:"<code>tls.enable_renegotiation</code>",id:"tlsenable_renegotiation",level:3},{value:"<code>tls.root_cas</code>",id:"tlsroot_cas",level:3},{value:"<code>tls.root_cas_file</code>",id:"tlsroot_cas_file",level:3},{value:"<code>tls.client_certs</code>",id:"tlsclient_certs",level:3},{value:"<code>tls.client_certs[].cert</code>",id:"tlsclient_certscert",level:3},{value:"<code>tls.client_certs[].key</code>",id:"tlsclient_certskey",level:3},{value:"<code>tls.client_certs[].cert_file</code>",id:"tlsclient_certscert_file",level:3},{value:"<code>tls.client_certs[].key_file</code>",id:"tlsclient_certskey_file",level:3},{value:"<code>tls.client_certs[].password</code>",id:"tlsclient_certspassword",level:3},{value:"<code>auth</code>",id:"auth",level:3},{value:"<code>auth.nkey_file</code>",id:"authnkey_file",level:3},{value:"<code>auth.user_credentials_file</code>",id:"authuser_credentials_file",level:3},{value:"<code>auth.user_jwt</code>",id:"authuser_jwt",level:3},{value:"<code>auth.user_nkey_seed</code>",id:"authuser_nkey_seed",level:3}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{title:"EXPERIMENTAL",type:"caution",children:(0,s.jsx)(n.p,{children:"This component is experimental and therefore subject to change or removal outside of major version releases."})}),"\n",(0,s.jsx)(n.p,{children:"Sends a message to a NATS subject and expects a reply, from a NATS subscriber acting as a responder, back."}),"\n",(0,s.jsx)(n.p,{children:"Introduced in version 4.27.0."}),"\n",(0,s.jsxs)(r.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,s.jsx)(l.Z,{value:"common",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# Common config fields, showing default values\nlabel: ""\nnats_request_reply:\n  urls: [] # No default (required)\n  subject: foo.bar.baz # No default (required)\n  headers: {}\n  metadata:\n    include_prefixes: []\n    include_patterns: []\n  timeout: 3s\n'})})}),(0,s.jsx)(l.Z,{value:"advanced",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# All config fields, showing default values\nlabel: ""\nnats_request_reply:\n  urls: [] # No default (required)\n  subject: foo.bar.baz # No default (required)\n  inbox_prefix: _INBOX_joe # No default (optional)\n  headers: {}\n  metadata:\n    include_prefixes: []\n    include_patterns: []\n  timeout: 3s\n  tls:\n    enabled: false\n    skip_cert_verify: false\n    enable_renegotiation: false\n    root_cas: ""\n    root_cas_file: ""\n    client_certs: []\n  auth:\n    nkey_file: ./seed.nk # No default (optional)\n    user_credentials_file: ./user.creds # No default (optional)\n    user_jwt: "" # No default (optional)\n    user_nkey_seed: "" # No default (optional)\n'})})})]}),"\n",(0,s.jsx)(n.h3,{id:"metadata",children:"Metadata"}),"\n",(0,s.jsx)(n.p,{children:"This input adds the following metadata fields to each message:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"- nats_subject\n- nats_sequence_stream\n- nats_sequence_consumer\n- nats_num_delivered\n- nats_num_pending\n- nats_domain\n- nats_timestamp_unix_nano\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can access these metadata fields using ",(0,s.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"function interpolation"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"connection-name",children:"Connection Name"}),"\n",(0,s.jsx)(n.p,{children:"When monitoring and managing a production NATS system, it is often useful to\nknow which connection a message was send/received from. This can be achieved by\nsetting the connection name option when creating a NATS connection."}),"\n",(0,s.jsx)(n.p,{children:"Bento will automatically set the connection name based off the label of the given\nNATS component, so that monitoring tools between NATS and bento can stay in sync."}),"\n",(0,s.jsx)(n.h3,{id:"authentication",children:"Authentication"}),"\n",(0,s.jsxs)(n.p,{children:["There are several components within Bento which utilise NATS services. You will find that each of these components\nsupport optional advanced authentication parameters for ",(0,s.jsx)(n.a,{href:"https://docs.nats.io/nats-server/configuration/securing_nats/auth_intro/nkey_auth",children:"NKeys"}),"\nand ",(0,s.jsx)(n.a,{href:"https://docs.nats.io/developing-with-nats/security/creds",children:"User Credentials"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["An in depth tutorial can be found ",(0,s.jsx)(n.a,{href:"https://docs.nats.io/running-a-nats-service/nats_admin/security/jwt",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"nkey-file",children:"NKey file"}),"\n",(0,s.jsxs)(n.p,{children:["The NATS server can use these NKeys in several ways for authentication. The simplest is for the server to be configured\nwith a list of known public keys and for the clients to respond to the challenge by signing it with its private NKey\nconfigured in the ",(0,s.jsx)(n.code,{children:"nkey_file"})," field."]}),"\n",(0,s.jsxs)(n.p,{children:["More details ",(0,s.jsx)(n.a,{href:"https://docs.nats.io/developing-with-nats/security/nkey",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"user-credentials",children:"User Credentials"}),"\n",(0,s.jsxs)(n.p,{children:["NATS server supports decentralized authentication based on JSON Web Tokens (JWT). Clients need an ",(0,s.jsx)(n.a,{href:"https://docs.nats.io/nats-server/configuration/securing_nats/jwt#json-web-tokens",children:"user JWT"}),"\nand a corresponding ",(0,s.jsx)(n.a,{href:"https://docs.nats.io/developing-with-nats/security/nkey",children:"NKey secret"})," when connecting to a server\nwhich is configured to use this authentication scheme."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"user_credentials_file"})," field should point to a file containing both the private key and the JWT and can be\ngenerated with the ",(0,s.jsx)(n.a,{href:"https://docs.nats.io/nats-tools/nsc",children:"nsc tool"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively, the ",(0,s.jsx)(n.code,{children:"user_jwt"})," field can contain a plain text JWT and the ",(0,s.jsx)(n.code,{children:"user_nkey_seed"}),"can contain\nthe plain text NKey Seed."]}),"\n",(0,s.jsxs)(n.p,{children:["More details ",(0,s.jsx)(n.a,{href:"https://docs.nats.io/developing-with-nats/security/creds",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,s.jsx)(n.h3,{id:"urls",children:(0,s.jsx)(n.code,{children:"urls"})}),"\n",(0,s.jsx)(n.p,{children:"A list of URLs to connect to. If an item of the list contains commas it will be expanded into multiple URLs."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"array"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nurls:\n  - nats://127.0.0.1:4222\n\nurls:\n  - nats://username:password@127.0.0.1:4222\n"})}),"\n",(0,s.jsx)(n.h3,{id:"subject",children:(0,s.jsx)(n.code,{children:"subject"})}),"\n",(0,s.jsxs)(n.p,{children:["A subject to write to.\nThis field supports ",(0,s.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"interpolation functions"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# Examples\n\nsubject: foo.bar.baz\n\nsubject: ${! meta("kafka_topic") }\n\nsubject: foo.${! json("meta.type") }\n'})}),"\n",(0,s.jsx)(n.h3,{id:"inbox_prefix",children:(0,s.jsx)(n.code,{children:"inbox_prefix"})}),"\n",(0,s.jsx)(n.p,{children:"Set an explicit inbox prefix for the response subject"}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\ninbox_prefix: _INBOX_joe\n"})}),"\n",(0,s.jsx)(n.h3,{id:"headers",children:(0,s.jsx)(n.code,{children:"headers"})}),"\n",(0,s.jsxs)(n.p,{children:["Explicit message headers to add to messages.\nThis field supports ",(0,s.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"interpolation functions"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"object"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"{}"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# Examples\n\nheaders:\n  Content-Type: application/json\n  Timestamp: ${!meta("Timestamp")}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"metadata-1",children:(0,s.jsx)(n.code,{children:"metadata"})}),"\n",(0,s.jsx)(n.p,{children:"Determine which (if any) metadata values should be added to messages as headers."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"object"})]}),"\n",(0,s.jsx)(n.h3,{id:"metadatainclude_prefixes",children:(0,s.jsx)(n.code,{children:"metadata.include_prefixes"})}),"\n",(0,s.jsx)(n.p,{children:"Provide a list of explicit metadata key prefixes to match against."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"array"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"[]"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\ninclude_prefixes:\n  - foo_\n  - bar_\n\ninclude_prefixes:\n  - kafka_\n\ninclude_prefixes:\n  - content-\n"})}),"\n",(0,s.jsx)(n.h3,{id:"metadatainclude_patterns",children:(0,s.jsx)(n.code,{children:"metadata.include_patterns"})}),"\n",(0,s.jsx)(n.p,{children:"Provide a list of explicit metadata key regular expression (re2) patterns to match against."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"array"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"[]"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\ninclude_patterns:\n  - .*\n\ninclude_patterns:\n  - _timestamp_unix$\n"})}),"\n",(0,s.jsx)(n.h3,{id:"timeout",children:(0,s.jsx)(n.code,{children:"timeout"})}),"\n",(0,s.jsx)(n.p,{children:"A duration string is a possibly signed sequence of decimal numbers, each with optional fraction and a unit suffix, such as 300ms, -1.5h or 2h45m. Valid time units are ns, us (or \xb5s), ms, s, m, h."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'"3s"'})]}),"\n",(0,s.jsx)(n.h3,{id:"tls",children:(0,s.jsx)(n.code,{children:"tls"})}),"\n",(0,s.jsx)(n.p,{children:"Custom TLS settings can be used to override system defaults."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"object"})]}),"\n",(0,s.jsx)(n.h3,{id:"tlsenabled",children:(0,s.jsx)(n.code,{children:"tls.enabled"})}),"\n",(0,s.jsx)(n.p,{children:"Whether custom TLS settings are enabled."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"bool"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsx)(n.h3,{id:"tlsskip_cert_verify",children:(0,s.jsx)(n.code,{children:"tls.skip_cert_verify"})}),"\n",(0,s.jsx)(n.p,{children:"Whether to skip server side certificate verification."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"bool"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"false"})]}),"\n",(0,s.jsx)(n.h3,{id:"tlsenable_renegotiation",children:(0,s.jsx)(n.code,{children:"tls.enable_renegotiation"})}),"\n",(0,s.jsxs)(n.p,{children:["Whether to allow the remote server to repeatedly request renegotiation. Enable this option if you're seeing the error message ",(0,s.jsx)(n.code,{children:"local error: tls: no renegotiation"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"bool"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"false"}),(0,s.jsx)(n.br,{}),"\n","Requires version 3.45.0 or newer"]}),"\n",(0,s.jsx)(n.h3,{id:"tlsroot_cas",children:(0,s.jsx)(n.code,{children:"tls.root_cas"})}),"\n",(0,s.jsx)(n.p,{children:"An optional root certificate authority to use. This is a string, representing a certificate chain from the parent trusted root certificate, to possible intermediate signing certificates, to the host certificate."}),"\n",(0,s.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,s.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,s.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nroot_cas: |-\n  -----BEGIN CERTIFICATE-----\n  ...\n  -----END CERTIFICATE-----\n"})}),"\n",(0,s.jsx)(n.h3,{id:"tlsroot_cas_file",children:(0,s.jsx)(n.code,{children:"tls.root_cas_file"})}),"\n",(0,s.jsx)(n.p,{children:"An optional path of a root certificate authority file to use. This is a file, often with a .pem extension, containing a certificate chain from the parent trusted root certificate, to possible intermediate signing certificates, to the host certificate."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nroot_cas_file: ./root_cas.pem\n"})}),"\n",(0,s.jsx)(n.h3,{id:"tlsclient_certs",children:(0,s.jsx)(n.code,{children:"tls.client_certs"})}),"\n",(0,s.jsxs)(n.p,{children:["A list of client certificates to use. For each certificate either the fields ",(0,s.jsx)(n.code,{children:"cert"})," and ",(0,s.jsx)(n.code,{children:"key"}),", or ",(0,s.jsx)(n.code,{children:"cert_file"})," and ",(0,s.jsx)(n.code,{children:"key_file"})," should be specified, but not both."]}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"array"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:"[]"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nclient_certs:\n  - cert: foo\n    key: bar\n\nclient_certs:\n  - cert_file: ./example.pem\n    key_file: ./example.key\n"})}),"\n",(0,s.jsx)(n.h3,{id:"tlsclient_certscert",children:(0,s.jsx)(n.code,{children:"tls.client_certs[].cert"})}),"\n",(0,s.jsx)(n.p,{children:"A plain text certificate to use."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"tlsclient_certskey",children:(0,s.jsx)(n.code,{children:"tls.client_certs[].key"})}),"\n",(0,s.jsx)(n.p,{children:"A plain text certificate key to use."}),"\n",(0,s.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,s.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,s.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"tlsclient_certscert_file",children:(0,s.jsx)(n.code,{children:"tls.client_certs[].cert_file"})}),"\n",(0,s.jsx)(n.p,{children:"The path of a certificate to use."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"tlsclient_certskey_file",children:(0,s.jsx)(n.code,{children:"tls.client_certs[].key_file"})}),"\n",(0,s.jsx)(n.p,{children:"The path of a certificate key to use."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.h3,{id:"tlsclient_certspassword",children:(0,s.jsx)(n.code,{children:"tls.client_certs[].password"})}),"\n",(0,s.jsxs)(n.p,{children:["A plain text password for when the private key is password encrypted in PKCS#1 or PKCS#8 format. The obsolete ",(0,s.jsx)(n.code,{children:"pbeWithMD5AndDES-CBC"})," algorithm is not supported for the PKCS#8 format. Warning: Since it does not authenticate the ciphertext, it is vulnerable to padding oracle attacks that can let an attacker recover the plaintext."]}),"\n",(0,s.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,s.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,s.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"}),(0,s.jsx)(n.br,{}),"\n","Default: ",(0,s.jsx)(n.code,{children:'""'})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\npassword: foo\n\npassword: ${KEY_PASSWORD}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"auth",children:(0,s.jsx)(n.code,{children:"auth"})}),"\n",(0,s.jsx)(n.p,{children:"Optional configuration of NATS authentication parameters."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"object"})]}),"\n",(0,s.jsx)(n.h3,{id:"authnkey_file",children:(0,s.jsx)(n.code,{children:"auth.nkey_file"})}),"\n",(0,s.jsx)(n.p,{children:"An optional file containing a NKey seed."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nnkey_file: ./seed.nk\n"})}),"\n",(0,s.jsx)(n.h3,{id:"authuser_credentials_file",children:(0,s.jsx)(n.code,{children:"auth.user_credentials_file"})}),"\n",(0,s.jsx)(n.p,{children:"An optional file containing user credentials which consist of an user JWT and corresponding NKey seed."}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nuser_credentials_file: ./user.creds\n"})}),"\n",(0,s.jsx)(n.h3,{id:"authuser_jwt",children:(0,s.jsx)(n.code,{children:"auth.user_jwt"})}),"\n",(0,s.jsx)(n.p,{children:"An optional plain text user JWT (given along with the corresponding user NKey Seed)."}),"\n",(0,s.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,s.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,s.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.h3,{id:"authuser_nkey_seed",children:(0,s.jsx)(n.code,{children:"auth.user_nkey_seed"})}),"\n",(0,s.jsx)(n.p,{children:"An optional plain text user NKey Seed (given along with the corresponding user JWT)."}),"\n",(0,s.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,s.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,s.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Type: ",(0,s.jsx)(n.code,{children:"string"})]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5162:function(e,n,t){t.d(n,{Z:function(){return l}});t(7294);var s=t(6010),i={tabItem:"tabItem_Ymn6"},r=t(5893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(i.tabItem,l),hidden:t,children:n})}},4866:function(e,n,t){t.d(n,{Z:function(){return v}});var s=t(7294),i=t(6010),r=t(2466),l=t(6550),a=t(469),c=t(1980),o=t(7392),d=t(12);function u(e){var n,t;return null!=(n=null==(t=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:i}}=e;return{value:n,label:t,attributes:s,default:i}}))}(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const i=(0,l.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,c._X)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=h(e),[l,c]=(0,s.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const i=null!=(n=s.find((e=>e.default)))?n:s[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[o,u]=x({queryString:t,groupId:i}),[f,j]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[i,r]=(0,d.Nk)(t);return[i,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),m=(()=>{const e=null!=o?o:f;return p({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{m&&c(m)}),[m]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);c(e),u(e),j(e)}),[u,j,r]),tabValues:r}}var j=t(2389),m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},_=t(5893);function b(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),i=a[t].value;i!==s&&(o(n),l(i))},u=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var s;const n=c.indexOf(e.currentTarget)+1;t=null!=(s=c[n])?s:c[0];break}case"ArrowLeft":{var i;const n=c.indexOf(e.currentTarget)-1;t=null!=(i=c[n])?i:c[c.length-1];break}}null==(n=t)||n.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,i.Z)("tabs__item",m.tabItem,null==r?void 0:r.className,{"tabs__item--active":s===n}),children:null!=t?t:n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=f(e);return(0,_.jsxs)("div",{className:(0,i.Z)("tabs-container",m.tabList),children:[(0,_.jsx)(b,{...e,...n}),(0,_.jsx)(g,{...e,...n})]})}function v(e){const n=(0,j.Z)();return(0,_.jsx)(y,{...e,children:u(e.children)},String(n))}},1151:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var s=t(7294);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);