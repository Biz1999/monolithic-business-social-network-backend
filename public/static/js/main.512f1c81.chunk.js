(this["webpackJsonpsuperar-web"]=this["webpackJsonpsuperar-web"]||[]).push([[0],{74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(39),r=a.n(s),i=a(7),o=a.n(i),l=a(14),u=a(4),j=a(24),d=a(5),b=a(40),m=a.n(b).a.create({baseURL:"http://177.190.201.227:3000"}),h=a(0),x=Object(c.createContext)({});function O(e){var t=e.children,a=Object(c.useState)({}),n=Object(u.a)(a,2),s=n[0],r=n[1],i=new j.a,b=Object(d.g)();function O(){return(O=Object(l.a)(o.a.mark((function e(t){var a,c,n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.email,c=t.password,e.prev=1,e.next=4,m.post("/login",{email:a,password:c});case 4:n=e.sent,s={data:n.data.data,access_token:n.data.access_token},m.defaults.headers.authorization="Bearer ".concat(s.access_token),r(s),i.set("@SuperarParaInovar:user",s,{path:"/",maxAge:259200}),b.push("/home"),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(1),new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function v(){var e=i.get("@SuperarParaInovar:user");e&&(m.defaults.headers.authorization="Bearer ".concat(e.access_token)),e&&b.push("/home"),r(e)}return Object(c.useEffect)((function(){v()}),[]),Object(h.jsx)(x.Provider,{value:{colaborador:s,LoadCookie:v,SignIn:function(e){return O.apply(this,arguments)},SignOut:function(){try{i.remove("@SuperarParaInovar:user"),r({}),m.defaults.headers.authorization="",b.push("/")}catch(e){throw new Error(e)}}},children:t})}function v(){return Object(c.useContext)(x)}function p(e){var t=e.children;return Object(h.jsx)(O,{children:t})}var f=a(19),g=(a(74),a(25)),N=a(43),k=a.p+"static/media/SPI_Logo_semFundo.da322953.svg",S=a.p+"static/media/Superar_Inovar_SPI_Logo_2021-Color2.25748487.png",C=a.p+"static/media/HOME.cde2142c.svg",w=a(89),y=a(86),_=a(88),E=a.p+"static/media/arrow_open.81ec6ccd.svg",P=a.p+"static/media/arrow_closed.d0b8f36a.svg",B=a.p+"static/media/check_aceito.6fa9aa0f.svg",I=a.p+"static/media/check_rejeitado.abd7f995.svg";a(75);function L(e){var t=e.categoriaExp,a=e.categoria,n=e.legenda,s=e.photos,r=e.id,i=e.fetchPendencias,j=Object(c.useState)(!0),d=Object(u.a)(j,2),b=d[0],x=d[1],O=Object(c.useState)(""),v=Object(u.a)(O,2),p=v[0],f=v[1];function g(e){return N.apply(this,arguments)}function N(){return(N=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.put("/pilares/saude/pendente/".concat(r),{status:t,categoria:a,justificativa:p});case 3:i(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(h.jsxs)("div",{className:"cardContent",children:[Object(h.jsxs)("div",{className:"cardText",children:[Object(h.jsxs)("p",{className:"categoria",children:["Categoria: ",t]}),Object(h.jsx)("p",{className:"textoEnvio",children:n})]}),Object(h.jsx)("div",{className:"cardImgs",children:null===s||void 0===s?void 0:s.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"cardImg",src:e.uri,alt:""})},e.id)}))}),Object(h.jsxs)("div",{className:"cardButtons",children:[b?Object(h.jsx)("div",{className:"preRejBox",children:Object(h.jsx)("button",{className:"rejeitar",onClick:function(){return x(!1)},children:Object(h.jsx)("img",{className:"ico",src:I,alt:""})})}):Object(h.jsxs)("div",{className:"rejBox",children:[Object(h.jsx)("button",{className:"rejeitando",onClick:function(){return g("recusado")},children:Object(h.jsx)("img",{className:"ico",src:I,alt:""})}),Object(h.jsx)("p",{className:"textFix",children:"Justificativa:"}),Object(h.jsx)("input",{className:"textBox",type:"text",onChange:function(e){return f(e.target.value)}})]}),Object(h.jsx)("button",{className:"aceitarSaude",onClick:function(){return g("aprovado")},children:Object(h.jsx)("img",{className:"ico",src:B,alt:""})})]})]})}a(76);function T(e){var t=e.categoriaExp,a=e.categoria,n=e.descricao,s=e.files,r=e.id,i=(e.pontuacao,e.fetchPendencias),j=Object(c.useState)(!0),d=Object(u.a)(j,2),b=d[0],x=d[1],O=Object(c.useState)(!1),v=Object(u.a)(O,2),p=v[0],f=v[1],g=Object(c.useState)(""),N=Object(u.a)(g,2),k=N[0],S=N[1],C=Object(c.useState)(0),w=Object(u.a)(C,2),y=w[0],_=w[1];function E(){return(E=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(y>0&&y<20)){e.next=10;break}return e.prev=1,e.next=4,m.put("/pilares/conhecimento/pendente/".concat(r),{status:"aprovado",categoria:a,pontuacao:y,justificativa:k});case 4:i(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function P(){return(P=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.put("/pilares/conhecimento/pendente/".concat(r),{status:"recusado",categoria:a,pontuacao:0,justificativa:k});case 3:i(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(h.jsxs)("div",{className:"cardContent",children:[Object(h.jsxs)("div",{className:"cardText",children:[Object(h.jsxs)("p",{className:"categoria",children:["Categoria: ",t]}),Object(h.jsx)("p",{className:"textoEnvio",children:n})]}),Object(h.jsx)("div",{className:"cardImgs",children:null===s||void 0===s?void 0:s.map((function(e){return Object(h.jsx)("div",{children:e.uri.includes(".pdf")?Object(h.jsx)("a",{href:e.uri,target:"_blank",children:Object(h.jsx)("div",{className:"cardPdf",children:e.uri.substring(e.uri.lastIndexOf("/")+1).substring(0,20)})}):Object(h.jsx)("img",{className:"cardImg",src:e.uri,alt:""})},e.id)}))}),Object(h.jsxs)("div",{className:"cardButtons",children:[b?Object(h.jsx)("div",{className:"preRejBox",children:Object(h.jsx)("button",{className:"rejeitar",onClick:function(){return x(!1)},children:Object(h.jsx)("img",{className:"ico",src:I,alt:""})})}):Object(h.jsxs)("div",{className:"rejBox",children:[Object(h.jsx)("button",{className:"rejeitando",onClick:function(){return P.apply(this,arguments)},children:Object(h.jsx)("img",{className:"ico",src:I,alt:""})}),Object(h.jsx)("p",{className:"textFix",children:"Justificativa:"}),Object(h.jsx)("input",{className:"textBox",type:"text",onChange:function(e){return S(e.target.value)}})]}),p?Object(h.jsxs)("div",{className:"acBox2",children:[Object(h.jsx)("p",{className:"valueText",children:"Pontos:"}),Object(h.jsx)("input",{className:"valueBox",type:"number",onChange:function(e){return _(e.target.valueAsNumber)}}),Object(h.jsx)("button",{className:"aceitando",onClick:function(){return E.apply(this,arguments)},children:Object(h.jsx)("img",{className:"ico",src:B,alt:""})})]}):Object(h.jsx)("div",{className:"acBox1",children:Object(h.jsx)("button",{className:"aceitar",onClick:function(){return f(!0)},children:Object(h.jsx)("img",{className:"ico",src:B,alt:""})})})]})]})}a(77);var A=a(87);function D(e){var t=e.post,a=e.vars,n=e.valTab,s=e.fetchPendencias,r=Object(c.useState)([]),i=Object(u.a)(r,2),o=(i[0],i[1],Object(c.useState)(!1)),l=Object(u.a)(o,2),j=l[0],d=l[1],b=Object(w.a)(new Date,new Date(t.pilar.data_inclusao)),m=Math.floor(b/24),x=b-24*m,O=function(e){return String(e).padStart(2)};"".concat(0!==m?"H\xe1 "+O(m)+" dias e ":"").concat(O(x)+" horas");return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{style:{borderBottomWidth:j?"1px":"0px"},className:"row",children:[Object(h.jsx)("div",{className:"colabDiv",children:Object(h.jsx)("div",{children:t.pilar.colaborador.nome})}),Object(h.jsx)("div",{className:"timeDiv",children:Object(h.jsx)("div",{children:function(){var e,a=Object(_.a)(new Date(null===t||void 0===t||null===(e=t.pilar)||void 0===e?void 0:e.data_inclusao),"America/Sao_Paulo");return Object(y.a)(a,{locale:A.a,addSuffix:!0})}()})}),Object(h.jsx)("div",{className:"arrowDiv",children:Object(h.jsx)("button",{className:"arrowBut",onClick:function(){return d(!j)},children:j?Object(h.jsx)("img",{className:"ico",src:E,alt:""}):Object(h.jsx)("img",{className:"ico",src:P,alt:""})})})]}),Object(h.jsx)("div",{className:j?"rowContentOpen":"rowContentClosed",children:j&&Object(h.jsx)("div",{className:"contentContainer",children:"Sa\xfade"===n?Object(h.jsx)(L,{categoriaExp:a.map((function(e){return t.categoria===e.key&&e.value})),categoria:t.categoria,legenda:t.legenda,photos:t.photos,id:t.pilar.id,fetchPendencias:s}):Object(h.jsx)(T,{categoriaExp:a.map((function(e){return t.categoria===e.key&&e.value})),categoria:t.categoria,descricao:t.descricao,files:t.files,id:t.pilar.id,pontuacao:t.pilar.pontuacao,fetchPendencias:s})})})]})}a(78);var F=new Map;function V(e){var t=e.valTab,a=Object(c.useState)([]),n=Object(u.a)(a,2),s=n[0],r=n[1],i=Object(c.useState)(1),j=Object(u.a)(i,2),d=j[0],b=j[1];function x(){return O.apply(this,arguments)}function O(){return(O=Object(l.a)(o.a.mark((function e(){var a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d<=0&&b(1),e.prev=1,e.next=4,m.get("Sa\xfade"===t?"/pilares/saude/pendentes?_page=".concat(d,"&limit=10"):"/pilares/conhecimento/pendentes?_page=".concat(d,"&limit=10"));case 4:a=e.sent,c=a.data,r(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){r([]),x()}),[d,t]),Object(h.jsxs)("div",{className:"validationScreen",children:[!1,Object(h.jsx)("div",{className:"cardList",children:s.map((function(e){return e.categoria,Object(h.jsx)(D,{post:e,vars:F.get(t).vars,valTab:t,fetchPendencias:x},e.id)}))}),Object(h.jsxs)("div",{className:"pageNav",children:[Object(h.jsx)("button",{className:"dubArrow",onClick:function(){return b(1)},children:"<<"}),Object(h.jsx)("button",{className:"arrow",onClick:function(){return b((function(e){return e-1}))},children:"<"}),Object(h.jsx)("button",{className:"arrow",onClick:function(){return b((function(e){return e+1}))},children:">"}),Object(h.jsx)("input",{className:"pageNum",type:"number",value:d,readOnly:!0,onWheel:function(e){return e.currentTarget.blur()}}),Object(h.jsx)("input",{className:"pageNumDisplay",type:"number",onKeyDown:function(e){"Enter"!==e.key||isNaN(e.target.valueAsNumber)||(b(e.target.valueAsNumber),e.target.value=null,e.target.blur(),x())},onWheel:function(e){return e.currentTarget.blur()}})]})]})}F.set("Sa\xfade",{head:"da sa\xfade",vars:[{key:"alimentacao",value:"Alimenta\xe7\xe3o saudavel"},{key:"exercicio",value:"Exerc\xedcio f\xedsico"},{key:"exercise",value:"Exerc\xedcio f\xedsico2"},{key:"donate",value:"Doa\xe7\xe3o"}]}),F.set("Conhecimento",{head:"do conhecimento",vars:[{key:"article",value:"Artigo"},{key:"book",value:"Leitura de livro"}]});a(79);function W(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"Em constru\xe7\xe3o"})})}a(80);function H(){var e,t=Object(c.useState)("Valida\xe7\xe3o"),a=Object(u.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)("Geral"),i=Object(u.a)(r,2),o=i[0],l=i[1],j=v().colaborador,d=v().SignOut;return Object(h.jsxs)("div",{className:"home",children:[Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("img",{className:"logoSpi",src:k,alt:""}),Object(h.jsx)("img",{className:"logoSuperar",src:S,alt:""}),Object(h.jsx)("div",{className:"userName",children:null===j||void 0===j||null===(e=j.data)||void 0===e?void 0:e.nome})]}),Object(h.jsxs)("nav",{children:[Object(h.jsxs)("div",{className:"tab",children:[Object(h.jsxs)("div",{className:"tabLeft",children:[Object(h.jsx)("div",{className:"homeTab",children:Object(h.jsx)("button",{className:"Home"===n?"active":"inactive",onClick:function(){return s("Home")},children:Object(h.jsx)("div",{className:"homeBox",children:Object(h.jsx)("img",{className:"homeIco",src:C,alt:""})})})}),Object(h.jsx)("div",{className:"valiTab",children:Object(h.jsx)("button",{className:"Valida\xe7\xe3o"===n?"active":"inactive",onClick:function(){return s("Valida\xe7\xe3o")},children:"Valida\xe7\xe3o"})}),Object(h.jsx)("div",{className:"admTab",children:Object(h.jsx)("button",{className:"Admin"===n?"active":"inactive",onClick:function(){return s("Admin")},children:"Admin"})})]}),Object(h.jsx)("div",{className:"tabRight",children:Object(h.jsx)("div",{className:"logOut",children:Object(h.jsx)("button",{className:"inactive",onClick:function(){d()},children:"Log Out"})})})]}),"Valida\xe7\xe3o"===n&&Object(h.jsx)("div",{className:"tabSub",children:Object(h.jsxs)("div",{className:"tabSubBts",children:[Object(h.jsx)("button",{className:"Geral"===o?"activeSub":"inactive",onClick:function(){return l("Geral")},children:"Vis\xe3o geral"}),Object(h.jsx)("button",{className:"Sa\xfade"===o?"activeSub":"inactive",onClick:function(){return l("Sa\xfade")},children:"Sa\xfade"}),Object(h.jsx)("button",{className:"Conhecimento"===o?"activeSub":"inactive",onClick:function(){return l("Conhecimento")},children:"Conhecimento"})]})})]}),"Home"===n&&Object(h.jsx)("div",{id:"Home",className:"tabcontent",children:Object(h.jsx)("h1",{children:"Em constru\xe7\xe3o"})}),"Valida\xe7\xe3o"===n&&Object(h.jsx)("div",{id:"Valida\xe7\xe3o",className:"tabcontent",children:"Geral"!==o?Object(h.jsx)(V,{valTab:o}):Object(h.jsx)(W,{})}),"Admin"===n&&Object(h.jsx)("div",{id:"Admin",className:"tabcontent",children:Object(h.jsx)("a",{className:"tabLink",target:"_blank",href:"https://spiintegradora-my.sharepoint.com/:x:/g/personal/caio_silva_integradora_com_br/EVWM1gNELYxGuqkZPWrWvk8BvDvs3baEagFQ8-Wf6_to0Q",children:"Link para editar a tabela"})})]})}a(81);function G(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(u.a)(s,2),i=r[0],j=r[1],b=v().SignIn;Object(d.g)();function m(){return(m=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={email:a,password:i},e.prev=1,e.next=4,b(t);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})))).apply(this,arguments)}return Object(h.jsx)("div",{className:"login",children:Object(h.jsxs)("div",{className:"loginPage",children:[Object(h.jsx)("div",{className:"loginImg",children:Object(h.jsx)("div",{className:"imgDiv",children:Object(h.jsx)("img",{className:"logoSuperar",src:S,alt:""})})}),Object(h.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault()},children:[Object(h.jsx)("div",{className:"loginText",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"h1Login",children:"Sign in"}),Object(h.jsx)("div",{className:"h2Login",children:"Entre com sua conta"}),Object(h.jsxs)("div",{className:"h3Login",children:["E acompanhe tudo sobre ",Object(h.jsx)("br",{}),"o Superar Para Inovar"]})]})}),Object(h.jsxs)("div",{className:"loginForm",children:[Object(h.jsx)("div",{children:"Email"}),Object(h.jsx)("input",{type:"text",onChange:function(e){return n(e.target.value)}}),Object(h.jsx)("div",{children:"Senha"}),Object(h.jsx)("input",{type:"password",onChange:function(e){return j(e.target.value)}})]}),Object(h.jsx)("input",{value:"Sign in",type:"submit",className:"submitLogin",onClick:function(){return m.apply(this,arguments)}}),Object(h.jsx)("div",{className:"createDiv",children:Object(h.jsx)("div",{children:"N\xe3o tem cadastro? Crie sua conta no App\xa0 "})})]})]})})}var M=function(e){var t=e.component,a=Object(N.a)(e,["component"]);return Object(h.jsx)(d.b,Object(g.a)(Object(g.a)({},a),{},{render:function(e){return(new j.a).get("@SuperarParaInovar:user")?Object(h.jsx)(t,Object(g.a)({},e)):Object(h.jsx)(d.a,{to:{pathname:"/",state:{from:e.location}}})}}))},J=function(){return Object(h.jsxs)(d.d,{children:[Object(h.jsx)(M,{path:"/home",component:function(){return Object(h.jsx)(H,{})}}),Object(h.jsx)(d.b,{exact:!0,path:"/",component:function(){return Object(h.jsx)(G,{})}})]})};var R=function(){return Object(h.jsx)(f.a,{children:Object(h.jsx)(p,{children:Object(h.jsx)(J,{})})})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,90)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(R,{})}),document.getElementById("root")),z()}},[[82,1,2]]]);
//# sourceMappingURL=main.512f1c81.chunk.js.map