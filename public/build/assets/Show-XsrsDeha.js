import{_ as c}from"./AppLayout-Vda7kY52.js";import l from"./DeleteUserForm-CgiHgrEF.js";import f from"./LogoutOtherBrowserSessionsForm-OfOcoTAs.js";import{S as e}from"./SectionBorder-CoDut3KJ.js";import u from"./TwoFactorAuthenticationForm-DXjcnJlx.js";import d from"./UpdatePasswordForm-CuG6je4b.js";import _ from"./UpdateProfileInformationForm-BmIA5QkJ.js";import g from"./PassKeyForm-BCozO5xS.js";import h from"./Page-Cp-ovoe_.js";import{c as $,w as m,o as r,a as p,b as t,d as s,e as a,F as k}from"./app-CBBM-AXi.js";import"./logo-3HeDyDTa.js";import"./datetime-DcQSltNB.js";import"./DialogModal-BOlLCXyT.js";import"./SectionTitle-C6FjUVuD.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-DkV-ErxI.js";import"./DangerButton-Cu46QPFu.js";import"./TextInput-DbuuiBDy.js";import"./SecondaryButton-DJfsHSwr.js";import"./ActionMessage-CpbuSE4N.js";import"./PrimaryButton-CS9vRxwP.js";import"./ConfirmsPasswordOrPasskey-B9LsrWoY.js";import"./ConfirmsPasskey-DukyFFTL.js";import"./InputLabel-D8x_U02e.js";import"./FormSection-B4g_jbPn.js";const w={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},y={key:0},x={key:1},B={key:2},R={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(i){return(o,n)=>(r(),$(c,{title:"Profile"},{header:m(()=>n[0]||(n[0]=[p("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Profile ",-1)])),default:m(()=>[t(h,null,{default:m(()=>[p("div",w,[o.$page.props.jetstream.canUpdateProfileInformation?(r(),s("div",y,[t(_,{user:o.$page.props.auth.user},null,8,["user"]),t(e)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(r(),s("div",x,[t(d,{class:"mt-10 sm:mt-0"}),t(e)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(r(),s("div",B,[t(u,{"requires-confirmation":i.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(e)])):a("",!0),t(g,{class:"mt-10 sm:mt-0"}),t(e),t(f,{sessions:i.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(r(),s(k,{key:3},[t(e),t(l,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])]),_:1})]),_:1}))}};export{R as default};
