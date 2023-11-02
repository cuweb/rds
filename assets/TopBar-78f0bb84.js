import{j as t}from"./jsx-runtime-7ce7b810.js";import{r as p,R}from"./index-37ba2b57.js";import{i as v}from"./menu-8eae4fbd.js";import{C as j}from"./ChevronDownIcon-2780c6ad.js";import{t as M}from"./transition-271b59c1.js";import{v as x}from"./disclosure-3192912c.js";import{C as D}from"./ChevronRightIcon-8ad439f2.js";import{M as E}from"./MagnifyingGlassIcon-97d62ca3.js";import{k as _}from"./popover-3ff197fb.js";const I={header:"sticky z-50 duration-300 ease-in-out bg-white border-t-2 border-b cu-topbar border-b-cu-black-100 border-t-cu-red transition-top",primaryWrapper:"flex items-center h-[64px] gap-8 px-8 py-3 mx-auto max-w-screen-2xl cu-topbar--primary",secondaryWrapper:"border-t border-t-cu-black-100 bg-cu-black-25 cu-topbar--secondary",navInnerWrapper:"flex gap-6 px-8 py-3.5 mx-auto max-w-screen-2xl"},g={logoWrapper:"flex items-center gap-3 md:gap-5 cu-topbar--logo shrink-1 md:shrink-0",cuLogoLink:"shrink-0",cuLogo:"w-[130px] h-[35px] hidden md:block shrink-0",cuShield:"w-[28px] h-[35px] block md:hidden shrink-0",siteTitle:"font-semibold md:text-lg hover:text-cu-red text-cu-black-800",oneLineHeader:"text-base whitespace-nowrap",twoLineHeader:"text-sm ms:text-base line-clamp-2"},u={navWrapper:"flex gap-6 text-sm md:text-[15px] items-center overflow-hidden cu-topbar--menu",navItem:"text-sm font-medium text-cu-black-600 whitespace-nowrap hover:text-cu-red whitespace-nowrap",navItemChildren:"flex items-center -mb-px",navItemMoreNav:"text-sm font-medium whitespace-nowrap hover:text-cu-red",navArrow:"flex-none w-5 h-5 pt-1 text-cu-black-400"},m={dropDownContainer:"absolute max-w-xs w-64 mt-2.5 -ml-3 overflow-hidden bg-white border rounded shadow-lg border-cu-black-100",dropDownItems:"block text-sm font-medium text-cu-black-600 px-5 py-4 border-b hover:text-cu-black-900 hover:bg-cu-black-50/50 border-b-cu-black-50 last:border-b-0",moreMenuWrapper:"relative inline-block text-left cu-topbar--morenav",moreMenuContainer:"origin-top-right focus:outline-none",moreMenuDropDown:"border-b border-b-cu-black-50 last:border-b-0",moreMenuParentItem:"flex justify-between w-full px-5 py-4 text-sm font-medium text-cu-black-600 hover:text-cu-black-900 hover:bg-cu-black-50/50",moreMenuChildItem:"block px-5 py-3 text-sm font-medium text-cu-black-600 hover:text-cu-black-900 hover:bg-cu-black-50/50",moreMenuParentArrow:"h-5 w-5 text-cu-black-400 transform duration-300 ease-in-out"},d={asideWrapper:"flex items-center gap-5 ml-auto",searchIcon:"w-5 h-5 text-cu-black-400",unorderedList:"items-center hidden gap-5 pl-5 border-l md:flex border-cu-black-100",listHidden:"hidden lg:block",listItemLink:"text-[15px] font-medium text-cu-black-600 hover:text-cu-red",megaMenuButton:"px-3 py-2 text-sm font-medium rounded md:text-[15px] text-cu-black-700 md:px-3.5 md:py-2.5 whitespace-nowrap cu-topnav--mega hover:text-white focus:outline-none bg-cu-black-50 hover:bg-cu-red"},S=({children:e,title:r,link:a})=>{const n=(r?r.length:0)>15?g.twoLineHeader:g.oneLineHeader;return t.jsxs("div",{className:g.logoWrapper,children:[e,r&&a&&t.jsx("h1",{className:`${g.siteTitle} ${n}`,children:t.jsx("a",{href:a,children:r})})]})};S.displayName="TopBar.Logo";try{TopBar.Logo.displayName="TopBar.Logo",TopBar.Logo.__docgenInfo={description:"",displayName:"TopBar.Logo",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},link:{defaultValue:null,description:"",name:"link",required:!1,type:{name:"string"}}}}}catch{}var O=Object.defineProperty,q=(e,r,a)=>r in e?O(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,f=(e,r,a)=>(q(e,typeof r!="symbol"?r+"":r,a),a),w=new Map,y=new WeakMap,T=0,H=void 0;function G(e){return e?(y.has(e)||(T+=1,y.set(e,T.toString())),y.get(e)):"0"}function U(e){return Object.keys(e).sort().filter(r=>e[r]!==void 0).map(r=>`${r}_${r==="root"?G(e.root):e[r]}`).toString()}function z(e){let r=U(e),a=w.get(r);if(!a){const c=new Map;let n;const s=new IntersectionObserver(i=>{i.forEach(o=>{var l;const h=o.isIntersecting&&n.some(b=>o.intersectionRatio>=b);e.trackVisibility&&typeof o.isVisible>"u"&&(o.isVisible=h),(l=c.get(o.target))==null||l.forEach(b=>{b(h,o)})})},e);n=s.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),a={id:r,observer:s,elements:c},w.set(r,a)}return a}function Y(e,r,a={},c=H){if(typeof window.IntersectionObserver>"u"&&c!==void 0){const l=e.getBoundingClientRect();return r(c,{isIntersecting:c,target:e,intersectionRatio:typeof a.threshold=="number"?a.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:n,observer:s,elements:i}=z(a);let o=i.get(e)||[];return i.has(e)||i.set(e,o),o.push(r),s.observe(e),function(){o.splice(o.indexOf(r),1),o.length===0&&(i.delete(e),s.unobserve(e)),i.size===0&&(s.disconnect(),w.delete(n))}}function J(e){return typeof e.children!="function"}var X=class extends p.Component{constructor(e){super(e),f(this,"node",null),f(this,"_unobserveCb",null),f(this,"handleNode",r=>{this.node&&(this.unobserve(),!r&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=r||null,this.observeNode()}),f(this,"handleChange",(r,a)=>{r&&this.props.triggerOnce&&this.unobserve(),J(this.props)||this.setState({inView:r,entry:a}),this.props.onChange&&this.props.onChange(r,a)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:r,rootMargin:a,trackVisibility:c,delay:n,fallbackInView:s}=this.props;this._unobserveCb=Y(this.node,this.handleChange,{threshold:e,root:r,rootMargin:a,trackVisibility:c,delay:n},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:P,entry:F}=this.state;return e({inView:P,entry:F,ref:this.handleNode})}const{as:r,triggerOnce:a,threshold:c,root:n,rootMargin:s,onChange:i,skip:o,trackVisibility:l,delay:h,initialInView:b,fallbackInView:K,...A}=this.props;return p.createElement(r||"div",{ref:this.handleNode,...A},e)}};const N=({sideMenu:e})=>t.jsxs(v,{as:"ul",className:m.moreMenuWrapper,children:[t.jsxs(v.Button,{className:`${u.navItemChildren} ${u.navItemMoreNav}`,children:["Browse",t.jsx(j,{className:u.navArrow,"aria-hidden":"true"})]}),t.jsx(M,{as:p.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:t.jsx(v.Items,{as:"nav",className:`cu-topbar--dropdown ${m.moreMenuContainer}`,children:e.map((r,a)=>{var c,n;return t.jsxs(t.Fragment,{children:[!((c=r.props.children[1])!=null&&c.props.label)&&t.jsx("li",{className:"cu-topbar--more-nav",children:r},"main-"+a),((n=r.props.children[1])==null?void 0:n.props.label)&&t.jsx(x,{children:({open:s})=>{var i,o;return t.jsx(t.Fragment,{children:t.jsxs("ul",{className:m.moreMenuDropDown,children:[t.jsxs(x.Button,{className:`${s?"text-cu-red":""} ${m.moreMenuParentItem}`,children:[(i=r.props.children[1])==null?void 0:i.props.label,t.jsx(D,{className:`${s?"rotate-90":""} ${m.moreMenuParentArrow}`})]}),t.jsx(x.Panel,{as:"ul",className:"pb-2",children:(o=r.props.children[1])==null?void 0:o.props.children.map((l,h)=>t.jsx("li",{children:t.jsx(x.Button,{as:p.Fragment,children:l})},"sub-"+h))})]})})}},"disclose-"+a)]})})})})]});try{N.displayName="TopBarMoreNav",N.__docgenInfo={description:"",displayName:"TopBarMoreNav",props:{sideMenu:{defaultValue:null,description:"",name:"sideMenu",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>[]"}}}}}catch{}const L=({children:e})=>{const[r,a]=p.useState([]),c=(n,s,i)=>{s.target.classList.toggle("invisible",!n),n?(r.shift(),a(o=>[...o])):a(o=>[i,...o])};return t.jsx(t.Fragment,{children:e&&t.jsxs(t.Fragment,{children:[t.jsx("ul",{className:`${u.navWrapper}`,children:R.Children.map(e,(n,s)=>t.jsx(X,{threshold:.99,onChange:(i,o)=>c(i,o,n),children:({ref:i})=>t.jsx("li",{ref:i,className:"cu-topbar--parent-link invisible",children:n})},"nav-"+s))}),r.length>0&&t.jsx(N,{sideMenu:r})]})})};L.displayName="TopBar.Menu";try{TopBar.Menu.displayName="TopBar.Menu",TopBar.Menu.__docgenInfo={description:"",displayName:"TopBar.Menu",props:{}}}catch{}const C=({showGive:e,showLogin:r})=>t.jsxs("div",{className:d.asideWrapper,children:[t.jsx(E,{className:d.searchIcon}),t.jsxs("ul",{className:d.unorderedList,children:[e&&t.jsx("li",{className:d.listHidden,children:t.jsx("a",{href:"https://futurefunder.carleton.ca/",className:d.listItemLink,children:"Give"})}),r&&t.jsx("li",{children:t.jsx("a",{href:"/",className:d.listItemLink,children:"Login"})}),t.jsx("li",{children:t.jsx("a",{href:"https://admissions.carleton.ca/apply/",className:d.listItemLink,children:"Apply"})})]})]});C.displayName="TopBar.Aside";try{TopBar.Aside.displayName="TopBar.Aside",TopBar.Aside.__docgenInfo={description:"",displayName:"TopBar.Aside",props:{showGive:{defaultValue:null,description:"",name:"showGive",required:!1,type:{name:"boolean"}},showLogin:{defaultValue:null,description:"",name:"showLogin",required:!1,type:{name:"boolean"}}}}}catch{}const V=({children:e})=>t.jsx("div",{className:"cu-topbar--primary mx-auto flex h-[64px] max-w-screen-2xl items-center gap-8 px-8 py-3",children:e});V.displayName="TopBar.Primary";try{TopBar.Primary.displayName="TopBar.Primary",TopBar.Primary.__docgenInfo={description:"",displayName:"TopBar.Primary",props:{}}}catch{}const W=({children:e})=>t.jsx("nav",{className:"cu-topbar--secondary border-t border-t-cu-black-100 bg-cu-black-25",children:t.jsx("div",{className:I.navInnerWrapper,children:e})});W.displayName="TopBar.Secondary";try{TopBar.Secondary.displayName="TopBar.Secondary",TopBar.Secondary.__docgenInfo={description:"",displayName:"TopBar.Secondary",props:{}}}catch{}const $=({label:e,children:r})=>t.jsxs(_,{children:[t.jsxs(_.Button,{className:`${u.navItem} ${u.navItemChildren}`,children:[e,t.jsx(j,{className:u.navArrow,"aria-hidden":"true"})]}),t.jsx(M,{as:p.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:t.jsx(_.Panel,{className:"cu-topbar--dropdown",children:r})})]});$.displayName="TopBar.SubMenu";try{TopBar.SubMenu.displayName="TopBar.SubMenu",TopBar.SubMenu.__docgenInfo={description:"",displayName:"TopBar.SubMenu",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}}}catch{}const B=({children:e})=>{const[r,a]=p.useState("top-0"),[c,n]=p.useState(0);return p.useEffect(()=>{const s=()=>{const i=window.scrollY<c;a(i?"top-0":"-top-[66px]"),n(window.scrollY)};return window.addEventListener("scroll",s),()=>{window.removeEventListener("scroll",s)}},[c]),t.jsx("header",{className:`${r} ${I.header}`,children:e})},k=Object.assign(B,{Logo:S,Menu:L,SubMenu:$,Aside:C,Primary:V,Secondary:W});try{B.displayName="TopBarWrapper",B.__docgenInfo={description:"",displayName:"TopBarWrapper",props:{}}}catch{}try{k.displayName="TopBar",k.__docgenInfo={description:"",displayName:"TopBar",props:{}}}catch{}export{k as T};
//# sourceMappingURL=TopBar-78f0bb84.js.map
