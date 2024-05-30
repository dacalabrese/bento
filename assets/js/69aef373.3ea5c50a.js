"use strict";(self.webpackChunkbento=self.webpackChunkbento||[]).push([[3659],{8037:function(e,n,s){s.r(n),s.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return h}});var t=s(5893),i=s(1151),r=s(4866),c=s(5162);const o={title:"kafka",slug:"kafka",type:"input",status:"stable",categories:["Services"],name:"kafka"},l=void 0,a={id:"components/inputs/kafka",title:"kafka",description:"\x3c!--",source:"@site/docs/components/inputs/kafka.md",sourceDirName:"components/inputs",slug:"/components/inputs/kafka",permalink:"/bento/docs/components/inputs/kafka",draft:!1,unlisted:!1,editUrl:"https://github.com/warpstreamlabs/bento/edit/main/website/docs/components/inputs/kafka.md",tags:[],version:"current",frontMatter:{title:"kafka",slug:"kafka",type:"input",status:"stable",categories:["Services"],name:"kafka"},sidebar:"docs",previous:{title:"inproc",permalink:"/bento/docs/components/inputs/inproc"},next:{title:"kafka_franz",permalink:"/bento/docs/components/inputs/kafka_franz"}},d={},h=[{value:"Metadata",id:"metadata",level:3},{value:"Ordering",id:"ordering",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Fields",id:"fields",level:2},{value:"<code>addresses</code>",id:"addresses",level:3},{value:"<code>topics</code>",id:"topics",level:3},{value:"<code>target_version</code>",id:"target_version",level:3},{value:"<code>tls</code>",id:"tls",level:3},{value:"<code>tls.enabled</code>",id:"tlsenabled",level:3},{value:"<code>tls.skip_cert_verify</code>",id:"tlsskip_cert_verify",level:3},{value:"<code>tls.enable_renegotiation</code>",id:"tlsenable_renegotiation",level:3},{value:"<code>tls.root_cas</code>",id:"tlsroot_cas",level:3},{value:"<code>tls.root_cas_file</code>",id:"tlsroot_cas_file",level:3},{value:"<code>tls.client_certs</code>",id:"tlsclient_certs",level:3},{value:"<code>tls.client_certs[].cert</code>",id:"tlsclient_certscert",level:3},{value:"<code>tls.client_certs[].key</code>",id:"tlsclient_certskey",level:3},{value:"<code>tls.client_certs[].cert_file</code>",id:"tlsclient_certscert_file",level:3},{value:"<code>tls.client_certs[].key_file</code>",id:"tlsclient_certskey_file",level:3},{value:"<code>tls.client_certs[].password</code>",id:"tlsclient_certspassword",level:3},{value:"<code>sasl</code>",id:"sasl",level:3},{value:"<code>sasl.mechanism</code>",id:"saslmechanism",level:3},{value:"<code>sasl.user</code>",id:"sasluser",level:3},{value:"<code>sasl.password</code>",id:"saslpassword",level:3},{value:"<code>sasl.access_token</code>",id:"saslaccess_token",level:3},{value:"<code>sasl.token_cache</code>",id:"sasltoken_cache",level:3},{value:"<code>sasl.token_key</code>",id:"sasltoken_key",level:3},{value:"<code>consumer_group</code>",id:"consumer_group",level:3},{value:"<code>client_id</code>",id:"client_id",level:3},{value:"<code>rack_id</code>",id:"rack_id",level:3},{value:"<code>start_from_oldest</code>",id:"start_from_oldest",level:3},{value:"<code>checkpoint_limit</code>",id:"checkpoint_limit",level:3},{value:"<code>auto_replay_nacks</code>",id:"auto_replay_nacks",level:3},{value:"<code>commit_period</code>",id:"commit_period",level:3},{value:"<code>max_processing_period</code>",id:"max_processing_period",level:3},{value:"<code>extract_tracing_map</code>",id:"extract_tracing_map",level:3},{value:"<code>group</code>",id:"group",level:3},{value:"<code>group.session_timeout</code>",id:"groupsession_timeout",level:3},{value:"<code>group.heartbeat_interval</code>",id:"groupheartbeat_interval",level:3},{value:"<code>group.rebalance_timeout</code>",id:"grouprebalance_timeout",level:3},{value:"<code>fetch_buffer_cap</code>",id:"fetch_buffer_cap",level:3},{value:"<code>multi_header</code>",id:"multi_header",level:3},{value:"<code>batching</code>",id:"batching",level:3},{value:"<code>batching.count</code>",id:"batchingcount",level:3},{value:"<code>batching.byte_size</code>",id:"batchingbyte_size",level:3},{value:"<code>batching.period</code>",id:"batchingperiod",level:3},{value:"<code>batching.check</code>",id:"batchingcheck",level:3},{value:"<code>batching.processors</code>",id:"batchingprocessors",level:3}];function u(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Connects to Kafka brokers and consumes one or more topics."}),"\n",(0,t.jsxs)(r.Z,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],children:[(0,t.jsx)(c.Z,{value:"common",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'# Common config fields, showing default values\ninput:\n  label: ""\n  kafka:\n    addresses: [] # No default (required)\n    topics: [] # No default (required)\n    target_version: 2.1.0 # No default (optional)\n    consumer_group: ""\n    checkpoint_limit: 1024\n    auto_replay_nacks: true\n'})})}),(0,t.jsx)(c.Z,{value:"advanced",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'# All config fields, showing default values\ninput:\n  label: ""\n  kafka:\n    addresses: [] # No default (required)\n    topics: [] # No default (required)\n    target_version: 2.1.0 # No default (optional)\n    tls:\n      enabled: false\n      skip_cert_verify: false\n      enable_renegotiation: false\n      root_cas: ""\n      root_cas_file: ""\n      client_certs: []\n    sasl:\n      mechanism: none\n      user: ""\n      password: ""\n      access_token: ""\n      token_cache: ""\n      token_key: ""\n    consumer_group: ""\n    client_id: bento\n    rack_id: ""\n    start_from_oldest: true\n    checkpoint_limit: 1024\n    auto_replay_nacks: true\n    commit_period: 1s\n    max_processing_period: 100ms\n    extract_tracing_map: root = @ # No default (optional)\n    group:\n      session_timeout: 10s\n      heartbeat_interval: 3s\n      rebalance_timeout: 60s\n    fetch_buffer_cap: 256\n    multi_header: false\n    batching:\n      count: 0\n      byte_size: 0\n      period: ""\n      check: ""\n      processors: [] # No default (optional)\n'})})})]}),"\n",(0,t.jsx)(n.p,{children:"Offsets are managed within Kafka under the specified consumer group, and partitions for each topic are automatically balanced across members of the consumer group."}),"\n",(0,t.jsxs)(n.p,{children:["The Kafka input allows parallel processing of messages from different topic partitions, and messages of the same topic partition are processed with a maximum parallelism determined by the field ",(0,t.jsx)(n.a,{href:"#checkpoint_limit",children:(0,t.jsx)(n.code,{children:"checkpoint_limit"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In order to enforce ordered processing of partition messages set the ",(0,t.jsx)(n.a,{href:"#checkpoint_limit",children:(0,t.jsx)(n.code,{children:"checkpoint_limit"})})," to ",(0,t.jsx)(n.code,{children:"1"})," and this will force partitions to be processed in lock-step, where a message will only be processed once the prior message is delivered."]}),"\n",(0,t.jsxs)(n.p,{children:["Batching messages before processing can be enabled using the ",(0,t.jsx)(n.a,{href:"#batching",children:(0,t.jsx)(n.code,{children:"batching"})})," field, and this batching is performed per-partition such that messages of a batch will always originate from the same partition. This batching mechanism is capable of creating batches of greater size than the ",(0,t.jsx)(n.a,{href:"#checkpoint_limit",children:(0,t.jsx)(n.code,{children:"checkpoint_limit"})}),", in which case the next batch will only be created upon delivery of the current one."]}),"\n",(0,t.jsx)(n.h3,{id:"metadata",children:"Metadata"}),"\n",(0,t.jsx)(n.p,{children:"This input adds the following metadata fields to each message:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"- kafka_key\n- kafka_topic\n- kafka_partition\n- kafka_offset\n- kafka_lag\n- kafka_timestamp_unix\n- kafka_tombstone_message\n- All existing message headers (version 0.11+)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The field ",(0,t.jsx)(n.code,{children:"kafka_lag"})," is the calculated difference between the high water mark offset of the partition at the time of ingestion and the current message offset."]}),"\n",(0,t.jsxs)(n.p,{children:["You can access these metadata fields using ",(0,t.jsx)(n.a,{href:"/docs/configuration/interpolation#bloblang-queries",children:"function interpolation"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"ordering",children:"Ordering"}),"\n",(0,t.jsxs)(n.p,{children:["By default messages of a topic partition can be processed in parallel, up to a limit determined by the field ",(0,t.jsx)(n.code,{children:"checkpoint_limit"}),". However, if strict ordered processing is required then this value must be set to 1 in order to process shard messages in lock-step. When doing so it is recommended that you perform batching at this component for performance as it will not be possible to batch lock-stepped messages at the output level."]}),"\n",(0,t.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsxs)(n.p,{children:["If you're seeing issues writing to or reading from Kafka with this component then it's worth trying out the newer ",(0,t.jsxs)(n.a,{href:"/docs/components/inputs/kafka_franz",children:[(0,t.jsx)(n.code,{children:"kafka_franz"})," input"]}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["I'm seeing logs that report ",(0,t.jsx)(n.code,{children:"Failed to connect to kafka: kafka: client has run out of available brokers to talk to (Is your cluster reachable?)"}),", but the brokers are definitely reachable."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Unfortunately this error message will appear for a wide range of connection problems even when the broker endpoint can be reached. Double check your authentication configuration and also ensure that you have ",(0,t.jsx)(n.a,{href:"#tlsenabled",children:"enabled TLS"})," if applicable."]}),"\n",(0,t.jsx)(n.h2,{id:"fields",children:"Fields"}),"\n",(0,t.jsx)(n.h3,{id:"addresses",children:(0,t.jsx)(n.code,{children:"addresses"})}),"\n",(0,t.jsx)(n.p,{children:"A list of broker addresses to connect to. If an item of the list contains commas it will be expanded into multiple addresses."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"array"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"# Examples\n\naddresses:\n  - localhost:9092\n\naddresses:\n  - localhost:9041,localhost:9042\n\naddresses:\n  - localhost:9041\n  - localhost:9042\n"})}),"\n",(0,t.jsx)(n.h3,{id:"topics",children:(0,t.jsx)(n.code,{children:"topics"})}),"\n",(0,t.jsxs)(n.p,{children:["A list of topics to consume from. Multiple comma separated topics can be listed in a single element. Partitions are automatically distributed across consumers of a topic. Alternatively, it's possible to specify explicit partitions to consume from with a colon after the topic name, e.g. ",(0,t.jsx)(n.code,{children:"foo:0"})," would consume the partition 0 of the topic foo. This syntax supports ranges, e.g. ",(0,t.jsx)(n.code,{children:"foo:0-10"})," would consume partitions 0 through to 10 inclusive."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"array"}),(0,t.jsx)(n.br,{}),"\n","Requires version 3.33.0 or newer"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"# Examples\n\ntopics:\n  - foo\n  - bar\n\ntopics:\n  - foo,bar\n\ntopics:\n  - foo:0\n  - bar:1\n  - bar:3\n\ntopics:\n  - foo:0,bar:1,bar:3\n\ntopics:\n  - foo:0-5\n"})}),"\n",(0,t.jsx)(n.h3,{id:"target_version",children:(0,t.jsx)(n.code,{children:"target_version"})}),"\n",(0,t.jsx)(n.p,{children:"The version of the Kafka protocol to use. This limits the capabilities used by the client and should ideally match the version of your brokers. Defaults to the oldest supported stable version."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"# Examples\n\ntarget_version: 2.1.0\n\ntarget_version: 3.1.0\n"})}),"\n",(0,t.jsx)(n.h3,{id:"tls",children:(0,t.jsx)(n.code,{children:"tls"})}),"\n",(0,t.jsx)(n.p,{children:"Custom TLS settings can be used to override system defaults."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"object"})]}),"\n",(0,t.jsx)(n.h3,{id:"tlsenabled",children:(0,t.jsx)(n.code,{children:"tls.enabled"})}),"\n",(0,t.jsx)(n.p,{children:"Whether custom TLS settings are enabled."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"bool"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"false"})]}),"\n",(0,t.jsx)(n.h3,{id:"tlsskip_cert_verify",children:(0,t.jsx)(n.code,{children:"tls.skip_cert_verify"})}),"\n",(0,t.jsx)(n.p,{children:"Whether to skip server side certificate verification."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"bool"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"false"})]}),"\n",(0,t.jsx)(n.h3,{id:"tlsenable_renegotiation",children:(0,t.jsx)(n.code,{children:"tls.enable_renegotiation"})}),"\n",(0,t.jsxs)(n.p,{children:["Whether to allow the remote server to repeatedly request renegotiation. Enable this option if you're seeing the error message ",(0,t.jsx)(n.code,{children:"local error: tls: no renegotiation"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"bool"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"false"}),(0,t.jsx)(n.br,{}),"\n","Requires version 3.45.0 or newer"]}),"\n",(0,t.jsx)(n.h3,{id:"tlsroot_cas",children:(0,t.jsx)(n.code,{children:"tls.root_cas"})}),"\n",(0,t.jsx)(n.p,{children:"An optional root certificate authority to use. This is a string, representing a certificate chain from the parent trusted root certificate, to possible intermediate signing certificates, to the host certificate."}),"\n",(0,t.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,t.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,t.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nroot_cas: |-\n  -----BEGIN CERTIFICATE-----\n  ...\n  -----END CERTIFICATE-----\n"})}),"\n",(0,t.jsx)(n.h3,{id:"tlsroot_cas_file",children:(0,t.jsx)(n.code,{children:"tls.root_cas_file"})}),"\n",(0,t.jsx)(n.p,{children:"An optional path of a root certificate authority file to use. This is a file, often with a .pem extension, containing a certificate chain from the parent trusted root certificate, to possible intermediate signing certificates, to the host certificate."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nroot_cas_file: ./root_cas.pem\n"})}),"\n",(0,t.jsx)(n.h3,{id:"tlsclient_certs",children:(0,t.jsx)(n.code,{children:"tls.client_certs"})}),"\n",(0,t.jsxs)(n.p,{children:["A list of client certificates to use. For each certificate either the fields ",(0,t.jsx)(n.code,{children:"cert"})," and ",(0,t.jsx)(n.code,{children:"key"}),", or ",(0,t.jsx)(n.code,{children:"cert_file"})," and ",(0,t.jsx)(n.code,{children:"key_file"})," should be specified, but not both."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"array"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"[]"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nclient_certs:\n  - cert: foo\n    key: bar\n\nclient_certs:\n  - cert_file: ./example.pem\n    key_file: ./example.key\n"})}),"\n",(0,t.jsx)(n.h3,{id:"tlsclient_certscert",children:(0,t.jsx)(n.code,{children:"tls.client_certs[].cert"})}),"\n",(0,t.jsx)(n.p,{children:"A plain text certificate to use."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"tlsclient_certskey",children:(0,t.jsx)(n.code,{children:"tls.client_certs[].key"})}),"\n",(0,t.jsx)(n.p,{children:"A plain text certificate key to use."}),"\n",(0,t.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,t.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,t.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"tlsclient_certscert_file",children:(0,t.jsx)(n.code,{children:"tls.client_certs[].cert_file"})}),"\n",(0,t.jsx)(n.p,{children:"The path of a certificate to use."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"tlsclient_certskey_file",children:(0,t.jsx)(n.code,{children:"tls.client_certs[].key_file"})}),"\n",(0,t.jsx)(n.p,{children:"The path of a certificate key to use."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"tlsclient_certspassword",children:(0,t.jsx)(n.code,{children:"tls.client_certs[].password"})}),"\n",(0,t.jsxs)(n.p,{children:["A plain text password for when the private key is password encrypted in PKCS#1 or PKCS#8 format. The obsolete ",(0,t.jsx)(n.code,{children:"pbeWithMD5AndDES-CBC"})," algorithm is not supported for the PKCS#8 format. Warning: Since it does not authenticate the ciphertext, it is vulnerable to padding oracle attacks that can let an attacker recover the plaintext."]}),"\n",(0,t.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,t.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,t.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"# Examples\n\npassword: foo\n\npassword: ${KEY_PASSWORD}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"sasl",children:(0,t.jsx)(n.code,{children:"sasl"})}),"\n",(0,t.jsx)(n.p,{children:"Enables SASL authentication."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"object"})]}),"\n",(0,t.jsx)(n.h3,{id:"saslmechanism",children:(0,t.jsx)(n.code,{children:"sasl.mechanism"})}),"\n",(0,t.jsx)(n.p,{children:"The SASL authentication mechanism, if left empty SASL authentication is not used."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'"none"'})]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Option"}),(0,t.jsx)(n.th,{children:"Summary"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"OAUTHBEARER"})}),(0,t.jsx)(n.td,{children:"OAuth Bearer based authentication."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"PLAIN"})}),(0,t.jsxs)(n.td,{children:["Plain text authentication. NOTE: When using plain text auth it is extremely likely that you'll also need to ",(0,t.jsx)(n.a,{href:"#tlsenabled",children:"enable TLS"}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SCRAM-SHA-256"})}),(0,t.jsx)(n.td,{children:"Authentication using the SCRAM-SHA-256 mechanism."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SCRAM-SHA-512"})}),(0,t.jsx)(n.td,{children:"Authentication using the SCRAM-SHA-512 mechanism."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"none"})}),(0,t.jsx)(n.td,{children:"Default, no SASL authentication."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"sasluser",children:(0,t.jsx)(n.code,{children:"sasl.user"})}),"\n",(0,t.jsx)(n.p,{children:"A PLAIN username. It is recommended that you use environment variables to populate this field."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nuser: ${USER}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"saslpassword",children:(0,t.jsx)(n.code,{children:"sasl.password"})}),"\n",(0,t.jsx)(n.p,{children:"A PLAIN password. It is recommended that you use environment variables to populate this field."}),"\n",(0,t.jsx)(n.admonition,{title:"Secret",type:"warning",children:(0,t.jsxs)(n.p,{children:["This field contains sensitive information that usually shouldn't be added to a config directly, read our ",(0,t.jsx)(n.a,{href:"/docs/configuration/secrets",children:"secrets page for more info"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"# Examples\n\npassword: ${PASSWORD}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"saslaccess_token",children:(0,t.jsx)(n.code,{children:"sasl.access_token"})}),"\n",(0,t.jsx)(n.p,{children:"A static OAUTHBEARER access token"}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"sasltoken_cache",children:(0,t.jsx)(n.code,{children:"sasl.token_cache"})}),"\n",(0,t.jsxs)(n.p,{children:["Instead of using a static ",(0,t.jsx)(n.code,{children:"access_token"})," allows you to query a ",(0,t.jsx)(n.a,{href:"/docs/components/caches/about",children:(0,t.jsx)(n.code,{children:"cache"})})," resource to fetch OAUTHBEARER tokens from"]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"sasltoken_key",children:(0,t.jsx)(n.code,{children:"sasl.token_key"})}),"\n",(0,t.jsxs)(n.p,{children:["Required when using a ",(0,t.jsx)(n.code,{children:"token_cache"}),", the key to query the cache with for tokens."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"consumer_group",children:(0,t.jsx)(n.code,{children:"consumer_group"})}),"\n",(0,t.jsx)(n.p,{children:"An identifier for the consumer group of the connection. This field can be explicitly made empty in order to disable stored offsets for the consumed topic partitions."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"client_id",children:(0,t.jsx)(n.code,{children:"client_id"})}),"\n",(0,t.jsx)(n.p,{children:"An identifier for the client connection."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'"bento"'})]}),"\n",(0,t.jsx)(n.h3,{id:"rack_id",children:(0,t.jsx)(n.code,{children:"rack_id"})}),"\n",(0,t.jsx)(n.p,{children:"A rack identifier for this client."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.h3,{id:"start_from_oldest",children:(0,t.jsx)(n.code,{children:"start_from_oldest"})}),"\n",(0,t.jsx)(n.p,{children:"Determines whether to consume from the oldest available offset, otherwise messages are consumed from the latest offset. The setting is applied when creating a new consumer group or the saved offset no longer exists."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"bool"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"true"})]}),"\n",(0,t.jsx)(n.h3,{id:"checkpoint_limit",children:(0,t.jsx)(n.code,{children:"checkpoint_limit"})}),"\n",(0,t.jsx)(n.p,{children:"The maximum number of messages of the same topic and partition that can be processed at a given time. Increasing this limit enables parallel processing and batching at the output level to work on individual partitions. Any given offset will not be committed unless all messages under that offset are delivered in order to preserve at least once delivery guarantees."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"int"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"1024"}),(0,t.jsx)(n.br,{}),"\n","Requires version 3.33.0 or newer"]}),"\n",(0,t.jsx)(n.h3,{id:"auto_replay_nacks",children:(0,t.jsx)(n.code,{children:"auto_replay_nacks"})}),"\n",(0,t.jsxs)(n.p,{children:["Whether messages that are rejected (nacked) at the output level should be automatically replayed indefinitely, eventually resulting in back pressure if the cause of the rejections is persistent. If set to ",(0,t.jsx)(n.code,{children:"false"})," these messages will instead be deleted. Disabling auto replays can greatly improve memory efficiency of high throughput streams as the original shape of the data can be discarded immediately upon consumption and mutation."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"bool"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"true"})]}),"\n",(0,t.jsx)(n.h3,{id:"commit_period",children:(0,t.jsx)(n.code,{children:"commit_period"})}),"\n",(0,t.jsx)(n.p,{children:"The period of time between each commit of the current partition offsets. Offsets are always committed during shutdown."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'"1s"'})]}),"\n",(0,t.jsx)(n.h3,{id:"max_processing_period",children:(0,t.jsx)(n.code,{children:"max_processing_period"})}),"\n",(0,t.jsx)(n.p,{children:"A maximum estimate for the time taken to process a message, this is used for tuning consumer group synchronization."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'"100ms"'})]}),"\n",(0,t.jsx)(n.h3,{id:"extract_tracing_map",children:(0,t.jsx)(n.code,{children:"extract_tracing_map"})}),"\n",(0,t.jsxs)(n.p,{children:["EXPERIMENTAL: A ",(0,t.jsx)(n.a,{href:"/docs/guides/bloblang/about",children:"Bloblang mapping"})," that attempts to extract an object containing tracing propagation information, which will then be used as the root tracing span for the message. The specification of the extracted fields must match the format used by the service wide tracer."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Requires version 3.45.0 or newer"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nextract_tracing_map: root = @\n\nextract_tracing_map: root = this.meta.span\n"})}),"\n",(0,t.jsx)(n.h3,{id:"group",children:(0,t.jsx)(n.code,{children:"group"})}),"\n",(0,t.jsx)(n.p,{children:"Tuning parameters for consumer group synchronization."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"object"})]}),"\n",(0,t.jsx)(n.h3,{id:"groupsession_timeout",children:(0,t.jsx)(n.code,{children:"group.session_timeout"})}),"\n",(0,t.jsx)(n.p,{children:"A period after which a consumer of the group is kicked after no heartbeats."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'"10s"'})]}),"\n",(0,t.jsx)(n.h3,{id:"groupheartbeat_interval",children:(0,t.jsx)(n.code,{children:"group.heartbeat_interval"})}),"\n",(0,t.jsx)(n.p,{children:"A period in which heartbeats should be sent out."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'"3s"'})]}),"\n",(0,t.jsx)(n.h3,{id:"grouprebalance_timeout",children:(0,t.jsx)(n.code,{children:"group.rebalance_timeout"})}),"\n",(0,t.jsx)(n.p,{children:"A period after which rebalancing is abandoned if unresolved."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'"60s"'})]}),"\n",(0,t.jsx)(n.h3,{id:"fetch_buffer_cap",children:(0,t.jsx)(n.code,{children:"fetch_buffer_cap"})}),"\n",(0,t.jsx)(n.p,{children:"The maximum number of unprocessed messages to fetch at a given time."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"int"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"256"})]}),"\n",(0,t.jsx)(n.h3,{id:"multi_header",children:(0,t.jsx)(n.code,{children:"multi_header"})}),"\n",(0,t.jsx)(n.p,{children:"Decode headers into lists to allow handling of multiple values with the same key"}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"bool"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"false"})]}),"\n",(0,t.jsx)(n.h3,{id:"batching",children:(0,t.jsx)(n.code,{children:"batching"})}),"\n",(0,t.jsxs)(n.p,{children:["Allows you to configure a ",(0,t.jsx)(n.a,{href:"/docs/configuration/batching",children:"batching policy"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"object"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'# Examples\n\nbatching:\n  byte_size: 5000\n  count: 0\n  period: 1s\n\nbatching:\n  count: 10\n  period: 1s\n\nbatching:\n  check: this.contains("END BATCH")\n  count: 0\n  period: 1m\n'})}),"\n",(0,t.jsx)(n.h3,{id:"batchingcount",children:(0,t.jsx)(n.code,{children:"batching.count"})}),"\n",(0,t.jsxs)(n.p,{children:["A number of messages at which the batch should be flushed. If ",(0,t.jsx)(n.code,{children:"0"})," disables count based batching."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"int"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"0"})]}),"\n",(0,t.jsx)(n.h3,{id:"batchingbyte_size",children:(0,t.jsx)(n.code,{children:"batching.byte_size"})}),"\n",(0,t.jsxs)(n.p,{children:["An amount of bytes at which the batch should be flushed. If ",(0,t.jsx)(n.code,{children:"0"})," disables size based batching."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"int"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:"0"})]}),"\n",(0,t.jsx)(n.h3,{id:"batchingperiod",children:(0,t.jsx)(n.code,{children:"batching.period"})}),"\n",(0,t.jsx)(n.p,{children:"A period in which an incomplete batch should be flushed regardless of its size."}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nperiod: 1s\n\nperiod: 1m\n\nperiod: 500ms\n"})}),"\n",(0,t.jsx)(n.h3,{id:"batchingcheck",children:(0,t.jsx)(n.code,{children:"batching.check"})}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.a,{href:"/docs/guides/bloblang/about/",children:"Bloblang query"})," that should return a boolean value indicating whether a message should end a batch."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"string"}),(0,t.jsx)(n.br,{}),"\n","Default: ",(0,t.jsx)(n.code,{children:'""'})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'# Examples\n\ncheck: this.type == "end_of_transaction"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"batchingprocessors",children:(0,t.jsx)(n.code,{children:"batching.processors"})}),"\n",(0,t.jsxs)(n.p,{children:["A list of ",(0,t.jsx)(n.a,{href:"/docs/components/processors/about",children:"processors"})," to apply to a batch as it is flushed. This allows you to aggregate and archive the batch however you see fit. Please note that all resulting messages are flushed as a single batch, therefore splitting the batch into smaller batches using these processors is a no-op."]}),"\n",(0,t.jsxs)(n.p,{children:["Type: ",(0,t.jsx)(n.code,{children:"array"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"# Examples\n\nprocessors:\n  - archive:\n      format: concatenate\n\nprocessors:\n  - archive:\n      format: lines\n\nprocessors:\n  - archive:\n      format: json_array\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},5162:function(e,n,s){s.d(n,{Z:function(){return c}});s(7294);var t=s(6010),i={tabItem:"tabItem_Ymn6"},r=s(5893);function c(e){let{children:n,hidden:s,className:c}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(i.tabItem,c),hidden:s,children:n})}},4866:function(e,n,s){s.d(n,{Z:function(){return y}});var t=s(7294),i=s(6010),r=s(2466),c=s(6550),o=s(469),l=s(1980),a=s(7392),d=s(12);function h(e){var n,s;return null!=(n=null==(s=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:s.filter(Boolean))?n:[]}function u(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=null!=n?n:function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:i}}=e;return{value:n,label:s,attributes:t,default:i}}))}(s);return function(e){const n=(0,a.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const i=(0,c.k6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:n,groupId:s});return[(0,l._X)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function f(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,r=u(e),[c,l]=(0,t.useState)((()=>function(e){var n;let{defaultValue:s,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+s+'" but none of its children has the corresponding value. Available values are: '+t.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return s}const i=null!=(n=t.find((e=>e.default)))?n:t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[a,h]=x({queryString:s,groupId:i}),[f,j]=function(e){let{groupId:n}=e;const s=function(e){return e?"docusaurus.tab."+e:null}(n),[i,r]=(0,d.Nk)(s);return[i,(0,t.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:i}),m=(()=>{const e=null!=a?a:f;return p({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:c,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);l(e),h(e),j(e)}),[h,j,r]),tabValues:r}}var j=s(2389),m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"},g=s(5893);function b(e){let{className:n,block:s,selectedValue:t,selectValue:c,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:a}=(0,r.o5)(),d=e=>{const n=e.currentTarget,s=l.indexOf(n),i=o[s].value;i!==t&&(a(n),c(i))},h=e=>{var n;let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var t;const n=l.indexOf(e.currentTarget)+1;s=null!=(t=l[n])?t:l[0];break}case"ArrowLeft":{var i;const n=l.indexOf(e.currentTarget)-1;s=null!=(i=l[n])?i:l[l.length-1];break}}null==(n=s)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...r,className:(0,i.Z)("tabs__item",m.tabItem,null==r?void 0:r.className,{"tabs__item--active":t===n}),children:null!=s?s:n},n)}))})}function _(e){let{lazy:n,children:s,selectedValue:i}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,i.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(b,{...e,...n}),(0,g.jsx)(_,{...e,...n})]})}function y(e){const n=(0,j.Z)();return(0,g.jsx)(v,{...e,children:h(e.children)},String(n))}},1151:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return c}});var t=s(7294);const i={},r=t.createContext(i);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);