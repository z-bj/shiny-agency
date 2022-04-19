var D=Object.defineProperty;var F=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var I=(e,r,s)=>r in e?D(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s,E=(e,r)=>{for(var s in r||(r={}))z.call(r,s)&&I(e,s,r[s]);if(F)for(var s of F(r))M.call(r,s)&&I(e,s,r[s]);return e};import{U as V,s as n,L as m,j as Y,r as f,u as O,P as b,W as S,R as K,a as N,B as T,b as X,c as x}from"./vendor.4c71f578.js";const j=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=s(o);fetch(o.href,l)}};j();const c={primary:"#5843E4",secondary:"#8186A0",backgroundLight:"#F9F9FC",backgroundDark:"#4F4C6B",dark:"#2F2E41"},H=V`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`,L=n.div`
  padding: 10px;
  border: 6px solid ${c.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${H} 1s infinite linear;
  height: 0;
  width: 0;
`,g=n(m)`
  padding: 10px 15px;
  color: ${({$theme:e})=>e==="light"?"#8186a0":"#ffffff"};
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${e=>e.$isFullLink&&`color: white; 
    border-radius: 30px; 
    background-color: ${c.primary};`}
`,t=Y.exports.jsx,a=Y.exports.jsxs,P=f.exports.createContext(),R=({children:e})=>{const[r,s]=f.exports.useState("light"),i=()=>{s(r==="light"?"dark":"light")};return t(P.Provider,{value:{theme:r,toggleTheme:i},children:e})},v=f.exports.createContext(),G=({children:e})=>{const[r,s]=f.exports.useState({}),i=o=>{s(E(E({},r),o))};return t(v.Provider,{value:{answers:r,saveAnswers:i},children:e})};function k(e){const[r,s]=f.exports.useState({}),[i,o]=f.exports.useState(!0),[l,d]=f.exports.useState(!1);return f.exports.useEffect(()=>{if(!e)return;o(!0);async function p(){try{const y=await(await fetch(e)).json();s(y)}catch(u){console.log(u),d(!0)}finally{o(!1)}}p()},[e]),{isLoading:i,data:r,error:l}}function h(){const{theme:e,toggleTheme:r}=f.exports.useContext(P);return{theme:e,toggleTheme:r}}var q="/shiny-agency/assets/home-illustration.ce906438.svg";const J=n.div`
  display: flex;
  justify-content: center;
`,Z=n.div`
  margin: 30px;
  background-color: ${({theme:e})=>e==="light"?c.backgroundLight:c.backgroundDark};
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`,Q=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${g} {
    max-width: 250px;
  }
`,$=n.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
  color: ${({theme:e})=>e==="light"?"#000000":"#ffffff"};
`,_=n.img`
  flex: 1;
`;function ee(e,r){return e+r}function te(){const{theme:e}=h();return t(J,{children:a(Z,{theme:e,children:[ee(40,2),a(Q,{children:[t($,{theme:e,children:"Rep\xE9rez vos besoins, on s\u2019occupe du reste, avec les meilleurs talents"}),t(g,{to:"/survey/1",$isFullLink:!0,children:"Faire le test"})]}),t(_,{src:q})]})})}const re=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,ne=n.h2`
  text-decoration: underline;
  text-decoration-color: ${c.primary};
  color: ${({theme:e})=>e==="light"?"#000000":"#ffffff"};
`,oe=n.span`
  margin: 30px;
  color: ${({theme:e})=>e==="light"?"#000000":"#ffffff"};
`,se=n.div`
  padding-top: 30px;
  & a {
    color: ${({theme:e})=>e==="light"?"#000000":"#ffffff"};
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`,W=n.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e})=>e==="light"?c.backgroundLight:c.backgroundDark};
  color: ${({theme:e})=>e==="light"?"#000000":"#ffffff"};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${e=>e.isSelected?`0px 0px 0px 2px ${c.primary} inset`:"none"};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`,ie=n.div`
  display: flex;
  flex-direction: row;
`;function le(){const{questionNumber:e}=O(),r=parseInt(e),s=r===1?1:r-1,i=r+1,{theme:o}=h(),{saveAnswers:l,answers:d}=f.exports.useContext(v);function p(U){l({[e]:U})}const{data:u,isLoading:y,error:B}=k("http://localhost:8000/survey"),A=u==null?void 0:u.surveyData;return B?t("span",{children:"Oups il y a eu un probl\xE8me"}):a(re,{children:[a(ne,{theme:o,children:["Question ",e]}),y?t(L,{}):t(oe,{theme:o,children:A[e]}),a(ie,{children:[t(W,{onClick:()=>p(!0),isSelected:d[e]===!0,theme:o,children:"Oui"}),t(W,{onClick:()=>p(!1),isSelected:d[e]===!1,theme:o,children:"Non"})]}),a(se,{theme:o,children:[t(m,{to:`/survey/${s}`,children:"Pr\xE9c\xE9dent"}),A&&A[r+1]?t(m,{to:`/survey/${i}`,children:"Suivant"}):t(m,{to:"/results",children:"R\xE9sultats"})]})]})}const ce=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({theme:e})=>e==="light"?c.backgroundLight:c.backgroundDark};
`,ae=n.h2`
  color: ${({theme:e})=>e==="light"?"#000000":"#ffffff"};
  font-weight: bold;
  font-size: 28px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
`,de=n.div`
  padding: 60px;
`,w=n.span`
  color: ${({theme:e})=>e==="light"?c.primary:c.backgroundLight};
  text-transform: capitalize;
`,pe=n.div`
  font-size: 18px;
  & > p {
    color: ${({theme:e})=>e==="light"?c.secondary:"#ffffff"};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`,ue=n.div`
  display: flex;
  justify-content: center;
`;function fe(e){return Object.keys(e).reduce((s,i,o)=>`${s}${o===0?"":"&"}a${i}=${e[i]}`,"")}function he(){const{theme:e}=h(),{answers:r}=f.exports.useContext(v),s=fe(r),{data:i,isLoading:o,error:l}=k(`http://localhost:8000/results?${s}`);if(l)return t("span",{children:"Il y a un probl\xE8me"});const d=i==null?void 0:i.resultsData;return o?t(ue,{children:t(L,{})}):a(ce,{theme:e,children:[a(ae,{theme:e,children:["Les comp\xE9tences dont vous avez besoin :",d&&d.map((p,u)=>a(w,{theme:e,children:[p.title,u===d.length-1?"":","]},`result-title-${u}-${p.title}`))]}),t(g,{$isFullLink:!0,to:"/freelances",children:"D\xE9couvrez nos profils"}),t(de,{children:d&&d.map((p,u)=>a(pe,{theme:e,children:[t(w,{theme:e,children:p.title}),t("p",{children:p.description})]},`result-detail-${u}-${p.title}`))})]})}var ge="data:image/png;base64,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";const xe=n.span`
  color: ${({theme:e})=>e==="light"?c.primary:"#ffffff"};
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`,me=n.span`
  color: ${({theme:e})=>e==="light"?"#000000":"#ffffff"};
  font-size: 22px;
  font-weight: normal;
  align-self: center;
`,ye=n.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
`,Ae=n.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: ${({theme:e})=>e==="light"?c.backgroundLight:c.backgroundDark};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  &:hover {
    cursor: pointer;
  }
`;function C({label:e,title:r,picture:s}){const{theme:i}=h();return a(Ae,{theme:i,children:[t(xe,{theme:i,children:e}),t(ye,{src:s,alt:"freelance"}),t(me,{theme:i,children:r})]})}C.propTypes={label:b.string.isRequired,title:b.string.isRequired,picture:b.string.isRequired};C.defaultProps={label:"",title:"",picture:ge};const Ee=n.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`,be=n.h1`
  font-size: 30px;
  text-align: center;
  padding-bottom: 30px;
  color: ${({theme:e})=>e==="light"?"#000000":"#ffffff"};
`,Le=n.h2`
  font-size: 20px;
  color: ${c.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
  color: ${({theme:e})=>e==="light"?"#000000":"#ffffff"};
`,ve=n.div`
  display: flex;
  justify-content: center;
`;function ke(){const{theme:e}=h(),{data:r,isLoading:s,error:i}=k("http://localhost:8000/freelances"),o=r==null?void 0:r.freelancersList;return i?t("span",{children:"Oups il y a eu un probl\xE8me"}):a("div",{children:[t(be,{theme:e,children:"Trouvez votre prestataire"}),t(Le,{theme:e,children:"Chez Shiny nous r\xE9unissons les meilleurs profils pour vous."}),s?t(ve,{children:t(L,{theme:e})}):t(Ee,{children:o.map((l,d)=>t(C,{label:l.job,title:l.name,picture:l.picture},`${l.name}-${d}`))})]})}var Ce="/shiny-agency/assets/light-logo.988e539e.png",Fe="/shiny-agency/assets/dark-logo.9bd195bd.png";const Ie=n.img`
  height: 70px;
`,We=n.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;function we(){const{theme:e}=h();return a(We,{children:[t(m,{to:"/",children:t(Ie,{src:e==="light"?Fe:Ce})}),a("div",{children:[t(g,{$theme:e,to:"/",children:"Accueil"}),t(g,{$theme:e,to:"/freelances",children:"Profils"}),t(g,{to:"/survey/1",$isFullLink:!0,children:"Faire le test"})]})]})}const Ye=n.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`,Pe=n.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${c.secondary};
`;function Be(){const{toggleTheme:e,theme:r}=h();return t(Ye,{children:a(Pe,{onClick:()=>e(),children:["Changer de mode : ",r==="light"?"\u2600\uFE0F":"\u{1F319}"]})})}var Ue="/shiny-agency/assets/404.7c69f6f2.svg";const De=n.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e==="light"?c.backgroundLight:c.backgroundDark};
  align-items: center;
`,ze=n.h1`
  color: ${({theme:e})=>e==="light"?"#000000":"#ffffff"};
  font-weight: 300;
`,Me=n.h2`
  color: ${({theme:e})=>e==="light"?c.secondary:"#ffffff"};
  font-weight: 300;
`,Ve=n.img`
  max-width: 800px;
`;function Oe(){const{theme:e}=h();return a(De,{theme:e,children:[t(ze,{theme:e,children:"Oups..."}),t(Ve,{src:Ue}),t(Me,{theme:e,children:"Il semblerait que la page que vous cherchez n\u2019existe pas"})]})}const Se=S`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
        background-color: ${e=>e.isDarkMode?"#2F2E41":"white"};
        margin: 0;
    }
`;function Ke(){const{theme:e}=h();return t(Se,{isDarkMode:e==="dark"})}K.render(t(N.StrictMode,{children:t(T,{children:t(R,{children:a(G,{children:[t(Ke,{}),t(we,{}),a(X,{children:[t(x,{path:"/",element:t(te,{})}),t(x,{path:"/survey/:questionNumber",element:t(le,{})}),t(x,{path:"/freelances",element:t(ke,{})}),t(x,{path:"/results",element:t(he,{})}),t(x,{path:"*",element:t(Oe,{})})]}),t(Be,{})]})})})}),document.getElementById("root"));
