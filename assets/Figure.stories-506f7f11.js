import{j as a}from"./jsx-runtime-7ce7b810.js";import{r as j}from"./index-37ba2b57.js";import{R as ye}from"./index-aec1b651.js";import"./_commonjsHelpers-de833af9.js";import"./index-9d475cdf.js";const r={container:"overflow-hidden bg-white",rounded:"rounded-lg",circle:"rounded-full",shadow:"shadow-lg",caption:"px-6 py-4 text-base italic text-cu-black-700"},Re={small:"max-w-[320px]",medium:"max-w-[500px]",large:"max-w-3xl",full:"max-w-full"},je={left:"float-left mb-4",right:"float-right mb-4",center:"mx-auto",none:""},I={left:"mr-10",right:"ml-10"},y={container:"relative pt-[56.25%] bg-cu-black-900",player:"absolute top-0 left-0"},pe=({source:i})=>{const[s,V]=j.useState(!1);return j.useEffect(()=>{V(!0)},[]),s?a.jsx("div",{className:y.container,children:a.jsx(ye,{url:i,className:y.player,width:"100%",height:"100%",controls:!0})}):a.jsx("div",{className:y.container,children:a.jsx("p",{className:"hidden",children:"Loading video"})})};pe.displayName="Figure.Video";try{Figure.Video.displayName="Figure.Video",Figure.Video.__docgenInfo={description:"",displayName:"Figure.Video",props:{source:{defaultValue:null,description:"",name:"source",required:!0,type:{name:"string"}}}}}catch{}const R=({children:i,caption:s,isRound:V,isCircle:fe,hasShadow:ve,size:x="full",align:S="none"})=>{const we=V?r.rounded:"",be=fe?r.circle:"",Ve=ve?r.shadow:"",xe=S==="left"&&x!=="full"?I.left:"",Se=S==="right"&&x!=="full"?I.right:"";return a.jsx("figure",{className:"cu-figure",children:a.jsxs("div",{className:`${r.container} ${Re[x]} ${je[S]} ${Ve} ${xe} ${Se} ${we} ${be}`,children:[i,s&&a.jsx("figcaption",{className:r.caption,children:s})]})})},t=Object.assign(R,{Video:pe});try{R.displayName="FigureWrapper",R.__docgenInfo={description:"",displayName:"FigureWrapper",props:{caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},size:{defaultValue:{value:"full"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},align:{defaultValue:{value:"none"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},isRound:{defaultValue:null,description:"",name:"isRound",required:!1,type:{name:"boolean"}},isCircle:{defaultValue:null,description:"",name:"isCircle",required:!1,type:{name:"boolean"}},hasShadow:{defaultValue:null,description:"",name:"hasShadow",required:!1,type:{name:"boolean"}}}}}catch{}try{t.displayName="Figure",t.__docgenInfo={description:"",displayName:"Figure",props:{caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},size:{defaultValue:{value:"full"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"full"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},align:{defaultValue:{value:"none"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},isRound:{defaultValue:null,description:"",name:"isRound",required:!1,type:{name:"boolean"}},isCircle:{defaultValue:null,description:"",name:"isCircle",required:!1,type:{name:"boolean"}},hasShadow:{defaultValue:null,description:"",name:"hasShadow",required:!1,type:{name:"boolean"}}}}}catch{}const Ce={title:"Components/Figure",component:t,tags:["autodocs"],parameters:{controls:{sort:"requiredFirst"}}},e={image:"./sample-imgs/news-img.jpg",imageWide:"./sample-imgs/event-img.jpg",imageSquare:"./sample-imgs/people-img.jpg",alt:"Required alt text",video:"https://www.youtube.com/watch?v=gtEJtKwUGiU"},l={args:{children:a.jsx("img",{src:e.imageWide,alt:e.alt,width:"400",height:"266"})}},o={args:{size:"large",children:a.jsx("img",{src:e.imageWide,alt:e.alt,width:"400",height:"266"})}},c={args:{size:"medium",children:a.jsx("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}},n={args:{size:"small",children:a.jsx("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}},u={args:{isRound:!0,size:"medium",children:a.jsx("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}},d={args:{isCircle:!0,size:"small",children:a.jsx("img",{src:e.imageSquare,alt:e.alt,width:"400",height:"266"})}},m={args:{isRound:!0,size:"medium",children:a.jsx("a",{href:"https://carleton.ca/webservices",children:a.jsx("img",{src:e.image,alt:e.alt,width:"400",height:"266"})})}},g={args:{size:"medium",isRound:!0,caption:"Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.",children:a.jsx("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}},h={args:{hasShadow:!0,isRound:!0,caption:"Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.",size:"medium",children:a.jsx("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}},p={args:{align:"left",hasShadow:!0,size:"medium",isRound:!0,caption:"Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.",children:a.jsx("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}},f={args:{align:"right",hasShadow:!0,size:"medium",isRound:!0,caption:"Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.",children:a.jsx("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}},v={args:{align:"center",hasShadow:!0,size:"medium",isRound:!0,caption:"Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.",children:a.jsx("img",{src:e.image,alt:e.alt,width:"400",height:"266"})}},w={args:{children:a.jsx(t.Video,{source:e.video})}},b={args:{size:"medium",hasShadow:!0,isRound:!0,caption:"Vestibulum facilisis nibh efficitur placerat. Maecenas vitae risus vehicula dolor.",children:a.jsx(t.Video,{source:e.video})}};var z,_,F;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: <img src={content.imageWide} alt={content.alt} width="400" height="266" />
  }
}`,...(F=(_=l.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var q,C,W;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: 'large',
    children: <img src={content.imageWide} alt={content.alt} width="400" height="266" />
  }
}`,...(W=(C=o.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var M,N,$;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />
  }
}`,...($=(N=c.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var L,E,k;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: 'small',
    children: <img src={content.image} alt={content.alt} width="400" height="266" />
  }
}`,...(k=(E=n.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var A,O,U;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(he=(ge=b.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};const We=["ImageFull","ImageLarge","ImageMedium","ImageSmall","ImageRounded","ImageCircular","ImageWithLink","ImageWithCaption","ImageWithShadow","ImageFloatLeft","ImageFloatRight","ImageCenterAlign","Video","VideoWithCaption"];export{v as ImageCenterAlign,d as ImageCircular,p as ImageFloatLeft,f as ImageFloatRight,l as ImageFull,o as ImageLarge,c as ImageMedium,u as ImageRounded,n as ImageSmall,g as ImageWithCaption,m as ImageWithLink,h as ImageWithShadow,w as Video,b as VideoWithCaption,We as __namedExportsOrder,Ce as default};
//# sourceMappingURL=Figure.stories-506f7f11.js.map
