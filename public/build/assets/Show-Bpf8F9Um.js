import{_ as c}from"./AppLayout-D6okuwkH.js";import l from"./DeleteUserForm-DgHVpUmE.js";import f from"./LogoutOtherBrowserSessionsForm-BNxhdADv.js";import{S as s}from"./SectionBorder-2gwObt_O.js";import u from"./TwoFactorAuthenticationForm-BZ89R9nl.js";import d from"./UpdatePasswordForm-CAg1JdNz.js";import _ from"./UpdateProfileInformationForm-f7uzrnfM.js";import{c as h,w as p,o,a as i,e as r,b as t,f as a,F as g}from"./app-DCWEr5hc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./DialogModal-CLUmD2ek.js";import"./SectionTitle-BWGfIfJm.js";import"./DangerButton-BAyTpwiu.js";import"./TextInput-BQYiyf7S.js";import"./SecondaryButton-BWs-xWhI.js";import"./ActionMessage-D8aWCEBu.js";import"./PrimaryButton-BWwyfDtb.js";import"./InputLabel-DCf6M18Q.js";import"./FormSection-C4MBoB3I.js";const $={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},k={key:0},w={key:1},y={key:2},M={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,n)=>(o(),h(c,{title:"Profile"},{header:p(()=>n[0]||(n[0]=[i("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Profile ",-1)])),default:p(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",k,[t(_,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",w,[t(d,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(u,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(f,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(g,{key:3},[t(s),t(l,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{M as default};
