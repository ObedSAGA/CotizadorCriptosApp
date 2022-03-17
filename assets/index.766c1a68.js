import{j as h,n as c,r as d,R as S,a as C}from"./vendor.6d0b8aa6.js";const E=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(s){if(s.ep)return;s.ep=!0;const t=r(s);fetch(s.href,t)}};E();const e=h.exports.jsx,o=h.exports.jsxs,v=h.exports.Fragment,w=c.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`,F=c.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;

`,y=(n,i)=>{const[r,a]=d.exports.useState("");return[r,()=>o(v,{children:[e(w,{children:n}),o(F,{value:r,onChange:t=>a(t.target.value),children:[e("option",{value:"",children:"--Selecione una divisa--"}),i.map(t=>e("option",{value:t.id,children:t.name},t.id))]})]})]},N=[{id:"USD",name:"Dolar Estadounidence"},{id:"MXN",name:"Peso Mexicano"},{id:"EUR",name:"Euro"},{id:"GDP",name:"Libra Esterlina"}],I=c.div`
    background-color: #B7322C;
    color: #FFF;
    padding: 15px;
    font-size: 18px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;

`,L=({children:n})=>e(I,{children:n}),A=c.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`,D=({setCoins:n})=>{const[i,r]=d.exports.useState([]),[a,s]=d.exports.useState(!1),[t,l]=y("Elige una moneda",N),[p,m]=y("Elige una criptomoneda",i);return d.exports.useEffect(()=>{(async()=>{const b=(await(await fetch("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD")).json()).Data.map(k=>({id:k.CoinInfo.Name,name:k.CoinInfo.FullName}));r(b)})()},[]),o(v,{children:[a&&e(L,{children:"Todos los campos son obligatorios"}),o("form",{onSubmit:f=>{if(f.preventDefault(),[t,p].includes("")){s(!0);return}s(!1),n({moneda:t,criptomoneda:p})},children:[e(l,{}),e(m,{}),e(A,{type:"submit",value:"cotizar"})]})]})};var P="/CotizadorCriptosApp/assets/imagen-criptos.c0430b0f.png";const z=c.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;

`,j=c.img`
    display: block;
    width: 120px;

`,u=c.p`
     font-size: 18px;
    span {
        font-weight: 700;
    }

`,R=c.p`
    font-size: 30px;
    span {
        font-weight: 700;
    }
`,M=({result:n})=>{const{PRICE:i,HIGHDAY:r,LOWDAY:a,CHANGEPCT24HOUR:s,IMAGEURL:t,LASTUPDATE:l}=n;return o(z,{children:[e(j,{src:`https://cryptocompare.com/${t}`,alt:"Cripto Currency"}),o("div",{children:[o(R,{children:["El precio actual es de: ",e("span",{children:i})]}),o(u,{children:["Precio m\xE1ximo del d\xEDa: ",e("span",{children:r})]}),o(u,{children:["Precio m\xEDnimo del d\xEDa: ",e("span",{children:a})]}),o(u,{children:["Variaci\xF3n en las \xFAltimas 24h: ",o("span",{children:[s,"%"]})]}),o(u,{children:["\xDAltima actualizaci\xF3n: ",e("span",{children:l})]})]})]})};const O=()=>o("div",{className:"sk-circle",children:[e("div",{className:"sk-circle1 sk-child"}),e("div",{className:"sk-circle2 sk-child"}),e("div",{className:"sk-circle3 sk-child"}),e("div",{className:"sk-circle4 sk-child"}),e("div",{className:"sk-circle5 sk-child"}),e("div",{className:"sk-circle6 sk-child"}),e("div",{className:"sk-circle7 sk-child"}),e("div",{className:"sk-circle8 sk-child"}),e("div",{className:"sk-circle9 sk-child"}),e("div",{className:"sk-circle10 sk-child"}),e("div",{className:"sk-circle11 sk-child"}),e("div",{className:"sk-circle12 sk-child"})]}),$=c.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`,T=c.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`,U=c.h1`
  font-family: 'Lato', Sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`;function H(){const[n,i]=d.exports.useState({}),[r,a]=d.exports.useState({}),[s,t]=d.exports.useState(!1);return d.exports.useEffect(()=>{Object.keys(n).length>0&&(async()=>{t(!0),a({});const{moneda:p,criptomoneda:m}=n,x=`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${m}&tsyms=${p}`,g=await(await fetch(x)).json();a(g.DISPLAY[m][p]),t(!1)})()},[n]),o($,{children:[e(T,{src:P,alt:"ImageCripto"}),o("div",{children:[e(U,{children:"Cotiza Criptomonedas al Instante"}),e(D,{setCoins:i}),s&&e(O,{}),r.PRICE&&e(M,{result:r})]})]})}S.render(e(C.StrictMode,{children:e(H,{})}),document.getElementById("root"));
