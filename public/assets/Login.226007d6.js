import{_ as S}from"./bionicParper.85051e46.js";import{_ as x,i as p,A as I,u as y,a as C,r as B,b as n,o as L,c as N,d,e as t,w as r,F as U,f as V,g as q,p as A,h as F}from"./index.698d6c22.js";const P=c=>(A("data-v-6cbe7b9d"),c=c(),F(),c),R=P(()=>d("img",{class:"logo",src:S},null,-1)),j=[R],E={class:"login-panel"},T=q("\u767B\u5F55"),z={__name:"Login",setup(c){const _=p("axios"),u=p("message"),l=I(),g=y();C();let b={account:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7",trigger:"blur"},{min:3,max:12,message:"\u8D26\u53F7\u957F\u5EA6\u57283\u523012\u4E2A\u5B57\u7B26",trigger:"blur"}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:"blur"},{min:6,max:18,message:"\u8D26\u53F7\u957F\u5EA6\u57286\u523018\u4E2A\u5B57\u7B26",trigger:"blur"}]};const e=B({account:localStorage.getItem("account"),password:localStorage.getItem("password"),rember:localStorage.getItem("rember")==1}),f=async()=>{let a=await _.post("/admin/login",{account:e.account,password:e.password});a.data.code==200?(l.token=a.data.data.token,l.account=a.data.data.account,l.id=a.data.data.id,e.rember&&(localStorage.setItem("account",e.account),localStorage.setItem("password",e.password),localStorage.setItem("rember",e.rember?1:0)),g.push("/dashboard"),u.info("\u767B\u9646\u6210\u529F")):u.error("\u767B\u9646\u5931\u8D25")};return(a,o)=>{const m=n("n-input"),i=n("n-form-item"),w=n("n-form"),h=n("n-checkbox"),v=n("n-button"),k=n("n-card");return L(),N(U,null,[d("div",{onClick:o[0]||(o[0]=(...s)=>a.homePage&&a.homePage(...s))},j),d("div",E,[t(k,{title:"\u7BA1\u7406\u540E\u53F0\u7CFB\u7EDF"},{footer:r(()=>[t(h,{checked:e.rember,"onUpdate:checked":o[3]||(o[3]=s=>e.rember=s),label:"\u8BB0\u4F4F\u6211"},null,8,["checked"]),t(v,{onClick:f},{default:r(()=>[T]),_:1})]),default:r(()=>[t(w,{rules:V(b),model:e},{default:r(()=>[t(i,{path:"account",label:"\u8D26\u53F7"},{default:r(()=>[t(m,{value:e.account,"onUpdate:value":o[1]||(o[1]=s=>e.account=s),placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7"},null,8,["value"])]),_:1}),t(i,{path:"password",label:"\u5BC6\u7801"},{default:r(()=>[t(m,{value:e.password,"onUpdate:value":o[2]||(o[2]=s=>e.password=s),type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["value"])]),_:1})]),_:1},8,["rules","model"])]),_:1})])],64)}}},H=x(z,[["__scopeId","data-v-6cbe7b9d"]]);export{H as default};
