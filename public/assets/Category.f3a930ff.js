import{i as g,A as V,u as j,a as F,j as f,r as b,k as L,b as u,o as k,c as w,e as l,w as o,d as t,F as P,m as R,t as U,g as r}from"./index.698d6c22.js";const S=r("\u6DFB\u52A0"),E=t("thead",null,[t("tr",null,[t("th",null,"\u7F16\u53F7"),t("th",null,"\u540D\u79F0"),t("th",null,"\u64CD\u4F5C")])],-1),q=r("\u4FEE\u6539"),z=r("\u5220\u9664"),G=t("div",null,"\u6DFB\u52A0\u5206\u7C7B",-1),H=r("\u63D0\u4EA4"),I=t("div",null,"\u4FEE\u6539\u5206\u7C7B",-1),J=r("\u63D0\u4EA4"),W={__name:"Category",setup(K){const c=g("axios"),s=g("message"),C=g("dialog");V(),j(),F();const h=f([]),_=f(!1),m=f(!1),v=b({name:""}),d=b({id:"",name:""});L(()=>{p()});const p=async()=>{let e=await c.get("/category/list");h.value=e.data.rows},N=async()=>{let e=await c.post("/category/_token/add",{name:v.name});e.data.code==200?(p(),s.info(e.data.msg)):s.error(e.data.msg),_.value=!1},T=async e=>{C.warning({title:"\u8B66\u544A",content:"\u662F\u5426\u786E\u5B9A\u5220\u9664\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:async()=>{let a=await c.delete(`/category/_token/delete?id=${e.id}`);a.data.code==200?(p(),s.info(a.data.msg)):s.error(a.data.msg)},onNegativeClick:()=>{}})},D=async e=>{m.value=!0,d.id=e.id,d.name=e.name},$=async()=>{C.warning({title:"\u8B66\u544A",content:"\u662F\u5426\u786E\u5B9A\u4FEE\u6539\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:async()=>{let e=await c.put("/category/_token/update",{id:d.id,name:d.name});e.data.code==200?(p(),s.info(e.data.msg)):s.error(e.data.msg),m.value=!1},onNegativeClick:()=>{}})};return(e,a)=>{const i=u("n-button"),A=u("n-space"),B=u("n-table"),y=u("n-input"),x=u("n-modal");return k(),w("div",null,[l(i,{onClick:a[0]||(a[0]=n=>_.value=!0)},{default:o(()=>[S]),_:1}),l(B,{bordered:!1,"single-line":!1},{default:o(()=>[E,t("tbody",null,[(k(!0),w(P,null,R(h.value,(n,O)=>(k(),w("tr",null,[t("td",null,U(n.id),1),t("td",null,U(n.name),1),t("td",null,[l(A,null,{default:o(()=>[l(i,{onClick:M=>D(n)},{default:o(()=>[q]),_:2},1032,["onClick"]),l(i,{onClick:M=>T(n)},{default:o(()=>[z]),_:2},1032,["onClick"])]),_:2},1024)])]))),256))])]),_:1}),l(x,{show:_.value,"onUpdate:show":a[2]||(a[2]=n=>_.value=n),preset:"dialog",title:"Dialog"},{header:o(()=>[G]),action:o(()=>[t("div",null,[l(i,{onClick:N},{default:o(()=>[H]),_:1})])]),default:o(()=>[t("div",null,[l(y,{value:v.name,"onUpdate:value":a[1]||(a[1]=n=>v.name=n),type:"text",placeholder:"\u8BF7\u8F93\u5165\u8981\u6DFB\u52A0\u7684\u5206\u7C7B\u540D\u79F0"},null,8,["value"])])]),_:1},8,["show"]),l(x,{show:m.value,"onUpdate:show":a[4]||(a[4]=n=>m.value=n),preset:"dialog",title:"Dialog"},{header:o(()=>[I]),action:o(()=>[t("div",null,[l(i,{onClick:$},{default:o(()=>[J]),_:1})])]),default:o(()=>[t("div",null,[l(y,{value:d.name,"onUpdate:value":a[3]||(a[3]=n=>d.name=n),type:"text",placeholder:"\u8BF7\u8F93\u5165\u8981\u4FEE\u6539\u7684\u5206\u7C7B\u540D\u79F0"},null,8,["value"])])]),_:1},8,["show"])])}}};export{W as default};