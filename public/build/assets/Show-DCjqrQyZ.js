import{_ as c}from"./AppLayout-DxFmf9_d.js";import l from"./DeleteUserForm-aWM4Pd9J.js";import f from"./LogoutOtherBrowserSessionsForm-CMxBJwmY.js";import{S as e}from"./SectionBorder-C0PnitiC.js";import u from"./TwoFactorAuthenticationForm-CITPAj-c.js";import d from"./UpdatePasswordForm-C17lKi62.js";import _ from"./UpdateProfileInformationForm-BRDlI2YN.js";import g from"./PassKeyForm-DrATGJgI.js";import h from"./Page-C9wbC7mC.js";import{c as $,w as m,o as r,a as p,b as t,d as s,e as a,F as k}from"./app-C93vsFC3.js";import"./logo-3HeDyDTa.js";import"./datetime-DcQSltNB.js";import"./DialogModal-CQ_btma-.js";import"./SectionTitle-kD5B79rP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-Dil8MBTu.js";import"./DangerButton-BM2Jx1kU.js";import"./TextInput-D9t3tHI8.js";import"./SecondaryButton-BQ5rADhw.js";import"./ActionMessage-CxckKRqH.js";import"./PrimaryButton-D-5TgrLz.js";import"./ConfirmsPasswordOrPasskey-B8wr15MF.js";import"./ConfirmsPasskey-CuBEjyuj.js";import"./InputLabel-CicJ9vcO.js";import"./FormSection-wDlxRdM_.js";const w={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},y={key:0},x={key:1},B={key:2},R={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(i){return(o,n)=>(r(),$(c,{title:"Profile"},{header:m(()=>n[0]||(n[0]=[p("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Profile ",-1)])),default:m(()=>[t(h,null,{default:m(()=>[p("div",w,[o.$page.props.jetstream.canUpdateProfileInformation?(r(),s("div",y,[t(_,{user:o.$page.props.auth.user},null,8,["user"]),t(e)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(r(),s("div",x,[t(d,{class:"mt-10 sm:mt-0"}),t(e)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(r(),s("div",B,[t(u,{"requires-confirmation":i.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(e)])):a("",!0),t(g,{class:"mt-10 sm:mt-0"}),t(e),t(f,{sessions:i.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(r(),s(k,{key:3},[t(e),t(l,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])]),_:1})]),_:1}))}};export{R as default};
