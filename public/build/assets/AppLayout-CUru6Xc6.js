import{o as r,d as a,u as p,Q as Re,r as F,E as Oe,n as y,a as t,e as m,t as b,h as A,C as Ve,D as Ge,j as N,m as x,G as O,k as Be,y as ze,b as l,w as o,B as He,c as $,i as k,Z as Ie,F as S,f as i,g as De,H as Ae,z as Ze,s as Fe}from"./app-D_39qpHK.js";import{L as Ke}from"./logo-3HeDyDTa.js";import{D as Pe}from"./datetime-DcQSltNB.js";const qe="/build/assets/bg-Bk90_pgC.png",Qe=["src"],Ee={__name:"ApplicationMark",setup(g){return(d,n)=>(r(),a("img",{src:p(Ke),class:"h-24 w-auto"},null,8,Qe))}},Xe={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},Ue={class:"flex items-center justify-between flex-wrap"},Ye={class:"w-0 flex-1 flex items-center min-w-0"},Je={key:0,class:"size-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},We={key:1,class:"size-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},et={class:"ms-3 font-medium text-sm text-white truncate"},tt={class:"shrink-0 sm:ms-3"},st={__name:"Banner",setup(g){const d=Re(),n=F(!0),u=F("success"),s=F("");return Oe(async()=>{var e,f;u.value=((e=d.props.jetstream.flash)==null?void 0:e.bannerStyle)||"success",s.value=((f=d.props.jetstream.flash)==null?void 0:f.banner)||"",n.value=!0}),(e,f)=>(r(),a("div",null,[n.value&&s.value?(r(),a("div",{key:0,class:y({"bg-indigo-500":u.value=="success","bg-red-700":u.value=="danger"})},[t("div",Xe,[t("div",Ue,[t("div",Ye,[t("span",{class:y(["flex p-2 rounded-lg",{"bg-indigo-600":u.value=="success","bg-red-600":u.value=="danger"}])},[u.value=="success"?(r(),a("svg",Je,f[1]||(f[1]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)]))):m("",!0),u.value=="danger"?(r(),a("svg",We,f[2]||(f[2]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1)]))):m("",!0)],2),t("p",et,b(s.value),1)]),t("div",tt,[t("button",{type:"button",class:y(["-me-1 flex p-2 rounded-md focus:outline-none sm:-me-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":u.value=="success","hover:bg-red-600 focus:bg-red-600":u.value=="danger"}]),"aria-label":"Dismiss",onClick:f[0]||(f[0]=A(w=>n.value=!1,["prevent"]))},f[3]||(f[3]=[t("svg",{class:"size-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1)]),2)])])])],2)):m("",!0)]))}},rt={class:"relative"},Ne={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white dark:bg-gray-700"]}},setup(g){const d=g;let n=F(!1);const u=f=>{n.value&&f.key==="Escape"&&(n.value=!1)};Ve(()=>document.addEventListener("keydown",u)),Ge(()=>document.removeEventListener("keydown",u));const s=N(()=>({48:"w-48"})[d.width.toString()]),e=N(()=>d.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":d.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top");return(f,w)=>(r(),a("div",rt,[t("div",{onClick:w[0]||(w[0]=T=>O(n)?n.value=!p(n):n=!p(n))},[x(f.$slots,"trigger")]),Be(t("div",{class:"fixed inset-0 z-40",onClick:w[1]||(w[1]=T=>O(n)?n.value=!1:n=!1)},null,512),[[ze,p(n)]]),l(He,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:o(()=>[Be(t("div",{class:y(["absolute z-50 mt-2 rounded-md shadow-lg",[s.value,e.value]]),style:{display:"none"},onClick:w[2]||(w[2]=T=>O(n)?n.value=!1:n=!1)},[t("div",{class:y(["rounded-md ring-1 ring-black ring-opacity-5",g.contentClasses])},[x(f.$slots,"content")],2)],2),[[ze,p(n)]])]),_:3})]))}},ot={key:0,type:"submit",class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},at=["href"],C={__name:"DropdownLink",props:{href:String,as:String},setup(g){return(d,n)=>(r(),a("div",null,[g.as=="button"?(r(),a("button",ot,[x(d.$slots,"default")])):g.as=="a"?(r(),a("a",{key:1,href:g.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},[x(d.$slots,"default")],8,at)):(r(),$(p(k),{key:2,href:g.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},{default:o(()=>[x(d.$slots,"default")]),_:3},8,["href"]))]))}},E={__name:"NavLink",props:{href:String,active:Boolean},setup(g){const d=g,n=N(()=>d.active?"inline-flex items-center px-1 pt-1 border-b-2 border-gamboge-700 dark:border-gamboge-200 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-gamboge-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 transition duration-150 ease-in-out");return(u,s)=>(r(),$(p(k),{href:g.href,class:y(n.value)},{default:o(()=>[x(u.$slots,"default")]),_:3},8,["href","class"]))}},nt=["href"],j={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(g){const d=g,n=N(()=>d.active?"block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 dark:border-indigo-600 text-start text-base font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300 transition duration-150 ease-in-out":"block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600 transition duration-150 ease-in-out");return(u,s)=>(r(),a("div",null,[g.as=="button"?(r(),a("button",{key:0,class:y([n.value,"w-full text-start"])},[x(u.$slots,"default")],2)):g.as=="a"?(r(),a("a",{key:1,class:y([n.value,"w-full text-start"]),href:g.href},[x(u.$slots,"default")],10,nt)):(r(),$(p(k),{key:2,href:g.href,class:y(n.value)},{default:o(()=>[x(u.$slots,"default")]),_:3},8,["href","class"]))]))}},it={class:"opacity-95"},lt={class:"bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"},dt={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},ut={class:"flex justify-between h-16"},gt={class:"flex"},pt={class:"shrink-0 flex items-center"},ft={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},mt={class:"hidden sm:flex sm:items-center sm:ms-6"},ht={class:"ms-3 relative"},vt={class:"inline-flex rounded-md"},ct={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"},yt={class:"w-60"},bt=["onSubmit"],kt={class:"flex items-center"},xt={key:0,class:"me-2 size-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},wt={key:0,class:"text-sm"},$t={key:0},Mt={class:"ms-3 relative"},St={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Ct=["src","alt"],jt={key:1,class:"inline-flex rounded-md"},Tt={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"},Lt={key:1},_t={class:"-me-2 flex items-center sm:hidden"},Bt={class:"size-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},zt={class:"pt-2 pb-3 space-y-1"},Dt={class:"pt-4 pb-1 border-t border-gray-200 dark:border-gray-600"},At={class:"flex items-center px-4"},Ft={key:0,class:"shrink-0 me-3"},Pt=["src","alt"],Et={class:"font-medium text-base text-gray-800 dark:text-gray-200"},Nt={class:"font-medium text-sm text-gray-500"},Rt={class:"mt-3 space-y-1"},Ot=["onSubmit"],Vt={class:"flex items-center"},Gt={key:0,class:"me-2 size-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Ht={key:0,class:"bg-white dark:bg-gray-800 shadow"},It={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},Zt={class:"bg-white dark:bg-gray-900"},Kt={class:"mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"},qt={class:"md:flex md:justify-between"},Qt={class:"mb-6 md:mb-0"},Xt={href:"https://flowbite.com/",class:"flex items-center"},Ut={class:"grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"},Yt={class:"text-gray-500 dark:text-gray-400 font-medium"},Jt={class:"mb-4"},Wt={class:"text-gray-500 dark:text-gray-400 font-medium space-y-4"},es={class:"sm:flex sm:items-center sm:justify-between"},ts={class:"text-sm text-gray-500 sm:text-center dark:text-gray-400"},as={__name:"AppLayout",props:{title:String},setup(g){const d=F(!1),n=s=>{Fe.put(route("current-team.update"),{team_id:s.id},{preserveState:!1})},u=()=>{Fe.post(route("logout"))};return(s,e)=>{var f,w,T,V,G,H,I,Z,K,q,Q,X,U,Y,J,W,ee,te,se,re,oe,ae,ne,ie,le,de,ue,ge,pe,fe,me,he,ve,ce,ye,be,ke,xe,we,$e,Me,Se,Ce,je,Te;return r(),a("div",null,[l(p(Ie),{title:g.title},null,8,["title"]),l(st),t("div",{class:"bg-gray-50 text-black/50 dark:bg-black dark:text-white/50 bg-cover h-full min-h-screen",style:Ze({"background-image":`url(${p(qe)})`})},[t("div",it,[t("nav",lt,[t("div",dt,[t("div",ut,[t("div",gt,[t("div",pt,[l(p(k),{href:s.route((f=s.$page.props.auth)!=null&&f.user?"dashboard":"welcome")},{default:o(()=>[l(Ee,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),t("div",ft,[(T=(w=s.$page.props)==null?void 0:w.auth)!=null&&T.user?(r(),a(S,{key:0},[l(E,{href:s.route("dashboard"),active:s.route().current("dashboard")},{default:o(()=>e[1]||(e[1]=[i(" Create Secret Message ")])),_:1},8,["href","active"]),l(E,{href:s.route("secrets.index"),active:s.route().current("secrets.index")},{default:o(()=>e[2]||(e[2]=[i(" My Secrets ")])),_:1},8,["href","active"])],64)):m("",!0),(r(),a(S,{key:1},[l(E,{href:s.route("plans.index"),active:s.route().current("plans.index")},{default:o(()=>e[3]||(e[3]=[i(" Pricing ")])),_:1},8,["href","active"]),l(E,{href:s.route("faq.index"),active:s.route().current("faq.index")},{default:o(()=>e[4]||(e[4]=[i(" F.A.Q. ")])),_:1},8,["href","active"])],64))])]),t("div",mt,[t("div",ht,[s.$page.props.jetstream.hasTeamFeatures?(r(),$(Ne,{key:0,align:"right",width:"60"},{trigger:o(()=>{var h,v,c;return[t("span",vt,[t("button",ct,[i(b((c=(v=(h=s.$page.props)==null?void 0:h.auth)==null?void 0:v.user)==null?void 0:c.current_team.name)+" ",1),e[5]||(e[5]=t("svg",{class:"ms-2 -me-0.5 size-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1))])])]}),content:o(()=>{var h,v,c,M,L,_,B,z,D;return[t("div",yt,[e[11]||(e[11]=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1)),l(C,{href:s.route("teams.show",(c=(v=(h=s.$page.props)==null?void 0:h.auth)==null?void 0:v.user)==null?void 0:c.current_team)},{default:o(()=>e[6]||(e[6]=[i(" Team Settings ")])),_:1},8,["href"]),s.$page.props.jetstream.canCreateTeams?(r(),$(C,{key:0,href:s.route("teams.create")},{default:o(()=>e[7]||(e[7]=[i(" Create New Team ")])),_:1},8,["href"])):m("",!0),((_=(L=(M=s.$page.props)==null?void 0:M.auth)==null?void 0:L.user)==null?void 0:_.all_teams.length)>1?(r(),a(S,{key:1},[e[9]||(e[9]=t("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1)),e[10]||(e[10]=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1)),(r(!0),a(S,null,De((D=(z=(B=s.$page.props)==null?void 0:B.auth)==null?void 0:z.user)==null?void 0:D.all_teams,P=>(r(),a("form",{key:P.id,onSubmit:A(R=>n(P),["prevent"])},[l(C,{as:"button"},{default:o(()=>{var R,Le,_e;return[t("div",kt,[P.id==((_e=(Le=(R=s.$page.props)==null?void 0:R.auth)==null?void 0:Le.user)==null?void 0:_e.current_team_id)?(r(),a("svg",xt,e[8]||(e[8]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)]))):m("",!0),t("div",null,b(P.name),1)])]}),_:2},1024)],40,bt))),128))],64)):m("",!0)])]}),_:1})):m("",!0)]),(H=(G=(V=s.$page.props)==null?void 0:V.auth)==null?void 0:G.user)!=null&&H.subscription?(r(),a("div",wt,[i(b((q=(K=(Z=(I=s.$page.props)==null?void 0:I.auth)==null?void 0:Z.user)==null?void 0:K.plan)==null?void 0:q.name)+" ( "+b((Y=(U=(X=(Q=s.$page.props)==null?void 0:Q.auth)==null?void 0:X.user)==null?void 0:U.subscription)==null?void 0:Y.stripe_status)+" ",1),(te=(ee=(W=(J=s.$page.props)==null?void 0:J.auth)==null?void 0:W.user)==null?void 0:ee.subscription)!=null&&te.ends_at?(r(),a("span",$t," till "+b(p(Pe).fromISO((ae=(oe=(re=(se=s.$page.props)==null?void 0:se.auth)==null?void 0:re.user)==null?void 0:oe.subscription)==null?void 0:ae.ends_at).toLocaleString(p(Pe).DATETIME_MED)),1)):m("",!0),e[12]||(e[12]=i(") "))])):m("",!0),t("div",Mt,[(ie=(ne=s.$page.props)==null?void 0:ne.auth)!=null&&ie.user?(r(),$(Ne,{key:0,align:"right",width:"48"},{trigger:o(()=>{var h,v,c,M,L,_,B,z,D;return[s.$page.props.jetstream.managesProfilePhotos?(r(),a("button",St,[t("img",{class:"size-8 rounded-full object-cover",src:(c=(v=(h=s.$page.props)==null?void 0:h.auth)==null?void 0:v.user)==null?void 0:c.profile_photo_url,alt:(_=(L=(M=s.$page.props)==null?void 0:M.auth)==null?void 0:L.user)==null?void 0:_.name},null,8,Ct)])):(r(),a("span",jt,[t("button",Tt,[i(b((D=(z=(B=s.$page.props)==null?void 0:B.auth)==null?void 0:z.user)==null?void 0:D.name)+" ",1),e[13]||(e[13]=t("svg",{class:"ms-2 -me-0.5 size-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1))])]))]}),content:o(()=>{var h,v,c;return[e[19]||(e[19]=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1)),l(C,{href:s.route("profile.show")},{default:o(()=>e[14]||(e[14]=[i(" Profile ")])),_:1},8,["href"]),s.$page.props.jetstream.hasApiFeatures?(r(),$(C,{key:0,href:s.route("api-tokens.index")},{default:o(()=>e[15]||(e[15]=[i(" API Tokens ")])),_:1},8,["href"])):m("",!0),(c=(v=(h=s.$page.props)==null?void 0:h.auth)==null?void 0:v.user)!=null&&c.subscription?(r(),a("span",Lt,[e[17]||(e[17]=t("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1)),l(C,{as:"a",href:s.route("billing")},{default:o(()=>e[16]||(e[16]=[i(" Billing ")])),_:1},8,["href"])])):m("",!0),e[20]||(e[20]=t("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1)),t("form",{onSubmit:A(u,["prevent"])},[l(C,{as:"button"},{default:o(()=>e[18]||(e[18]=[i(" Log Out ")])),_:1})],32)]}),_:1})):(r(),a(S,{key:1},[l(p(k),{href:s.route("login"),class:"rounded-md px-3 py-2 text-gamboge-700 ring-1 ring-transparent transition hover:text-gamboge-200 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"},{default:o(()=>e[21]||(e[21]=[i(" Log in ")])),_:1},8,["href"]),l(p(k),{href:s.route("register"),class:"rounded-md px-3 py-2 text-gamboge-700 ring-1 ring-transparent transition hover:text-gamboge-200 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"},{default:o(()=>e[22]||(e[22]=[i(" Register ")])),_:1},8,["href"])],64))])]),t("div",_t,[t("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",onClick:e[0]||(e[0]=h=>d.value=!d.value)},[(r(),a("svg",Bt,[t("path",{class:y({hidden:d.value,"inline-flex":!d.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),t("path",{class:y({hidden:!d.value,"inline-flex":d.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),t("div",{class:y([{block:d.value,hidden:!d.value},"sm:hidden"])},[t("div",zt,[l(j,{href:s.route("dashboard"),active:s.route().current("dashboard")},{default:o(()=>e[23]||(e[23]=[i(" Dashboard ")])),_:1},8,["href","active"])]),t("div",Dt,[t("div",At,[s.$page.props.jetstream.managesProfilePhotos?(r(),a("div",Ft,[t("img",{class:"size-10 rounded-full object-cover",src:(ue=(de=(le=s.$page.props)==null?void 0:le.auth)==null?void 0:de.user)==null?void 0:ue.profile_photo_url,alt:(fe=(pe=(ge=s.$page.props)==null?void 0:ge.auth)==null?void 0:pe.user)==null?void 0:fe.name},null,8,Pt)])):m("",!0),t("div",null,[t("div",Et,b((ve=(he=(me=s.$page.props)==null?void 0:me.auth)==null?void 0:he.user)==null?void 0:ve.name),1),t("div",Nt,b((be=(ye=(ce=s.$page.props)==null?void 0:ce.auth)==null?void 0:ye.user)==null?void 0:be.email),1)])]),t("div",Rt,[l(j,{href:s.route("profile.show"),active:s.route().current("profile.show")},{default:o(()=>e[24]||(e[24]=[i(" Profile ")])),_:1},8,["href","active"]),s.$page.props.jetstream.hasApiFeatures?(r(),$(j,{key:0,href:s.route("api-tokens.index"),active:s.route().current("api-tokens.index")},{default:o(()=>e[25]||(e[25]=[i(" API Tokens ")])),_:1},8,["href","active"])):m("",!0),t("form",{method:"POST",onSubmit:A(u,["prevent"])},[l(j,{as:"button"},{default:o(()=>e[26]||(e[26]=[i(" Log Out ")])),_:1})],32),s.$page.props.jetstream.hasTeamFeatures?(r(),a(S,{key:1},[e[32]||(e[32]=t("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1)),e[33]||(e[33]=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1)),l(j,{href:s.route("teams.show",(we=(xe=(ke=s.$page.props)==null?void 0:ke.auth)==null?void 0:xe.user)==null?void 0:we.current_team),active:s.route().current("teams.show")},{default:o(()=>e[27]||(e[27]=[i(" Team Settings ")])),_:1},8,["href","active"]),s.$page.props.jetstream.canCreateTeams?(r(),$(j,{key:0,href:s.route("teams.create"),active:s.route().current("teams.create")},{default:o(()=>e[28]||(e[28]=[i(" Create New Team ")])),_:1},8,["href","active"])):m("",!0),((Se=(Me=($e=s.$page.props)==null?void 0:$e.auth)==null?void 0:Me.user)==null?void 0:Se.all_teams.length)>1?(r(),a(S,{key:1},[e[30]||(e[30]=t("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1)),e[31]||(e[31]=t("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1)),(r(!0),a(S,null,De((Te=(je=(Ce=s.$page.props)==null?void 0:Ce.auth)==null?void 0:je.user)==null?void 0:Te.all_teams,h=>(r(),a("form",{key:h.id,onSubmit:A(v=>n(h),["prevent"])},[l(j,{as:"button"},{default:o(()=>{var v,c,M;return[t("div",Vt,[h.id==((M=(c=(v=s.$page.props)==null?void 0:v.auth)==null?void 0:c.user)==null?void 0:M.current_team_id)?(r(),a("svg",Gt,e[29]||(e[29]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)]))):m("",!0),t("div",null,b(h.name),1)])]}),_:2},1024)],40,Ot))),128))],64)):m("",!0)],64)):m("",!0)])])],2)]),s.$slots.header?(r(),a("header",Ht,[t("div",It,[x(s.$slots,"header")])])):m("",!0),t("main",null,[x(s.$slots,"default")]),t("footer",Zt,[t("div",Kt,[t("div",qt,[t("div",Qt,[t("a",Xt,[l(Ee,{class:"block h-15 w-auto"})])]),t("div",Ut,[t("div",null,[e[36]||(e[36]=t("h2",{class:"mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"},"Resources",-1)),t("ul",Yt,[t("li",Jt,[l(p(k),{href:s.route("faq.index"),class:"hover:underline"},{default:o(()=>e[34]||(e[34]=[i("F.A.Q")])),_:1},8,["href"])]),t("li",null,[l(p(k),{href:s.route("plans.index"),class:"hover:underline"},{default:o(()=>e[35]||(e[35]=[i("Pricing")])),_:1},8,["href"])])])]),e[41]||(e[41]=Ae('<div><h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2><ul class="text-gray-500 dark:text-gray-400 font-medium"><li class="mb-4"><a target="_blank" href="https://github.com/pioneer-dynamics/One-Time-Share" class="hover:underline">Github</a></li><li><a target="_blank" href="https://discord.gg/hGv6XKHuKR" class="hover:underline">Discord</a></li></ul></div>',1)),t("div",null,[e[40]||(e[40]=t("h2",{class:"mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"},"Legal",-1)),t("ul",Wt,[t("li",null,[l(p(k),{href:s.route("policy.show"),class:"hover:underline"},{default:o(()=>e[37]||(e[37]=[i("Privacy Policy")])),_:1},8,["href"])]),t("li",null,[l(p(k),{href:s.route("terms.show"),class:"hover:underline"},{default:o(()=>e[38]||(e[38]=[i("Terms & Conditions")])),_:1},8,["href"])]),t("li",null,[l(p(k),{href:s.route("license.show"),class:"hover:underline"},{default:o(()=>e[39]||(e[39]=[i("MIT License")])),_:1},8,["href"])])])])])]),e[47]||(e[47]=t("hr",{class:"my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"},null,-1)),t("div",es,[t("span",ts,[i("© "+b(new Date().getFullYear())+" ",1),e[42]||(e[42]=t("a",{href:"https://flashview.link/",class:"hover:underline"},"FlashView™",-1)),e[43]||(e[43]=i(". All Rights Reserved. Made with ❤️ by ")),e[44]||(e[44]=t("a",{target:"_blank",href:"https://www.linkedin.com/in/mathew-paret-b6b96041",class:"hover:underline"},"Mathew Paret",-1)),e[45]||(e[45]=i(". "))]),e[46]||(e[46]=Ae('<div class="flex mt-4 sm:justify-center sm:mt-0"><a href="https://discord.gg/hGv6XKHuKR" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16"><path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"></path></svg><span class="sr-only">Discord community</span></a><a href="https://github.com/pioneer-dynamics/One-Time-Share" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"><svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"></path></svg><span class="sr-only">GitHub account</span></a></div>',1))])])])])],4)])}}};export{as as _};