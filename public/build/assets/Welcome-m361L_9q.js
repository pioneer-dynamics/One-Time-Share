import{r as l,C as m,o as f,d as g,a as t,m as p,t as _,j as h,c as v,w as o,b as i,u as d,i as x,f as y}from"./app-CejAU3s6.js";import{L as b}from"./logo-3HeDyDTa.js";import w from"./SecretForm-COtgqV81.js";import{_ as k}from"./AppLayout-CfyS4rPW.js";import $ from"./Page-BREkhmG3.js";import"./PrimaryButton-hhByVcbe.js";import"./TextInput-DqNhwAG2.js";import"./InputLabel-Df8ZNxIF.js";import"./datetime-DcQSltNB.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const B={class:"w-full h-full flex justify-center items-center flex-wrap gap-2"},j={class:"text-4xl font-bold"},S={class:"text-gamboge-200 mr-2 border-r-2 animate-typing border-gamboge-200 pr-1"},N={__name:"Typewriter",props:{phrases:{type:Array,required:!0},speed:{type:Number,default:100}},setup(a){const s=a,e=l(0),n=l(""),r=l(0),c=l(!1);return m(()=>{setInterval(()=>{c.value?(n.value=s.phrases[e.value].substring(0,--r.value),r.value==0&&(c.value=!1,e.value=e.value+1,e.value==s.phrases.length&&(e.value=0))):(n.value=s.phrases[e.value].substring(0,++r.value),r.value==s.phrases[e.value].length+5&&(c.value=!0))},s.speed)}),(u,U)=>(f(),g("div",B,[t("h1",j,[p(u.$slots,"before"),t("span",S,_(n.value),1),p(u.$slots,"after")])]))}},L={class:"relative min-h-screen flex flex-col items-center justify-center"},V={class:"relative w-full max-w-2xl px-6 lg:max-w-7xl"},C={class:"grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3"},D={class:"flex lg:justify-center lg:col-start-2"},P=["src"],T={class:"mt-6 grid-cols-1 gap-6 max-w-4xl mx-auto"},G={__name:"Welcome",props:{canLogin:{type:Boolean,default:!1},canRegister:{type:Boolean,default:!1},secret:{type:String,default:null},decryptUrl:{type:String,default:null}},setup(a){return h(()=>"bg-gray-50 text-black/50 dark:bg-black dark:text-white/50 bg-cover "),(s,e)=>(f(),v(k,{title:"Welcome"},{default:o(()=>[i($,null,{default:o(()=>[t("div",L,[t("div",V,[t("header",C,[t("div",D,[i(d(x),{href:"/"},{default:o(()=>[t("img",{src:d(b),class:"h-24 w-auto"},null,8,P)]),_:1})])]),t("main",T,[i(N,{class:"text-gray-200 dark:text-white mb-6",phrases:["time-sensitive.","one-time use.","disposable."],speed:100},{before:o(()=>e[0]||(e[0]=[y(" Keep sensitive information out of your email and chat logs with links that are ")])),_:1}),i(w,{secret:a.secret,"decrypt-url":a.decryptUrl},null,8,["secret","decrypt-url"])]),e[1]||(e[1]=t("footer",{class:"py-16 text-center text-sm text-black dark:text-white/70"},null,-1))])])]),_:1})]),_:1}))}};export{G as default};