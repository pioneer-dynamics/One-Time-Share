import{_ as c}from"./AppLayout-Bkpi47aW.js";import l from"./DeleteUserForm-wFK2aoMO.js";import f from"./LogoutOtherBrowserSessionsForm-BkshEdYL.js";import{S as r}from"./SectionBorder-GnQBCG26.js";import u from"./TwoFactorAuthenticationForm-DrFV3NAj.js";import _ from"./UpdatePasswordForm-DpETds5w.js";import d from"./UpdateProfileInformationForm-gppgM1zA.js";import h from"./PassKeyForm-DA_2aFax.js";import $ from"./Page-jpQPcv5J.js";import{c as g,w as a,o as s,a as p,b as t,d as e,e as m,F as k}from"./app-CVV9R-eO.js";import"./logo-3HeDyDTa.js";import"./datetime-DcQSltNB.js";import"./DialogModal-arpb7QHp.js";import"./SectionTitle-Pxe1N1Ob.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-B7bgH-c_.js";import"./DangerButton-BbsjfVYe.js";import"./TextInput-B_6T5fjw.js";import"./SecondaryButton-C3ri-qr6.js";import"./ActionMessage-CLBrq7h7.js";import"./PrimaryButton-CqvOMgeP.js";import"./ConfirmsPasswordOrPasskey-BzloEScB.js";import"./ConfirmsPasskey-BTAJoWBH.js";import"./InputLabel-Bjdt23wp.js";import"./FormSection-DbCzmeZR.js";import"./Alert-DSqvn2X2.js";const w={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},y={key:0},x={key:1},B={key:2},W={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(i){return(o,n)=>(s(),g(c,{title:"Profile"},{header:a(()=>n[0]||(n[0]=[p("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Profile ",-1)])),default:a(()=>[t($,null,{default:a(()=>[p("div",w,[o.$page.props.jetstream.canUpdateProfileInformation?(s(),e("div",y,[t(d,{user:o.$page.props.auth.user},null,8,["user"]),t(r)])):m("",!0),o.$page.props.jetstream.canUpdatePassword?(s(),e("div",x,[t(_,{class:"mt-10 sm:mt-0"}),t(r)])):m("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(s(),e("div",B,[t(u,{"requires-confirmation":i.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(r)])):m("",!0),t(h,{class:"mt-10 sm:mt-0"}),t(r),t(f,{sessions:i.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(s(),e(k,{key:3},[t(r),t(l,{class:"mt-10 sm:mt-0"})],64)):m("",!0)])]),_:1})]),_:1}))}};export{W as default};