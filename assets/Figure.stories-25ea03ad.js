import{j as a,a as Re}from"./jsx-runtime-9d2cd5de.js";import{r as z}from"./index-580b8df0.js";import{R as Ie}from"./index-a36e5b94.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-4d501b15.js";const r={container:"overflow-hidden bg-white",rounded:"rounded-lg",circle:"rounded-full",shadow:"shadow-lg",caption:"px-6 py-4 text-base italic text-cu-black-700"},ze={small:"max-w-[320px]",medium:"max-w-[500px]",large:"max-w-3xl",full:"max-w-full"},_e={left:"float-left mb-4",right:"float-right mb-4",center:"mx-auto",none:""},_={left:"mr-10",right:"ml-10"},R={container:"relative pt-[56.25%] bg-cu-black-900",player:"absolute top-0 left-0"},pe=({source:i})=>{const[s,V]=z.useState(!1);return z.useEffect(()=>{V(!0)},[]),s?a("div",{className:R.container,children:a(Ie,{url:i,className:R.player,width:"100%",height:"100%",controls:!0})}):a("div",{className:R.container,children:a("p",{className:"hidden",children:"Loading video"})})};pe.displayName="Figure.Video";try{Figure.Video.displayName="Figure.Video",Figure.Video.__docgenInfo={description:"",displayName:"Figure.Video",props:{source:{defaultValue:null,description:"",name:"source",required:!0,type:{name:"string"}}}}}catch{}const I=({children:i,caption:s,isRound:V,isCircle:fe,hasShadow:ve,size:S="full",align:y="none"})=>{const we=V?r.rounded:"",be=fe?r.circle:"",Ve=ve?r.shadow:"",Se=y==="left"&&S!=="full"?_.left:"",ye=y==="right"&&S!=="full"?_.right:"";return a("figure",{className:"cu-figure",children:Re("div",{className:`${r.container} ${ze[S]} ${_e[y]} ${Ve} ${Se} ${ye} ${we} ${be}`,children:[i,s&&a("figcaption",{className:r.caption,children:s})]})})},t=Object.assign(I,{Video:pe});try{I.displayName="FigureWrapper",I.__docgenInfo={description:"",displayName:"FigureWrapper",props:{caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},size:{defaultValue:{value:"full"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},align:{defaultValue:{value:"none"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"none"'},{value:'"right"'}]}},isRound:{defaultValue:null,description:"",name:"isRound",required:!1,type:{name:"boolean"}},isCircle:{defaultValue:null,description:"",name:"isCircle",required:!1,type:{name:"boolean"}},hasShadow:{defaultValue:null,description:"",name:"hasShadow",required:!1,type:{name:"boolean"}}}}}catch{}try{t.displayName="Figure",t.__docgenInfo={description:"",displayName:"Figure",props:{caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},size:{defaultValue:{value:"full"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},align:{defaultValue:{value:"none"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"none"'},{value:'"right"'}]}},isRound:{defaultValue:null,description:"",name:"isRound",required:!1,type:{name:"boolean"}},isCircle:{defaultValue:null,description:"",name:"isCircle",required:!1,type:{name:"boolean"}},hasShadow:{defaultValue:null,description:"",name:"hasShadow",required:!1,type:{name:"boolean"}}}}}catch{}const Me={title:"Components/Figure",component:t,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={image:"./sample-imgs/news-img.jpg",imageWide:"./sample-imgs/event-img.jpg",imageSquare:"./sample-imgs/people-img.jpg",alt:"Required alt text",video:"https://www.youtube.com/watch?v=gtEJtKwUGiU"},l={args:{children:a("img",{src:e.imageWide,alt:e.alt,width:"400",height:"266"})}},o={args:{size:"large",children:a("img",{src:e.imageWide,alt:e.alt,width:"400",height:"266"})}},c={args:{size:"medium",children:a("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}},n={args:{size:"small",children:a("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}},u={args:{isRound:!0,size:"medium",children:a("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}},d={args:{isCircle:!0,size:"small",children:a("img",{src:e.imageSquare,alt:e.alt,width:"400",height:"266"})}},m={args:{isRound:!0,size:"medium",children:a("a",{href:"https://carleton.ca/webservices",children:a("img",{src:e.image,alt:e.alt,width:"400",height:"266"})})}},g={args:{size:"medium",isRound:!0,caption:"Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.",children:a("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}},h={args:{hasShadow:!0,isRound:!0,caption:"Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.",size:"medium",children:a("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}},p={args:{align:"left",hasShadow:!0,size:"medium",isRound:!0,caption:"Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.",children:a("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}},f={args:{align:"right",hasShadow:!0,size:"medium",isRound:!0,caption:"Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.",children:a("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}},v={args:{align:"center",hasShadow:!0,size:"medium",isRound:!0,caption:"Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.",children:a("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}},w={args:{children:a(t.Video,{source:e.video})}},b={args:{size:"medium",hasShadow:!0,isRound:!0,caption:"Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.",children:a(t.Video,{source:e.video})}};var F,q,x;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: <img src={content.imageWide} alt={content.alt} width="400" height="266" />
  }
}`,...(x=(q=l.parameters)==null?void 0:q.docs)==null?void 0:x.source}}};var C,W,M;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: <img src={content.imageWide} alt={content.alt} width="400" height="266" />
  }
}`,...(M=(W=o.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var N,$,L;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />
  }
}`,...(L=($=c.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var j,k,E;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />
  }
}`,...(E=(k=n.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var A,O,U;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    isRound: true,
    size: 'medium',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />
  }
}`,...(U=(O=u.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var G,J,K;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    isCircle: true,
    size: 'small',
    children: <img src={content.imageSquare} alt={content.alt} width="400" height="266" />
  }
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var P,B,D;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    isRound: true,
    size: 'medium',
    children: <a href="https://carleton.ca/webservices">
        <img src={content.image} alt={content.alt} width="400" height="266" />
      </a>
  }
}`,...(D=(B=m.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var H,Q,T;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    isRound: true,
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />
  }
}`,...(T=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:T.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    hasShadow: true,
    isRound: true,
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    size: 'medium',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />
  }
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,ie;p.parameters={...p.parameters,docs:{...(ee=p.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    align: 'left',
    hasShadow: true,
    size: 'medium',
    isRound: true,
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />
  }
}`,...(ie=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var re,te,se;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    align: 'right',
    hasShadow: true,
    size: 'medium',
    isRound: true,
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />
  }
}`,...(se=(te=f.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var le,oe,ce;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    align: 'center',
    hasShadow: true,
    size: 'medium',
    isRound: true,
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />
  }
}`,...(ce=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var ne,ue,de;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    children: <Figure.Video source={content.video} />
  }
}`,...(de=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,ge,he;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    hasShadow: true,
    isRound: true,
    caption: 'Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.',
    children: <Figure.Video source={content.video} />
  }
}`,...(he=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};const Ne=["ImageFull","ImageLarge","ImageMedium","ImageSmall","ImageRounded","ImageCircular","ImageWithLink","ImageWithCaption","ImageWithShadow","ImageFloatLeft","ImageFloatRight","ImageCenterAlign","Video","VideoWithCaption"];export{v as ImageCenterAlign,d as ImageCircular,p as ImageFloatLeft,f as ImageFloatRight,l as ImageFull,o as ImageLarge,c as ImageMedium,u as ImageRounded,n as ImageSmall,g as ImageWithCaption,m as ImageWithLink,h as ImageWithShadow,w as Video,b as VideoWithCaption,Ne as __namedExportsOrder,Me as default};
//# sourceMappingURL=Figure.stories-25ea03ad.js.map
