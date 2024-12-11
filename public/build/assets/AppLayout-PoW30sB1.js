import{o as s,d as i,u as d,Q as He,r as E,E as Ie,n as c,a as t,e as f,t as w,h as P,C as Ze,D as Ke,j as R,m as x,G as V,k as Pe,y as Ee,b as n,w as a,B as Qe,c as M,i as y,Z as Ue,F as S,f as o,g as Ne,H as Re,z as Xe,s as Oe}from"./app-DhUcpm9N.js";import{L as Ye}from"./logo-3HeDyDTa.js";import{D as Ve}from"./datetime-DcQSltNB.js";const Je="/build/assets/bg-Bk90_pgC.png",We=["src"],qe={__name:"ApplicationMark",setup(p){return(u,l)=>(s(),i("img",{src:d(Ye),class:"h-24 w-auto"},null,8,We))}},_e={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},et={class:"flex items-center justify-between flex-wrap"},tt={class:"w-0 flex-1 flex items-center min-w-0"},rt={key:0,class:"size-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},st={key:1,class:"size-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},at={class:"ms-3 font-medium text-sm text-white truncate"},ot={class:"shrink-0 sm:ms-3"},nt={__name:"Banner",setup(p){const u=He(),l=E(!0),g=E("success"),r=E("");return Ie(async()=>{var e,m;g.value=((e=u.props.jetstream.flash)==null?void 0:e.bannerStyle)||"success",r.value=((m=u.props.jetstream.flash)==null?void 0:m.banner)||"",l.value=!0}),(e,m)=>(s(),i("div",null,[l.value&&r.value?(s(),i("div",{key:0,class:c({"bg-indigo-500":g.value=="success","bg-red-700":g.value=="danger"})},[t("div",_e,[t("div",et,[t("div",tt,[t("span",{class:c(["flex p-2 rounded-lg",{"bg-indigo-600":g.value=="success","bg-red-600":g.value=="danger"}])},[g.value=="success"?(s(),i("svg",rt,m[1]||(m[1]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)]))):f("",!0),g.value=="danger"?(s(),i("svg",st,m[2]||(m[2]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1)]))):f("",!0)],2),t("p",at,w(r.value),1)]),t("div",ot,[t("button",{type:"button",class:c(["-me-1 flex p-2 rounded-md focus:outline-none sm:-me-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":g.value=="success","hover:bg-red-600 focus:bg-red-600":g.value=="danger"}]),"aria-label":"Dismiss",onClick:m[0]||(m[0]=P($=>l.value=!1,["prevent"]))},m[3]||(m[3]=[t("svg",{class:"size-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1)]),2)])])])],2)):f("",!0)]))}},it={class:"relative"},Ge={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white dark:bg-gray-700"]}},setup(p){const u=p;let l=E(!1);const g=m=>{l.value&&m.key==="Escape"&&(l.value=!1)};Ze(()=>document.addEventListener("keydown",g)),Ke(()=>document.removeEventListener("keydown",g));const r=R(()=>({48:"w-48"})[u.width.toString()]),e=R(()=>u.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":u.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top");return(m,$)=>(s(),i("div",it,[t("div",{onClick:$[0]||($[0]=T=>V(l)?l.value=!d(l):l=!d(l))},[x(m.$slots,"trigger")]),Pe(t("div",{class:"fixed inset-0 z-40",onClick:$[1]||($[1]=T=>V(l)?l.value=!1:l=!1)},null,512),[[Ee,d(l)]]),n(Qe,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:a(()=>[Pe(t("div",{class:c(["absolute z-50 mt-2 rounded-md shadow-lg",[r.value,e.value]]),style:{display:"none"},onClick:$[2]||($[2]=T=>V(l)?l.value=!1:l=!1)},[t("div",{class:c(["rounded-md ring-1 ring-black ring-opacity-5",p.contentClasses])},[x(m.$slots,"content")],2)],2),[[Ee,d(l)]])]),_:3})]))}},lt={key:0,type:"submit",class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},ut=["href"],j={__name:"DropdownLink",props:{href:String,as:String},setup(p){return(u,l)=>(s(),i("div",null,[p.as=="button"?(s(),i("button",lt,[x(u.$slots,"default")])):p.as=="a"?(s(),i("a",{key:1,href:p.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},[x(u.$slots,"default")],8,ut)):(s(),M(d(y),{key:2,href:p.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},{default:a(()=>[x(u.$slots,"default")]),_:3},8,["href"]))]))}},D={__name:"NavLink",props:{href:String,active:Boolean},setup(p){const u=p,l=R(()=>u.active?"inline-flex items-center px-1 pt-1 border-b-2 border-gamboge-700 dark:border-gamboge-200 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-gamboge-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 transition duration-150 ease-in-out");return(g,r)=>(s(),M(d(y),{href:p.href,class:c(l.value)},{default:a(()=>[x(g.$slots,"default")]),_:3},8,["href","class"]))}},dt=["href"],k={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(p){const u=p,l=R(()=>u.active?"block w-full ps-3 pe-4 py-2 border-l-4 border-gamboge-400 dark:border-gamboge-600 text-start text-base font-medium text-gamboge-700 dark:text-gamboge-300 bg-gamboge-50 dark:bg-gamboge-900/50 focus:outline-none focus:text-gamboge-800 dark:focus:text-gamboge-200 focus:bg-gamboge-100 dark:focus:bg-gamboge-900 focus:border-gamboge-700 dark:focus:border-gamboge-300 transition duration-150 ease-in-out":"block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600 transition duration-150 ease-in-out");return(g,r)=>(s(),i("div",null,[p.as=="button"?(s(),i("button",{key:0,class:c([l.value,"w-full text-start"])},[x(g.$slots,"default")],2)):p.as=="a"?(s(),i("a",{key:1,class:c([l.value,"w-full text-start"]),href:p.href},[x(g.$slots,"default")],10,dt)):(s(),M(d(y),{key:2,href:p.href,class:c(l.value)},{default:a(()=>[x(g.$slots,"default")]),_:3},8,["href","class"]))]))}},gt={class:"opacity-95"},pt={class:"bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"},ft={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},mt={class:"flex justify-between h-16"},vt={class:"flex"},ht={class:"shrink-0 flex items-center"},bt={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},yt={class:"hidden sm:flex sm:items-center sm:ms-6"},kt={class:"ms-3 relative"},ct={class:"inline-flex rounded-md"},wt={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"},xt={class:"w-60"},$t=["onSubmit"],St={class:"flex items-center"},Mt={key:0,class:"me-2 size-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Ct={key:0,class:"text-sm"},jt={key:0},Tt={class:"ms-3 relative"},Lt={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Bt=["src","alt"],zt={key:1,class:"inline-flex rounded-md"},At={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"},Ft={key:1},Dt={class:"-me-2 flex items-center sm:hidden"},Pt={class:"size-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Et={class:"pt-2 pb-3 space-y-1"},Nt={class:"pt-4 pb-1 border-t border-gray-200 dark:border-gray-600"},Rt={class:"flex items-center px-4"},Ot={key:0,class:"shrink-0 me-3"},Vt=["src","alt"],qt={class:"font-medium text-base text-gray-800 dark:text-gray-200"},Gt={class:"font-medium text-sm text-gray-500"},Ht={key:0,class:"mt-3 space-y-1"},It=["onSubmit"],Zt={class:"flex items-center"},Kt={key:0,class:"me-2 size-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Qt={key:1},Ut={key:0,class:"bg-white dark:bg-gray-800 shadow"},Xt={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},Yt={class:"bg-white dark:bg-gray-900"},Jt={class:"mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"},Wt={class:"md:flex md:justify-between"},_t={class:"mb-6 md:mb-0"},er={class:"grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"},tr={class:"text-gray-500 dark:text-gray-400 font-medium space-y-4"},rr={class:"text-gray-500 dark:text-gray-400 font-medium space-y-4"},sr={class:"sm:flex sm:items-center sm:justify-between"},ar={class:"text-sm text-gray-500 sm:text-center dark:text-gray-400 flex flex-wrap gap-2"},lr={__name:"AppLayout",props:{title:String},setup(p){const u=E(!1),l=r=>{Oe.put(route("current-team.update"),{team_id:r.id},{preserveState:!1})},g=()=>{Oe.post(route("logout"))};return(r,e)=>{var m,$,T,q,G,H,I,Z,K,Q,U,X,Y,J,W,_,ee,te,re,se,ae,oe,ne,ie,le,ue,de,ge,pe,fe,me,ve,he,be,ye,ke,ce,we,xe,$e,Se,Me,Ce,je,Te,Le,Be,ze,Ae;return s(),i("div",null,[n(d(Ue),{title:p.title},null,8,["title"]),n(nt),t("div",{class:"bg-gray-50 text-black/50 dark:bg-black dark:text-white/50 bg-cover h-full min-h-screen",style:Xe({"background-image":`url(${d(Je)})`})},[t("div",gt,[t("nav",pt,[t("div",ft,[t("div",mt,[t("div",vt,[t("div",ht,[n(d(y),{href:r.route((m=r.$page.props.auth)!=null&&m.user?"dashboard":"welcome")},{default:a(()=>[n(qe,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),t("div",bt,[(T=($=r.$page.props)==null?void 0:$.auth)!=null&&T.user?(s(),i(S,{key:0},[n(D,{href:r.route("dashboard"),active:r.route().current("dashboard")},{default:a(()=>e[1]||(e[1]=[o(" Create Secret Message ")])),_:1},8,["href","active"]),n(D,{href:r.route("secrets.index"),active:r.route().current("secrets.index")},{default:a(()=>e[2]||(e[2]=[o(" My Secrets ")])),_:1},8,["href","active"])],64)):f("",!0),(s(),i(S,{key:1},[n(D,{href:r.route("plans.index"),active:r.route().current("plans.index")},{default:a(()=>e[3]||(e[3]=[o(" Pricing ")])),_:1},8,["href","active"]),n(D,{href:r.route("faq.index"),active:r.route().current("faq.index")},{default:a(()=>e[4]||(e[4]=[o(" F.A.Q. ")])),_:1},8,["href","active"]),n(D,{href:r.route("about.index"),active:r.route().current("about.index")},{default:a(()=>e[5]||(e[5]=[o(" About Us ")])),_:1},8,["href","active"])],64))])]),t("div",yt,[t("div",kt,[r.$page.props.jetstream.hasTeamFeatures?(s(),M(Ge,{key:0,align:"right",width:"60"},{trigger:a(()=>{var v,h,b;return[t("span",ct,[t("button",wt,[o(w((b=(h=(v=r.$page.props)==null?void 0:v.auth)==null?void 0:h.user)==null?void 0:b.current_team.name)+" ",1),e[6]||(e[6]=t("svg",{class:"ms-2 -me-0.5 size-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1))])])]}),content:a(()=>{var v,h,b,C,L,B,z,A,F;return[t("div",xt,[e[12]||(e[12]=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1)),n(j,{href:r.route("teams.show",(b=(h=(v=r.$page.props)==null?void 0:v.auth)==null?void 0:h.user)==null?void 0:b.current_team)},{default:a(()=>e[7]||(e[7]=[o(" Team Settings ")])),_:1},8,["href"]),r.$page.props.jetstream.canCreateTeams?(s(),M(j,{key:0,href:r.route("teams.create")},{default:a(()=>e[8]||(e[8]=[o(" Create New Team ")])),_:1},8,["href"])):f("",!0),((B=(L=(C=r.$page.props)==null?void 0:C.auth)==null?void 0:L.user)==null?void 0:B.all_teams.length)>1?(s(),i(S,{key:1},[e[10]||(e[10]=t("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1)),e[11]||(e[11]=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1)),(s(!0),i(S,null,Ne((F=(A=(z=r.$page.props)==null?void 0:z.auth)==null?void 0:A.user)==null?void 0:F.all_teams,N=>(s(),i("form",{key:N.id,onSubmit:P(O=>l(N),["prevent"])},[n(j,{as:"button"},{default:a(()=>{var O,Fe,De;return[t("div",St,[N.id==((De=(Fe=(O=r.$page.props)==null?void 0:O.auth)==null?void 0:Fe.user)==null?void 0:De.current_team_id)?(s(),i("svg",Mt,e[9]||(e[9]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)]))):f("",!0),t("div",null,w(N.name),1)])]}),_:2},1024)],40,$t))),128))],64)):f("",!0)])]}),_:1})):f("",!0)]),(H=(G=(q=r.$page.props)==null?void 0:q.auth)==null?void 0:G.user)!=null&&H.subscription?(s(),i("div",Ct,[o(w((Q=(K=(Z=(I=r.$page.props)==null?void 0:I.auth)==null?void 0:Z.user)==null?void 0:K.plan)==null?void 0:Q.name)+" ( "+w((J=(Y=(X=(U=r.$page.props)==null?void 0:U.auth)==null?void 0:X.user)==null?void 0:Y.subscription)==null?void 0:J.stripe_status)+" ",1),(te=(ee=(_=(W=r.$page.props)==null?void 0:W.auth)==null?void 0:_.user)==null?void 0:ee.subscription)!=null&&te.ends_at?(s(),i("span",jt," till "+w(d(Ve).fromISO((oe=(ae=(se=(re=r.$page.props)==null?void 0:re.auth)==null?void 0:se.user)==null?void 0:ae.subscription)==null?void 0:oe.ends_at).toLocaleString(d(Ve).DATETIME_MED)),1)):f("",!0),e[13]||(e[13]=o(") "))])):f("",!0),t("div",Tt,[(ie=(ne=r.$page.props)==null?void 0:ne.auth)!=null&&ie.user?(s(),M(Ge,{key:0,align:"right",width:"48"},{trigger:a(()=>{var v,h,b,C,L,B,z,A,F;return[r.$page.props.jetstream.managesProfilePhotos?(s(),i("button",Lt,[t("img",{class:"size-8 rounded-full object-cover",src:(b=(h=(v=r.$page.props)==null?void 0:v.auth)==null?void 0:h.user)==null?void 0:b.profile_photo_url,alt:(B=(L=(C=r.$page.props)==null?void 0:C.auth)==null?void 0:L.user)==null?void 0:B.name},null,8,Bt)])):(s(),i("span",zt,[t("button",At,[o(w((F=(A=(z=r.$page.props)==null?void 0:z.auth)==null?void 0:A.user)==null?void 0:F.name)+" ",1),e[14]||(e[14]=t("svg",{class:"ms-2 -me-0.5 size-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1))])]))]}),content:a(()=>{var v,h,b;return[e[20]||(e[20]=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1)),n(j,{href:r.route("profile.show")},{default:a(()=>e[15]||(e[15]=[o(" Profile ")])),_:1},8,["href"]),r.$page.props.jetstream.hasApiFeatures?(s(),M(j,{key:0,href:r.route("api-tokens.index")},{default:a(()=>e[16]||(e[16]=[o(" API Tokens ")])),_:1},8,["href"])):f("",!0),(b=(h=(v=r.$page.props)==null?void 0:v.auth)==null?void 0:h.user)!=null&&b.subscription?(s(),i("span",Ft,[e[18]||(e[18]=t("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1)),n(j,{as:"a",href:r.route("billing")},{default:a(()=>e[17]||(e[17]=[o(" Billing ")])),_:1},8,["href"])])):f("",!0),e[21]||(e[21]=t("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1)),t("form",{onSubmit:P(g,["prevent"])},[n(j,{as:"button"},{default:a(()=>e[19]||(e[19]=[o(" Log Out ")])),_:1})],32)]}),_:1})):(s(),i(S,{key:1},[n(d(y),{href:r.route("login"),class:"rounded-md px-3 py-2 text-gamboge-700 ring-1 ring-transparent transition hover:text-gamboge-200 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"},{default:a(()=>e[22]||(e[22]=[o(" Log in ")])),_:1},8,["href"]),n(d(y),{href:r.route("register"),class:"rounded-md px-3 py-2 text-gamboge-700 ring-1 ring-transparent transition hover:text-gamboge-200 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"},{default:a(()=>e[23]||(e[23]=[o(" Register ")])),_:1},8,["href"])],64))])]),t("div",Dt,[t("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",onClick:e[0]||(e[0]=v=>u.value=!u.value)},[(s(),i("svg",Pt,[t("path",{class:c({hidden:u.value,"inline-flex":!u.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),t("path",{class:c({hidden:!u.value,"inline-flex":u.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),t("div",{class:c([{block:u.value,hidden:!u.value},"sm:hidden"])},[t("div",Et,[(ue=(le=r.$page.props)==null?void 0:le.auth)!=null&&ue.user?(s(),i(S,{key:0},[n(k,{href:r.route("dashboard"),active:r.route().current("dashboard")},{default:a(()=>e[24]||(e[24]=[o(" Create Secret Message ")])),_:1},8,["href","active"]),n(k,{href:r.route("secrets.index"),active:r.route().current("secrets.index")},{default:a(()=>e[25]||(e[25]=[o(" My Secrets ")])),_:1},8,["href","active"])],64)):f("",!0),(s(),i(S,{key:1},[n(k,{href:r.route("plans.index"),active:r.route().current("plans.index")},{default:a(()=>e[26]||(e[26]=[o(" Pricing ")])),_:1},8,["href","active"]),n(k,{href:r.route("faq.index"),active:r.route().current("faq.index")},{default:a(()=>e[27]||(e[27]=[o(" F.A.Q. ")])),_:1},8,["href","active"]),n(k,{href:r.route("about.index"),active:r.route().current("about.index")},{default:a(()=>e[28]||(e[28]=[o(" About Us ")])),_:1},8,["href","active"])],64))]),t("div",Nt,[t("div",Rt,[r.$page.props.jetstream.managesProfilePhotos?(s(),i("div",Ot,[t("img",{class:"size-10 rounded-full object-cover",src:(pe=(ge=(de=r.$page.props)==null?void 0:de.auth)==null?void 0:ge.user)==null?void 0:pe.profile_photo_url,alt:(ve=(me=(fe=r.$page.props)==null?void 0:fe.auth)==null?void 0:me.user)==null?void 0:ve.name},null,8,Vt)])):f("",!0),t("div",null,[t("div",qt,w((ye=(be=(he=r.$page.props)==null?void 0:he.auth)==null?void 0:be.user)==null?void 0:ye.name),1),t("div",Gt,w((we=(ce=(ke=r.$page.props)==null?void 0:ke.auth)==null?void 0:ce.user)==null?void 0:we.email),1)])]),($e=(xe=r.$page.props)==null?void 0:xe.auth)!=null&&$e.user?(s(),i("div",Ht,[n(k,{href:r.route("profile.show"),active:r.route().current("profile.show")},{default:a(()=>e[29]||(e[29]=[o(" Profile ")])),_:1},8,["href","active"]),r.$page.props.jetstream.hasApiFeatures?(s(),M(k,{key:0,href:r.route("api-tokens.index"),active:r.route().current("api-tokens.index")},{default:a(()=>e[30]||(e[30]=[o(" API Tokens ")])),_:1},8,["href","active"])):f("",!0),t("form",{method:"POST",onSubmit:P(g,["prevent"])},[n(k,{as:"button"},{default:a(()=>e[31]||(e[31]=[o(" Log Out ")])),_:1})],32),r.$page.props.jetstream.hasTeamFeatures?(s(),i(S,{key:1},[e[37]||(e[37]=t("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1)),e[38]||(e[38]=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1)),n(k,{href:r.route("teams.show",(Ce=(Me=(Se=r.$page.props)==null?void 0:Se.auth)==null?void 0:Me.user)==null?void 0:Ce.current_team),active:r.route().current("teams.show")},{default:a(()=>e[32]||(e[32]=[o(" Team Settings ")])),_:1},8,["href","active"]),r.$page.props.jetstream.canCreateTeams?(s(),M(k,{key:0,href:r.route("teams.create"),active:r.route().current("teams.create")},{default:a(()=>e[33]||(e[33]=[o(" Create New Team ")])),_:1},8,["href","active"])):f("",!0),((Le=(Te=(je=r.$page.props)==null?void 0:je.auth)==null?void 0:Te.user)==null?void 0:Le.all_teams.length)>1?(s(),i(S,{key:1},[e[35]||(e[35]=t("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1)),e[36]||(e[36]=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1)),(s(!0),i(S,null,Ne((Ae=(ze=(Be=r.$page.props)==null?void 0:Be.auth)==null?void 0:ze.user)==null?void 0:Ae.all_teams,v=>(s(),i("form",{key:v.id,onSubmit:P(h=>l(v),["prevent"])},[n(k,{as:"button"},{default:a(()=>{var h,b,C;return[t("div",Zt,[v.id==((C=(b=(h=r.$page.props)==null?void 0:h.auth)==null?void 0:b.user)==null?void 0:C.current_team_id)?(s(),i("svg",Kt,e[34]||(e[34]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)]))):f("",!0),t("div",null,w(v.name),1)])]}),_:2},1024)],40,It))),128))],64)):f("",!0)],64)):f("",!0)])):(s(),i("div",Qt,[n(k,{href:r.route("login"),active:r.route().current("login")},{default:a(()=>e[39]||(e[39]=[o(" Login ")])),_:1},8,["href","active"]),n(k,{href:r.route("register"),active:r.route().current("register")},{default:a(()=>e[40]||(e[40]=[o(" Register ")])),_:1},8,["href","active"])]))])],2)]),r.$slots.header?(s(),i("header",Ut,[t("div",Xt,[x(r.$slots,"header")])])):f("",!0),t("main",null,[x(r.$slots,"default")]),t("footer",Yt,[t("div",Jt,[t("div",Wt,[t("div",_t,[n(d(y),{href:r.route("welcome"),class:"flex items-center"},{default:a(()=>[n(qe,{class:"block h-15 w-auto"})]),_:1},8,["href"])]),t("div",er,[t("div",null,[e[45]||(e[45]=t("h2",{class:"mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"},"Resources",-1)),t("ul",tr,[t("li",null,[n(d(y),{href:r.route("faq.index"),class:"hover:underline"},{default:a(()=>e[41]||(e[41]=[o("F.A.Q")])),_:1},8,["href"])]),t("li",null,[n(d(y),{href:r.route("about.index"),class:"hover:underline"},{default:a(()=>e[42]||(e[42]=[o("About Us")])),_:1},8,["href"])]),t("li",null,[n(d(y),{href:r.route("plans.index"),class:"hover:underline"},{default:a(()=>e[43]||(e[43]=[o("Pricing")])),_:1},8,["href"])]),e[44]||(e[44]=t("li",null,[t("div",{class:"flex flex-wrap gap-2"},[t("a",{href:"https://status.flashview.link",target:"_blank",class:"hover:underline"},"Status")])],-1))])]),e[51]||(e[51]=Re('<div><h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2><ul class="text-gray-500 dark:text-gray-400 font-medium"><li class="mb-4"><a target="_blank" href="https://github.com/pioneer-dynamics/One-Time-Share" class="hover:underline">Github</a></li><li><a target="_blank" href="https://discord.gg/hGv6XKHuKR" class="hover:underline">Discord</a></li></ul></div>',1)),t("div",null,[e[50]||(e[50]=t("h2",{class:"mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"},"Legal",-1)),t("ul",rr,[t("li",null,[n(d(y),{href:r.route("policy.show"),class:"hover:underline"},{default:a(()=>e[46]||(e[46]=[o("Privacy Policy")])),_:1},8,["href"])]),t("li",null,[n(d(y),{href:r.route("terms.show"),class:"hover:underline"},{default:a(()=>e[47]||(e[47]=[o("Terms & Conditions")])),_:1},8,["href"])]),t("li",null,[n(d(y),{href:r.route("security.show"),class:"hover:underline"},{default:a(()=>e[48]||(e[48]=[o("Security")])),_:1},8,["href"])]),t("li",null,[n(d(y),{href:r.route("license.show"),class:"hover:underline"},{default:a(()=>e[49]||(e[49]=[o("MIT License")])),_:1},8,["href"])])])])])]),e[58]||(e[58]=t("hr",{class:"my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"},null,-1)),t("div",sr,[t("span",ar,[t("div",null,[o("© "+w(new Date().getFullYear())+" ",1),e[52]||(e[52]=t("a",{href:"https://flashview.link/",class:"hover:underline"},"FlashView™",-1)),e[53]||(e[53]=o("."))]),e[54]||(e[54]=t("div",null,"All Rights Reserved.",-1)),e[55]||(e[55]=t("div",null,[o("Made with ❤️ by "),t("a",{target:"_blank",href:"https://www.linkedin.com/in/mathew-paret-b6b96041",class:"hover:underline"},"Mathew Paret"),o(".")],-1)),e[56]||(e[56]=t("div",null,[t("a",{href:"https://status.flashview.link",target:"_blank",class:"hover:underline"},[t("img",{src:"https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/pioneer-dynamics/status.flashview.link/refs/heads/master/api/flash-view-application-server/uptime.json"})])],-1))]),e[57]||(e[57]=Re('<div class="flex mt-4 sm:justify-center sm:mt-0"><a href="https://discord.gg/hGv6XKHuKR" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16"><path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"></path></svg><span class="sr-only">Discord community</span></a><a href="https://github.com/pioneer-dynamics/One-Time-Share" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"></path></svg><span class="sr-only">GitHub account</span></a></div>',1))])])])])],4)])}}};export{lr as _};
