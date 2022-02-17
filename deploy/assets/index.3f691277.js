import{s as a,m as n,j as i,a as o,F as h,W as p,R as x,b as m}from"./vendor.3db485f0.js";const g=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};g();const l=a(n.div)`
  width: 100%;
  display: flex;
  justify-content: center;
`,f=a(l)`
  max-width: 1440px;
  margin: 0 24px;
`,u=a(n.header)`
  width: 100%;
  padding: 10px 0;
  height: 120px;
  h1{
    font-size: 40px;
    font-weight: 300;
  }
`,w={hidden:{y:-50},visible:{y:0,transition:{delay:1.7,duration:2}}};function v(){return i(l,{children:i(f,{children:i(u,{variants:w,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:i("h1",{children:"Violin"})})})})}const y=a(n.div)`
  width: 100%;
  display: flex;
  justify-content: center;
`,b=a(n.div)`
  width: 100%;
  max-width: 1440px;
  min-height: calc(100vh - 120px);
  margin: 0 24px;
  display: flex;
  position: relative;

  svg{
    width: 150px;
    position: absolute;
    bottom: 60px;
    right: 60px;
    path {
      fill: transparent;
    }
    
    font-size: 60px;
    font-weight: 900; 
    text-transform: uppercase;
    letter-spacing: 21px;
    fill: black;
  }


  @media(max-width: 1024px){
    svg{
      width: 110px;
      bottom: 20px;
      right: 20px;
    }
  }

  @media(max-width: 540px){
    flex-direction: column;
    justify-content: flex-start;
  }

  @media(max-width: 375px){
    height: calc(100vh + 30px);
  }
`,V=a(n.div)`
  width: 100%;
  max-width: 400px;
  min-width: 200px;
  height: 100%;
  display: flex;
  align-items: center;

  @media(max-width: 425px){
    align-items: flex-start;
    justify-content: center;
    height: 400px;
  }

  @media(max-width: 320px){
    height: 350px;
  }
`,I=a(n.div)`
  background: linear-gradient(90deg, rgba(199,199,200,0.3477766106442577) 0%, rgba(199,199,200,1) 100%);  width: 400px;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: visible;
  padding-top: 50px;

  img{
    width: 400px;
    height: 400px;
  }

  @media(max-width: 768px){
    height: 300px;
    width: 300px;
  
    img{
      width: 300px;
      height: 300px;
    }
  }

  @media(max-width: 320px){
    height: 250px;
    width: 250px;
  
    img{
      width: 250px;
      height: 250px;
    }
  }
`,M=a(n.div)`
  width: 100%;
  padding-left: 100px; 
  display: flex;
  flex-direction: column;
  justify-content: center;

  span{
    font-size: 120px;
    font-weight: 500;
  }
  
  @media(max-width: 1024px){
    span{
      font-size: 104px;
    }
  }

  @media(max-width: 768px){
    padding-left: 50px;

    span{
      font-size: 88px;
    }
  }

  @media(max-width: 425px){
    padding: 0;
    align-items: center;
  }

  @media(max-width: 375px){
    span{
      font-size: 72px;
    }
  }
`,S={hidden:{opacity:0,x:-50},visible:{opacity:1,x:0,transition:{duration:2}}},j={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{delay:1.7,duration:2}}},C={hidden:{opacity:0,x:50},visible:{opacity:1,x:0,transition:{duration:2}}},z={hidden:{opacity:0,x:50},visible:{opacity:1,x:0,transition:{delay:1,duration:2}}},L={hidden:{x:60,opacity:0},visible:{x:0,opacity:1,rotateZ:360,originX:"center",originY:"center",transition:{duration:2}}};var k="/assets/violin.7bb96787.svg";function H(){return i(y,{children:o(b,{children:[i(V,{children:i(I,{variants:S,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:i(n.img,{src:k,alt:"ola mundo",variants:j,initial:"hidden",whileInView:"visible",viewport:{once:!0}})})}),o(M,{children:[i(n.span,{variants:C,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:"Motion"}),i(n.span,{variants:z,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:"Violin"})]}),o(n.svg,{viewBox:"0 0 500 500",variants:L,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[i("title",{children:"Red Hot Chilli Peppers Logo"}),i("defs",{children:i("path",{d:"M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250",id:"textcircle"})}),i("text",{dy:"70",textLength:"1220",children:i("textPath",{xlinkHref:"#textcircle",children:"MUSIC MUSIC MUSIC"})})]})]})})}function O(){return o(h,{children:[i(v,{}),i(H,{})]})}const B=p`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
`;x.render(o(m.StrictMode,{children:[i(B,{}),i(O,{})]}),document.getElementById("root"));
