import{d as v,D as N,o,e as a,a as i,r as Q,b as r,w as s,g as n,t as C,C as R,n as x,m as D,Q as Y,T as I,k as U,E as z,c as w,f as m,u as V,F as G,h as O,B as K}from"./app-DCWEr5hc.js";import{b as W,a as j}from"./DialogModal-CLUmD2ek.js";import{_ as E,a as L}from"./TextInput-BQYiyf7S.js";import{_ as A}from"./PrimaryButton-BWwyfDtb.js";import{_ as T}from"./SecondaryButton-BWs-xWhI.js";import{_ as J}from"./DangerButton-BAyTpwiu.js";import{_ as X}from"./InputLabel-DCf6M18Q.js";import"./SectionTitle-BWGfIfJm.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const Z={class:"mt-4"},_={__name:"ConfirmsPassword",props:{title:{type:String,default:"Confirm Password"},content:{type:String,default:"For your security, please confirm your password to continue."},button:{type:String,default:"Confirm"}},emits:["confirmed"],setup(h,{emit:S}){const k=S,u=v(!1),e=N({password:"",error:"",processing:!1}),d=v(null),g=()=>{axios.get(route("password.confirmation")).then(l=>{l.data.confirmed?k("confirmed"):(u.value=!0,setTimeout(()=>d.value.focus(),250))})},y=()=>{e.processing=!0,axios.post(route("password.confirm"),{password:e.password}).then(()=>{e.processing=!1,f(),D().then(()=>k("confirmed"))}).catch(l=>{e.processing=!1,e.error=l.response.data.errors.password[0],d.value.focus()})},f=()=>{u.value=!1,e.password="",e.error=""};return(l,c)=>(o(),a("span",null,[i("span",{onClick:g},[Q(l.$slots,"default")]),r(W,{show:u.value,onClose:f},{title:s(()=>[n(C(h.title),1)]),content:s(()=>[n(C(h.content)+" ",1),i("div",Z,[r(E,{ref_key:"passwordInput",ref:d,modelValue:e.password,"onUpdate:modelValue":c[0]||(c[0]=F=>e.password=F),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",autocomplete:"current-password",onKeyup:R(y,["enter"])},null,8,["modelValue"]),r(L,{message:e.error,class:"mt-2"},null,8,["message"])])]),footer:s(()=>[r(T,{onClick:f},{default:s(()=>c[1]||(c[1]=[n(" Cancel ")])),_:1}),r(A,{class:x(["ms-3",{"opacity-25":e.processing}]),disabled:e.processing,onClick:y},{default:s(()=>[n(C(h.button),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}},ee={key:0,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},te={key:1,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},oe={key:2,class:"text-lg font-medium text-gray-900 dark:text-gray-100"},se={key:3},ae={key:0},re={class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},ne={key:0,class:"font-semibold"},le={key:1},ie=["innerHTML"],ue={key:0,class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},ce={class:"font-semibold"},de=["innerHTML"],me={key:1,class:"mt-4"},fe={key:1},pe={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 dark:bg-gray-900 dark:text-gray-100 rounded-lg"},ve={class:"mt-5"},ye={key:0},ge={key:1},Fe={__name:"TwoFactorAuthenticationForm",props:{requiresConfirmation:Boolean},setup(h){const S=h,k=Y(),u=v(!1),e=v(!1),d=v(!1),g=v(null),y=v(null),f=v([]),l=I({code:""}),c=U(()=>{var p;return!u.value&&((p=k.props.auth.user)==null?void 0:p.two_factor_enabled)});z(c,()=>{c.value||(l.reset(),l.clearErrors())});const F=()=>{u.value=!0,K.post(route("two-factor.enable"),{},{preserveScroll:!0,onSuccess:()=>Promise.all([M(),q(),$()]),onFinish:()=>{u.value=!1,e.value=S.requiresConfirmation}})},M=()=>axios.get(route("two-factor.qr-code")).then(p=>{g.value=p.data.svg}),q=()=>axios.get(route("two-factor.secret-key")).then(p=>{y.value=p.data.secretKey}),$=()=>axios.get(route("two-factor.recovery-codes")).then(p=>{f.value=p.data}),P=()=>{l.post(route("two-factor.confirm"),{errorBag:"confirmTwoFactorAuthentication",preserveScroll:!0,preserveState:!0,onSuccess:()=>{e.value=!1,g.value=null,y.value=null}})},H=()=>{axios.post(route("two-factor.recovery-codes")).then(()=>$())},B=()=>{d.value=!0,K.delete(route("two-factor.disable"),{preserveScroll:!0,onSuccess:()=>{d.value=!1,e.value=!1}})};return(p,t)=>(o(),w(j,null,{title:s(()=>t[1]||(t[1]=[n(" Two Factor Authentication ")])),description:s(()=>t[2]||(t[2]=[n(" Add additional security to your account using two factor authentication. ")])),content:s(()=>[c.value&&!e.value?(o(),a("h3",ee," You have enabled two factor authentication. ")):c.value&&e.value?(o(),a("h3",te," Finish enabling two factor authentication. ")):(o(),a("h3",oe," You have not enabled two factor authentication. ")),t[11]||(t[11]=i("div",{class:"mt-3 max-w-xl text-sm text-gray-600 dark:text-gray-400"},[i("p",null," When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")],-1)),c.value?(o(),a("div",se,[g.value?(o(),a("div",ae,[i("div",re,[e.value?(o(),a("p",ne," To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code. ")):(o(),a("p",le," Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application or enter the setup key. "))]),i("div",{class:"mt-4 p-2 inline-block bg-white",innerHTML:g.value},null,8,ie),y.value?(o(),a("div",ue,[i("p",ce,[t[3]||(t[3]=n(" Setup Key: ")),i("span",{innerHTML:y.value},null,8,de)])])):m("",!0),e.value?(o(),a("div",me,[r(X,{for:"code",value:"Code"}),r(E,{id:"code",modelValue:V(l).code,"onUpdate:modelValue":t[0]||(t[0]=b=>V(l).code=b),type:"text",name:"code",class:"block mt-1 w-1/2",inputmode:"numeric",autofocus:"",autocomplete:"one-time-code",onKeyup:R(P,["enter"])},null,8,["modelValue"]),r(L,{message:V(l).errors.code,class:"mt-2"},null,8,["message"])])):m("",!0)])):m("",!0),f.value.length>0&&!e.value?(o(),a("div",fe,[t[4]||(t[4]=i("div",{class:"mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400"},[i("p",{class:"font-semibold"}," Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")],-1)),i("div",pe,[(o(!0),a(G,null,O(f.value,b=>(o(),a("div",{key:b},C(b),1))),128))])])):m("",!0)])):m("",!0),i("div",ve,[c.value?(o(),a("div",ge,[r(_,{onConfirmed:P},{default:s(()=>[e.value?(o(),w(A,{key:0,type:"button",class:x(["me-3",{"opacity-25":u.value}]),disabled:u.value},{default:s(()=>t[6]||(t[6]=[n(" Confirm ")])),_:1},8,["class","disabled"])):m("",!0)]),_:1}),r(_,{onConfirmed:H},{default:s(()=>[f.value.length>0&&!e.value?(o(),w(T,{key:0,class:"me-3"},{default:s(()=>t[7]||(t[7]=[n(" Regenerate Recovery Codes ")])),_:1})):m("",!0)]),_:1}),r(_,{onConfirmed:$},{default:s(()=>[f.value.length===0&&!e.value?(o(),w(T,{key:0,class:"me-3"},{default:s(()=>t[8]||(t[8]=[n(" Show Recovery Codes ")])),_:1})):m("",!0)]),_:1}),r(_,{onConfirmed:B},{default:s(()=>[e.value?(o(),w(T,{key:0,class:x({"opacity-25":d.value}),disabled:d.value},{default:s(()=>t[9]||(t[9]=[n(" Cancel ")])),_:1},8,["class","disabled"])):m("",!0)]),_:1}),r(_,{onConfirmed:B},{default:s(()=>[e.value?m("",!0):(o(),w(J,{key:0,class:x({"opacity-25":d.value}),disabled:d.value},{default:s(()=>t[10]||(t[10]=[n(" Disable ")])),_:1},8,["class","disabled"]))]),_:1})])):(o(),a("div",ye,[r(_,{onConfirmed:F},{default:s(()=>[r(A,{type:"button",class:x({"opacity-25":u.value}),disabled:u.value},{default:s(()=>t[5]||(t[5]=[n(" Enable ")])),_:1},8,["class","disabled"])]),_:1})]))])]),_:1}))}};export{Fe as default};
