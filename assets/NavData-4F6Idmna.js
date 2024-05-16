import{j as t}from"./jsx-runtime-X2b_N9AH.js";import{r as T}from"./index-uCp2LrAq.js";import{u as y}from"./useLinkContext-CZLCmVqQ.js";import{A as L}from"./Avatar-BORvOmmK.js";const N=({title:e,link:s})=>{const r=y();return t.jsxs("div",{className:"cu-nav__top flex items-center py-3.5 gap-5 md:gap-8 shrink-1 md:shrink-0 max-sm:grow",children:[e&&s&&t.jsxs("a",{href:"https://carleton.ca",className:"shrink-0",children:[t.jsx("img",{className:"w-[148px] h-[40px] shrink-0 hidden md:block",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg",width:"148",height:"40",alt:"Carleton University Logo"}),t.jsx("img",{className:"w-[30px] h-[38px] shrink-0 md:hidden",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-shield-color.svg",width:"30",height:"38",alt:"Carleton University Logo"})]}),!e&&t.jsx("a",{href:"https://carleton.ca",className:"shrink-0",children:t.jsx("img",{className:"w-[148px] h-[40px] shrink-0",src:"https://cu-production.s3.amazonaws.com/rds/assets/cu-logos/cu-logo-color-right-horiztonal.svg",width:"148",height:"40",alt:"Logo"})}),e&&s&&t.jsx("div",{className:"leading-none max-w-[60%] sm:max-w-[200px] md:max-w-[220px]",children:t.jsx(r,{href:s,className:"overflow-hidden text-base font-semibold leading-5 md:text-lg md:leading-6 text-cu-black-800 hover:text-cu-red-700 text-ellipsis line-clamp-2",children:e})})]})};N.displayName="Nav.Logo";N.__docgenInfo={description:"",methods:[],displayName:"Nav.Logo",props:{title:{required:!1,tsType:{name:"string"},description:""},link:{required:!1,tsType:{name:"string"},description:""}}};const v={menuWrapper:"relative flex items-center grow-0 min-h-8 pr-3 last:pr-0",subMenuWrapper:"block text-sm font-medium text-cu-black-600 border-b border-b-cu-black-50 last:border-b-0"},i={navItemWrapper:"flex items-stretch justify-between",navItem:"flex w-auto grow items-center gap-0.5 text-[15px] font-medium text-cu-black-700 hover:text-cu-red-700 transition ease-in",navParentItem:"cu-nav__parent-item items-between cursor-pointer after:w-1.5 after:h-1.5 after:grow-0 after:shrink-0 after:basis-[6px]",navArrow:"after:content-[''] hover:after:border-current after:ml-1 after:mt-px after:border-t after:border-t-cu-black-700 after:border-l after:border-l-cu-black-700 after:rotate-[135deg] after:transition after:ease-in after:duration-300",navParentArrow:"after:w-1.5 after:h-1.5",subMenuItem:"px-5 py-3.5 hover:bg-cu-black-50/50",innerSubNavToggler:"cu-nav__inner-submenu-toggle flex grow-0 shrink-0 basis-12 items-center justify-center w-12 hover:bg-cu-black-50/50 transition ease-in duration-300 after:w-1.5 after:h-1.5 after:right-1 after:relative"},C=e=>e.toLowerCase().replace(/[^\w ]+/g,"").replace(/ +/g,"-"),w=({menuItem:e,isSubMenu:s,isInnerSubMenu:r,id:a})=>{const n=y();return t.jsxs("span",{className:i.navItemWrapper,role:"navigation","data-menu-item":C(a),"aria-expanded":"false",children:[e.onClickHandler?t.jsxs("a",{onClick:e.onClickHandler,className:(e.submenu&&!r?i.navParentItem+" "+i.navArrow+" "+i.navParentArrow:"")+" "+i.navItem+" "+(s?i.subMenuItem:""),children:[t.jsx("span",{className:e.title.length>25?"cu-nav__parent-inner":"",children:e.title}),e.submenu&&!r?t.jsx("button",{className:"hidden "+i.innerSubNavToggler+" "+i.navArrow,children:t.jsx("span",{className:"sr-only",children:"Click to open inner submenu"})}):t.jsx(t.Fragment,{})]}):t.jsxs(n,{href:e.href,className:(e.submenu&&!r?i.navParentItem+" "+i.navArrow+" "+i.navParentArrow:"")+" "+i.navItem+" "+(s?i.subMenuItem:""),children:[t.jsx("span",{className:e.title.length>25?"cu-nav__parent-inner":"",children:e.title}),e.submenu&&!r?t.jsx("button",{className:"hidden "+i.innerSubNavToggler+" "+i.navArrow,children:t.jsx("span",{className:"sr-only",children:"Click to open inner submenu"})}):t.jsx(t.Fragment,{})]}),e.submenu&&r?t.jsx("button",{className:r?i.innerSubNavToggler+" "+i.navArrow:"","aria-expanded":"false",children:t.jsx("span",{className:"sr-only",children:"Click to open inner submenu"})}):t.jsx(t.Fragment,{})]})};w.displayName="Nav.NavMenuItem";w.__docgenInfo={description:"",methods:[],displayName:"Nav.NavMenuItem",props:{menuItem:{required:!0,tsType:{name:"ImenuItem"},description:""},isSubMenu:{required:!0,tsType:{name:"boolean"},description:""},isInnerSubMenu:{required:!0,tsType:{name:"boolean"},description:""},id:{required:!0,tsType:{name:"string"},description:""}}};const h=({menuItem:e,isSubMenu:s,isInnerSubMenu:r})=>t.jsxs("li",{className:s?v.subMenuWrapper:v.menuWrapper,children:[t.jsx(w,{menuItem:e,isSubMenu:s,isInnerSubMenu:r,id:e.title}),e.submenu?t.jsx(f,{submenu:e.submenu,isSubMenu:!0,isInnerSubMenu:r,id:e.title}):t.jsx(t.Fragment,{})]},e.title);h.displayName="Nav.NavMenuItemWrapper";h.__docgenInfo={description:"",methods:[],displayName:"Nav.NavMenuItemWrapper",props:{menuItem:{required:!0,tsType:{name:"ImenuItem"},description:""},isSubMenu:{required:!0,tsType:{name:"boolean"},description:""},isInnerSubMenu:{required:!0,tsType:{name:"boolean"},description:""}}};const q=e=>e.toLowerCase().replace(/[^\w ]+/g,"").replace(/ +/g,"-"),f=({submenu:e,isSubMenu:s,isInnerSubMenu:r,id:a})=>t.jsx("ul",{id:q(a),className:r?"cu-nav__inner-submenu hidden w-full overflow-hidden bg-cu-black-50/35":"cu-nav__submenu hidden absolute left-0 max-w-xs w-64 overflow-hidden bg-white border rounded shadow-lg border-cu-black-100",children:e.map((n,l)=>t.jsx(h,{menuItem:n,isSubMenu:s,isInnerSubMenu:!!n.submenu},l))});f.displayName="Nav.NavSubMenu";f.__docgenInfo={description:"",methods:[],displayName:"Nav.NavSubMenu",props:{submenu:{required:!0,tsType:{name:"Array",elements:[{name:"ImenuItem"}],raw:"ImenuItem[]"},description:""},isSubMenu:{required:!0,tsType:{name:"boolean"},description:""},isInnerSubMenu:{required:!0,tsType:{name:"boolean"},description:""},id:{required:!0,tsType:{name:"string"},description:""}}};const m={listItemLink:"text-[15px] md:text-base font-medium text-cu-black-600 hover:text-cu-red-700 cursor-pointer"},j=({menu:e,LoggedInUser:s,LoggedOutUser:r,LoggedMenu:a,userNoImage:n,children:l,onClickHandler:d})=>{const c=y();return t.jsxs("div",{className:"flex items-center gap-5 ml-auto cu-nav__aside sm:gap-6",children:[l,t.jsxs("ul",{className:"flex items-center gap-5 py-1 pl-5 sm:gap-6 sm:pl-6 "+(l?"border-l border-solid border-cu-black-100":""),children:[e&&e.map((u,g)=>t.jsx("li",{className:"block",children:t.jsx(c,{href:u.href,className:m.listItemLink,children:u.title})},g)),r&&t.jsx("li",{children:t.jsx(c,{href:"/login",className:m.listItemLink,children:"Login"})}),s?a?t.jsxs("li",{className:v.menuWrapper,children:[t.jsx("div",{className:i.navItemWrapper,role:"navigation","data-menu-item":"profile",children:d?t.jsx("a",{onClick:d,className:i.navParentItem,children:t.jsx(L,{user:n,size:"xs",isCircle:!0})}):t.jsx("div",{className:i.navParentItem,children:t.jsx(L,{user:n,size:"xs",isCircle:!0})})}),t.jsx(f,{submenu:a,isSubMenu:!0,isInnerSubMenu:!1,id:"profile"})]}):t.jsx("li",{children:d?t.jsx("a",{onClick:d,className:m.listItemLink,children:"Logout"}):t.jsx(c,{href:"/",className:m.listItemLink,children:"Logout"})}):t.jsx(t.Fragment,{})]})]})};j.displayName="Nav.Aside";j.__docgenInfo={description:"",methods:[],displayName:"Nav.Aside"};const k=({children:e})=>t.jsx("div",{className:"cu-nav__primary flex items-center justify-center gap-4 lg:gap-8 grow max-sm:py-3.5 max-sm:w-[calc(100%+40px)] max-sm:-mx-[20px] max-sm:px-[20px] max-sm:bg-cu-black-25 max-sm:border-t max-sm:border-t-cu-black-100 sm:border-0",children:e});k.displayName="Nav.Primary";k.__docgenInfo={description:"",methods:[],displayName:"Nav.Primary"};const S=({children:e})=>t.jsx("div",{className:"cu-nav__secondary bg-cu-black-25 border-t border-t-cu-black-100 border-b border-b-cu-black-100 w-[calc(100%+40px)] md:w-[calc(100%+64px)] -mx-[20px] md:-mx-[32px] px-[20px] md:px-[2rem] py-2.5",children:t.jsx("div",{className:"flex gap-6",children:e})});S.displayName="Nav.Secondary";S.__docgenInfo={description:"",methods:[],displayName:"Nav.Secondary"};const _=({menu:e})=>t.jsx(t.Fragment,{children:t.jsx("div",{className:"flex items-center grow",children:t.jsx("ul",{className:"flex items-center gap-4 cu-nav__menu",children:e.map((s,r)=>t.jsx(h,{menuItem:s,isSubMenu:!1,isInnerSubMenu:!1},r))})})});_.displayName="Nav.Menu";_.__docgenInfo={description:"",methods:[],displayName:"Nav.Menu",props:{menu:{required:!0,tsType:{name:"Array",elements:[{name:"ImenuItem"}],raw:"ImenuItem[]"},description:""}}};const o="after:!rotate-[225deg]",x="bg-cu-black-50/35",b=".cu-nav__parent-item",p=".cu-nav__inner-submenu-toggle",E=e=>{const s=e.getBoundingClientRect(),r=document.body.getBoundingClientRect();return s.left<r.left||s.right>r.right},I=()=>{const e=document.querySelectorAll(b);e&&e.forEach(s=>{const r=s.parentElement;if(r){const a=r.nextElementSibling;a&&(a.style.display="none",a.style.removeProperty("left"),a.style.removeProperty("right"),r.setAttribute("aria-expanded","false"),s.classList.remove(o))}}),P()},P=()=>{const e=document.querySelectorAll(p);e&&e.forEach(r=>{r.classList.remove(o),r.classList.remove(x)});const s=document.querySelectorAll(".cu-nav__inner-submenu");s&&s.forEach(r=>{r&&r.classList.add("hidden")})},A=e=>{const s=e.parentElement;if(s){const r=s.nextElementSibling,a=e.getAttribute("aria-expanded")==="true",n=e.querySelector(p);r&&(a?(r.style.display="none",r.style.removeProperty("left"),r.style.removeProperty("right"),e.classList.remove(o),s.setAttribute("aria-expanded","false"),n&&n.classList.remove(o)):(I(),r.style.display="block",n&&n.classList.add(o),E(r)&&(r.style.left="unset",r.style.right="0"),e.classList.add(o),s.setAttribute("aria-expanded","true")))}},W=e=>{var a;const s=e.parentElement,r=(a=s==null?void 0:s.dataset)==null?void 0:a.menuItem;if(r){const n=document.getElementById(r);n&&(n.classList.contains("hidden")?(n.classList.remove("hidden"),s.setAttribute("aria-expanded","true"),e.classList.add(o),e.classList.add(x)):(n.classList.add("hidden"),s.setAttribute("aria-expanded","false"),e.classList.remove(o),e.classList.remove(x)))}},F=()=>{const e=document.querySelectorAll(b);e&&e.forEach(r=>{r.addEventListener("click",a=>{a.preventDefault();const n=a.target;n instanceof HTMLElement&&A(n)})});const s=document.querySelectorAll(p);s&&s.forEach(r=>{r.addEventListener("click",a=>{a.preventDefault();const n=a.target;n&&W(n)})}),document.addEventListener("click",r=>{const a=r.target;if(a){const n=a.parentElement;n!=null&&n.classList.contains("cu-nav__parent-item")?A(n):!a.matches(b)&&!a.matches(p)&&I()}})},O=()=>{const e=document.querySelector(".cu-header");if(e){const s=document.querySelector(".cu-nav--primary"),r=document.querySelector(".cu-nav--secondary"),a=document.querySelector(".cu-nav__top"),n=e.offsetHeight;let l=0;addEventListener("scroll",()=>{const d=window.innerWidth,c=window.scrollY,u=c>l&&c>n;if(a){const g=a.offsetHeight;(r||d<=640&&s)&&(u?e.style.top="-"+g+"px":e.style.top="0px")}l=c})}},M=({navType:e,children:s})=>(T.useEffect(()=>{F(),O()},[]),t.jsx("header",{className:`cu-header border-t-2 border-t-cu-red px-5 sm:px-8 sticky top-0 z-50 duration-300 ease-in-out bg-white transition-top ${e!="secondary"?"border-b border-b-cu-black-100":""}`,children:t.jsx("nav",{className:`cu-nav--${e} cu-nav flex flex-wrap items-center gap-x-8 ${e!="secondary"?"sm:flex-nowrap":""}`,children:s})})),D=Object.assign(M,{Logo:N,Aside:j,Primary:k,Secondary:S,Menu:_});M.__docgenInfo={description:"",methods:[],displayName:"NavWrapper",props:{navType:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const $=[{href:"#",title:"Academics",submenu:[{href:"#",title:"Undergraduate Programs"},{href:"#",title:"Graduate Programs"},{href:"#",title:"Executive Education"}]},{href:"#",title:"Admissions"},{href:"#",title:"Students",submenu:[{href:"#",title:"Future Students",submenu:[{href:"#",title:"The Carleton Advantage"},{href:"#",title:"Virtual Tour"}]},{href:"#",title:"Current Students"},{href:"#",title:"Graduate Students"}]},{href:"#",title:"Research"},{href:"#",title:"About",submenu:[{href:"#",title:"Our Campus"},{href:"#",title:"Our History"},{href:"#",title:"Facts & Figures"},{href:"#",title:"Accountability"},{href:"#",title:"Our Executives"}]},{href:"#",title:"Staff & Faculty",submenu:[{href:"#",title:"Intranet"},{href:"#",title:"Brightspace"},{href:"#",title:"Carleton Central"},{href:"#",title:"Human Resources"},{href:"#",title:"Jobs at Carleton"}]},{href:"#",title:"Alumni"}],G=[{href:"https://futurefunder.carleton.ca/",title:"Give"},{href:"https://admissions.carleton.ca/apply/",title:"Apply"}],U=[{href:"/profile",title:"Profile"},{href:"/",title:"Log out"}],J=[{href:"/profile",title:"Profile"},{onClickHandler:()=>alert("Log out clicked"),title:"Log out"}];export{D as N,$ as a,G as b,U as c,J as d};
