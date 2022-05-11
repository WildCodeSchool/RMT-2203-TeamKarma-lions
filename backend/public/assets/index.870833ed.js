import{r,j as s,a as e,N as P,P as E,b as S,c as B,h as I,F as T,C as V,R as U,g as ee,G as te,M as ae,O as ne,d as ie,T as F,e as se,f as k,B as re,i as oe}from"./vendor.088682e1.js";const le=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))m(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&m(p)}).observe(document,{childList:!0,subtree:!0});function a(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerpolicy&&(d.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?d.credentials="include":l.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function m(l){if(l.ep)return;l.ep=!0;const d=a(l);fetch(l.href,d)}};le();var ce="/assets/lion-logo.2839e794.png",K="/assets/epic.ccf001ee.png",j="/assets/tornade.b71477d5.png",J="/assets/curiosity.bcdda98a.png",X="/assets/satellite.d9769fae.png",de="/assets/login.0ec96b49.png";function ue(){const[n,o]=r.exports.useState([!1,!1,!1,!1]),a=()=>{o(!n)};return s("div",{className:"navbarContainer",children:[e(P,{to:"/",children:e("img",{src:ce,alt:"Logo",className:"logo imglogo"})}),s("div",{className:"iconeList",children:[e("div",{className:"iconeContainer",role:"button",onClick:()=>a(),onKeyPress:()=>a(),tabIndex:0,children:s(P,{to:"/Epic",children:[e("img",{src:K,alt:"Epic",className:"imgIcone imglogo"}),e("div",{className:"onglet",children:e("h3",{className:"texteOnglet",children:"Epic"})})]})}),e("div",{className:"iconeContainer",role:"button",onClick:()=>a(),onKeyPress:()=>a(),tabIndex:0,children:s(P,{to:"/NaturalEvents",children:[e("img",{src:j,alt:"Natural events",className:"imgIcone imglogo"}),e("div",{className:"ongletContainer",children:e("div",{className:"onglet",children:e("h3",{className:"texteOnglet",children:"Natural Events"})})})]})}),e("div",{className:"iconeContainer",role:"button",onClick:()=>a(),onKeyPress:()=>a(),tabIndex:0,children:s(P,{to:"/Curiosity",children:[e("img",{src:J,alt:"Curiosity",className:"imgIcone imglogo"}),e("div",{className:"onglet",children:e("h3",{className:"texteOnglet",children:"Curiosity"})})]})}),e("div",{className:"iconeContainer",role:"button",onClick:()=>a(),onKeyPress:()=>a(),tabIndex:0,children:s(P,{to:"/Satellites",children:[e("img",{src:X,alt:"Meteorites",className:"imgIcone"}),e("div",{className:"onglet",children:e("h3",{className:"texteOnglet",children:"Satellites"})})]})})]}),e("img",{src:de,alt:"Login",className:"login imglogo"})]})}function $({titre:n}){return e("h1",{className:"mainTitle",children:n})}function Q({handleTogglePic:n,showPic:o}){const a={};a.clipPath="polygon(0 0,150px 0, 150px 150px)";const[m,l]=r.exports.useState("bar vertical"),[d,p]=r.exports.useState(!1);return r.exports.useEffect(()=>{o>0&&m==="bar vertical"&&l("bar vertical verticalToHorizontal"),o===1&&p(!0),o<1&&d&&l("bar vertical"),o===0&&d&&p(!1)},[o]),e("div",{className:"picToggle",onClick:n,onKeyPress:n,role:"button",tabIndex:0,style:a,children:e("div",{className:"picToggleCircleContainer",children:s("div",{className:"picToggleCircle",children:[e("div",{className:"bar horizontal"}),e("div",{className:m})]})})})}Q.propTypes={handleTogglePic:E.func.isRequired,showPic:E.number.isRequired};function _({title:n,explanation:o,date:a,copyright:m,showDes:l}){const[d,p]=r.exports.useState("picDescription dNone");return r.exports.useEffect(()=>{l?(p("picDescription"),setTimeout(()=>{p("picDescription picDescriptionAnimation")},50)):(p("picDescription"),setTimeout(()=>{p("picDescription dNone")},400))},[l]),s("div",{className:d,children:[e("h3",{children:n}),e("p",{children:o}),s("p",{className:"picDescriptionDate",children:[a," ",m]})]})}_.propTypes={title:E.string,explanation:E.string,date:E.string,copyright:E.string,showDes:E.bool};_.defaultProps={title:"",explanation:"",date:"",copyright:"",showDes:!1};function W({url:n,handleTogglePic:o,showPic:a,dailyPic:m,cropPic:l}){const[d,p]=r.exports.useState("noImg"),[c,i]=r.exports.useState({}),t=(v,N=!1)=>{const x={};if(document.getElementsByClassName("picPicture")[0]){const h=document.getElementsByClassName("picPicture")[0].clientHeight,b=document.getElementsByClassName("picPicture")[0].clientWidth;if(b>h){const u=(h/2+b)*a,y=b-h/2-Math.min(u,b-h/2),C=h/2+Math.min(u,h/2);x.clipPath=`polygon(${y}px ${y===0?u-(b-h/2):0}px,
      ${b-h/2-Math.min(u,b-h/2)}px 0,
         100% 0, 
         100% ${C}px,
         ${C===h?b-(u-h/2):b}px ${C}px)`}else{const u=(b/2+h)*a,y=b/2-Math.min(u,b/2),C=b/2+Math.min(u,h-b/2);x.clipPath=`polygon(${y}px ${y===0?u-b/2:0}px,
         ${y}px 0,
         100% 0, 
         100% ${C}px,
         ${C===h?b-(u-(h-b/2)):b}px ${C}px)`}a&&(x.zIndex=100)}return N&&(x.backgroundImage=`url(${v})`),x},f=()=>{i(t(n,!0))};return r.exports.useEffect(()=>{if(d==="loaded"&&i(t(n,!0)),n!==""&&d==="noImg"){const v=new Image;v.src=n,v.addEventListener("load",()=>{p("loaded")}),window.addEventListener("resize",f)}},[n,d,a]),r.exports.useEffect(()=>()=>{window.removeEventListener("resize",f)},[]),s("div",{className:"picPicture",style:c,children:[e(Q,{handleTogglePic:o,showPic:a}),e(_,{title:m.title,explanation:m.explanation,date:m.date,copyright:m.copyright,showDes:!l})]})}W.propTypes={url:E.string,handleTogglePic:E.func.isRequired,showPic:E.number.isRequired};W.defaultProps={url:""};const me="bMqccA5lJ3eoRSDx90IuwirLCn5kikVqOxDymCp0";function pe(n){return n===1?1:1-2**(-5*n)}function he(){const[n,o]=r.exports.useState({}),[a,m]=r.exports.useState(!0),[l,d]=r.exports.useState(0);r.exports.useEffect(()=>{S.get(`https://api.nasa.gov/planetary/apod?api_key=${me}`).then(i=>i.data).then(i=>o(i))},[]);const p=(i,t,f=!1)=>{const v=new Date().getTime();if(!f)if(v-i<t){const N=pe((v-i)/t);d(N),requestAnimationFrame(()=>p(i,t))}else d(1);if(f)if(v-i<t){const N=1-(v-i)/t;d(N),requestAnimationFrame(()=>p(i,t,!0))}else d(0)};r.exports.useEffect(()=>{const i=new Date().getTime();a?l>.5&&p(i,1e3,!0):p(i,1e3)},[a]);const c=()=>m(!a);return e("div",{className:"dailyPicContainer",children:e(W,{url:n.url,handleTogglePic:c,showPic:l,dailyPic:n,cropPic:a})})}let H;function ge({textFront:n,factData:o,factData2:a,textBack:m,textBack2:l,dataStart:d,dataRound:p,icon:c}){const[i,t]=r.exports.useState(0),[f,v]=r.exports.useState(0),N=[!1,!1],x=(h,b,g,u)=>{N[u]=!0,g((h-(h-d)*((100-b)/100)).toFixed(p)),b<100&&(H=window.setTimeout(()=>x(h,b+1,g,u),20))};return r.exports.useEffect(()=>{o!==0&&o!==null&&!N[0]&&x(o,0,t),a!==0&&a!==null&&!N[1]&&x(a,0,v)},[o,a]),r.exports.useEffect(()=>()=>{window.clearTimeout(H)},[]),s("div",{className:"funfact",children:[e("img",{className:"imglogo",src:`src/assets/${c}`,alt:c}),s("div",{children:[n,s("p",{children:[i,m,a!==null&&f,l!==null&&l]})]})]})}let R;function fe(){const[n,o]=r.exports.useState([0,0]),[a,m]=r.exports.useState(0),[l,d]=r.exports.useState(0);r.exports.useEffect(()=>{R=new AbortController;const{signal:c}=R;return S.get("http://wcs.dev4.me/marsweather/",{signal:c}).then(i=>i.data).then(i=>{o([parseInt(i.soles[0].min_temp,10),parseInt(i.soles[0].max_temp,10)])}),S.get("http://wcs.dev4.me/exoplanetarchive/",{signal:c}).then(i=>i.data).then(i=>{m(i[0]["count(releasedate)"])}),S.get("https://ssd-api.jpl.nasa.gov/fireball.api?limit=1",{signal:c}).then(i=>i.data).then(i=>{d(i.data["0"][2])}),()=>{R.abort()}},[]);const p=[{text1:"Mars weather\xA0:",factData:n[0],factData2:n[1],text2:" / ",text3:" \xB0C",start:30,round:0,icon:"sun.png"},{text1:"Exoplanets count\xA0:",factData:a,factData2:null,text2:"",start:0,round:0,icon:"orbit.png"},{text1:"Last fireball impact\xA0:",factData:l,factData2:null,text2:" kt",start:0,round:2,icon:"meteor.png"}];return e("div",{className:"funfactlist",children:p.map(c=>e(ge,{textFront:c.text1,factData:c.factData,factData2:c.factData2,textBack:c.text2,textBack2:c.text3,dataStart:c.start,dataRound:c.round,icon:c.icon},`${c.text1}`))})}function Y({logo:n,name:o,image:a,link:m}){return e("div",{className:"widget",children:e(P,{className:"lien",to:m,children:s("div",{className:"texteImgWidget",children:[e("div",{className:"textWidget",children:s("div",{className:"textLogo",children:[e("div",{className:"logoWidget",children:e("img",{src:n,alt:o,className:"imglogo"})}),e("h3",{children:o})]})}),e("div",{className:"imageWidget",children:e(B.exports.LazyLoadImage,{effect:"blur",src:a,alt:o,className:"image-widget"})})]})})})}function ve(){const[n,o]=r.exports.useState([]),[a,m]=r.exports.useState([]),l=t=>{let f=t;t===void 0&&(f=new Date);const v=`${f.getFullYear()}-${f.getMonth()+1}-${f.getDay()}`;S.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${v}&api_key=BRVlKgV3WbAF21CU0f7H8dnjzLyeKh5go7aQObNB`).then(N=>N.data).then(N=>{o(N.photos[0].img_src)})};r.exports.useEffect(()=>{l()},[]);const d=t=>{S.get(`https://epic.gsfc.nasa.gov/api/natural/date/${t}`).then(f=>f.data).then(f=>{if(f.length===0){const v=I(t,"YYYY-MM-DD").subtract(1,"days");d(v.format("YYYY-MM-DD"))}else{const N=f.map(x=>x.image).map(x=>`https://epic.gsfc.nasa.gov/archive/natural/${I(t,"YYYY-MM-DD").format("YYYY/MM/DD")}/png/${x}.png`);m(N[0])}})};r.exports.useEffect(()=>{d(I().format("YYYY-MM-DD"))},[]);const p=[{name:"Curiosity",logo:J,link:"/Curiosity",image:n},{name:"Epic",logo:K,link:"/Epic",image:a}],c=[{name:"Natural Events",logo:j,link:"/NaturalEvents",image:"../src/assets/image-widget-events.png"}];return s("div",{className:"widgetsContainer",children:[e("div",{className:"vertical",children:e("div",{className:"widgetVertical",children:[{name:"Satellites",logo:X,link:"/Satellites",image:"../src/assets/satellites-image.png"}].map(t=>e("article",{children:e(Y,{name:t.name,logo:t.logo,link:t.link,image:t.image},t.name)},t.name))})}),s("div",{className:"grille",children:[e("div",{className:"widgetDynamique",children:p.map(t=>e("article",{children:e(Y,{name:t.name,logo:t.logo,link:t.link,image:t.image},t.name)},t.name))}),e("div",{className:"widgetStatique",children:c.map(t=>e("article",{children:e(Y,{name:t.name,logo:t.logo,link:t.link,image:t.image},t.name)},t.name))})]})]})}function be(){const[n,o]=r.exports.useState(window.innerWidth);r.exports.useEffect(()=>{window.addEventListener("resize",()=>{o(window.innerWidth)})},[]);const a=s(T,{children:[s("div",{className:"intro-bloc",children:[e($,{titre:"NASA X LIONS"}),e("p",{className:"intro-site",children:"The Universe is infinitely large. If you want to know more about our exoplanets, about the meteorites that fall on Earth, or if you want to visit Mars without leaving your home, you have come to the right place. Good visit!"})]}),e(fe,{})]});return s(T,{children:[e(he,{}),n>768?e("div",{className:"intro-align",children:a}):a,e(ve,{})]})}function Ne({pic:n}){return e(B.exports.LazyLoadImage,{className:"epicimg",effect:"opacity",src:n,alt:n})}function ye(){const[n,o]=r.exports.useState(new Date),[a,m]=r.exports.useState([]),[l,d]=r.exports.useState(""),p=new Date(2015,8,1);if(n){const g=I(n).format("YYYY-MM-DD"),u=y=>{S.get(`https://epic.gsfc.nasa.gov/api/natural/date/${y}`).then(C=>C.data).then(C=>{if(C.length===0){const L=I(y,"YYYY-MM-DD").subtract(1,"days");u(L.format("YYYY-MM-DD"))}else{const D=C.map(w=>w.image).map(w=>`https://epic.gsfc.nasa.gov/archive/natural/${I(y,"YYYY-MM-DD").format("YYYY/MM/DD")}/png/${w}.png`);m(D)}})};r.exports.useEffect(()=>{u(g)},[n]),r.exports.useEffect(()=>{l&&u(l)},[l])}const[c,i]=r.exports.useState(0),t=r.exports.useRef(!1),f=r.exports.useRef(null),v=1,N=g=>{let u=g;f.current=setInterval(()=>{u+=1,u>a.length-1&&(u=0),i(u)},600)},x=()=>{t.current&&(t.current=!1,clearInterval(f.current),f.current=null)};r.exports.useEffect(()=>x(),[n,l]);const h=g=>{typeof g=="string"?(g==="Diapo"&&(t.current?(t.current=!1,clearInterval(f.current),f.current=null):(t.current=!0,N(c))),g==="Previous"&&c!==0&&(x(),i(c-v)),g==="Next"&&c+v<a.length&&(x(),i(c+v)),g==="Last"&&a.length>v&&(x(),i((Math.ceil(a.length/v)-1)*v))):(x(),i(g*v))},b=g=>{d(g.target.value)};return s("div",{className:"epicPictures",children:[s("div",{className:"introCalendar",children:[s("p",{className:"intropage",children:[e("span",{className:"police",children:"EPIC"})," (Earth Polychromatic Imaging Camera) is a 10-channel spectroradiometer onboard NOAA\u2019s DSCOVR (Deep Space Climate Observatory) spacecraft. EPIC provides 10 narrow band spectral images of"," ",e("span",{className:"police",children:" the entire sunlit face of Earth"})," using a 2048x2048 pixel CCD (Charge Coupled Device) detector coupled to a 30-cm aperture Cassegrain telescope."," ",e("span",{className:"police",children:"The DSCOVR spacecraft"})," is located at the Earth-Sun Lagrange-1 (L-1) point giving EPIC a unique angular perspective that will be used in science applications to measure ozone, aerosols, cloud reflectivity, cloud height, vegetation properties, and UV radiation estimates at"," ",e("span",{className:"police",children:"the Earth's surface"}),"."]}),s("div",{className:"epiccalendar",children:[s("p",{children:["Select a date to see an"," ",e("span",{className:"police",children:'"epic"'})," slideshow !"]}),e(V,{minDate:p,maxDate:new Date,onChange:o,value:n})]})]}),s("div",{className:"epicEventDiaporama",children:[s("div",{className:"epicEventSelector",children:[s("p",{children:["Or select an ",e("span",{className:"police",children:"Epic event"})," !"]}),s("select",{value:l,onChange:b,children:[e("option",{value:"",children:"none "}),e("option",{value:"2021-02-11",children:"Lunar Transit 2021 - February 11, 2021"}),e("option",{value:"2020-09-12",children:"West Coast Wildfires - September 12, 2020"}),e("option",{value:"2020-06-21",children:"Annular Solar Eclipse 2020 - June 21, 2020"}),e("option",{value:"2018-04-21",children:"Examples of Sun Glints - April 21, 2018"}),e("option",{value:"2017-08-21",children:"Total Solar Eclipse - August 21, 2017"}),e("option",{value:"2017-08-21",children:"Lunar Transit 2016 - July 05, 2016"}),e("option",{value:"2016-07-05",children:"Sunglints from Ice Crystals seen from Deep Space - May 15, 2017"}),e("option",{value:"2017-02-26",children:"Annular Solar Eclipse 2017 - February 26, 2017"}),e("option",{value:"2016-03-09",children:"Solar Eclipse 2016 - March 09, 2016"})]})]}),s("div",{className:"epicDiaporama",children:[s("div",{className:"buttonContainer",children:[e("button",{type:"button",className:"picButton",onClick:()=>h(0),children:e("img",{src:"../src/assets/firstfirst.png",alt:"first arrow"})}),e("button",{type:"button",className:"picButton",onClick:()=>h("Previous"),children:e("img",{src:"../src/assets/dbl-arrow-left.png",alt:"left arrow"})}),e("button",{type:"button",className:"picButton",onClick:()=>h("Diapo"),children:e("img",{src:"../src/assets/playpause.png",alt:"play and stop"})}),e("button",{type:"button",className:"picButton",onClick:()=>h("Next"),children:e("img",{src:"../src/assets/dbl-arrow-right.png",alt:"right arrow"})}),e("button",{type:"button",className:"picButton",onClick:()=>h("Last"),children:e("img",{src:"../src/assets/lastlast.png",alt:"last arrow"})})]}),e("div",{className:"epicpics",children:a.map((g,u)=>u>=c&&u<v+c?e(Ne,{pic:g},g):null)})]})]})]})}function xe(){return s("div",{className:"epicpage",children:[e($,{className:"epicTitle",titre:"DSCOVR : EPIC"}),e(ye,{})]})}function Ce(){return e("div",{className:"timelineCuriosity",children:e("img",{className:"timelineImg",src:"../src/assets/Timeline.png",alt:"planet mars"})})}function De({getPic:n}){const[o,a]=r.exports.useState(new Date),m=d=>{a(d),n(d)},l=new Date(2012,7,5);return s("div",{className:"calendar",children:[s("p",{className:"pCal",children:["Select a date and ",e("span",{className:"police",children:"discover Mars"})," as if you were there :"]}),e("div",{className:"calendar-container",children:e(V,{onChange:m,value:o,minDate:l,maxDate:new Date})})]})}function Se({picList:n,cameraList:o}){return s("option",{value:o.camera.name,children:[o.camera.full_name," - ",o.camera.name," -"," ",n.filter(a=>a.camera.name.includes(o.camera.name)).length," ","photos"]})}function Ee({pic:n}){return s("div",{className:"alonecard",children:[e("a",{href:n.img_src,target:"_blank",rel:"noreferrer",children:e(B.exports.LazyLoadImage,{effect:"blur",src:n.img_src,alt:"planet Mars"})}),s("p",{children:["Camera : ",n.camera.name]})]})}function we({picList:n}){const[o,a]=r.exports.useState(0),[m,l]=r.exports.useState(""),d=()=>n.filter(t=>t.camera.name.includes(m)),p=t=>{l(t.target.value),a(0)},c=20,i=t=>{typeof t=="string"?(t==="Previous"&&o!==0&&a(o-c),t==="Next"&&o+c<d().length&&a(o+c),t==="Last"&&d().length>c&&a((Math.ceil(d().length/c)-1)*20)):a(t*c)};return s("div",{className:"bigDiv",children:[s("div",{className:"filterCam",children:[e("p",{children:e("span",{className:"police",children:"Choose a camera :"})}),s("select",{name:"Camera",value:m,onChange:p,children:[s("option",{value:"",children:["All - ",n.length," photos"]}),n.filter((t,f)=>n.findIndex(v=>v.camera.name===t.camera.name)===f).map(t=>e(Se,{picList:n,cameraList:t},t.id))]})]}),e("div",{className:"picListEmpty",children:n.length===0?s("div",{children:[e("p",{className:"police",children:"\u26A0"}),s("p",{children:[e("span",{className:"police",children:"Sorry"}),", Curiosity was exploring that day."," ",e("span",{className:"police",children:"Please, select another date"}),"."]})]}):null}),n.length===0?null:s("div",{className:"containerPic",children:[s("div",{className:"buttonContainer",children:[e("button",{type:"button",className:"picButton",onClick:()=>i(0),children:e("img",{src:"../src/assets/firstfirst.png",alt:"first arrow"})}),e("button",{type:"button",className:"picButton",onClick:()=>i("Previous"),children:e("img",{src:"../src/assets/dbl-arrow-left.png",alt:"left arrow"})}),s("p",{children:[o/c+1," /",Math.ceil(d().length/c)]}),e("button",{type:"button",className:"picButton",onClick:()=>i("Next"),children:e("img",{src:"../src/assets/dbl-arrow-right.png",alt:"right arrow"})}),e("button",{type:"button",className:"picButton",onClick:()=>i("Last"),children:e("img",{src:"../src/assets/lastlast.png",alt:"last arrow"})})]}),e("div",{className:"gridpics",children:d().map((t,f)=>f>=o&&f<c+o?e(Ee,{pic:t},t.id):null)})]})]})}function Le(){const[n,o]=U.useState([]),a=m=>{let l=m;m===void 0&&(l=new Date);const d=`${l.getFullYear()}-${l.getMonth()+1}-${l.getDay()}`;S.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${d}&api_key=ld3yHUvzO7DyXL6lzXi5jSTRd4bGpdfKgBGpjNUg`).then(p=>p.data).then(p=>{o(p.photos)})};return r.exports.useEffect(()=>{a()},[]),s(T,{children:[e($,{titre:"Rover : CURIOSITY"}),e(Ce,{}),s("div",{className:"introAndCalendar",children:[s("p",{className:"intro-curio",children:[e("span",{className:"police",children:"Curiosity"})," is a"," ",e("span",{className:"police",children:"rover"})," created by JPL, one of NASAs research centers. Its purpose is to"," ",e("span",{className:"police",children:"explore Mars"}),", as part of the Mars Science Laboratory mission. This rover landed on Mars on August 5, 2012 and is still on the red planet."]}),e(De,{getPic:a})]}),e(we,{picList:n})]})}function Z(){return e("div",{className:"loader"})}let A;const Pe=[{id:"severeStorms",color:"#1dfb8f"},{id:"volcanoes",color:"#fbb11d"},{id:"seaLakeIce",color:"#1dbefb"},{id:"wildfires",color:"#fb441d"}],q={severeStorms:"#1dfb8f",volcanoes:"#fbb11d",Iceberg:"#1dbefb",wildfires:"#fb441d"};function Ie(){const[n,o]=r.exports.useState([]),[a,m]=r.exports.useState([]),l=i=>{let t="";return Pe.forEach(f=>{f.id===i&&(t=f.color)}),t===""&&(t="#e01dfb"),t},d=i=>{let t=`<div style="text-align: center"><div><b>${i.name}</b></div>`;return i.description&&(t+=`<div>${i.description}</div>`),t+=`<div>Date : <em>${`${i.date.getFullYear()}/${i.date.getMonth()+1}/${i.date.getDay()}`}</em></div></div>`,t},p=()=>{A=new AbortController;const{signal:i}=A;S.get("https://eonet.gsfc.nasa.gov/api/v3/events",{signal:i}).then(t=>t.data).then(t=>{const f=[];t.events.forEach(N=>f.push(N.categories[0].id));const v=[...new Set(f)];o(v.map(N=>{let x=0;return f.forEach(h=>{h===N&&(x+=1)}),{catName:N==="seaLakeIce"?"icebergs":N,catCount:x}})),m(t.events.map(N=>{const{geometry:x}=N,h=N.geometry.length,b=x[h-1],g=new Date(x[0].date),u=new Date(b.date);let C=(new Date().getTime()-g.getTime())/(1e3*60*60*24);C>1e3&&(C=1e3);const L=(1e3-C)/3e3+.03,D=b.coordinates[0],w=b.coordinates[1];return{id:N.id,name:N.title,description:N.description,type:N.categories[0].id,date:u,lon:D,lat:w,size:L}}))})},c=()=>{if(a.length>0){let i=window.innerHeight-300,t=window.innerWidth;t>768?t-=164:i-=64,ee()(document.getElementById("globeViz")).globeImageUrl("https://unpkg.com/three-globe@2.24.4/example/img/earth-blue-marble.jpg").pointLat("lat").pointLng("lon").pointAltitude("size").pointRadius(.12).pointColor(v=>l(v.type)).pointLabel(d).height(i).width(t).pointsData(a)}};return r.exports.useEffect(()=>{c()},[a]),r.exports.useEffect(()=>(p(),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c),A.abort()}),[]),e("div",{id:"globeContainer1",children:a.length===0?e(Z,{}):s(T,{children:[e("div",{id:"counter",children:e("ul",{id:"listEvents",children:n.map(i=>s("li",{style:{color:q[`${i.catName}`]?q[`${i.catName}`]:"#e01dfb"},children:[i.catName,": ",i.catCount]},i.catName))})}),e("div",{id:"globeViz"})]})})}function ke(){return s("div",{children:[e("div",{className:"natTitle",children:e($,{titre:"Natural Events from space"})}),e(Ie,{})]})}const z=r.exports.createContext();function Me({children:n}){const o=r.exports.useMemo(()=>({}));return e(z.Provider,{value:o,children:n})}const Te=6371,$e=100;var Re=r.exports.memo(function({filteredSatListAsProps:o}){const[a,m]=r.exports.useState(),[l,d]=r.exports.useState(o),p=r.exports.useContext(z),c=r.exports.useRef(),i=r.exports.useRef(window.innerHeight-400),t=r.exports.useRef(document.body.clientWidth);t.current>768?t.current=document.body.clientWidth-164:i.current=window.innerHeight-464,i.current>t.current*1.5&&(i.current=t.current*1.5);const f=h=>(h&&(p.satname=h.satname,p.satalt=h.satalt,p.satcat=h.category_name,p.satLaunchDate=h.satLaunchDate,p.satObsDate=h.satObsDate),null),v=()=>{i.current=window.innerHeight-400,t.current=document.body.clientWidth,t.current>768?t.current=document.body.clientWidth-164:i.current=window.innerHeight-464},N=h=>l.length?new ae(new ne($e*a/Te/2*(1+h.satalt*.5),0),new ie({color:h.color,transparent:!0,opacity:.7})):null,x=(h,b)=>l.length?Object.assign(h.position,c.current.getCoords(b.satlat,b.satlng,b.satalt)):null;return r.exports.useEffect(()=>(window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)}),[]),r.exports.useEffect(()=>{o.length>0&&(m(c.current.getGlobeRadius()),d(o))},[o]),e("div",{id:"globeContainerSat",children:e(te,{ref:c,globeImageUrl:"../src/assets/earth-blue-marble.jpg",bumpImageUrl:"../src/assets/earth-topology.png",backgroundImageUrl:"../src/assets/night-sky.png",height:i.current,width:t.current,customLayerData:l,customThreeObject:N,customThreeObjectUpdate:x,onCustomLayerHover:f,enablePointerInteraction:!0})})});const Ye=6371;function Ae(){const n=r.exports.useContext(z),[o,a]=r.exports.useState(!1);return r.exports.useEffect(()=>{a(!o)},[{tooltip:n}]),e("div",{children:n&&n.satname&&s("div",{className:"hoverContent",children:[s("div",{children:[s("div",{children:["Name : ",e("span",{children:n.satname})]}),s("div",{children:["Altitude :"," ",s("span",{children:[Math.round(n.satalt*Ye),"km"]})]})]}),s("div",{children:[s("div",{children:["Launch date : ",e("span",{children:n.satLaunchDate.split("T")[0]})]}),s("div",{children:["Observation date : ",e("span",{children:n.satObsDate.split("T")[0]})]})]}),s("div",{className:"hoverContentCategories",children:["Categories :"," ",n.satcat.map((m,l)=>l?s("span",{children:[", ",m]},m):e("span",{children:m},m))]})]})})}const O=[{id:1,name:"Brightest"},{id:2,name:"ISS"},{id:3,name:"Weather"},{id:4,name:"NOAA"},{id:5,name:"GOES"},{id:6,name:"Earth resources"},{id:7,name:"Search & rescue"},{id:8,name:"Disaster monitoring"},{id:9,name:"Tracking and Data Relay Satellite System"},{id:10,name:"Geostationary"},{id:11,name:"Intelsat"},{id:12,name:"Gorizont"},{id:13,name:"Raduga"},{id:14,name:"Molniya"},{id:15,name:"Iridium"},{id:16,name:"Orbcomm"},{id:17,name:"Globalstar"},{id:18,name:"Amateur radio"},{id:19,name:"Experimental"},{id:20,name:"Global Positioning System (GPS) Operational"},{id:21,name:"Glonass Operational"},{id:22,name:"Galileo"},{id:23,name:"Satellite-Based Augmentation System"},{id:24,name:"Navy Navigation Satellite System"},{id:25,name:"Russian LEO Navigation"},{id:26,name:"Space & Earth Science"},{id:27,name:"Geodetic"},{id:28,name:"Engineering"},{id:29,name:"Education"},{id:30,name:"Military"},{id:31,name:"Radar Calibration"},{id:32,name:"CubeSats"},{id:33,name:"XM and Sirius"},{id:34,name:"TV"},{id:35,name:"Beidou Navigation System"},{id:36,name:"Yaogan"},{id:37,name:"Westford Needles"},{id:38,name:"Parus"},{id:39,name:"Strela"},{id:40,name:"Gonets"},{id:41,name:"Tsiklon"},{id:42,name:"Tsikada"},{id:43,name:"O3B Networks"},{id:44,name:"Tselina"},{id:45,name:"Celestis"},{id:46,name:"IRNSS"},{id:47,name:"QZSS"},{id:48,name:"Flock"},{id:49,name:"Lemur"},{id:50,name:"Global Positioning System (GPS) Constellation"},{id:51,name:"Glonass Constellation"},{id:52,name:"Starlink"},{id:53,name:"OneWeb"},{id:54,name:"Chinese Space Station"}];let G;function Oe(){const[n,o]=r.exports.useState(!0),[a,m]=r.exports.useState([]),l=r.exports.useRef([]),[d,p]=r.exports.useState([]),c=r.exports.useRef([]),i=r.exports.useRef([]),t=6371,f=g=>{let u="";for(let y=0;y<O.length&&u==="";y+=1)O[y].name===g&&(u=O[y].id);return`rgb(${u*4},${255-u*4},${Math.min(255,u*8)})`},v=()=>{p(a.filter(g=>{let u=!1;return g.category_name.map(y=>y.toLowerCase()).forEach(y=>{c.current.map(C=>C.toLowerCase()).includes(y)&&(u=!0)}),u||c.current.forEach(y=>{g.satname.toLowerCase().indexOf(y.toLowerCase())!==-1&&(u=!0)}),c.current.length||(u=!0),u&&g.category_name.map(y=>y.toLowerCase()).forEach(y=>{i.current.map(C=>C.toLowerCase()).includes(y)&&(u=!1)}),u&&i.current.forEach(y=>{g.satname.toLowerCase().indexOf(y.toLowerCase())!==-1&&(u=!1)}),u}))},N=g=>{c.current=g,v()},x=g=>{i.current=g,v()};r.exports.useEffect(()=>{let g="http://localhost:5000";g={}.BASEURL,G=new AbortController;const{signal:u}=G;return S.get(`${g}/api/n2yo/catbysatid`,{signal:u}).then(y=>y.data).then(y=>{const C=y;S.get(`${g}/api/n2yo`).then(L=>L.data).then(L=>m(L.map(D=>({satlat:D.satlat,satlng:D.satlng,satalt:D.satalt/t,satname:D.satname,category_name:C.filter(w=>w.satid===D.satid).map(w=>w.category_name),color:f(D.category_name),satObsDate:D.request_date,satLaunchDate:D.launch_date}))))}),()=>{G.abort()}},[]);const h=()=>{a.length>0&&o(!1)};r.exports.useEffect(()=>{p(a),a.length&&(l.current=[...new Set(a.map(g=>[g.satname.split(/[()-\s\./]+/).filter(u=>u.length>2&&Number.isNaN(parseInt(u,10))),g.category_name]).flat(2).map(g=>g[0].toUpperCase()+g.slice(1).toLowerCase()))]),h()},[a]);const b=r.exports.useRef();return e(Me,{children:s("div",{className:"globalContainerSat",children:[e($,{titre:"Satellites 3D view"}),n&&e("div",{className:"loaderContainer",children:e(Z,{})}),e("div",{className:"globeHeader",children:l.current.length?s(T,{children:[e(F,{id:"filterAdd",labelKey:"name",multiple:!0,options:l.current,placeholder:"Add a keyword...",ref:b,onChange:N}),e(F,{id:"filterExclude",labelKey:"name",multiple:!0,options:l.current,placeholder:"Exclude a keyword...",ref:b,onChange:x})]}):null}),e(Re,{filteredSatListAsProps:d}),s("div",{className:"nbRenderedItem",children:[d.length," satellites rendered"]}),e(Ae,{})]})})}var M="/assets/GitHubPic.837737e7.png";function Ge(){return e("div",{className:"lionsfooter",children:s("ul",{children:[e("li",{children:e("p",{className:"intropfooter",children:"2022 \xA9 Wild Code School x Team Lion"})}),s("li",{children:[e("a",{href:"https://github.com/gnos28",target:"_blank",rel:"noreferrer",children:e("img",{className:"imglogo",src:M,alt:"logo Github"})}),e("p",{children:"Julien Vigneron"})]}),s("li",{children:[e("a",{href:"https://github.com/ClemDSC",target:"_blank",rel:"noreferrer",children:e("img",{className:"imglogo",src:M,alt:"logo Github"})}),e("p",{children:"Cl\xE9mence Pham"})]}),s("li",{children:[e("a",{href:"https://github.com/Lora048",target:"_blank",rel:"noreferrer",children:e("img",{className:"imglogo",src:M,alt:"logo Github"})}),e("p",{children:"Lora Perrichon"})]}),s("li",{children:[e("a",{href:"https://github.com/FrederiqueDemas",target:"_blank",rel:"noreferrer",children:e("img",{className:"imglogo",src:M,alt:"logo Github"})}),e("p",{children:"Fr\xE9d\xE9rique Demas"})]}),s("li",{children:[e("a",{href:"https://github.com/PaulKip44",target:"_blank",rel:"noreferrer",children:e("img",{className:"imglogo",src:M,alt:"logo Github"})}),e("p",{children:"Paul Sanchez"})]})]})})}function Be(){return s("div",{className:"mainpage",children:[s(se,{children:[e(k,{path:"/",element:e(be,{})}),e(k,{path:"/Epic",element:e(xe,{})}),e(k,{path:"/Curiosity",element:e(Le,{})}),e(k,{path:"/NaturalEvents",element:e(ke,{})}),e(k,{path:"/Satellites",element:e(Oe,{})})]}),e(Ge,{})]})}function _e(){return s(re,{children:[e(ue,{}),e(Be,{})]})}oe.render(e(U.StrictMode,{children:e(_e,{})}),document.getElementById("root"));
