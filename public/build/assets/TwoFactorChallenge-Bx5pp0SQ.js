import{d as u,T as b,e as r,b as o,u as t,w as m,F as n,o as a,Z as C,a as i,g as l,i as p,n as w,m as V}from"./app-BRjscsoq.js";import{A as h}from"./AuthenticationCard-BwP_gCmY.js";import{_ as T}from"./AuthenticationCardLogo-CYG8uxfV.js";import{_,a as v}from"./TextInput-DivJeP8r.js";import{_ as g}from"./InputLabel-BKtx9pUF.js";import{_ as $}from"./PrimaryButton-BJH7Tybb.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./logo-3HeDyDTa.js";const I={class:"mb-4 text-sm text-gray-600 dark:text-gray-400"},U={key:0},B={key:1},F={class:"flex items-center justify-end mt-4"},Z={__name:"TwoFactorChallenge",setup(N){const c=u(!1),e=b({code:"",recovery_code:""}),f=u(null),y=u(null),k=async()=>{c.value^=!0,await V(),c.value?(f.value.focus(),e.code=""):(y.value.focus(),e.recovery_code="")},x=()=>{e.post(route("two-factor.login"))};return(A,s)=>(a(),r(n,null,[o(t(C),{title:"Two-factor Confirmation"}),o(h,null,{logo:m(()=>[o(T)]),default:m(()=>[i("div",I,[c.value?(a(),r(n,{key:1},[l(" Please confirm access to your account by entering one of your emergency recovery codes. ")],64)):(a(),r(n,{key:0},[l(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")],64))]),i("form",{onSubmit:p(x,["prevent"])},[c.value?(a(),r("div",B,[o(g,{for:"recovery_code",value:"Recovery Code"}),o(_,{id:"recovery_code",ref_key:"recoveryCodeInput",ref:f,modelValue:t(e).recovery_code,"onUpdate:modelValue":s[1]||(s[1]=d=>t(e).recovery_code=d),type:"text",class:"mt-1 block w-full",autocomplete:"one-time-code"},null,8,["modelValue"]),o(v,{class:"mt-2",message:t(e).errors.recovery_code},null,8,["message"])])):(a(),r("div",U,[o(g,{for:"code",value:"Code"}),o(_,{id:"code",ref_key:"codeInput",ref:y,modelValue:t(e).code,"onUpdate:modelValue":s[0]||(s[0]=d=>t(e).code=d),type:"text",inputmode:"numeric",class:"mt-1 block w-full",autofocus:"",autocomplete:"one-time-code"},null,8,["modelValue"]),o(v,{class:"mt-2",message:t(e).errors.code},null,8,["message"])])),i("div",F,[i("button",{type:"button",class:"text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 underline cursor-pointer",onClick:p(k,["prevent"])},[c.value?(a(),r(n,{key:1},[l(" Use an authentication code ")],64)):(a(),r(n,{key:0},[l(" Use a recovery code ")],64))]),o($,{class:w(["ms-4",{"opacity-25":t(e).processing}]),disabled:t(e).processing},{default:m(()=>s[2]||(s[2]=[l(" Log in ")])),_:1},8,["class","disabled"])])],32)]),_:1})],64))}};export{Z as default};
