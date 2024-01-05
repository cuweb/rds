import{j as a}from"./jsx-runtime-vNq4Oc-g.js";import{r as R}from"./index-4g5l5LRQ.js";import{R as be}from"./index-kGmse7Uy.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-U8hx_P-t.js";import"../sb-preview/runtime.js";import"./index-VFMbf6KQ.js";const r={container:"overflow-hidden bg-white",rounded:"rounded-lg",circle:"rounded-full",shadow:"shadow-lg",caption:"px-6 py-4 text-base italic text-cu-black-700"},Ve={small:"max-w-[320px]",medium:"max-w-[500px]",large:"max-w-3xl",full:"max-w-full"},Se={left:"float-left mb-4",right:"float-right mb-4",center:"mx-auto",none:""},j={left:"mr-10",right:"ml-10"},x={container:"relative pt-[56.25%] bg-cu-black-900",player:"absolute top-0 left-0"},de=({source:i})=>{const[s,b]=R.useState(!1);return R.useEffect(()=>{b(!0)},[]),s?a.jsx("div",{className:x.container,children:a.jsx(be,{url:i,className:x.player,width:"100%",height:"100%",controls:!0})}):a.jsx("div",{className:x.container,children:a.jsx("p",{className:"hidden",children:"Loading video"})})};de.displayName="Figure.Video";try{Figure.Video.displayName="Figure.Video",Figure.Video.__docgenInfo={description:"",displayName:"Figure.Video",props:{source:{defaultValue:null,description:"",name:"source",required:!0,type:{name:"string"}}}}}catch{}const y=({children:i,caption:s,isRound:b,isCircle:me,hasShadow:ge,size:V="full",align:S="none"})=>{const he=b?r.rounded:"",pe=me?r.circle:"",fe=ge?r.shadow:"",ve=S==="left"&&V!=="full"?j.left:"",we=S==="right"&&V!=="full"?j.right:"";return a.jsx("figure",{className:"cu-figure",children:a.jsxs("div",{className:`${r.container} ${Ve[V]} ${Se[S]} ${fe} ${ve} ${we} ${he} ${pe}`,children:[i,s&&a.jsx("figcaption",{className:r.caption,children:s})]})})},t=Object.assign(y,{Video:de});try{y.displayName="FigureWrapper",y.__docgenInfo={description:"",displayName:"FigureWrapper",props:{caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},size:{defaultValue:{value:"full"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},align:{defaultValue:{value:"none"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"none"'},{value:'"right"'}]}},isRound:{defaultValue:null,description:"",name:"isRound",required:!1,type:{name:"boolean"}},isCircle:{defaultValue:null,description:"",name:"isCircle",required:!1,type:{name:"boolean"}},hasShadow:{defaultValue:null,description:"",name:"hasShadow",required:!1,type:{name:"boolean"}}}}}catch{}try{t.displayName="Figure",t.__docgenInfo={description:"",displayName:"Figure",props:{caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},size:{defaultValue:{value:"full"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},align:{defaultValue:{value:"none"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"none"'},{value:'"right"'}]}},isRound:{defaultValue:null,description:"",name:"isRound",required:!1,type:{name:"boolean"}},isCircle:{defaultValue:null,description:"",name:"isCircle",required:!1,type:{name:"boolean"}},hasShadow:{defaultValue:null,description:"",name:"hasShadow",required:!1,type:{name:"boolean"}}}}}catch{}const Fe={title:"Components/Figure",component:t,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={image:"./sample-imgs/news-img.jpg",imageWide:"./sample-imgs/event-img.jpg",imageSquare:"./sample-imgs/people-img.jpg",alt:"Required alt text",video:"https://www.youtube.com/watch?v=gtEJtKwUGiU"},n={args:{children:a.jsx("img",{src:e.imageWide,alt:e.alt,width:"400",height:"266"})}},l={args:{size:"large",children:a.jsx("img",{src:e.imageWide,alt:e.alt,width:"400",height:"266"})}},o={args:{size:"medium",children:a.jsx("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}},c={args:{size:"small",children:a.jsx("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}},u={args:{isRound:!0,size:"medium",children:a.jsx("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}},d={args:{isCircle:!0,size:"small",children:a.jsx("img",{src:e.imageSquare,alt:e.alt,width:"400",height:"266"})}},m={args:{size:"medium",isRound:!0,caption:"Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.",children:a.jsx("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}},g={args:{hasShadow:!0,isRound:!0,caption:"Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.",size:"medium",children:a.jsx("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}},h={args:{align:"left",hasShadow:!0,size:"medium",isRound:!0,caption:"Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.",children:a.jsx("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}},p={args:{align:"right",hasShadow:!0,size:"medium",isRound:!0,caption:"Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.",children:a.jsx("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}},f={args:{align:"center",hasShadow:!0,size:"medium",isRound:!0,caption:"Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.",children:a.jsx("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}},v={args:{children:a.jsx(t.Video,{source:e.video})}},w={args:{size:"medium",hasShadow:!0,isRound:!0,caption:"Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.",children:a.jsx(t.Video,{source:e.video})}};var I,_,z;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: <img src={content.imageWide} alt={content.alt} width="400" height="266" />
  }
}`,...(z=(_=n.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var F,q,C;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: <img src={content.imageWide} alt={content.alt} width="400" height="266" />
  }
}`,...(C=(q=l.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};var M,N,W;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />
  }
}`,...(W=(N=o.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var $,L,E;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />
  }
}`,...(E=(L=c.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var A,k,O;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    isRound: true,
    size: 'medium',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />
  }
}`,...(O=(k=u.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var U,G,J;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    isCircle: true,
    size: 'small',
    children: <img src={content.imageSquare} alt={content.alt} width="400" height="266" />
  }
}`,...(J=(G=d.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,P,B;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    isRound: true,
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />
  }
}`,...(B=(P=m.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var D,H,Q;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    hasShadow: true,
    isRound: true,
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    size: 'medium',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />
  }
}`,...(Q=(H=g.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var T,X,Y;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    align: 'left',
    hasShadow: true,
    size: 'medium',
    isRound: true,
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />
  }
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    align: 'right',
    hasShadow: true,
    size: 'medium',
    isRound: true,
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />
  }
}`,...(ae=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ie,re,te;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    align: 'center',
    hasShadow: true,
    size: 'medium',
    isRound: true,
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />
  }
}`,...(te=(re=f.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var se,ne,le;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    children: <Figure.Video source={content.video} />
  }
}`,...(le=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var oe,ce,ue;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    hasShadow: true,
    isRound: true,
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    children: <Figure.Video source={content.video} />
  }
}`,...(ue=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};const qe=["ImageFull","ImageLarge","ImageMedium","ImageSmall","ImageRounded","ImageCircular","ImageWithCaption","ImageWithShadow","ImageFloatLeft","ImageFloatRight","ImageCenterAlign","Video","VideoWithCaption"];export{f as ImageCenterAlign,d as ImageCircular,h as ImageFloatLeft,p as ImageFloatRight,n as ImageFull,l as ImageLarge,o as ImageMedium,u as ImageRounded,c as ImageSmall,m as ImageWithCaption,g as ImageWithShadow,v as Video,w as VideoWithCaption,qe as __namedExportsOrder,Fe as default};
