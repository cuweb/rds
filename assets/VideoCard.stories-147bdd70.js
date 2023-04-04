import{a as M,j as d}from"./jsx-runtime-9d2cd5de.js";import{C as E}from"./Column-16e6c206.js";import{r as C}from"./index-580b8df0.js";import{R as j}from"./index-a36e5b94.js";import{B as k}from"./Badge-30ab9511.js";import{r as u,s as T,t as s,m as z,a as G}from"./index-9180d5e9.js";import{e as q,a as y}from"./index-aff6d42c.js";import{g as x}from"./index-ea76b77d.js";import"./optionClasses-c5aec0a8.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-4d501b15.js";var A=864e5;function P(t,r){u(2,arguments);var e=T(t),a=T(r),o=e.getTime()-x(e),n=a.getTime()-x(a);return Math.round((o-n)/A)}function l(t,r){u(2,arguments);var e=s(t),a=s(r),o=e.getTime()-a.getTime();return o<0?-1:o>0?1:o}function $(t,r){u(2,arguments);var e=s(t),a=s(r),o=e.getFullYear()-a.getFullYear(),n=e.getMonth()-a.getMonth();return o*12+n}function K(t,r){u(2,arguments);var e=s(t),a=s(r);return e.getFullYear()-a.getFullYear()}function I(t,r){var e=t.getFullYear()-r.getFullYear()||t.getMonth()-r.getMonth()||t.getDate()-r.getDate()||t.getHours()-r.getHours()||t.getMinutes()-r.getMinutes()||t.getSeconds()-r.getSeconds()||t.getMilliseconds()-r.getMilliseconds();return e<0?-1:e>0?1:e}function U(t,r){u(2,arguments);var e=s(t),a=s(r),o=I(e,a),n=Math.abs(P(e,a));e.setDate(e.getDate()-o*n);var c=+(I(e,a)===-o),i=o*(n-c);return i===0?0:i}function b(t,r){return u(2,arguments),s(t).getTime()-s(r).getTime()}var N={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(r){return r<0?Math.ceil(r):Math.floor(r)}},B="trunc";function D(t){return t?N[t]:N[B]}function W(t,r,e){u(2,arguments);var a=b(t,r)/z;return D(e==null?void 0:e.roundingMethod)(a)}function J(t,r,e){u(2,arguments);var a=b(t,r)/G;return D(e==null?void 0:e.roundingMethod)(a)}function Q(t){u(1,arguments);var r=s(t);return r.setHours(23,59,59,999),r}function X(t){u(1,arguments);var r=s(t);return Q(r).getTime()===q(r).getTime()}function Z(t,r){u(2,arguments);var e=s(t),a=s(r),o=l(e,a),n=Math.abs($(e,a)),c;if(n<1)c=0;else{e.getMonth()===1&&e.getDate()>27&&e.setDate(30),e.setMonth(e.getMonth()-o*n);var i=l(e,a)===-o;X(s(t))&&n===1&&l(t,a)===1&&(i=!1),c=o*(n-Number(i))}return c===0?0:c}function ee(t,r,e){u(2,arguments);var a=b(t,r)/1e3;return D(e==null?void 0:e.roundingMethod)(a)}function te(t,r){u(2,arguments);var e=s(t),a=s(r),o=l(e,a),n=Math.abs(K(e,a));e.setFullYear(1584),a.setFullYear(1584);var c=l(e,a)===-o,i=o*(n-Number(c));return i===0?0:i}function re(t){u(1,arguments);var r=s(t.start),e=s(t.end);if(isNaN(r.getTime()))throw new RangeError("Start Date is invalid");if(isNaN(e.getTime()))throw new RangeError("End Date is invalid");var a={};a.years=Math.abs(te(e,r));var o=l(e,r),n=y(r,{years:o*a.years});a.months=Math.abs(Z(e,n));var c=y(n,{months:o*a.months});a.days=Math.abs(U(e,c));var i=y(c,{days:o*a.days});a.hours=Math.abs(W(e,i));var h=y(i,{hours:o*a.hours});a.minutes=Math.abs(J(e,h));var g=y(h,{minutes:o*a.minutes});return a.seconds=Math.abs(ee(e,g)),a}function f({source:t,tags:r}){var h;const[e,a]=C.useState(0),[o,n]=C.useState(""),c=g=>{a(g)};C.useEffect(()=>{t.toString().includes("vimeo")?fetch(`https://vimeo.com/api/oembed.json?url=${t}`).then(m=>m.json()).then(m=>n(m.title)):fetch(`https://noembed.com/embed?url=${t}`).then(m=>m.json()).then(m=>n(m.title))},[t]);const i=re({start:0,end:e*1e3});return M("div",{className:"not-prose group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-lg duration-300 ease-in @container hover:scale-105 md:max-w-lg",children:[d("div",{className:"relative pt-[56.25%]",children:d(j,{url:t,className:"absolute top-0 left-0",width:"100%",height:"100%",controls:!0,onDuration:c})}),M("div",{className:"flex flex-col space-y-2 py-6 px-7 @sm:md:space-y-3",children:[e&&M("p",{className:"text-sm italic text-cu-black-600 @sm:md:text-base",children:["Duration: ",`${i.minutes}m : ${i.seconds}s`]}),d("h3",{className:"text-lg font-semibold text-cu-black group-hover:text-cu-red @sm:md:text-xl",children:o})]}),r&&d("div",{className:"mt-auto px-7 pb-5",children:(h=r==null?void 0:r.category)==null?void 0:h.map(g=>d(k,{children:g.name},g.id))})]})}try{f.displayName="VideoCard",f.__docgenInfo={description:"",displayName:"VideoCard",props:{source:{defaultValue:null,description:"",name:"source",required:!0,type:{name:"string"}},tags:{defaultValue:null,description:"",name:"tags",required:!1,type:{name:"Tags"}}}}}catch{}const ae=[{id:1,source:"https://www.youtube.com/watch?v=7h5m7Clm9uo",tags:{category:[{id:3,name:"Category One",slug:"category-one"},{id:4,name:"Category Two",slug:"category-two"}]}},{id:2,source:"https://www.youtube.com/watch?v=V2vTFG0zfL8",tags:{category:[{id:3,name:"Category One",slug:"category-one"},{id:4,name:"Category Two",slug:"category-two"}]}},{id:3,source:"https://www.youtube.com/watch?v=3PUK_wRVzHI",tags:{category:[{id:3,name:"Category One",slug:"category-one"},{id:4,name:"Category Two",slug:"category-two"}]}},{id:4,source:"https://vimeo.com/106595658",tags:{category:[{id:3,name:"Category One",slug:"category-one"},{id:4,name:"Category Two",slug:"category-two"}]}},{id:5,source:"https://www.youtube.com/watch?v=bh2x91LLcEY",tags:{category:[{id:3,name:"Category One",slug:"category-one"},{id:4,name:"Category Two",slug:"category-two"}]}},{id:6,source:"https://vimeo.com/108970526",tags:{category:[{id:3,name:"Category One",slug:"category-one"},{id:4,name:"Category Two",slug:"category-two"}]}}],he={title:"Cards & Lists/Cards (Deprecated)/Video Card",component:f,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},v={render:()=>d(f,{source:"https://www.youtube.com/watch?v=3PUK_wRVzHI",tags:{category:[{id:1,name:"Category One",slug:"category-one"},{id:2,name:"Category Two",slug:"category-two"}]}})},p={render:()=>d(f,{source:"https://vimeo.com/106595658",tags:{category:[{id:1,name:"Category One",slug:"category-one"},{id:2,name:"Category Two",slug:"category-two"}]}})},w={render:()=>d(E,{cols:"3",gridGap:"10",maxWidth:"7xl",children:ae.map(t=>d(f,{source:t==null?void 0:t.source,tags:t==null?void 0:t.tags},11))})};var O,V,Y;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <VideoCard source="https://www.youtube.com/watch?v=3PUK_wRVzHI" tags={{
    category: [{
      id: 1,
      name: 'Category One',
      slug: 'category-one'
    }, {
      id: 2,
      name: 'Category Two',
      slug: 'category-two'
    }]
  }} />
}`,...(Y=(V=v.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var _,S,F;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <VideoCard source="https://vimeo.com/106595658" tags={{
    category: [{
      id: 1,
      name: 'Category One',
      slug: 'category-one'
    }, {
      id: 2,
      name: 'Category Two',
      slug: 'category-two'
    }]
  }} />
}`,...(F=(S=p.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var R,H,L;w.parameters={...w.parameters,docs:{...(R=w.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Column cols="3" gridGap="10" maxWidth="7xl">
      {data.map(item => <VideoCard key={11} source={item?.source} tags={item?.tags} />)}
    </Column>
}`,...(L=(H=w.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};const ye=["YouTube","Vimeo","GridCards"];export{w as GridCards,p as Vimeo,v as YouTube,ye as __namedExportsOrder,he as default};
//# sourceMappingURL=VideoCard.stories-147bdd70.js.map
